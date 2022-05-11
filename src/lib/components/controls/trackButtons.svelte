<script>
	import { playerState, Play, Pause, Next, Previous } from '$lib/playerService.js';
</script>

<div class="container">
	<button class="small" on:click={Previous} title="Previous">
		<img class="prev" src="assets/icons/previous.png" alt="" />
	</button>
	{#if $playerState.isPlaying}
		<button class="play-pause" on:click={Pause} title="Pause">
			<img class="pause" src="assets/icons/pause.png" alt="" />
		</button>
	{:else}
		<button class="play-pause" on:click={() => Play()} title="Play">
			<img class="play" src="assets/icons/play.png" alt="" />
		</button>
	{/if}
	<button class="small" on:click={Next} title="Next">
		<img class="next" src="assets/icons/next.png" alt="" />
	</button>
</div>

<style>
	button {
		border: none;
		background: none;
		outline: none;
		cursor: pointer;
	}

	.container {
		display: flex;
	}

	.small {
		width: 2rem;
	}
	.play-pause {
		display: grid;
		place-content: center;
		background-color: var(--primary);
		width: 2.5rem;
		aspect-ratio: 1/1;
		border-radius: 100%;
		box-shadow: var(--shadow);
		transition: all 0.1s ease-in-out;
	}

	.play-pause:active,
	.play-pause:focus {
		transform: scale(0.9);
		transition: all 0.1s ease-in-out;
	}

	.play-pause img {
		width: 2rem;
	}
	img.play {
		padding-left: 0.15rem;
	}
</style>
