<script>
	export let data;
	$: ({ vehicle, images } = data);
</script>

<article class="my-10 w-full">
	<h1 class="mb-4 font-bold">{vehicle?.title}</h1>
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
