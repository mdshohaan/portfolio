<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { cn } from '$lib/utils';
</script>

<a
	href="/"
	title={$LL.appLogo.hrefTitle()}
	class={cn('flex items-end gap-1', $$restProps.class)}
>
	<img
		src="/logo.svg"
		width="24"
		height="24"
		alt={$LL.appLogo.alt()}
		class="-translate-y-1"
	/>
	<span class="font-mono text-lg font-bold">amim Hossain</span>
</a>
