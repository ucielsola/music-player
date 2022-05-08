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
	const handleSeek = (e) => {
		Seek(e.detail.value);
	};
</script>

<div class="container slide-in-bottom">
	<TrackButtons on:pause={() => Pause()} on:play={() => Play()} playing={$playing} />
	<ProgressBar
		on:updateTime={handleSeek}
		value={$progress}
		time={$currentTime}
		length={$trackLength}
		playing={$playing}
	/>
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

	.slide-in-bottom {
		-webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.38, 1.01, 0.28, 1.01) both 0.5s;
		animation: slide-in-bottom 0.5s cubic-bezier(0.38, 1.01, 0.28, 1.01) both 0.5s;
	}

	@-webkit-keyframes slide-in-bottom {
		0% {
			-webkit-transform: translateY(1000px);
			transform: translateY(1000px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes slide-in-bottom {
		0% {
			-webkit-transform: translateY(1000px);
			transform: translateY(1000px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
