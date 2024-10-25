<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ vehicle, images, attributes, pricing, programs } = data);

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});

	function formatCurrency(value: number | string): string {
		return formatter.format(Number(value));
	}
</script>

<svelte:head>
	<title>{vehicle?.stock_number} - {vehicle?.title}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<header class="py-5">
	{#if vehicle}
		<h2 class="my-4 text-2xl font-semibold">{vehicle.title}</h2>
		<div class="grid grid-cols-2 gap-4">
			<div
				class="overflow-hidden rounded-lg border border-slate-200 text-center dark:border-slate-800"
			>
				<div
					class="w-screen overflow-x-scroll rounded-lg hover:overflow-x-scroll"
					style="width: 100%; max-width: 3000px; scroll-snap-type: x mandatory;"
				>
					{#if vehicle}
						{#if images && images.length > 0}
							<div class="inline-flex w-full flex-nowrap">
								{#each images as image}
									<img
										src={image?.imageurl}
										alt={image?.alt || 'Vehicle image'}
										class="m-2 h-auto w-11/12 rounded-lg"
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
			</div>
			<div class="rounded-lg border border-slate-200 dark:border-slate-800">
				<h2 class="mt-0 border-b px-2 py-2 text-lg font-bold">Pricing</h2>
				{#if pricing && pricing.length > 0}
					<ul class="divide-y divide-slate-200 dark:divide-slate-800">
						<li class="p-2">
							MSRP: <span class="w-full text-right font-semibold"
								>{formatCurrency(vehicle.price)}</span
							>
						</li>
						{#each pricing as priceItem}
							<li class="border-b border-slate-200 p-2 dark:border-slate-800">
								{priceItem.name}, {formatCurrency(priceItem.value)}
							</li>
						{/each}
					</ul>
				{:else}
					<ul>
						<li class="border-b border-slate-200 py-2 dark:border-slate-800">
							No pricing information available
						</li>
					</ul>
				{/if}

				<ul>
					<li
						class="text-md border-b border-slate-200 px-2 py-0 font-semibold dark:border-slate-800"
					>
						Programs:
					</li>
				</ul>
				{#if programs && programs.length > 0}
					<ul>
						{#each programs as program}
							<li class="border-b border-slate-200 py-2 dark:border-slate-800">
								{program.program_name} - {program.program_description}
							</li>
						{/each}
					</ul>
				{:else}
					<ul>
						<li class="p-2">No programs available</li>
					</ul>
				{/if}
				<ul>
					<li class="p-2 text-lg font-bold">
						Total:
						{formatCurrency(
							pricing.reduce((sum, item) => sum + Number(item.value), 0) +
								(Number(vehicle.price) || 0)
						)}
					</li>
				</ul>
			</div>
		</div>
	{:else}
		<p>Vehicle not found</p>
	{/if}
</header>

<nav class="py-4">
	<div class="border-b border-gray-200 dark:border-gray-700">
		<ul
			class="-mb-px flex flex-wrap text-center text-sm font-medium text-gray-500 dark:text-gray-400"
		>
			<li class="me-2">
				<a
					href="/inventory"
					class="group inline-flex items-center justify-center rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
				>
					<svg
						class="me-2 h-4 w-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
						/>
					</svg>Profile
				</a>
			</li>
			<li class="me-2">
				<a
					href="/inventory"
					class="active group inline-flex items-center justify-center rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600 dark:border-blue-500 dark:text-blue-500"
					aria-current="page"
				>
					<svg
						class="me-2 h-4 w-4 text-blue-600 dark:text-blue-500"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 18 18"
					>
						<path
							d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"
						/>
					</svg>Dashboard
				</a>
			</li>
			<li class="me-2">
				<a
					href="/inventory"
					class="group inline-flex items-center justify-center rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
				>
					<svg
						class="me-2 h-4 w-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z"
						/>
					</svg>Settings
				</a>
			</li>
			<li class="me-2">
				<a
					href="/inventory"
					class="group inline-flex items-center justify-center rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
				>
					<svg
						class="me-2 h-4 w-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 18 20"
					>
						<path
							d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"
						/>
					</svg>Contacts
				</a>
			</li>
		</ul>
	</div>
</nav>

<main class="my-10">
	{#if vehicle}
		<div class="grid grid-cols-2 gap-4">
			<div class="rounded-lg border border-slate-200 dark:border-slate-800">
				<ul>
					<li class="border-b border-slate-200 px-4 py-1 dark:border-slate-800">
						Stock Number: {vehicle?.stock_number}
					</li>
					<li class="border-b border-slate-200 px-4 py-1 dark:border-slate-800">
						VIN: {vehicle?.vin}
					</li>
					<li class="border-b border-slate-200 px-4 py-1 dark:border-slate-800">
						Year: {vehicle?.year}
					</li>
					<li class="border-b border-slate-200 px-4 py-1 dark:border-slate-800">
						Make: {vehicle?.manufacturer}
					</li>
					<li class="border-b border-slate-200 px-4 py-1 dark:border-slate-800">
						Model: {vehicle?.model_name}
					</li>
					<li class="border-b border-slate-200 px-4 py-1 dark:border-slate-800">
						Model Type: {vehicle?.model_type}
					</li>
					<li class="border-b border-slate-200 px-4 py-1 dark:border-slate-800">
						Color: {vehicle?.color}
					</li>
					<li class="border-b border-slate-200 px-4 py-1 dark:border-slate-800">
						Condition: {vehicle?.condition}
					</li>
					<li class="border-b border-slate-200 px-4 py-1 dark:border-slate-800">
						Usage: {vehicle?.usage}
					</li>
					<li class="border-b border-slate-200 px-4 py-1 dark:border-slate-800">
						Price: {formatCurrency(vehicle?.price)}
					</li>
					<li class="border-b border-slate-200 px-4 py-1 dark:border-slate-800">
						Price Type: {vehicle?.price_type}
					</li>
					<li class="border-b border-slate-200 px-4 py-1 dark:border-slate-800">
						Location: {vehicle?.location}
					</li>
					<li class="border-b border-slate-200 px-4 py-1 dark:border-slate-800">
						Web ID: {vehicle?.webid}
					</li>
					<li class="border-b border-slate-200 px-4 py-1 dark:border-slate-800">
						Created: {new Date(vehicle?.created).toLocaleString()}
					</li>
					<li class="border-b border-slate-200 px-4 py-1 dark:border-slate-800">
						Updated: {new Date(vehicle?.updated).toLocaleString()}
					</li>
					<li class="border-b border-slate-200 px-4 py-1 dark:border-slate-800">
						Date Updated: {new Date(vehicle?.date_updated).toLocaleString()}
					</li>
					<li class="border-b border-slate-200 px-4 py-1 dark:border-slate-800">
						Metric Type: {vehicle?.metric_type}
					</li>
					<li class="border-b border-slate-200 px-4 py-1 dark:border-slate-800">
						Metric Value: {vehicle?.metric_value}
					</li>
				</ul>

				<ul class="divide-y divide-slate-200 dark:divide-slate-800">
					<li class="text-md px-4 py-1 font-semibold">Attributes:</li>
				</ul>
				{#if attributes && attributes.length > 0}
					<ul class="mb-4 divide-y divide-slate-200 dark:divide-slate-800">
						{#each attributes as attribute}
							<li class="border-b border-slate-200 px-4 py-1 dark:border-slate-800">
								{attribute.name}: {attribute.value}
							</li>
						{/each}
					</ul>
				{:else}
					<p>No attributes available</p>
				{/if}
			</div>
			<div class="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
				{@html vehicle?.description}
			</div>
		</div>
	{:else}
		<p>Vehicle not found</p>
	{/if}
</main>

<style>
	header {
		width: 64rem;
		margin: 0 auto;
		font-size: 0.8rem;
	}
	main {
		width: 64rem;
		margin: 0 auto;
		font-size: 0.8rem;
	}
	nav {
		width: 64rem;
		margin: 0 auto;
	}
</style>
