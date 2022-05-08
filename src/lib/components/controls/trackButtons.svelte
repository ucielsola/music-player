<script>
	import { createEventDispatcher } from 'svelte';
	export let playing;

	const dispatch = createEventDispatcher();

	function handleClick(action) {
		dispatch(action, {});
	}
</script>

{#if playing}
	<button on:click={() => handleClick('pause')} title="Pause">
		<img class="pause" src="assets/icons/pause.png" alt="" />
	</button>
{:else}
	<button on:click={() => handleClick('play')} title="Play">
		<img class="play" src="assets/icons/play.png" alt="" />
	</button>
{/if}

<style>
	button {
		border: none;
		background: none;
		outline: none;
		display: grid;
		place-content: center;
		background-color: var(--primary);
		width: 3rem;
		aspect-ratio: 1/1;
		border-radius: 100%;
		box-shadow: var(--shadow);
		transition: all 0.1s ease-in-out;
	}

	button:hover,
	button:active {
		transform: scale(1.3);
		transition: all 0.1s ease-in-out;
	}

	button img {
		width: 2rem;
	}
	img.play {
		padding-left: 0.25rem;
	}
</style>
