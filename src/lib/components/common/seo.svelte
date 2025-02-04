<script lang="ts">
	import Seo from '@shamscorner/svelte-shared/components/Seo';

	import { PUBLIC_LANDING_PAGE } from '$env/static/public';
	import { LL } from '$lib/i18n/i18n-svelte';

	export let title: string;
	export let description: string;
	export let keywords: string;
</script>

<Seo
	{title}
	{description}
	{keywords}
	publicLandingPage={PUBLIC_LANDING_PAGE}
	schemaMarkup={$LL.schemaMarkup}
	appName={$LL.appName()}
/>
