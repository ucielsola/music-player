<script>
	import Icon from '@iconify/svelte';

	import {
		playNextTrack,
		playPrevTrack,
		togglePlay,
		toggleRepeat,
		toggleShuffle
	} from '$lib/player/actions';
	import { playerStore } from '$lib/player/playerStore';
</script>

<div class="flex items-center gap-4 text-stone-50">
	<button
		on:click={playPrevTrack}
		class="transition-colors duration-75 active:text-stone-500"
		title="Previous Track"
	>
		<Icon icon="pepicons-pop:previous-track-circle" class="w-8 h-8" />
	</button>

	<button
		on:click={togglePlay}
		class="transition-colors duration-75 active:text-stone-500"
		title={$playerStore.controls.isPlaying ? 'Pause' : 'Play'}
	>
		{#if $playerStore.controls.isPlaying}
			<Icon icon="pepicons-pop:pause-circle" class="w-12 h-12" />
		{:else}
			<Icon icon="pepicons-pop:play-circle" class="w-12 h-12" />
		{/if}
	</button>

	<button
		on:click={playNextTrack}
		class="transition-colors duration-75 active:text-stone-500"
		title="Next Track"
	>
		<Icon icon="pepicons-pop:next-track-circle" class="w-8 h-8" />
	</button>
</div>

<div class="flex items-center gap-8">
	<button
		on:click={toggleRepeat}
		class="transition-colors duration-75 active:text-stone-500"
		title={`Repeat: ${!$playerStore.controls.isRepeat ? 'on' : 'off'}`}
	>
		{#if $playerStore.controls.isRepeat}
			<Icon icon="pepicons-pop:repeat-circle-off" class="w-6 h-6 text-stone-50" />
		{:else}
			<Icon icon="pepicons-pop:repeat-circle" class="w-6 h-6 text-stone-400" />
		{/if}
	</button>

	<button
		on:click={toggleShuffle}
		class="transition-colors duration-75 active:text-stone-500"
		title={`Shuffle: ${!$playerStore.controls.isShuffle ? 'on' : 'off'}`}
	>
		{#if $playerStore.controls.isShuffle}
			<Icon icon="pepicons-pop:list-circle-off" class="w-6 h-6 text-stone-50" />
		{:else}
			<Icon icon="pepicons-pop:list-circle" class="w-6 h-6 text-stone-400" />
		{/if}
	</button>
</div>
