<script>
	import { Play, currentTrack } from '$lib/playerService.js';
	export let artist;
	export let title;
	export let tracks;

	const formatTime = (ms = 0) => {
		let minutes = Math.floor(ms / 60000);
		let seconds = ((ms % 60000) / 1000).toFixed(0);
		return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
	};
</script>

<div class="container">
	{#if tracks}
		<h1>{artist}</h1>
		<h2>{title}</h2>
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
	}
	.row {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.active {
		color: var(--primary);
	}

	h1 {
		color: var(--secondary);
		font-size: var(--f-size-l);
	}

	h2 {
		margin-block-start: -0.75rem;
		color: var(--primary);
		font-size: var(--f-size-m);
	}
	h3,
	span {
		font-size: var(--f-size-s);
	}
</style>
