<script lang="ts">
	import { Heading } from '$lib/components/ui/heading';
	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<section
	id="section-faqs"
	class="bg-gray-50 px-4 py-10"
	aria-describedby="faqs"
>
	<div class="relative mx-auto max-w-6xl">
		<div
			class="absolute -top-20 bg-gradient-to-r from-gray-200 to-gray-50 bg-clip-text text-[12rem] font-extrabold text-transparent sm:left-28"
			role="presentation"
		>
			FAQs
		</div>

		<div class="relative flex flex-col items-center gap-4">
			<Heading id="faqs" element="h2">
				{$LL.faqs.title()}
			</Heading>
			<p class="max-w-xl text-center text-muted-foreground">
				{$LL.faqs.description()}
			</p>
		</div>

		<ul class="relative mx-auto mt-12 flex max-w-4xl flex-col gap-8">
			{#each Object.values($LL.faqs.questions) as question, idxQuestion (idxQuestion)}
				<li>
					<h3 class="text-lg font-semibold">{question.question()}</h3>
					<p class="mt-1">{@html question.answer()}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
