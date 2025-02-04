<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Heading } from '$lib/components/ui/heading';
	import { LL } from '$lib/i18n/i18n-svelte';

	import FeedbackCard from '../feedbacks/components/feedback-card.svelte';

	const maxLength = 6;

	const feedbacks = Object.values($LL.whatOthersSaying.feedbacks).slice(
		0,
		maxLength
	);
	const hasMoreFeedbacks =
		Object.values($LL.whatOthersSaying.feedbacks).length > maxLength;
</script>

<section
	id="section-what-others-saying"
	class="overflow-hidden bg-gray-100 px-5 py-20"
	aria-describedby="what-others-saying"
>
	<div class="mx-auto max-w-6xl">
		<div
			class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-[repeat(9,_minmax(0,_1fr))]"
		>
			<div
				class="max-w-md p-5 sm:col-span-2 sm:col-start-1 sm:row-start-1 md:row-span-3"
			>
				<Heading id="what-others-saying" element="h2" class="relative">
					{$LL.whatOthersSaying.title()}
				</Heading>
				<p class="relative mt-5 max-w-xl font-medium">
					{$LL.whatOthersSaying.description()}
				</p>
			</div>
			{#each feedbacks as feedback}
				<FeedbackCard {feedback} class={feedback.class()} />
			{/each}
		</div>

		{#if hasMoreFeedbacks}
			<div class="mt-5 text-center">
				<Button variant="link" href="/feedbacks">
					{$LL.whatOthersSaying.seeMore()}
				</Button>
			</div>
		{/if}
	</div>
</section>
