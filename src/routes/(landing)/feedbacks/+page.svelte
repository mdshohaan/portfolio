<script lang="ts">
	import Seo from '$lib/components/common/seo.svelte';
	import { Heading } from '$lib/components/ui/heading';
	import { LL } from '$lib/i18n/i18n-svelte';

	import FeedbackCard from './components/feedback-card.svelte';
</script>

<Seo
	title={$LL.feedbackPage.title()}
	description={$LL.feedbackPage.description()}
	keywords={$LL.feedbackPage.keywords()}
/>

<div class="bg-gray-100 px-4 pb-40 pt-10 sm:px-6">
	<div class="mx-auto max-w-6xl">
		<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
			<div class="max-w-md p-5 sm:col-span-2">
				<Heading id="what-others-saying" element="h2" class="relative">
					{$LL.feedbackPage.title()}
				</Heading>
				<p class="relative mt-5 max-w-xl font-medium text-muted-foreground">
					{$LL.feedbackPage.description()}
				</p>
			</div>
			{#each Object.values($LL.whatOthersSaying.feedbacks) as feedback}
				<FeedbackCard {feedback} />
			{/each}
		</div>
	</div>
</div>
