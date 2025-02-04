<script lang="ts">
	import { onMount } from 'svelte';
	import { Confetti } from 'svelte-confetti';
	import { observeSectionVisibility } from '@shamscorner/shared';

	import { type Infer, type SuperValidated } from 'sveltekit-superforms';

	import { Heading } from '$lib/components/ui/heading';
	import { LL } from '$lib/i18n/i18n-svelte';

	import ContactMeDialog from './contact-me-dialog.svelte';
	import type { FormSchemaContactMe } from './schema';

	export let data: SuperValidated<Infer<FormSchemaContactMe>>;

	let isConfettiActive = false;

	onMount(() => {
		observeSectionVisibility(
			'#section-lets-get-started',
			() => (isConfettiActive = true),
			() => (isConfettiActive = false),
			0.6
		);
	});
</script>

{#if isConfettiActive}
	<div
		style="
			position: fixed;
			top: -50px;
			left: 0;
			height: 100vh;
			width: 100vw;
			display: flex;
			justify-content: center;
			overflow: hidden;
			pointer-events: none;
		"
	>
		<Confetti
			x={[-5, 5]}
			y={[0, 0.1]}
			infinite
			duration={5000}
			amount={200}
			fallDistance="100vh"
		/>
	</div>
{/if}

<section
	id="section-lets-get-started"
	class="overflow-hidden bg-green-100 py-14 selection:bg-accent-foreground selection:text-background"
	aria-describedby="lets-get-started"
>
	<div class="relative mx-auto flex max-w-6xl flex-col items-center gap-4 px-4">
		<div
			class="absolute -bottom-[115%] left-[230px] hidden h-72 w-72 rounded-full bg-accent lg:block"
			aria-hidden="true"
			role="presentation"
		></div>
		<div
			class="absolute -bottom-full left-1/2 h-[600px] w-72 skew-x-[25deg] bg-accent"
			aria-hidden="true"
			role="presentation"
		></div>

		<Heading id="lets-get-started" element="h2" class="relative">
			{$LL.letsGetStarted.title()}
		</Heading>
		<p class="relative max-w-xl text-center font-medium text-muted-foreground">
			{$LL.letsGetStarted.description()}
		</p>

		<div class="relative mt-8 flex items-center justify-center gap-4">
			<ContactMeDialog {data}>
				{$LL.letsGetStarted.form.submit()}
			</ContactMeDialog>
		</div>
	</div>
</section>
