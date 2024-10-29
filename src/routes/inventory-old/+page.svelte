<script lang="ts">
	export let data;
	const { vehicles } = data;
</script>

<svelte:head>
	<title>Vehicle Inventory</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1 class="mb-4 text-2xl font-bold">Inventory</h1>

<ul>
	{#each vehicles as vehicle}
		<li><a href="/inventory/{vehicle.id}">{vehicle.title}</a></li>
	{/each}
</ul>
