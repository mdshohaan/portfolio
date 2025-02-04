<script lang="ts">
	import Image from '@zerodevx/svelte-img';

	import GithubIcon from '$lib/assets/images/github-icon.png?as=run:0';
	import { Icons } from '$lib/components/icons';
	import { ButtonArrow } from '$lib/components/ui/button';
	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<section
	class="grid grid-cols-1 gap-8 md:grid-cols-2"
	aria-describedby="onboarding-title"
>
	<!-- greeting -->
	<div class="space-y-4 px-6 pb-5 pt-10 md:ml-auto md:max-w-xl">
		<p>{@html $LL.onboarding.greeting()}</p>
		<h1 id="onboarding-title" class="max-w-md text-2xl font-bold">
			{$LL.onboarding.title()}
		</h1>
		<p>{$LL.onboarding.subtitle()}</p>
		<div class="pt-4">
			<ButtonArrow href="#section-lets-get-started" title={$LL.common.slogan()}>
				{$LL.onboarding.callToAction.contactMe()}
			</ButtonArrow>
			<!-- TODO: comment out this when CV is ready -->
			<!-- <Button
				variant="link"
				title={$LL.onboarding.callToAction.downloadCvTitle()}
				class="ml-4"
			>
				{$LL.onboarding.callToAction.downloadCv()}
			</Button> -->
		</div>
	</div>

	<!-- quick statistics -->
	<div
		class="bg-circuit bg-accent px-6 py-10 selection:bg-accent-foreground selection:text-background md:row-span-2"
	>
		<div class="md:mr-auto md:max-w-xl">
			<ul class="space-y-6 text-center">
				{#each Object.values($LL.onboarding.quickStatistics.stats) as item, idx (idx)}
					<li>
						{#if item.value()}
							<div class="text-3xl font-bold md:text-4xl">{item.value()}</div>
						{/if}
						<div class="font-semibold">{@html item.title()}</div>
					</li>
				{/each}
			</ul>

			<ul class="mt-10">
				{#each Object.values($LL.onboarding.quickStatistics.marketplaces) as item, idx (idx)}
					<li>
						<a
							href={item.link()}
							target="_blank"
							rel="noopener noreferrer"
							class="mx-auto mb-1 block w-fit underline underline-offset-4 hover:text-primary/80"
						>
							{item.title()}
						</a>
					</li>
				{/each}
			</ul>

			<ul class="mt-6 flex items-center justify-center gap-6">
				{#each Object.values($LL.onboarding.quickStatistics.socialLinks) as item, idx (idx)}
					<li>
						<a
							href={item.link()}
							target="_blank"
							rel="noopener noreferrer"
							title={item.title()}
							class="hover:text-primary/80"
						>
							<svelte:component this={Icons[item.icon()]} class="h-5 w-5" />
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<!-- technical stack -->
	<div class="space-y-6 px-6 pb-10 md:ml-auto md:mt-6 md:max-w-xl">
		<h2 class="text-xl font-bold">
			{$LL.onboarding.techStack.title()}
		</h2>

		{#each Object.values($LL.onboarding.techStack.technologies) as technology (technology.title)}
			<div class="relative border border-primary/40 pb-4 pl-4 pr-4 pt-6">
				<h3 class="absolute -top-3 left-2 bg-background px-2 font-semibold">
					{technology.title()}
				</h3>
				<ul class="flex flex-wrap gap-2">
					{#each Object.values(technology.items) as item (item)}
						<li class="border border-primary/20 px-2 py-0.5 text-sm">
							{item()}
						</li>
					{/each}
				</ul>
			</div>
		{/each}

		<a
			href={$LL.onboarding.techStack.githubProfile.link()}
			target="_blank"
			rel="noopener noreferrer"
			class="flex w-fit items-center gap-1 font-semibold underline underline-offset-4 hover:text-primary/80"
		>
			<Image src={GithubIcon} alt="Github Icon" loading="lazy" class="w-16" />
			{$LL.onboarding.techStack.githubProfile.title()}
		</a>
	</div>
</section>
