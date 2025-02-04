<script lang="ts">
	import type { TranslationFunctions } from '$lib/i18n/i18n-types';
	import { cn } from '$lib/utils';

	export let feedback: TranslationFunctions['whatOthersSaying']['feedbacks'][0];
</script>

<div class={cn('flex flex-col gap-5 bg-background p-5', $$restProps.class)}>
	<div class="text-3xl font-extrabold">""</div>
	<p class="flex-1">{feedback.comment()}</p>
	<div class="mt-2 text-sm">
		<div class="font-bold text-primary">
			{feedback.client.fullName()}
		</div>
		<div class="font-light">
			{feedback.client.position()}
		</div>
	</div>
</div>
