<script>
	export let images;
	export let altText;
	let fade = 'in';
	let url;
	let index = 0;
	const duration = 15000;

	$: images && (url = images[index]);

	setInterval(() => {
		fade = 'out';
		setTimeout(swapImage, 750);
		setTimeout(() => (fade = 'in'), 751);
	}, duration);

	function swapImage() {
		if (index === images.length - 1) return (index = 0);
		index++;
	}
</script>

<div class="wrapper">
	<img src={url} alt={altText} class={fade} />
</div>

<style>
	.wrapper {
		position: relative;
		padding: var(--padding);
		max-width: 600px;
	}

	.out {
		opacity: 0;
		transition: opacity 0.7s ease-in-out;
	}

	.in {
		opacity: 1;
		transition: opacity 0.7s ease-in-out;
	}
</style>
