<script>
	export let images;
	export let altText;
	let fade = 'in';
	let url;
	const duration = 15000;

	setInterval(() => {
		console.log(654);
		fade = 'out';
		setTimeout(changeImage, 750);
		setTimeout(() => (fade = 'in'), 751);
	}, duration);

	$: images && (url = images[0]?.url);

	function changeImage() {
		let nextUrl = images[Math.floor(Math.random() * images.length)].url;
		if (url === nextUrl) return changeImage();
		url = nextUrl;
	}
</script>

<div class="wrapper">
	<img src={url} alt={altText} class={fade} />
</div>

<style>
	.wrapper {
		position: relative;
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
