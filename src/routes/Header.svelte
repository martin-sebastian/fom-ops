<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/ms-logo.svg';
	import Sun from 'svelte-radix/Sun.svelte';
	import Moon from 'svelte-radix/Moon.svelte';
	import martin from '$lib/images/martin-sebastian.jpg';
	import * as Avatar from '$lib/components/ui/avatar';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index';
</script>

<header class="border-b border-gray-200 py-1 text-center shadow-sm dark:border-gray-800">
	<div class="corner">
		<a href="/">
			<img class="dark:invert" src={logo} alt="MartinSebastianCo" />
		</a>
	</div>
	<div>
		<nav>
			<ul class="dark:invert">
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a class="dark:invert" href="/">Home</a>
				</li>
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a class="dark:invert" href="/about">About</a>
				</li>
				<li aria-current={$page.url.pathname === '/profile' ? 'page' : undefined}>
					<a class="dark:invert" href="/profile">Profile</a>
				</li>
				<li aria-current={$page.url.pathname === '/inventory' ? 'page' : undefined}>
					<a class="dark:invert" href="/inventory">Inventory</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/parts') ? 'page' : undefined}>
					<a class="dark:invert" href="/parts">Parts</a>
				</li>
				<li aria-current={$page.url.pathname === '/toggle' ? 'page' : undefined}>
					<a class="dark:invert" href="/toggle">Toggle</a>
				</li>
				<li aria-current={$page.url.pathname === '/vehicles' ? 'page' : undefined}>
					<a class="dark:invert" href="/vehicles">Vehicles</a>
				</li>
			</ul>
		</nav>
	</div>
	<div class="theme-toggle flex pr-2">
		<Button class="mx-2" on:click={toggleMode} variant="outline" size="icon">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
		<Avatar.Root>
			<Avatar.Image src={martin} alt="Martin Sebastian" />
			<Avatar.Fallback>MS</Avatar.Fallback>
		</Avatar.Root>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.theme-toggle {
		width: auto;
		height: 3em;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.corner {
		width: 3em;
		height: 3em;
	}
	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: space-evenly;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
