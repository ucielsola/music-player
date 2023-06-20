<script lang="ts">
	import type { CoverImage } from '$lib/interfaces';
	import { playerStore } from '$lib/player/playerStore';

	const PLACEHOLDER_TIMEOUT = 2500;

	export let image: CoverImage;

	let loaded = false;

	$: placeholderBackground = loaded ? undefined : `background-image: url(${image.placeholderUrl});`;

	const hidePlaceholder = () => {
		setTimeout(() => {
			loaded = true;
		}, PLACEHOLDER_TIMEOUT);
	};
</script>

{#if image}
	<div
		class="w-full md:w-[32rem] bg-no-repeat bg-cover"
		class:blur={!loaded}
		style={placeholderBackground}
	>
		<img
			src={image.url}
			alt={$playerStore.album?.title}
			loading="lazy"
			class="opacity-0 transition-opacity duration-1000 ease-in-out"
			class:opacity-100={loaded}
			on:load={hidePlaceholder}
		/>
	</div>
{/if}
