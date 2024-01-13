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
	let progress: number = 0;
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
		class="px-1 rounded-lg appearance-none cursor-pointer focus:outline-none"
		class:pointer-events-none={!currentTime && !isPlaying}
		class:cursor-default={!currentTime && !isPlaying}
		on:touchstart={seekStart}
		on:mousedown={seekStart}
		on:touchend={seekEnd}
		on:mouseup={seekEnd}
		min={0}
		max={1}
		step={0.00001}
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

<style lang="scss">
	@use 'src/lib/scss/mixins.scss' as mx;
	// TRACK
	input[type='range']::-webkit-slider-runnable-track {
		@include mx.track;
	}

	input[type='range']::-moz-range-track {
		@include mx.track;
	}
	// THUMB

	input[type='range']::-webkit-slider-thumb {
		@include mx.thumb;
	}

	input[type='range']::-moz-range-thumb {
		@include mx.thumb;
	}

	input[type='range']::-ms-thumb {
		@include mx.thumb;
	}
</style>
