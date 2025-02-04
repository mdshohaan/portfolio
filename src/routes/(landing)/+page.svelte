<script lang="ts">
	import Seo from '$lib/components/common/seo.svelte';
	import { LL } from '$lib/i18n/i18n-svelte';

	import type { PageData } from './$types';
	import AreYouInterested from './components/are-you-interested.svelte';
	import Faqs from './components/faqs.svelte';
	import HeroSection from './components/hero-section.svelte';
	import LetsGetStarted from './components/lets-get-started/lets-get-started.svelte';
	import MeAtAGlance from './components/me-at-a-glance.svelte';
	import PastWorkingExperiences from './components/past-working-experiences.svelte';
	import ThingsIWantToLearn from './components/things-i-want-to-learn.svelte';
	import WhatWorksIDo from './components/what-works-i-do/what-works-i-do.svelte';

	export let data: PageData;
</script>

<Seo
	title={$LL.title()}
	description={$LL.description()}
	keywords={$LL.keywords()}
/>

<HeroSection />
<AreYouInterested />
<MeAtAGlance />
<PastWorkingExperiences />
<WhatWorksIDo />

<ThingsIWantToLearn />
<Faqs />
<LetsGetStarted data={data.form} />
