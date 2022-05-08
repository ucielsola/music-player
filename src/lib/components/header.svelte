<script>
	import CoverSlider from './coverSlider.svelte';

	export let cover;
	export let back;
	export let artist;
	export let title;
</script>

<div class="container">
	<CoverSlider images={[cover?.url, back?.url]} altText="{artist} - {title}" />
</div>

<style>
	.container {
		position: relative;
	}
</style>
