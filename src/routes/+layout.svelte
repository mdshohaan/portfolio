<script lang="ts">
	import type { FpType } from '@shamscorner/shared';
	import {
		getFromLocalStorageWithExpiry,
		saveToLocalStorageWithExpiry
	} from '@shamscorner/shared';
	import { inject as injectVercelAnalytics } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { onMount } from 'svelte';

	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import { setLocale } from '$lib/i18n/i18n-svelte';

	import type { LayoutData } from './$types';

	import '../app.postcss';

	export let data: LayoutData;

	setLocale(data.locale);
	injectVercelAnalytics({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();

	onMount(() => {
		saveReferralCode();
		saveFirstPageVisit();
	});

	function saveReferralCode() {
		const referralCodeFromUrl = $page.url.searchParams.get('rc');
		if (!referralCodeFromUrl) return;

		const getFirst20Characters = (inputString: string) =>
			inputString.length <= 20 ? inputString : inputString.substring(0, 20);

		saveToLocalStorageWithExpiry(
			'rc',
			getFirst20Characters(referralCodeFromUrl),
			30
		);
	}

	function saveFirstPageVisit() {
		const existingFirstPage = localStorage.getItem('fp');
		if (existingFirstPage) return;

		const fpObj: FpType = {
			landing: document.location.pathname,
			referrer: document.referrer,
			referrerUrl: document.URL,
			ua: navigator.userAgent,
			rc: getFromLocalStorageWithExpiry('rc') || ''
		};

		localStorage.setItem('fp', JSON.stringify(fpObj));
	}
</script>

<slot />
