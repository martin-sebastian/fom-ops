<script>
	import { ModeWatcher } from 'mode-watcher';
	import Header from './Header.svelte';

	import Footer from './Footer.svelte';
	import '../app.css';
</script>

<ModeWatcher />

<div class="app gradient">
	<Header></Header>

	<main>
		<slot></slot>
	</main>

	<Footer></Footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 96rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
	.gradient {
		background-image: linear-gradient(
			45deg,
			hsl(221deg 39% 11%) 0%,
			hsl(221deg 39% 11%) 8%,
			hsl(221deg 38% 10%) 17%,
			hsl(222deg 38% 10%) 25%,
			hsl(222deg 38% 9%) 33%,
			hsl(222deg 39% 9%) 42%,
			hsl(222deg 40% 8%) 50%,
			hsl(222deg 43% 7%) 58%,
			hsl(222deg 46% 7%) 67%,
			hsl(222deg 51% 6%) 75%,
			hsl(222deg 56% 6%) 83%,
			hsl(223deg 63% 5%) 92%,
			hsl(224deg 71% 4%) 100%
		);
	}
</style>
