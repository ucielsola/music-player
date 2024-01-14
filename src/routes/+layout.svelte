<script lang="ts">
	import '../app.scss';
	import { fade } from 'svelte/transition';

	import { setLocale, LL } from '$i18n/i18n-svelte';
	import { loadLocale } from '$i18n/i18n-util.sync';

	import { detectLocale } from '$i18n/i18n-util';

	import Loader from '$lib/components/Loader.svelte';

	import { playerStore } from '$lib/player/playerStore';
	import type { LocalizedString } from 'typesafe-i18n';

	const locale = detectLocale();

	loadLocale(locale);
	setLocale(locale);

	let showLoader = true;
	let timeoutId: number;
	let title: string | LocalizedString = $LL.loading();

	const CONTENT_DELAY = 1000;

	$: if ($playerStore.loaded && showLoader) {
		timeoutId = setTimeout(() => {
			showLoader = false;
			title = $playerStore.album?.title || $LL.noTitle();
		}, CONTENT_DELAY);
	}

	$: if (!showLoader && timeoutId) {
		clearTimeout(timeoutId);
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{#if !showLoader}
	<slot />
{:else}
	<div out:fade|global class="flex items-center justify-center h-screen">
		<Loader />
	</div>
{/if}
