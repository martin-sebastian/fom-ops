<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ vehicle, images, attributes, pricing, programs, programItems } = data);
</script>

<svelte:head>
	<title>{vehicle?.title}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<article class="my-10 w-full">
	<h1 class="mb-4 text-2xl font-bold">{vehicle?.title}</h1>
	<div
		class="w-screen overflow-x-auto rounded-lg hover:overflow-x-scroll"
		style="width: 100%; max-width: 3000px; scroll-snap-type: x mandatory;"
	>
		{#if vehicle}
			{#if images && images.length > 0}
				<div class="inline-flex w-full flex-nowrap">
					{#each images as image}
						<img
							src={image?.imageurl}
							alt={image?.alt ?? 'Vehicle image'}
							class="m-2 h-auto w-96 rounded-lg"
						/>
					{/each}
				</div>
			{:else}
				<p>No images available</p>
			{/if}
		{:else}
			<p>Vehicle not found</p>
		{/if}
	</div>
</article>

<main>
	{#if vehicle}
		<div class="grid grid-cols-2 gap-4">
			<div class="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
				<h2 class="font-bold">{vehicle.title}</h2>
				<h2 class="font-bold">{vehicle.title}</h2>
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
				<h3 class="text-xl font-bold">Attributes:</h3>
				{#if attributes && attributes.length > 0}
					<ul>
						{#each attributes as attribute}
							<li>{attribute.name}: {attribute.value}</li>
						{/each}
					</ul>
				{:else}
					<p>No attributes available</p>
				{/if}
			</div>
			<div class="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
				{@html vehicle?.description}
			</div>
			<div class="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
				<h2 class="text-xl font-bold">Pricing:</h2>
				{#if pricing && pricing.length > 0}
					<ul>
						{#each pricing as priceItem}
							<li>
								{priceItem.name}, {priceItem.value}
							</li>
						{/each}
					</ul>
				{:else}
					<p>No pricing information available</p>
				{/if}
				<h2 class="text-xl font-bold">Program Items:</h2>
				{#if programItems && programItems.length > 0}
					<ul>
						{#each programItems as item}
							<li>
								{item.item_type}, {item.item_name}, {item.amount}
							</li>
						{/each}
					</ul>
				{:else}
					<p>No program items available</p>
				{/if}
			</div>
			<div class="flex justify-center rounded-lg border border-slate-200 p-4 dark:border-slate-800">
				<a
					href={vehicle?.link}
					class="my-6 inline-block h-10 rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
					>View on Website</a
				>
			</div>
		</div>
	{:else}
		<p>Vehicle not found</p>
	{/if}
</main>

<style>
	main {
		width: 64rem;
		margin: 0 auto;
	}
</style>
