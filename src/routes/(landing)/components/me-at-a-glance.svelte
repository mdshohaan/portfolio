<script lang="ts">
	import Image from '@zerodevx/svelte-img';

	import MyPhoto from '$lib/assets/images/MyPhoto.jpg?as=run:0';
	import { Heading } from '$lib/components/ui/heading';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { cn } from '$lib/utils';
</script>

<section class="mx-auto max-w-6xl px-4 py-10" aria-describedby="me-at-a-glance">
	<div class="relative flex flex-col items-center gap-5">
		<Heading id="me-at-a-glance" element="h2" size="sm">
			{$LL.meAtAGlance.title()}
		</Heading>

		<Image
			src={MyPhoto}
			alt={$LL.meAtAGlance.profilePicture.alt()}
			loading="lazy"
			class="w-[500px]"
		/>

		<ul class="space-y-4 md:space-y-0">
			{#each Object.values($LL.meAtAGlance.infoItems) as item, idx (item())}
				<li
					class={cn(
						'md:absolute md:w-[30%]',
						idx % 2 === 0 ? 'md:left-0' : 'md:right-0'
					)}
					style="top: calc(3rem + {idx * 4}rem);"
				>
					<div
						class={cn(
							'mx-auto w-fit rounded-full bg-accent px-5 py-2.5 text-center font-semibold selection:bg-accent-foreground selection:text-background',
							idx % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:ml-0 md:mr-auto'
						)}
					>
						{item()}
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
