<script lang="ts">
	import { playerStore } from '$lib/player/playerStore';
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-wrap items-center gap-6 px-6 justify-evenly">
	{#each $playerStore?.album?.links || [] as link}
		<a
			href={link.url}
			title={`${$playerStore.album?.title} - ${link.label}`}
			target="_blank"
			rel="noreferrer"
			class="flex items-center gap-1.5 transition-opacity duration-75 active:opacity-70 {link.name}"
		>
			<Icon icon={`simple-icons:${link.name}`} class="w-4 h-4" />

			<span>
				{link.label}
			</span>
		</a>
	{/each}
</div>

<style global>
	.amazon,
	.tidal {
		color: #fff;
	}

	.youtube {
		color: red;
	}
	.spotify {
		color: #1db954;
	}

	.applemusic {
		color: #f94c57;
	}

	.instagram {
		color: rgb(211, 0, 197);
	}
</style>
