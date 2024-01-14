<script>
	import LL from '$i18n/i18n-svelte';

	import { playTrack } from '$lib/player/actions';
	import { playerStore } from '$lib/player/playerStore';

	$: isPlaying = $playerStore.controls.isPlaying;
</script>

<div class="w-full max-w-[70vh] px-2">
	{#if $playerStore.loaded}
		{#each $playerStore?.album?.tracklist || [] as track, i}
			{@const isCurrentTrack = track.id === $playerStore?.currentTrack?.id}
			<button
				class="flex items-center justify-between w-full cursor-pointer hover:text-stone-100"
				class:text-stone-50={isCurrentTrack}
				class:text-stone-200={!isCurrentTrack && !isPlaying}
				class:text-stone-400={!isCurrentTrack && isPlaying}
				on:click={(e) => {
					playTrack(track);
				}}
			>
				<span>
					{'0' + (i + 1)} - {track.title}
				</span>
				<span>{$LL.duration(track.duration / 1000)}</span>
			</button>
		{/each}
	{/if}
</div>
