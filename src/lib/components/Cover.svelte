<script lang="ts">
	import type { CoverImage } from '$lib/interfaces';
	import { playerStore } from '$lib/player/playerStore';

	const PLACEHOLDER_TIMEOUT = 2500;

	export let image: CoverImage;

	let loaded = false;

	const hidePlaceholder = () => {
		setTimeout(() => {
			loaded = true;
		}, PLACEHOLDER_TIMEOUT);
	};
</script>

{#if image}
	<div class="w-full max-w-[70vh] bg-no-repeat bg-cover" class:blur={!loaded}>
		<img
			src={image.url}
			alt={$playerStore.album?.title}
			loading="lazy"
			class="transition-opacity duration-1000 ease-in-out opacity-0"
			class:opacity-100={loaded}
			on:load={hidePlaceholder}
		/>
	</div>
{/if}
