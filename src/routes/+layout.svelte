<script>
	import '../app.css';
</script>

<div class="bg-stone-900 noisy-bg h-screen">
	<slot />
</div>

<style>
	.noisy-bg {
		background-image: url('assets/img/noise.png');
	}
</style>
