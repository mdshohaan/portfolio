<script lang="ts">
	import { ButtonArrow } from '$lib/components/ui/button';
	import { Heading } from '$lib/components/ui/heading';
	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<section
	class="flex flex-col items-center justify-center gap-6 pb-10 pt-20 sm:flex-row"
	aria-describedby="are-you-interested"
>
	<Heading id="are-you-interested" element="h2">
		{$LL.areYouInterested.title()}
	</Heading>
	<ButtonArrow href="#section-lets-get-started" title={$LL.common.slogan()}>
		{$LL.areYouInterested.callToAction.letsTalk()}
	</ButtonArrow>
</section>
