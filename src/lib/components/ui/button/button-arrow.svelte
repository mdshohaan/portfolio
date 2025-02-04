<script lang="ts">
	import { Icons } from '$lib/components/icons';

	import Button from './button.svelte';
</script>

<Button
	size="lg"
	class="group relative overflow-hidden after:absolute after:-bottom-1/2 after:-top-1/2 after:-z-10 after:w-16 after:rotate-[35deg] after:bg-gray-100 after:content-[''] after:[transform:_translate3d(-525%,_0,_0)] after:hover:transition-transform after:hover:duration-[450ms] after:hover:ease-in-out after:hover:[transform:_translate3d(200%,_0,_0)]"
	{...$$restProps}
>
	<slot />
	<Icons.arrowRight
		class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2"
	/>
</Button>
