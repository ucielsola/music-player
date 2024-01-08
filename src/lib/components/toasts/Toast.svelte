<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';
	import { dismissToast } from './ToastWrapper.svelte';

	export let text: string;
	export let id: string;
	export let type: string;
</script>

<span
	transition:fade|global
	{id}
	class="relative p-2 border rounded-lg bg-stone-500/50 noisy-bg border-stone-50 text-stone-50 min-w-[16rem] text-center"
>
	<button class="absolute cursor-pointer top-3 right-1" on:click={() => dismissToast({ id })}>
		<Icon icon="bi:x-circle" class="w-4 h-4" />
	</button>
    
	{text}
</span>
