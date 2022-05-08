<script>
	import { browser } from '$app/env';
	import { fade } from 'svelte/transition';
	import { album } from '$lib/contentService.js';
	import { initPlayer } from '$lib/playerService.js';
	import PlayerControls from '$lib/components/playerControls.svelte';
	import Tracklist from '$lib/components/tracklist.svelte';

	import Header from '$lib/components/header.svelte';
	import Loader from '../lib/components/loader.svelte';
	let loading = true;

	$: if ($album != 'loading' && browser) {
		initPlayer();
		setTimeout(() => {
			loading = false;
		}, 300);
	}
</script>

{#if loading}
	<div class="loader-wrapper" out:fade>
		<Loader />
	</div>
{:else}
	<main transition:fade={{ delay: 400 }}>
		<Header artist={$album.artist} cover={$album.cover} back={$album.back} title={$album.title} />
		<Tracklist tracks={$album.songs} />
		<PlayerControls />
	</main>
{/if}

<style>
	.loader-wrapper {
		display: grid;
		place-items: center;
		width: 100%;
		min-height: 100vh;
	}
	main {
		/* position: relative; */
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		padding-bottom: calc(1rem + var(--controls-height));
	}
</style>
