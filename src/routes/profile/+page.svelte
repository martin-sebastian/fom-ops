<script lang="ts">
	import PocketBase from 'pocketbase';
	import { onMount } from 'svelte';

	const pb = new PocketBase('http://127.0.0.1:8090');
	let userData: {
		token?: string;
		record?: { email?: string; name?: string; avatar?: string };
	} | null = null;

	async function fetchUserData() {
		try {
			userData = await pb
				.collection('users')
				.authWithPassword('martinsebastianco@gmail.com', 'Nona@42506');
			console.log(userData);
		} catch (error) {
			console.error('Error fetching user data:', error);
		}
	}

	onMount(() => {
		fetchUserData();
	});

	function getAvatarUrl(avatar: string | undefined): string {
		if (!avatar) return '/default-avatar.png'; // Replace with your default avatar path
		return pb.files.getUrl(userData?.record, avatar);
	}
</script>

<div class="flex flex-col items-center justify-center py-10">
	{#if userData}
		{#if userData.record?.avatar}
			<img src={getAvatarUrl(userData.record.avatar)} alt="User avatar" />
		{:else}
			<p>No avatar available</p>
		{/if}
		<h1>{userData.token ? 'Authenticated' : 'Not Authenticated'}</h1>
		<h1>{userData.record?.email ?? 'Loading...'}</h1>
		<h1>{userData.record?.name ?? 'Loading...'}</h1>
	{:else}
		<h1>Loading...</h1>
	{/if}
</div>

<style>
	img {
		width: 100px;
		height: 100px;
	}
</style>
