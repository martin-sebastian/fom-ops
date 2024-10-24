<script>
	import { ModeWatcher } from 'mode-watcher';
	import Header from './Header.svelte';

	import Footer from './Footer.svelte';
	import '../app.css';
</script>

<ModeWatcher />

<div class="app bg-gradient-to-t from-slate-50 to-slate-100 dark:from-black dark:to-slate-900">
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
</style>
