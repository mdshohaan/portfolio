<script lang="ts">
	import MenuIcon from 'lucide-svelte/icons/menu';

	import Logo from '$lib/components/common/logo.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Sheet from '$lib/components/ui/sheet';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { cn } from '$lib/utils';

	let isOpen = false;

	function closeSheet() {
		isOpen = false;
	}
</script>

<Sheet.Root bind:open={isOpen}>
	<Sheet.Trigger asChild let:builder>
		<!-- navigation menu button for small screen -->
		<Button
			variant="outline"
			size="sm"
			class="shrink-0 md:hidden"
			builders={[builder]}
		>
			<MenuIcon class="h-5 w-5" />
			<span class="sr-only">{$LL.common.toggleNavigationMenu()}</span>
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="right" class="flex flex-col">
		<nav class="grid gap-2 text-lg font-medium">
			<Logo />

			<ul class="mt-8 flex flex-col gap-3 text-sm font-semibold">
				{#each Object.values($LL.navbar.items) as item (item.name())}
					<li>
						<a
							href={item.link()}
							class={cn(
								'group relative block overflow-hidden bg-gray-100 px-3 py-3'
							)}
							on:click={closeSheet}
						>
							{item.name()}
							<span
								class="absolute bottom-0 left-0 right-0 block -translate-x-full border-b-2 transition-transform delay-100 duration-300 group-hover:translate-x-0"
							></span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</Sheet.Content>
</Sheet.Root>
