<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';

	import { playerStore } from '$lib/player/playerStore';

	import Cover from '$lib/components/Cover.svelte';

	import type { CoverImage } from '$lib/interfaces';

	const INTERVAL_DURATION = 15000;
	let showCover = false;
	let images: CoverImage[] = [];
	let intervalId: number;

	$: currentImage = images[Number(showCover)];

	$: if ($playerStore.loaded && $playerStore.album) {
		images = $playerStore.album.images.sort((a, b) => a.position - b.position);
	}

	intervalId = setInterval(() => {
		showCover = !showCover;
	}, INTERVAL_DURATION);

	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

<div in:fade|global>
	<Cover image={currentImage} />
</div>
