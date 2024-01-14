<script>
	import LL from '$i18n/i18n-svelte';

	import { playTrack } from '$lib/player/actions';
	import { playerStore } from '$lib/player/playerStore';
</script>

<div class="w-full max-w-[70vh] px-2">
	{#if $playerStore.loaded}
		{#each $playerStore?.album?.tracklist || [] as track, i}
			<button
				class="flex items-center justify-between w-full cursor-pointer text-stone-300 hover:text-stone-100"
				class:!text-stone-50={track.id === $playerStore?.currentTrack?.id}
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
