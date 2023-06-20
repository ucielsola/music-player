<script lang="ts">
	import { playerStore } from '$lib/player/playerStore';
	import Cover from '$lib/components/Cover.svelte';
	import type { Album, CoverImage } from '$lib/interfaces';

	const INTERVAL_DURATION = 15000;
	let showCover = false;
	let images: CoverImage[] = [];

	$: currentImage = images[Number(showCover)];

	$: if ($playerStore.loaded && $playerStore.album) {
		images = createImagesArray($playerStore.album);
	}

	const createImagesArray = (album?: Album): CoverImage[] => {
		const images: CoverImage[] = [];

		if (album) {
			const cover: CoverImage = {
				url: album.cover,
				placeholderUrl: album.coverPlaceholder
			};

			const back: CoverImage = {
				url: album.back,
				placeholderUrl: album.backPlaceholder
			};

			images.push(cover, back);
		}

		return images;
	};

	setInterval(() => {
		showCover = !showCover;
	}, INTERVAL_DURATION);
</script>

<Cover image={currentImage} />
