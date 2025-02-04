import { fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import { CONTACT_ME_EMAIL } from '$env/static/private';
import { sendContactMeEmail } from '$routes/services/user.service';

import { formSchemaContactMe } from './components/lets-get-started/schema';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchemaContactMe))
	};
};

export const actions: Actions = {
	contactMe: async (event) => {
		const form = await superValidate(event, zod(formSchemaContactMe));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { email, fullName, message } = form.data;

		const emailResponse = await sendContactMeEmail({
			email,
			fullName,
			message
		});

		if (!emailResponse) {
			return fail(500, {
				form,
				error: `Email not responding! Please send a mail to ${CONTACT_ME_EMAIL}`
			});
		}

		return { form };
	}
};
