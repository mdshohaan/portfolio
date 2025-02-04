<script lang="ts">
	import { Icons } from '$lib/components/icons';
	import { Heading } from '$lib/components/ui/heading';
	import { Label } from '$lib/components/ui/label';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { cn } from '$lib/utils';
</script>

<section
	class="overflow-hidden py-16"
	aria-describedby="things-i-want-to-learn"
>
	<div class="relative mx-auto flex max-w-6xl flex-col gap-4 px-4">
		<Heading id="things-i-want-to-learn" element="h2" class="relative">
			{$LL.thingsIWantToLearn.title()}
		</Heading>
		<p class="relative max-w-xl font-medium text-muted-foreground">
			{$LL.thingsIWantToLearn.description()}
		</p>

		<div
			class="mt-5 grid grid-cols-2 gap-x-5 gap-y-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
		>
			{#each Object.values($LL.thingsIWantToLearn.technologies) as technology}
				{@const isDone = technology.done() === 'true'}
				<div class={cn('flex gap-2', isDone ? 'text-green-500' : '')}>
					<div
						class={cn(
							'h-5 w-5 rounded border-2',
							isDone ? 'border-green-500' : ''
						)}
					>
						{#if isDone}
							<Icons.check class="h-4 w-4" />
						{/if}
					</div>
					<Label class={cn('pointer-events-none text-base font-semibold')}>
						{technology.name()}
					</Label>
				</div>
			{/each}
		</div>
	</div>
</section>
