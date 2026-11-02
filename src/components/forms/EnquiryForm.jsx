import { Form, Input, Button, message } from 'antd';
import { useMutation } from '@tanstack/react-query';
import { Send } from 'lucide-react';
import { enquiryFields } from '../../masters/inputMaster';
import { submitEnquiry } from '../../services/api/enquiryApi';
import { trackAnalyticsEvent } from '../../services/firebase';

const { TextArea } = Input;

export default function EnquiryForm({ compact = false }) {
  const [form] = Form.useForm();
  const mutation = useMutation({
    mutationFn: submitEnquiry,
    onSuccess: async () => {
      message.success('Thank you! Your enquiry was sent successfully. Our team will contact you soon.');
      await trackAnalyticsEvent('generate_lead', {
        form_name: compact ? 'sidebar_enquiry_form' : 'contact_enquiry_form',
      });
      form.resetFields();
    },
    onError: (error) => {
      const cleanMessage = error?.message?.replace(/^FirebaseError:\s*/i, '');
      message.error(cleanMessage || 'Unable to send your enquiry. Please call +91-9873572889.');
      void trackAnalyticsEvent('form_submit_error', {
        form_name: compact ? 'sidebar_enquiry_form' : 'contact_enquiry_form',
        error_code: String(error?.code || 'unknown').slice(0, 80),
      });
    },
  });

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={(values) => mutation.mutate(values)}
      className={`enquiry-form ${compact ? 'enquiry-form--compact' : ''}`}
      requiredMark={!compact}
    >
      <div className="enquiry-form__grid">
        {enquiryFields.filter((field) => !compact || field.name !== 'message').map((field) => (
          <Form.Item key={field.name} name={field.name} label={compact ? undefined : field.label} rules={field.rules}>
            {field.type === 'textarea'
              ? <TextArea rows={4} maxLength={5000} showCount placeholder={field.placeholder} />
              : <Input type={field.type || 'text'} maxLength={field.name === 'email' ? 254 : field.name === 'address' ? 300 : field.name === 'phone' ? 40 : 100} placeholder={field.placeholder} />}
          </Form.Item>
        ))}
      </div>

      {/* Honeypot anti-spam field: real visitors should never see or fill this. */}
      <div className="form-honeypot" aria-hidden="true" tabIndex={-1}>
        <Form.Item name="website" noStyle><Input autoComplete="off" tabIndex={-1} /></Form.Item>
      </div>

      <Button htmlType="submit" type="primary" loading={mutation.isPending} disabled={mutation.isPending} className="site-button site-button--primary">
        <Send size={15} /> {mutation.isPending ? 'Sending…' : 'Send Message'}
      </Button>
      <p className="form-note">Your details will be sent securely to our team. Please do not include passwords or other sensitive information.</p>
    </Form>
  );
}
