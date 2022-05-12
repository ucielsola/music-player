<script>
	import { playerState } from '$lib/playerService.js';

	import { album } from '$lib/contentService.js';
	import ProgressBar from './controls/progressBar.svelte';
	import TrackButtons from './controls/trackButtons.svelte';
	import OptionsButtons from './controls/optionsButtons.svelte';

	const handleSeek = (e) => {
		Seek(e.detail.value);
	};

	let nowPlaying = '';

	$: if ($playerState.currentTrack >= 0) {
		nowPlaying = `${$album.artist} - ${$album.songs[$playerState.currentTrack]?.title}`;
	}
</script>

<div class="container slide-in-bottom">
	<TrackButtons />
	<div class="title">
		<h1>{nowPlaying}</h1>
	</div>
	<ProgressBar />
	<OptionsButtons />
</div>

<style>
	.container {
		backdrop-filter: blur(5px);
		position: fixed;
		display: grid;
		place-items: center;
		padding-block-start: 0.5rem;
		bottom: 0;
		min-height: var(--controls-height);
		width: 100%;
		max-width: var(--max-width);
		border-radius: 1.5rem 1.5rem 0 0;
		background-color: var(--secondary);
		box-shadow: var(--glow);
	}

	.title {
		height: 1.2rem;
		display: grid;
		place-items: center;
	}

	.title h1 {
		font-size: 0.9rem;
		color: var(--background);
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

	@media screen and (min-width: 64rem) {
		.container {
			position: relative;
			background-color: #00000000;
			backdrop-filter: none;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
		}

		.title h1 {
			color: #fff;
		}
	}
</style>
