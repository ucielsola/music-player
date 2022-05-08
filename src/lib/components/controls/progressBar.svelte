<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let value;
	export let time;
	export let length;
	export let playing;
	let isSeeking = false;
	let seekValue;

	const formatTime = (ms = 0) => {
		let minutes = Math.floor(ms / 60000);
		let seconds = ((ms % 60000) / 1000).toFixed(0);
		return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
	};

	const seekStart = () => {
		isSeeking = true;
	};

	const seeking = (e) => {
		seekValue = e.target.value * length;
	};

	const seekEnd = (e) => {
		dispatch('updateTime', { value: e.target.value });

		setTimeout(() => {
			//debouncing to avoid bar thumb jumping
			isSeeking = false;
		}, 10);
	};
</script>

<div class="container">
	<input
		type="range"
		id="slider"
		on:touchstart={(e) => seekStart(e)}
		on:touchmove={(e) => seeking(e)}
		on:touchend={(e) => seekEnd(e)}
		min={0}
		max={1}
		step={0.001}
		value={isSeeking ? seekValue : value}
		disabled={!time && !playing}
	/>
	<div class="times">
		<span>{formatTime(isSeeking ? seekValue : time)}</span>
		<span>-{formatTime(length - time)}</span>
	</div>
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.times {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 90%;
		margin-top: -0.5rem;
	}

	.times span {
		font-size: 0.8rem;
		color: #000000;
	}

	input:disabled {
		pointer-events: none;
	}
	input[type='range'] {
		height: 30px;
		-webkit-appearance: none;
		width: 90%;
		background: none;
	}
	input[type='range']:focus {
		outline: none;
	}
	input[type='range']::-webkit-slider-runnable-track {
		width: 100%;
		height: 0.4rem;
		cursor: pointer;
		animate: 0.2s;
		box-shadow: 0px 0px 0px #000000;
		background: var(--primary);
		border-radius: 5px;
		border: 0px solid #000000;
	}
	input[type='range']::-webkit-slider-thumb {
		box-shadow: 0px 0px 0px #000000;
		border: 1px solid #ffffff6e;
		height: 1rem;
		width: 1rem;
		border-radius: 50px;
		background: var(--primary);
		cursor: pointer;
		-webkit-appearance: none;
		margin-top: -5px;
	}
	input[type='range']:focus::-webkit-slider-runnable-track {
		background: var(--primary);
	}
	input[type='range']::-moz-range-track {
		width: 100%;
		height: 8px;
		cursor: pointer;
		animate: 0.2s;
		box-shadow: 0px 0px 0px #000000;
		background: var(--primary);
		border-radius: 5px;
		border: 0px solid #000000;
	}
	input[type='range']::-moz-range-thumb {
		box-shadow: 0px 0px 0px #000000;
		border: 0px solid #000000;
		height: 1.25rem;
		width: 1.25rem;
		border-radius: 50px;
		background: var(--primary);
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
		background: var(--primary);
		border: 0px solid #000000;
		border-radius: 10px;
		box-shadow: 0px 0px 0px #000000;
	}
	input[type='range']::-ms-fill-upper {
		background: var(--primary);
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
		background: var(--primary);
		cursor: pointer;
	}
	input[type='range']:focus::-ms-fill-lower {
		background: var(--primary);
	}
	input[type='range']:focus::-ms-fill-upper {
		background: var(--primary);
	}
</style>
