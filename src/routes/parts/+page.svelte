<script lang="ts">
	export let data;
	const { parts } = data;
</script>

<svelte:head>
	<title>OEM Parts</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1 class="mb-4 text-2xl font-bold">OEM Parts</h1>

<ul>
	{#each parts as part}
		<li>{part.material_no} {part.part_desc}</li>
	{/each}
</ul>
