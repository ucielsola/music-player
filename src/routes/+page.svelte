<script lang="ts">
	import { fade } from 'svelte/transition';

	import Player from '$lib/components/Player.svelte';

	import keyCodesReducer from '$lib/player/keyCodesReducer';
</script>

<svelte:window on:keypress={keyCodesReducer} />

<main transition:fade|global={{ delay: 400 }} class="h-full">
	<Player />
</main>
