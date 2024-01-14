<script lang="ts">
	import type { Meta } from '$lib/interfaces';

	export let metaSet: Meta[] = [];
</script>

{#each metaSet as meta}
	<meta name={meta.name} content={meta.content} property={meta.property} />
{/each}
