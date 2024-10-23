import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const load = async () => {
	// fetch a paginated records list
	const parts = await pb.collection('parts').getList(1, 50, {
		filter: 'created >= "2022-01-01 00:00:00"'
	});

	return { parts: parts.items };
};
