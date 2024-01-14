<script>
	import LL from '$i18n/i18n-svelte';
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
		title={$LL.prev()}
	>
		<Icon icon="pepicons-pop:previous-track-circle" class="w-8 h-8" />
	</button>

	<button
		on:click={togglePlay}
		class="text-xl transition-colors duration-75 active:text-stone-500"
		title={$playerStore.controls.isPlaying ? $LL.play() : $LL.play()}
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
		title={$LL.next()}
	>
		<Icon icon="pepicons-pop:next-track-circle" class="w-8 h-8" />
	</button>
</div>

<div class="flex items-center gap-8">
	<button
		on:click={toggleRepeat}
		class="transition-colors duration-75 active:text-stone-500"
		title={`${$LL.repeat()}: ${$playerStore.controls.isRepeat ? $LL.on() : $LL.off()}`}
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
		title={`${$LL.shuffle()}: ${$playerStore.controls.isShuffle ? $LL.on() : $LL.off()}`}
	>
		{#if $playerStore.controls.isShuffle}
			<Icon icon="pepicons-pop:list-circle-off" class="w-6 h-6 text-stone-50" />
		{:else}
			<Icon icon="pepicons-pop:list-circle" class="w-6 h-6 text-stone-400" />
		{/if}
	</button>
</div>

<div class="flex items-center justify-end w-full px-8">
	<a href="https://ucielsola.me" target="_blank" title="UcielSola.me">
		<Icon
			icon="game-icons:wizard-face"
			class="w-8 h-8 md:w-10 md:h-10 text-stone-50 hover:text-[cyan] transition-all duration-150 hover:scale-110"
		/>
	</a>
</div>
