import { CONTACT_ME_EMAIL } from '$env/static/private';

import { resend } from './email.service';

export async function sendContactMeEmail({
	email,
	fullName,
	message
}: {
	email: string;
	fullName: string;
	message: string;
}): Promise<boolean> {
	try {
		await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: CONTACT_ME_EMAIL,
			subject: 'Contact Me (Respond)!',
			html: `<p>${message}</p><br><br><p>${fullName}<br>${email}</p>`
		});

		return true;
	} catch (error) {
		console.error('Error sending email:', error);
		return false;
	}
}
