<script>
	import { onMount } from 'svelte';
	import Counter from './Counter.svelte';

	let visible = false;

	onMount(() => {
		// Set visible to true after a short delay (e.g., 100ms)
		setTimeout(() => {
			visible = true;
		}, 100);
	});

	function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#if visible}
		<h1
			class="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-7xl font-bold text-transparent"
			transition:typewriter
		>
			Martin Sebastian. Full Stack Web Developer, Indianapolis.
		</h1>
	{/if}

	<div class="card invisible my-5 rounded-lg bg-muted py-5">
		<Counter />
	</div>
</section>

<style>
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		flex: 0.6;
	}
</style>
