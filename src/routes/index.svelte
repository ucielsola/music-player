<script>
	import { album } from '$lib/contentService.js';
	import { initPlayer, playing } from '$lib/playerService.js';
	import Controls from '../lib/components/controls.svelte';
	import Tracklist from '../lib/components/tracklist.svelte';
	import { browser } from '$app/env';
	import Header from '../lib/components/header.svelte';

	$: if ($album != 'loading' && browser) initPlayer();
</script>

<main>
	{#await $album then}
		<Header artist={$album.artist} cover={$album.cover} back={$album.back} title={$album.title} />
		<Tracklist tracks={$album.songs} />
		<Controls />
	{/await}
</main>

<style>
	main {
		/* position: relative; */
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		padding-bottom: calc(1rem + var(--controls-height));
		background-color: var(--background);
	}
</style>
