<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { FormStatus } from '@shamscorner/shared';
	import TriangleAlertIcon from 'lucide-svelte/icons/triangle-alert';

	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLParagraphElement> & {
		show?: boolean;
		type?: FormStatus;
	};
	let show: $$Props['show'] = false;
	let type: FormStatus = 'info';
	let className: string | undefined | null = undefined;
	export { className as class, show, type };

	$: {
		if (show) {
			setTimeout(() => {
				show = false;
			}, 5000);
		}
	}
</script>

<p
	class={cn(
		'flex items-center gap-x-2 rounded-md p-2 text-xs',
		{
			'bg-green-600/15 text-green-600': type === 'success',
			'bg-destructive/15 text-destructive': type === 'error',
			'bg-amber-600/15 text-amber-600': type === 'warning',
			'bg-blue-600/15 text-blue-600': type === 'info'
		},
		{ hidden: !show },
		className
	)}
	{...$$restProps}
>
	<TriangleAlertIcon class="h-4 w-4" />
	<slot />
</p>
