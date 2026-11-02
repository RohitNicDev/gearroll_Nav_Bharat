export const enquiryFields = [
  { name: 'name', label: 'Name', placeholder: 'Enter your name', rules: [{ required: true, message: 'Please enter your name' }] },
  { name: 'email', label: 'E-mail', placeholder: 'Enter your e-mail address', type: 'email', rules: [{ required: true, message: 'Please enter your e-mail' }, { type: 'email', message: 'Enter a valid e-mail address' }] },
  { name: 'phone', label: 'Contact Number', placeholder: 'Enter your contact number', rules: [{ required: true, message: 'Please enter your contact number' }] },
  { name: 'address', label: 'Address', placeholder: 'Enter your address', rules: [{ required: true, message: 'Please enter your address' }] },
  { name: 'message', label: 'Message', placeholder: 'Write your requirement (optional)', type: 'textarea', rules: [] },
];
