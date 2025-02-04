<script lang="ts">
	import Image from '@zerodevx/svelte-img';

	import { Heading } from '$lib/components/ui/heading';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { cn } from '$lib/utils';

	import { projectBanners } from './banners';
</script>

<section
	id="section-project-showcase"
	class="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:pb-52"
	aria-describedby="project-showcase"
>
	<div class="flex flex-col items-center gap-4 text-center">
		<Heading id="project-showcase" element="h2">
			{$LL.projectShowcase.title()}
		</Heading>
		<p class="max-w-xl text-muted-foreground">
			{$LL.projectShowcase.description()}
		</p>
	</div>

	<div class="mt-16 space-y-24 sm:space-y-72 lg:mt-32">
		{#each Object.values($LL.projectShowcase.projects) as project, idxProject (idxProject)}
			{@const isOddIdx = idxProject % 2 === 1}
			<div
				class={cn(
					'mx-auto flex max-w-xl flex-col gap-24 lg:mx-0 lg:max-w-full lg:gap-8',
					isOddIdx ? 'lg:flex-row-reverse' : 'lg:flex-row'
				)}
			>
				<div class="flex-1 lg:px-5">
					<div class="font-semibold">
						{project.type()}
					</div>
					<Heading element="h3" size="xl">
						{project.title()}
					</Heading>
					<div class="mt-1 text-sm text-muted-foreground">
						{project.company()} - {project.completed()}
					</div>
					<div class="mt-6 flex flex-col items-start gap-4">
						{@html project.description()}
					</div>
				</div>
				<div
					class={cn(
						'relative ml-10 flex flex-1 flex-col items-center sm:flex-row',
						isOddIdx ? 'lg:justify-end' : ''
					)}
				>
					{#each Object.values(project.banners) as banner, idxBanner (idxBanner)}
						{#if idxBanner === 0}
							<Image
								src={projectBanners[banner.banner()]}
								alt={banner.banner()}
								loading="lazy"
								class="relative z-10 h-56 w-56 transform-gpu rounded-full border border-gray-300 object-cover shadow-[0px_0px_20px_rgba(0,_0,_0,_0.3)] transition hover:scale-105"
							/>
						{:else}
							<Image
								src={projectBanners[banner.banner()]}
								alt={banner.banner()}
								loading="lazy"
								class={cn(
									'w-80 transform-gpu rounded border border-gray-300 shadow-[0px_0px_20px_rgba(0,_0,_0,_0.3)] transition hover:z-50 hover:rotate-0 hover:scale-125 sm:absolute',
									banner.class()
								)}
							/>
						{/if}
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
