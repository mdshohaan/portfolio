<script lang="ts">
	import { Heading } from '$lib/components/ui/heading';
	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<section
	id="section-experience"
	class="mx-auto max-w-6xl px-4 py-10"
	aria-describedby="past-working-experiences"
>
	<div class="flex flex-col items-center gap-4">
		<Heading id="past-working-experiences" element="h2">
			{$LL.pastWorkingExperiences.title()}
		</Heading>
		<p class="max-w-xl text-center text-muted-foreground">
			{$LL.pastWorkingExperiences.description()}
		</p>

		<ul class="pt-8">
			{#each Object.values($LL.pastWorkingExperiences.experiences) as experience, idx (idx)}
				<li class="flex gap-x-3 sm:gap-x-4">
					<div class="w-20 shrink-0 text-right text-lg font-bold">
						{experience.year()}
					</div>
					<div class="mt-2 flex shrink-0 flex-col items-center gap-1">
						<div class="h-2.5 w-2.5 shrink-0 rounded-full bg-accent"></div>
						<div class="h-full w-px bg-muted" />
					</div>
					<div class="pb-12">
						<div>
							<span class="font-semibold">{experience.company()}</span>
							{experience.role() ? `- ${experience.role()}` : ''}
						</div>
						<div class="mt-1 text-xs text-muted-foreground">
							{experience.timeline()}
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
