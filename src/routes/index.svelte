<script>
	import { browser } from '$app/env';
	import { fade } from 'svelte/transition';
	import { album } from '$lib/contentService.js';
	import { initPlayer } from '$lib/playerService.js';
	import PlayerControls from '$lib/components/playerControls.svelte';
	import Tracklist from '$lib/components/tracklist.svelte';

	import Header from '$lib/components/header.svelte';
	import Loader from '../lib/components/loader.svelte';
	import Social from '../lib/components/social.svelte';
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
		<Tracklist tracks={$album.songs} artist={$album.artist} title={$album.title} />
		<PlayerControls />
		<Social />
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
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		max-width: var(--max-width);
		margin-inline: auto;
		padding-bottom: var(--controls-height);
	}
</style>
