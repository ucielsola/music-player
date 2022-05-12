<script>
	import { browser } from '$app/env';
	import { fade } from 'svelte/transition';
	import { album, getData } from '$lib/contentService.js';
	import { initPlayer, playerState } from '$lib/playerService.js';
	import PlayerControls from '$lib/components/playerControls.svelte';
	import Tracklist from '$lib/components/tracklist.svelte';

	import Header from '$lib/components/header.svelte';
	import Loader from '../lib/components/loader.svelte';
	import Social from '../lib/components/social.svelte';
	let loading = true;
	let title;

	$: if (browser) {
		getData().then(() => {
			initPlayer();
			title = `SUD - De Un Día al Otro Aparecimos`;
			setTimeout(() => {
				loading = false;
			}, 300);
		});
	}

	$: if ($playerState.isPlaying) {
		title = `${$album.artist} - ${$album.songs[$playerState.currentTrack]?.title}`;
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{#if loading}
	<div class="loader-wrapper" out:fade>
		<Loader />
	</div>
{:else}
	<main transition:fade={{ delay: 400 }}>
		<div class="desktop-row">
			<Header artist={$album.artist} cover={$album.cover} back={$album.back} title={$album.title} />
			<Tracklist tracks={$album.songs} artist={$album.artist} title={$album.title} />
		</div>
		<!-- <Social /> -->
		<div class="controls-wrapper">
			<PlayerControls />
		</div>
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
		padding-bottom: calc(var(--controls-height));
	}

	@media screen and (min-width: 64rem) {
		main {
			width: var(--max-width);
			max-height: 768px;
			padding-bottom: 0;
			justify-content: center;
		}

		.desktop-row {
			display: flex;
			align-items: center;
			justify-content: space-between;
			min-height: 100%;
		}
	}
</style>
