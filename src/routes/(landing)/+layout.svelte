<script lang="ts">
	import Footer from './components/footer/Footer.svelte';
	import Navbar from './components/navbar/Navbar.svelte';
</script>

<div class="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
	<Navbar />

	<main>
		<slot />
	</main>

	<Footer />
</div>
