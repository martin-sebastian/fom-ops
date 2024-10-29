import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const load = async () => {
	const vehicles = await pb.collection('vehicles').getList(1, 50, {
		sort: '-updated'
	});

	console.log('Fetched vehicles:', vehicles);

	return { vehicles: vehicles.items };
};
