<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleClick(action, e) {
		e.target.toggleAttribute('default');
		dispatch(action, {});
	}
</script>

<div class="container">
	<button on:click={(e) => handleClick('shuffle', e)} default>
		<img src="assets/icons/shuffle.png" alt="" />
	</button>
	<button on:click={(e) => handleClick('repeat', e)} default>
		<img src="assets/icons/repeat.png" alt="" />
	</button>
	<button on:click={(e) => handleClick('mute', e)} default>
		<img src="assets/icons/mute.png" alt="" />
	</button>
</div>

<style>
	button {
		border: none;
		background: none;
		outline: none;
		cursor: pointer;
		width: 2rem;
		filter: var(--filter-primary);
	}
	button img {
		pointer-events: none;
	}

	button[default] {
		filter: none;
	}
</style>
