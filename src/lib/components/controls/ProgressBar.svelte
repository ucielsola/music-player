<script lang="ts">
	import { seek } from '$lib/player/actions';
	import { playerStore } from '$lib/player/playerStore';
	import durationFormatter from '$lib/utils/durationFormatter';

	$: isPlaying = $playerStore.controls.isPlaying;
	$: trackLength = $playerStore.howlerInstance?.duration() || 0;

	$: if (isPlaying && $playerStore.howlerInstance) {
		trackProgress();
	}

	$: if (refreshIntervalId && !isPlaying) {
		trackLength = 0;
		progress = 0;
		currentTime = 0;
		clearInterval(refreshIntervalId);
	}

	$: if (seekTimeoutId && !isSeeking) {
		clearTimeout(seekTimeoutId);
	}

	const trackProgress = () => {
		refreshIntervalId = setInterval(() => {
			currentTime = $playerStore?.howlerInstance?.seek() || 0.1;
			progress = currentTime / trackLength;
		}, 10);
	};

	let isSeeking = false;
	let seekValue: number;
	let progress: number = 0
	let currentTime = 0;
	let refreshIntervalId: number;
	let seekTimeoutId: number;

	const seekStart = () => {
		isSeeking = true;
	};

	const seekEnd = (e: TouchEvent | MouseEvent) => {
		const inputElement = e.target as HTMLInputElement;

		if (inputElement.value) {
			const valueAsNumer = parseFloat(inputElement.value);
			const newPosition = ~~(valueAsNumer * trackLength);
			seekValue = newPosition / trackLength;

			seek(newPosition);

			seekTimeoutId = setTimeout(() => {
				//debouncing to avoid bar thumb jumping
				isSeeking = false;
			}, 700);
		}
	};
</script>

<div class="flex flex-col w-full max-w-[70vh] gap-2 px-2">
	<input
		type="range"
		id="slider"
		class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-stone-400"
		class:pointer-events-none={!currentTime && !isPlaying}
		class:cursor-default={!currentTime && !isPlaying}
		on:touchstart={(e) => seekStart()}
		on:mousedown={(e) => seekStart()}
		on:touchend={(e) => seekEnd(e)}
		on:mouseup={(e) => seekEnd(e)}
		min={0}
		max={1}
		step={0.0001}
		value={isSeeking ? seekValue : progress}
		disabled={!currentTime && !isPlaying}
	/>
	<div class="flex items-center justify-between w-full px-0.5 text-xs text-stone-50">
		<spa class="text-center min-w-[2rem]">
			{durationFormatter(isSeeking ? seekValue : currentTime)}
		</spa>
		<span class="text-center min-w-[2rem]">
			-{durationFormatter(trackLength - currentTime || 0)}
		</span>
	</div>
</div>

<style>
	input[type='range']:focus {
		outline: none;
	}
	input[type='range']::-webkit-slider-runnable-track {
		width: 100%;
		height: 0.4rem;
		cursor: pointer;
		animate: 0.2s;
		box-shadow: 0px 0px 0px #000000;
		background: #505050;

		border-radius: 5px;
		border: 0px solid #000000;
	}
	input[type='range']::-webkit-slider-thumb {
		box-shadow: 0px 0px 0px #000000;
		border: 1px solid #bbbbbb6e;
		height: 1rem;
		width: 1rem;
		border-radius: 50px;
		background: #505050;
		cursor: pointer;
		-webkit-appearance: none;
		margin-top: -5px;
	}
	input[type='range']:focus::-webkit-slider-runnable-track {
		background: #505050;
	}
	input[type='range']::-moz-range-track {
		width: 100%;
		height: 8px;
		cursor: pointer;
		animate: 0.2s;
		box-shadow: 0px 0px 0px #000000;
		background: #505050;

		border-radius: 5px;
		border: 0px solid #000000;
	}
	input[type='range']::-moz-range-thumb {
		box-shadow: 0px 0px 0px #000000;
		border: 0px solid #000000;
		height: 1.25rem;
		width: 1.25rem;
		border-radius: 50px;
		background: #505050;

		cursor: pointer;
	}
	input[type='range']::-ms-track {
		width: 100%;
		height: 8px;
		cursor: pointer;
		animate: 0.2s;
		background: transparent;
		border-color: transparent;
		color: transparent;
	}
	input[type='range']::-ms-fill-lower {
		background: #505050;

		border: 0px solid #000000;
		border-radius: 10px;
		box-shadow: 0px 0px 0px #000000;
	}
	input[type='range']::-ms-fill-upper {
		background: #505050;

		border: 0px solid #000000;
		border-radius: 10px;
		box-shadow: 0px 0px 0px #000000;
	}
	input[type='range']::-ms-thumb {
		margin-top: 1px;
		box-shadow: 0px 0px 0px #000000;
		border: 0px solid #000000;
		height: 1.25rem;
		width: 1.25rem;
		border-radius: 50px;
		background: #505050;
		cursor: pointer;
	}
	input[type='range']:focus::-ms-fill-lower {
		background: #505050;
	}
	input[type='range']:focus::-ms-fill-upper {
		background: #505050;
	}
</style>
