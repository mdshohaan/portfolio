<script lang="ts">
	// import Logo from '$lib/components/common/logo.svelte';
	import { LL } from '$lib/i18n/i18n-svelte';

	import SideNavigationSheet from './side-navigation-sheet.svelte';
</script>

<header class="sticky top-0 z-50 h-14 bg-background shadow-md">
	<nav
		class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 xl:px-0"
	>
		<!-- <Logo class="shrink-0 grow-0" /> -->
		<span class="text-lg font-semibold"> Irfanul Islam</span>
		<ul
			class="ml-auto hidden items-center justify-between gap-8 text-sm font-semibold md:flex"
		>
			{#each Object.values($LL.navbar.items) as item (item.name())}
				<li>
					<a
						href={item.link()}
						class="group relative block overflow-hidden pb-1 pt-2"
					>
						{item.name()}
						<span
							class="absolute bottom-0 left-0 right-0 block -translate-x-full border-b-2 transition-transform delay-100 duration-300 group-hover:translate-x-0"
						></span>
					</a>
				</li>
			{/each}
		</ul>

		<SideNavigationSheet />
	</nav>
</header>
