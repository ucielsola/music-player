<script lang="ts">
	import { fade } from 'svelte/transition';

	import Player from '$lib/components/Player.svelte';
	import Loader from '$lib/components/Loader.svelte';

	import { playerStore } from '$lib/player/playerStore';
	import keyCodesReducer from '$lib/player/keyCodesReducer';

	let title = 'Cargando...';
	let showLoader = true;
	let timeoutId: number;

	const CONTENT_DELAY = 1000;

	$: if ($playerStore.loaded && showLoader) {
		timeoutId = setTimeout(() => {
			showLoader = false;
			title = $playerStore.album?.title || 'Sin título';
		}, CONTENT_DELAY);
	}

	$: if (!showLoader && timeoutId) {
		clearTimeout(timeoutId);
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<svelte:window on:keypress={keyCodesReducer} />

{#if !showLoader}
	<main transition:fade|global={{ delay: 400 }} class="h-full">
		<Player />
	</main>
{:else}
	<div out:fade|global class="flex items-center justify-center h-screen">
		<Loader />
	</div>
{/if}
