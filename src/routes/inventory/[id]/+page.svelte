<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ vehicle, images, attributes, program, programItems } = data);
</script>

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

	<h2 class="mb-2 mt-6 text-xl font-bold">Vehicle Attributes</h2>
	<p>Vehicle attributes IDs: {vehicle.vehicle_attributes.join(', ')}</p>

	<h2 class="mb-2 mt-6 text-xl font-bold">Vehicle Program</h2>
	<p><strong>Vehicle Program ID:</strong> {vehicle.vehicle_program}</p>
	{#if program}
		<p><strong>Program Name:</strong> {program.name}</p>
		<p><strong>Program ID:</strong> {program.id}</p>

		<h3 class="mb-2 mt-4 text-lg font-semibold">Program Items:</h3>
		{#if programItems.length > 0}
			<ul>
				{#each programItems as item}
					<li>{item.program_name}: {item.program_value}</li>
				{/each}
			</ul>
		{:else}
			<p>No program items available</p>
		{/if}

		<details>
			<summary>Debug: Raw Program Data</summary>
			<pre>{JSON.stringify(program, null, 2)}</pre>
		</details>
		<details>
			<summary>Debug: Raw Program Items</summary>
			<pre>{JSON.stringify(programItems, null, 2)}</pre>
		</details>
	{:else}
		<p>No program information available</p>
	{/if}

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
{:else}
	<p>Vehicle not found</p>
{/if}
<a
	href={vehicle.link}
	class="mt-6 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
	>View on Website</a
>
