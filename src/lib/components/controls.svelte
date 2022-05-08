<script>
	import { Play, Pause, playing } from '$lib/playerService.js';
</script>

<div class="container">
	{#if $playing}
		<button on:click={() => Pause()}>Pause</button>
	{:else}
		<button on:click={() => Play()}>Play</button>
	{/if}
</div>

<style>
	.container {
		position: fixed;
		display: grid;
		place-content: center;
		bottom: 0;
		min-height: var(--controls-height);
		width: 100%;
		border-radius: 1.5rem 1.5rem 0 0;
		background-color: var(--contrast);
		border-top: 1px solid hsl(120deg 33% 1% / 77%);
		box-shadow: var(--contrast) 0px 16px 50px 12px;
	}

	button {
		background-color: var(--background);
	}
</style>
