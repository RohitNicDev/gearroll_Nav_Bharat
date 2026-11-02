import { initializeApp } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { defineInt, defineSecret, defineString } from 'firebase-functions/params';
import { HttpsError, onCall } from 'firebase-functions/v2/https';
import { setGlobalOptions } from 'firebase-functions/v2';
import { logger } from 'firebase-functions';
import nodemailer from 'nodemailer';

initializeApp();
const db = getFirestore();
setGlobalOptions({ region: 'asia-south1', maxInstances: 10 });

const SMTP_HOST = defineString('SMTP_HOST', { default: 'smtp.gmail.com' });
const SMTP_PORT = defineInt('SMTP_PORT', { default: 465 });
const SMTP_USER = defineSecret('SMTP_USER');
const SMTP_PASS = defineSecret('SMTP_PASS');
const EMAIL_TO = defineString('EMAIL_TO', { default: 'sales@gearroll.com' });

const MAX_LENGTHS = { name: 100, email: 254, phone: 40, address: 300, message: 5000, sourcePage: 500 };

function textField(value, field, required = false) {
  if (typeof value !== 'string') {
    if (required) throw new HttpsError('invalid-argument', `Please provide ${field}.`);
    return '';
  }
  const normalized = value.trim();
  if (required && !normalized) throw new HttpsError('invalid-argument', `Please provide ${field}.`);
  if (normalized.length > MAX_LENGTHS[field]) {
    throw new HttpsError('invalid-argument', `${field} is too long.`);
  }
  return normalized;
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]);
}

export const submitEnquiry = onCall(
  { secrets: [SMTP_USER, SMTP_PASS], enforceAppCheck: false },
  async (request) => {
    const data = request.data || {};

    // Quietly discard automated submissions caught by the form's honeypot field.
    if (typeof data.website === 'string' && data.website.trim()) {
      return { ok: true, message: 'Your enquiry has been submitted.' };
    }

    const name = textField(data.name, 'name', true);
    const email = textField(data.email, 'email', true);
    const phone = textField(data.phone, 'phone', true);
    const address = textField(data.address, 'address', true);
    const message = textField(data.message, 'message');
    const sourcePage = textField(data.sourcePage || '/', 'sourcePage');

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new HttpsError('invalid-argument', 'Please enter a valid email address.');
    }
    if (name.length < 2) throw new HttpsError('invalid-argument', 'Please enter your full name.');
    if (phone.replace(/\D/g, '').length < 7) {
      throw new HttpsError('invalid-argument', 'Please enter a valid contact number.');
    }

    const enquiry = {
      name, email, phone, address, message, sourcePage,
      status: 'received',
      notificationStatus: 'pending',
      submittedAt: FieldValue.serverTimestamp(),
      userAgent: String(request.rawRequest?.headers?.['user-agent'] || '').slice(0, 300),
    };

    const docRef = await db.collection('enquiries').add(enquiry);

    try {
      const smtpPort = SMTP_PORT.value();
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST.value(),
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: SMTP_USER.value(), pass: SMTP_PASS.value() },
      });

      const safe = {
        name: escapeHtml(name),
        email: escapeHtml(email),
        phone: escapeHtml(phone),
        address: escapeHtml(address),
        message: escapeHtml(message).replace(/\n/g, '<br>'),
        sourcePage: escapeHtml(sourcePage),
      };

      await transporter.sendMail({
        from: `Gearroll Website <${SMTP_USER.value()}>`,
        to: EMAIL_TO.value(),
        replyTo: email,
        subject: `New website enquiry from ${name}`,
        text: [
          'New enquiry from gearroll.com',
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Address: ${address}`,
          `Message: ${message || '(not provided)'}`,
          `Page: ${sourcePage}`,
          `Enquiry ID: ${docRef.id}`,
        ].join('\n'),
        html: `
          <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#1f2937">
            <h2 style="background:#082c45;color:#fff;padding:18px 22px;margin:0">New Gearroll Website Enquiry</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><th align="left" style="padding:10px;border:1px solid #e5e7eb;width:150px">Name</th><td style="padding:10px;border:1px solid #e5e7eb">${safe.name}</td></tr>
              <tr><th align="left" style="padding:10px;border:1px solid #e5e7eb">Email</th><td style="padding:10px;border:1px solid #e5e7eb">${safe.email}</td></tr>
              <tr><th align="left" style="padding:10px;border:1px solid #e5e7eb">Phone</th><td style="padding:10px;border:1px solid #e5e7eb">${safe.phone}</td></tr>
              <tr><th align="left" style="padding:10px;border:1px solid #e5e7eb">Address</th><td style="padding:10px;border:1px solid #e5e7eb">${safe.address}</td></tr>
              <tr><th align="left" style="padding:10px;border:1px solid #e5e7eb">Message</th><td style="padding:10px;border:1px solid #e5e7eb">${safe.message || '(not provided)'}</td></tr>
              <tr><th align="left" style="padding:10px;border:1px solid #e5e7eb">Submitted from</th><td style="padding:10px;border:1px solid #e5e7eb">${safe.sourcePage}</td></tr>
            </table>
            <p style="font-size:12px;color:#6b7280">Enquiry ID: ${docRef.id}</p>
          </div>`,
      });

      await docRef.update({ notificationStatus: 'sent', notificationSentAt: FieldValue.serverTimestamp() });
      logger.info('Website enquiry email sent', { enquiryId: docRef.id });
      return { ok: true, enquiryId: docRef.id, message: 'Your enquiry has been submitted.' };
    } catch (error) {
      logger.error('Failed to send website enquiry notification', { enquiryId: docRef.id, error: error?.message });
      await docRef.update({ notificationStatus: 'failed', notificationError: String(error?.message || 'Email delivery failed').slice(0, 500) });
      throw new HttpsError('unavailable', 'Your enquiry was saved, but the notification email could not be sent. Please call +91-9873572889.');
    }
  },
);
