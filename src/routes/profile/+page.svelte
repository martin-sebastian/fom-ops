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
		return pb.files.getUrl(userData?.record ?? {}, avatar);
	}
</script>

<svelte:head>
	<title>Profile</title>
	<meta name="description" content="Svelte demo app" />

	<meta property="og:type" content="website" />
	<meta
		property="og:title"
		content="Martin Sebastian, Full Stack Web Developer, Indianapolis, IN, MartinSebastian.io"
	/>
	<meta property="og:url" content="http://localhost:5173/profile" />
	<meta
		property="og:image"
		content="http://127.0.0.1:8090/api/files/_pb_users_auth_/40hlkfmfc1ytral/martin_A1IHHh7lR5.png"
	/>
	<meta
		property="og:description"
		content="Martin Sebastian, Full Stack Web Developer, Indianapolis, IN"
	/>
</svelte:head>

<div class="my-10 flex w-full flex-col items-center justify-center">
	{#if userData}
		{#if userData.record?.avatar}
			<img
				class="my-5 rounded-full"
				src={getAvatarUrl(userData.record.avatar)}
				alt="Martin Sebastian"
			/>
		{:else}
			<p>No avatar available</p>
		{/if}
		<h1>{userData.token ? 'Authenticated' : 'Not Authenticated'}</h1>

		<ul class="w-96 divide-y rounded-lg border border-gray-200 dark:border-gray-800">
			<li class="p-4 text-center text-sm">
				<h1 class="text-2xl font-bold">{userData.record?.name ?? 'Loading...'}</h1>
			</li>
			<li class="p-4 text-sm">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-phone-call float-start mr-2"
					><path
						d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
					/><path d="M14.05 2a9 9 0 0 1 8 7.94" /><path d="M14.05 6A5 5 0 0 1 18 10" /></svg
				>
				(813) 546-7027
			</li>
			<li class="p-4 text-sm">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-mail float-start mr-2"
					><rect width="20" height="16" x="2" y="4" rx="2" /><path
						d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
					/></svg
				>
				{userData.record?.email}
			</li>
			<li class="p-4 text-sm">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-mail float-start mr-2"
					><rect width="20" height="16" x="2" y="4" rx="2" /><path
						d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
					/></svg
				> @martinsebastianco
			</li>
			<li class="p-4 text-sm">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-mail float-start mr-2"
					><rect width="20" height="16" x="2" y="4" rx="2" /><path
						d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
					/></svg
				> @martinsebastianco
			</li>
			<li class="p-4 text-sm">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-mail float-start mr-2"
					><rect width="20" height="16" x="2" y="4" rx="2" /><path
						d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
					/></svg
				>
				{userData.record?.name}
			</li>
		</ul>
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
