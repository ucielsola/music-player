<script>
	import { album } from '$lib/contentService.js';
	import { playing } from '$lib/playerService.js';
	import Controls from '../lib/components/controls.svelte';
	import Tracklist from '../lib/components/tracklist.svelte';
</script>

<main>
	{#await $album then}
		<Tracklist tracks={$album.songs} />
		{$playing}
		<Controls />
	{/await}
</main>

<style>
	main {
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: var(--background);
	}
</style>
