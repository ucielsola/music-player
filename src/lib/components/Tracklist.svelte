<script>
	import { playTrack } from '$lib/player/actions';
	import { playerStore } from '$lib/player/playerStore';
	import durationFormatter from '$lib/utils/durationFormatter';
</script>

<div class="w-full px-2">
	{#if $playerStore.loaded}
		{#each $playerStore?.album?.tracklist || [] as track, i}
			<button
				class="flex items-center justify-between w-full text-sm cursor-pointer text-stone-300"
				class:!text-stone-50={track.id === $playerStore?.currentTrack?.id}
				on:click={(e) => {
					console.log(e);

					playTrack(track);
				}}
			>
				<span>
					{'0' + (i + 1)} - {track.title}
				</span>
				<span>{durationFormatter(track.duration / 1000)}</span>
			</button>
		{/each}
	{/if}
</div>
