<script>
	import { playerState, toggleShuffle, toggleRepeat, toggleMute } from '$lib/playerService.js';
</script>

<div class="container">
	<button on:click={toggleShuffle} state={$playerState.onShuffle ? '' : 'pressed'}>
		<img src="assets/icons/shuffle.png" alt="" />
	</button>
	<button on:click={toggleRepeat} state={$playerState.onRepeat ? '' : 'pressed'}>
		<img src="assets/icons/repeat.png" alt="" />
	</button>
	<button on:click={toggleMute} state={$playerState.isMuted ? '' : 'pressed'}>
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

	@media screen and (min-width: 64rem) {
		img {
			filter: invert(100%) sepia(99%) saturate(0%) hue-rotate(345deg) brightness(105%)
				contrast(100%);
		}
	}
</style>
