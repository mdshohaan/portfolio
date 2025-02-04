<script lang="ts">
	import { Icons } from '$lib/components/icons';
	import { Button } from '$lib/components/ui/button';
	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<footer class="relative bg-primary px-4 py-10 text-background">
	<div class="mx-auto max-w-6xl">
		<div class="flex flex-row items-center justify-between gap-6">
			<div class="flex flex-col gap-2">
				<span class="text-sm font-medium">
					<b>{$LL.profile.fullName()}</b> - {$LL.profile.designation()}
				</span>
				<span class="text-xs font-light text-muted">
					{$LL.footer.copyrights()}
				</span>
			</div>
			<div class="shrink-0 space-x-2">
				<Button
					href={$LL.profile.githubLink()}
					target="_blank"
					variant="complement"
					size="icon"
					class="shrink-0 border-background hover:bg-background hover:text-primary"
				>
					<Icons.github class="h-4 w-4" />
				</Button>
				<Button
					href={$LL.profile.linkedinLink()}
					target="_blank"
					variant="complement"
					size="icon"
					class="shrink-0 border-background hover:bg-background hover:text-primary"
				>
					<Icons.linkedin class="h-4 w-4" />
				</Button>
			</div>
		</div>

		<div
			class="mt-8 flex flex-col gap-10 text-muted sm:items-center sm:justify-between md:flex-row md:gap-16"
		>
			<ul
				class="-mx-2 grid shrink-0 grid-cols-3 gap-3 text-sm sm:flex sm:items-center sm:justify-between sm:divide-x sm:divide-muted-foreground"
			>
				{#each Object.values($LL.navbar.items) as item (item.name())}
					<li>
						<a
							href={item.link()}
							class="ml-3.5 mr-1 underline transition-colors hover:text-background"
						>
							{item.name()}
						</a>
					</li>
				{/each}
			</ul>
			<p class="text-xs [&>a:hover]:text-background">
				{@html $LL.footer.remarks()}
			</p>
		</div>
	</div>
</footer>
