<script>
	import { playerStore } from '$lib/player/playerStore';

	import { setEventHandlers } from '$lib/player/actions/setEventHandlers';

	import CoverSlideshow from '$lib/components/CoverSlideshow.svelte';
	import PlayerButtons from '$lib/components/controls/PlayerButtons.svelte';
	import ProgressBar from '$lib/components/controls/ProgressBar.svelte';
	import Tracklist from '$lib/components/Tracklist.svelte';
	import Social from '$lib/components/Social.svelte';

	$: if ($playerStore.howlerInstance) setEventHandlers();
</script>

<div class="flex flex-col items-center justify-between gap-4 h-full">
	<CoverSlideshow />
	<Tracklist />
	<Social />

	<div
		class="sticky bottom-0 flex flex-col items-center justify-center w-full py-4 border-t-2 backdrop-blur-md noisy-bg border-stone-50/40 rounded-t-md"
	>
		<ProgressBar />
		<PlayerButtons />
	</div>
</div>
