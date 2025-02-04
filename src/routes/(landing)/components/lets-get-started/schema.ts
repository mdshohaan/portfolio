import { z } from 'zod';

export const formSchemaContactMe = z.object({
	email: z
		.string({ required_error: 'Required' })
		.min(1, 'Required')
		.max(100, 'Max 100 characters')
		.email('Invalid email'),
	fullName: z
		.string({ required_error: 'Required' })
		.min(1, 'Required')
		.max(100, 'Max 100 characters'),
	message: z.string().min(1, 'Required').max(2000, 'Max 2000 characters')
});

export type FormSchemaContactMe = typeof formSchemaContactMe;
