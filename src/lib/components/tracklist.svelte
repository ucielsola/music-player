<script>
	import { Play } from '$lib/playerService.js';
	export let tracks;
	let currentTrack = 5;
</script>

<div class="container">
	{#if tracks}
		{#each tracks as track, i}
			<h3 id={i} class={i === currentTrack ? 'active' : ''} on:click={() => Play(i)}>
				{'0' + (i + 1)} - {track.title}
			</h3>
			<span>{track.file.url}</span>
		{/each}
	{/if}
</div>

<style>
	.container {
		padding-inline: var(--padding);
		font-size: 0.7rem;
	}
	.active {
		color: var(--primary);
	}
</style>
