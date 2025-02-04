<script lang="ts">
	import Image from '@zerodevx/svelte-img';

	import { Heading } from '$lib/components/ui/heading';
	import { LL } from '$lib/i18n/i18n-svelte';

	import { whatWorkIDoBanners } from './banners';
</script>

<section
	id="section-works-i-do"
	class="pt-10"
	aria-describedby="what-works-i-do"
>
	<div class="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4">
		<Heading id="what-works-i-do" element="h2">
			{$LL.whatWorkIDo.title()}
		</Heading>
		<p class="max-w-xl text-center text-muted-foreground">
			{$LL.whatWorkIDo.description()}
		</p>
	</div>

	<div
		class="bg-circuit bg-accent selection:bg-accent-foreground selection:text-background"
	>
		<div class="mx-auto mt-5 flex max-w-6xl flex-row px-4">
			<!-- left area -->
			<div
				class="relative z-10 flex flex-col gap-20 lg:w-1/2 lg:gap-0 lg:py-24"
			>
				{#each Object.values($LL.whatWorkIDo.services) as service, idx (idx)}
					<div
						class="relative flex w-full flex-col items-center gap-12 text-lg sm:items-start sm:text-left md:text-2xl lg:flex-row lg:justify-start lg:gap-0 lg:py-40 lg:pl-11"
					>
						<!-- text -->
						<div class="flex flex-col justify-center">
							<div
								class="mb-6 flex flex-col items-center gap-4 sm:items-start md:flex-row md:items-center md:gap-16 lg:flex-col lg:items-start lg:gap-7"
							>
								<h3 class="max-w-md text-2xl font-bold md:text-4xl">
									{service.title()}
								</h3>
							</div>
							<div class="flex flex-col gap-6 lg:flex-col lg:gap-10">
								<p class="lg:max-w-[28ch]">
									{service.description()}
								</p>
							</div>
						</div>
						<!-- image -->
						<div
							class="relative inset-y-0 flex w-full flex-col items-center justify-center py-16 lg:absolute lg:left-full lg:py-0"
						>
							<div
								class="relative z-20 flex transform-gpu flex-col items-center justify-center gap-7"
							>
								<div class="relative flex max-w-xs transform-gpu">
									<Image
										src={whatWorkIDoBanners[service.image()]}
										alt={service.title()}
										loading="lazy"
									/>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- right area -->
			<div class="relative hidden flex-shrink-0 flex-col lg:flex lg:w-1/2">
				<div class="sticky inset-x-0 top-6 z-20 flex h-screen w-full flex-col">
					<div class="relative flex h-full flex-col">
						<div class="h-16 bg-accent"></div>
						<div class="relative flex h-full flex-col justify-between"></div>
						<div class="h-16 bg-accent"></div>
					</div>
				</div>
				<div class="absolute inset-0 z-0">
					<div class="sticky top-0 z-0 h-screen w-full bg-background"></div>
				</div>
			</div>
		</div>
	</div>
</section>
