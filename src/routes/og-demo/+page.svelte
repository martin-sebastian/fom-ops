<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/stores';
	import svelte_logo from '$lib/images/svelte-logo.svg';

	function copyToClipboard() {
		navigator.clipboard
			.writeText($page.url.toString())
			.then(() => alert('URL copied to clipboard!'))
			.catch((err) => console.error('Failed to copy: ', err));
	}
</script>

<svelte:head>
	<title>Open Graph Protocol Demo</title>
	<meta name="description" content="About this app" />
	<meta property="og:type" content="website" />
	<meta
		property="og:title"
		content="2024 Kawasaki STX 160X, MSRP: $12,599.00, Your Price: $10,599.00"
	/>
	<meta property="og:url" content="https://www.flatoutmotorcycles.com/inventory/unit-12298319i" />
	<meta
		property="og:image"
		content="https://cdnmedia.endeavorsuite.com/images/organizations/2f6fb18d-0219-47a3-8ba2-4a5123522365/inventory/12298319/JN1500BRFNN-White-KW30286-001.jpg"
	/>
	<meta
		property="og:description"
		content="Unit Price $12,599.00, Kawasaki Kash -$1,000.00, Dealer Discount -$1,000.00, Your Price $10,599.00"
	/>
</svelte:head>

<main class="flex flex-col items-center justify-center">
	<h1 class="my-10 px-4 text-5xl font-normal">Open Graph Protocol</h1>
	<div class="grid grid-flow-col grid-rows-3 gap-4">
		<div
			class="col-span-2 rounded-md border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900/50"
		>
			<h1 class="my-4 px-4 pt-4 text-2xl font-bold">OGP: Open Graph Protocol</h1>
			<p class="text-md my-2 px-4 text-left">
				Open Graph Protocol (OGP) is a standard that allows web developers to control how their
				content is displayed when it is shared on social media platforms. OGP is also used to
				generate awesome looking sms bubbles when shared via iPhone messages.
			</p>
		</div>
		<div
			class="col-span-2 row-span-2 flex flex-col items-center justify-center rounded-md border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900/50"
		>
			<div><img src={svelte_logo} alt="iPhone message bubble" /></div>
		</div>
		<div class="row-span-3">
			<div
				id="og-bubble"
				class="w-full overflow-hidden rounded-md border border-slate-200/50 bg-slate-200 shadow-black hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-gray-100 hover:dark:shadow-xl"
			>
				<a href="https://www.flatoutmotorcycles.com/inventory/unit-12298319i">
					<img
						src="https://cdnmedia.endeavorsuite.com/images/organizations/2f6fb18d-0219-47a3-8ba2-4a5123522365/inventory/12298319/JN1500BRFNN-White-KW30286-001.jpg"
						alt="2024 Kawasaki STX 160X"
					/>
				</a>
				<div
					class="border-t border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900/50"
				>
					<h1 class="my-2 px-4 text-xl font-bold">2024 Kawasaki STX 160X</h1>
					<p class="px-4 text-sm">
						The 2024 Kawasaki STX 160X is a powerful, versatile jet ski designed for thrilling rides
						and effortless cruising. Equipped with a robust 1,498cc, 4-cylinder, 4-stroke engine, it
						boasts a fuel-efficient DFI® system, delivering impressive performance on the water.
						With a rider capacity of up to three people, it provides ample room for friends or
						family. Featuring a sleek Ebony/Lime Green color scheme, the STX 160X includes a 148mm
						jet pump for smooth handling and a spacious 35-gallon storage capacity. Its 20.6-gallon
						fuel tank ensures long-lasting fun, making it an ideal choice for both adventure and
						relaxation on the water.
					</p>

					<Button
						class="mx-4 my-4 border border-slate-800 bg-slate-900 px-5 py-4 text-white hover:bg-red-700"
						style="width: 94%;"
						on:click={() => {
							window.location.href = 'https://www.flatoutmotorcycles.com/inventory/unit-12298319i';
						}}
						>OUR PRICE: $10,599.00
					</Button>
				</div>
			</div>
			<div
				class="rounded-md-xl mt-4 rounded border border-gray-200 bg-gray-100 px-6 py-4 dark:border-gray-800 dark:bg-gray-900"
			>
				<div class="b py-2 text-center text-sm">
					Click the button below to text or post this vehicle, then paste into iMessage or any of
					your favorite social media platforms.

					<Button class="my-4 py-1 text-xs" on:click={copyToClipboard}>
						<img src={svelte_logo} alt="Svelte Logo" class="mr-2 h-4 w-4" />
						SHARETHIS VEHICLE
					</Button>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
	}
</style>
