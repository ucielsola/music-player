<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import Player from '$lib/components/Player.svelte';
	import Loader from '$lib/components/Loader.svelte';

	import loadAlbum from '$lib/player/actions/loadAlbum';

	import { playerStore } from '$lib/player/playerStore';
	import keyCodesReducer from '$lib/player/keyCodesReducer';

	let title = 'SvelteKit Audio Player';

	onMount(() => {
		loadAlbum();
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<svelte:window on:keypress={keyCodesReducer}/>

{#if $playerStore.loaded}
	<main transition:fade|global={{ delay: 400 }} class="h-full">
		<Player />
	</main>
{:else}
	<div out:fade|global class="flex items-center justify-center h-screen">
		<Loader />
	</div>
{/if}
