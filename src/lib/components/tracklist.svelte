<script>
	import { Play, currentTrack } from '$lib/playerService.js';
	export let tracks;

	const formatTime = (ms = 0) => {
		let minutes = Math.floor(ms / 60000);
		let seconds = ((ms % 60000) / 1000).toFixed(0);
		return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
	};
</script>

<div class="container">
	{#if tracks}
		{#each tracks as track, i}
			<div class="row">
				<h3 id={i} class={i === $currentTrack ? 'active' : ''} on:click={() => Play(i)}>
					{'0' + (i + 1)} - {track.title}
				</h3>
				<span>{formatTime(track.duration)}</span>
			</div>
		{/each}
	{/if}
</div>

<style>
	.container {
		padding-inline: var(--padding);
		font-size: 0.7rem;
	}
	.row {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.active {
		color: var(--primary);
	}
</style>
