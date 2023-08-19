<script lang="ts">
	import { playerStore } from '$lib/player/playerStore';
	import Icon from '@iconify/svelte';
</script>

<div class="flex items-center gap-6">
	{#each $playerStore?.album?.platformLinks || [] as link}
		<a
			href={link.url}
			title={`${$playerStore.album?.title} - ${link.label}`}
			target="_blank"
			rel="noreferrer"
			class="flex items-center gap-1.5 transition-opacity duration-75 active:opacity-70"
			class:spotify={link.name === 'spotify'}
			class:apple={link.name === 'apple-music'}
		>
			<Icon icon={`fontisto:${link.name}`} class="w-4 h-4" />

			<span>
				{link.label}
			</span>
		</a>
	{/each}
</div>

<style global>
	.spotify {
		color: #1db954;
	}

	.apple {
		color: #f94c57;
	}
</style>
