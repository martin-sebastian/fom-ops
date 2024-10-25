<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/stores';

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
		<div class="row-span-3">
			<div
				id="og-bubble"
				class="max-w-xl overflow-hidden rounded-md border border-slate-200/50 bg-slate-200 shadow-black hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-gray-100 hover:dark:shadow-xl"
			>
				<a href="https://www.flatoutmotorcycles.com/inventory/unit-12298319i">
					<img
						src="https://cdnmedia.endeavorsuite.com/images/organizations/2f6fb18d-0219-47a3-8ba2-4a5123522365/inventory/12298319/JN1500BRFNN-White-KW30286-001.jpg"
						alt="2024 Kawasaki STX 160X"
					/>
				</a>
				<div class="bg-slate-200 dark:bg-slate-900/50">
					<h1 class="my-2 px-4 text-2xl font-black">2024 Kawasaki STX 160X</h1>
					<p class="px-4 text-sm">
						Engine Type: 4-stroke, DOHC, four valves per cylinder, 4-cylinder inline Displacement:
						1,498cc Bore and Stroke: 83.0 x 69.2mm Cooling: Inducted water Compression Ratio: 10.6:1
						Fuel System: DFI® with 60mm throttle body Ignition: TCBI with digital advance Starting:
						Electric Dry Weight: Curb Weight: 864.4 lb. Fuel Capacity: 20.6 gal. Height: 45.4 in.
						Length: 124.1 in. Width: 46.5 in. Oil Capacity: 5.3 qt. Rider Capacity: 3 Storage
						Capacity: 35.0 gal. Impeller: 3-blade, oval-edge stainless steel Pump: 148mm jet pump,
						axial-flow, single stage Color: Ebony/Lime Green. MSRP $12,599.00, OUR PRICE $10,599.00
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
				class="rounded-md-xl mt-4 flex justify-center border border-gray-200 bg-gray-100 px-6 py-4 dark:border-gray-800 dark:bg-gray-900"
			>
				<div class="py-2">{$page.url}</div>
				<Button class="mx-2 py-1 text-xs" on:click={copyToClipboard}>Copy URL</Button>
			</div>
		</div>
		<div
			class="col-span-2 rounded-md border border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-900/50"
		>
			<h1 class="my-2 px-4 text-2xl font-black">Open Graph Protocol</h1>
		</div>
		<div
			class="col-span-2 row-span-2 rounded-md border border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-900/50"
		>
			<p class="text-center text-sm">
				Open Graph Protocol (OGP) is a standard that allows web developers to control how their
				content is displayed when it is shared on social media platforms. OGP is also used to
				generate awesome looking sms bubbles when shared via iPhone messages.
			</p>
		</div>
	</div>
</main>
