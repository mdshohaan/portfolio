<script lang="ts">
	import type { FormStatus } from '@shamscorner/shared';
	import { performFormValidation } from '@shamscorner/svelte-shared/services';
	import IconSpinner from 'lucide-svelte/icons/loader';

	import {
		type Infer,
		superForm,
		type SuperValidated
	} from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Textarea } from '$lib/components/ui/textarea';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { cn } from '$lib/utils';

	import { type FormSchemaContactMe, formSchemaContactMe } from './schema';

	export let data: SuperValidated<Infer<FormSchemaContactMe>>;
	export let email = '';

	let isLoadingFormSubmit = false;
	let formStatus: {
		message: string;
		type: FormStatus;
	} = {
		message: '',
		type: 'error'
	};

	const form = superForm(data, {
		validators: zodClient(formSchemaContactMe),
		onSubmit: () => {
			formStatus = {
				message: '',
				type: 'error'
			};
			isLoadingFormSubmit = true;
		},
		onResult: async ({ result }) => {
			const errorMessage = performFormValidation(result);
			if (errorMessage) {
				formStatus = {
					message: errorMessage,
					type: 'error'
				};
				isLoadingFormSubmit = false;
				return;
			}

			if (result.type === 'success' && result.data) {
				formStatus = {
					type: 'success',
					message: $LL.letsGetStarted.form.successMessage()
				};
			}

			isLoadingFormSubmit = false;
		}
	});

	const { form: formData, enhance } = form;

	$: {
		formData.update((d) => ({
			...d,
			email
		}));
	}
</script>

<Dialog.Root closeOnOutsideClick={false}>
	<Dialog.Trigger
		class={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'border-2')}
	>
		<slot></slot>
	</Dialog.Trigger>
	<Dialog.Content class="h-[550px] overflow-y-auto sm:max-w-sm">
		<Dialog.Header>
			<Dialog.Title>{$LL.letsGetStarted.title()}</Dialog.Title>
		</Dialog.Header>
		<form
			method="POST"
			action="/?/contactMe"
			use:enhance
			class="mt-4 grid grid-cols-1 gap-y-2"
		>
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label>{$LL.letsGetStarted.form.email()}</Form.Label>
					<Input
						{...attrs}
						bind:value={$formData.email}
						placeholder="john@example.com"
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="fullName">
				<Form.Control let:attrs>
					<Form.Label>{$LL.letsGetStarted.form.fullName()}</Form.Label>
					<Input
						{...attrs}
						bind:value={$formData.fullName}
						placeholder="John Doe"
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="message">
				<Form.Control let:attrs>
					<Form.Label>{$LL.letsGetStarted.form.message()}</Form.Label>
					<Textarea
						{...attrs}
						bind:value={$formData.message}
						placeholder={$LL.letsGetStarted.form.messagePlaceholder()}
						rows={6}
					/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Message show={!!formStatus.message} type={formStatus.type}>
				{formStatus.message || $LL.errors.somethingWentWrong()}
			</Form.Message>

			<Form.Button disabled={isLoadingFormSubmit} class="mb-4 mt-5 w-full">
				{#if isLoadingFormSubmit}
					<IconSpinner class="mr-2 h-4 w-4 animate-spin" />
				{/if}
				{$LL.letsGetStarted.form.send()}
			</Form.Button>
		</form>
	</Dialog.Content>
</Dialog.Root>
