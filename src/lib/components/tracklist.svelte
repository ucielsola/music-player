<script>
	import { Play, currentTrack } from '$lib/playerService.js';
	export let tracks;
</script>

<div class="container">
	{#if tracks}
		{#each tracks as track, i}
			<h3 id={i} class={i === $currentTrack ? 'active' : ''} on:click={() => Play(i)}>
				{'0' + (i + 1)} - {track.title}
			</h3>
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
