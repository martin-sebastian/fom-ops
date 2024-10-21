<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ vehicle, images, attributes, pricing } = data);
</script>

<svelte:head>
	<title>{vehicle.title}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if vehicle}
	<h1 class="mb-4 text-2xl font-bold">{vehicle.title}</h1>
	<div class="grid grid-cols-2 gap-4">
		<p><strong>Stock Number:</strong> {vehicle.stock_number}</p>
		<p><strong>VIN:</strong> {vehicle.vin}</p>
		<p><strong>Year:</strong> {vehicle.year}</p>
		<p><strong>Make:</strong> {vehicle.manufacturer}</p>
		<p><strong>Model:</strong> {vehicle.model_name}</p>
		<p><strong>Model Type:</strong> {vehicle.model_type}</p>
		<p><strong>Color:</strong> {vehicle.color}</p>
		<p><strong>Condition:</strong> {vehicle.condition}</p>
		<p><strong>Usage:</strong> {vehicle.usage}</p>
		<p><strong>Price:</strong> ${vehicle.price}</p>
		<p><strong>Price Type:</strong> {vehicle.price_type}</p>
		<p><strong>Location:</strong> {vehicle.location}</p>
		<p><strong>Web ID:</strong> {vehicle.webid}</p>
		<p><strong>Created:</strong> {new Date(vehicle.created).toLocaleString()}</p>
		<p><strong>Updated:</strong> {new Date(vehicle.updated).toLocaleString()}</p>
		<p><strong>Date Updated:</strong> {new Date(vehicle.date_updated).toLocaleString()}</p>
		<p><strong>Metric Type:</strong> {vehicle.metric_type}</p>
		<p><strong>Metric Value:</strong> {vehicle.metric_value}</p>
	</div>

	<h2 class="mb-2 mt-6 text-xl font-bold">Description</h2>
	<div>{@html vehicle.description}</div>

	<h3 class="mb-2 mt-6 text-xl font-bold">Attributes:</h3>
	{#if attributes && attributes.length > 0}
		<ul>
			{#each attributes as attribute}
				<li>{attribute.name}: {attribute.value}</li>
			{/each}
		</ul>
	{:else}
		<p>No attributes available</p>
	{/if}

	<h3 class="mb-2 mt-6 text-xl font-bold">Pricing:</h3>
	{#if pricing && pricing.length > 0}
		<ul>
			{#each pricing as priceItem}
				<li>
					Name: {priceItem.name}, Value: {priceItem.value}
				</li>
			{/each}
		</ul>
	{:else}
		<p>No pricing information available</p>
	{/if}

	<h2 class="mb-2 mt-6 text-xl font-bold">Vehicle Images</h2>
	{#if images && images.length > 0}
		<div class="grid grid-cols-3 gap-4">
			{#each images as image}
				<img src={image.imageurl} alt={image.alt || 'Vehicle image'} class="h-auto w-full" />
			{/each}
		</div>
	{:else}
		<p>No images available</p>
	{/if}
{:else}
	<p>Vehicle not found</p>
{/if}
<a
	href={vehicle.link}
	class="mt-6 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
	>View on Website</a
>
