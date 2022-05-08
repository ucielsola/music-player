<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let onShuffle;
	export let onRepeat;
	export let onMute;
</script>

<div class="container">
	<button
		on:click={() => dispatch('sendClick', { action: 'shuffle' })}
		state={onShuffle ? '' : 'pressed'}
	>
		<img src="assets/icons/shuffle.png" alt="" />
	</button>
	<button
		on:click={() => dispatch('sendClick', { action: 'repeat' })}
		state={onRepeat ? '' : 'pressed'}
	>
		<img src="assets/icons/repeat.png" alt="" />
	</button>
	<button
		on:click={() => dispatch('sendClick', { action: 'mute' })}
		state={onMute ? '' : 'pressed'}
	>
		<img src="assets/icons/mute.png" alt="" />
	</button>
</div>

<style>
	button {
		border: none;
		background: none;
		outline: none;
		cursor: pointer;
		width: 2rem;
		filter: var(--filter-primary);
	}
	button img {
		/* pointer-events: none; */
	}

	button[state='pressed'] {
		filter: none;
	}
</style>
