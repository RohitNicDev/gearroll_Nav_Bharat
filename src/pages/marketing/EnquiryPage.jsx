import { Mail, MapPin, Phone } from 'lucide-react';
import PageHero from '../../components/common/PageHero';
import SectionHeading from '../../components/common/SectionHeading';
import EnquiryForm from '../../components/forms/EnquiryForm';

export default function EnquiryPage() {
  return <div className="content-page enquiry-page"><PageHero title="Enquiry" subtitle="Feel Free to Say Hello or Send Your Questions" /><section className="section"><div className="container enquiry-page-grid"><div><SectionHeading eyebrow="Send a Message" title="Let's Discuss Your Requirement" center={false} /><p>Complete the enquiry form and we will be in touch as soon as possible.</p><div className="enquiry-contact-list"><div><span><Phone size={20} /></span><div><strong>Phone</strong><a href="tel:+919873572889">+91-9873572889</a></div></div><div><span><Mail size={20} /></span><div><strong>Email</strong><a href="mailto:sales@gearroll.com">sales@gearroll.com</a></div></div><div><span><MapPin size={20} /></span><div><strong>Address</strong><p>C-233, B.S. Road Industrial Area, Site-1, Ghaziabad, U.P, India</p></div></div></div></div><div className="enquiry-form-card"><h3>Send a Message</h3><EnquiryForm /></div></div></section></div>;
}
