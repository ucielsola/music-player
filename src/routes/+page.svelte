<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import Player from '$lib/components/Player.svelte';
	import Loader from '$lib/components/loader.svelte';

	import createAudioContext from '$lib/player/actions/createAudioContext';
	import loadAlbum from '$lib/player/actions/loadAlbum';

	import { playerStore } from '$lib/player/playerStore';

	const defaultTitle = 'SvelteKit Audio Player';
	let title = defaultTitle;

	$: loaded = $playerStore.loaded;

	$: {
		const albumTitle = $playerStore.album?.title;
		const songTitle = $playerStore.album?.tracklist[$playerStore.currentTrack].title;

		title = songTitle?.length ? `${songTitle} - ${albumTitle}` : albumTitle || defaultTitle;
	}

	onMount(() => {
		loadAlbum();
		createAudioContext();
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{#if loaded}
	<main transition:fade={{ delay: 400 }}>
		<Player />
	</main>
{:else}
	<div out:fade class="flex items-center justify-center h-full">
		<Loader />
	</div>
{/if}
