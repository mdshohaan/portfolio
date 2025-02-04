import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY);
console.log('CONTACT_ME_EMAIL:', process.env.CONTACT_ME_EMAIL);

const resend = `new Resend("re_123")`;

export { resend };
