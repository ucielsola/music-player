<script>
	import {
		Play,
		Pause,
		Seek,
		playing,
		currentTime,
		trackLength,
		progress
	} from '$lib/playerService.js';
	import ProgressBar from './controls/progressBar.svelte';
	import TrackButtons from './controls/trackButtons.svelte';
</script>

<div class="container">
	<TrackButtons on:pause={() => Pause()} on:play={() => Play()} playing={$playing} />
	<ProgressBar value={$progress} time={$currentTime} length={$trackLength} />
</div>

<style>
	.container {
		position: fixed;
		display: grid;
		place-items: center;
		bottom: 0;
		min-height: var(--controls-height);
		width: 100%;
		border-radius: 1.5rem 1.5rem 0 0;
		background-color: var(--contrast);
		border-top: 1px solid hsl(120deg 33% 1% / 77%);
		box-shadow: var(--contrast) 0px 16px 50px 12px;
	}
</style>
