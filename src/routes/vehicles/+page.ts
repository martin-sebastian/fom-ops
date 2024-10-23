import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const load: PageLoad = async () => {
	try {
		const vehiclesResponse = await pb.collection('vehicles').getList(1, 500, {
			sort: '-created'
		});

		const vehicles = vehiclesResponse.items.map((item) => ({
			id: item.id,
			price: item.price,
			title: item.title,
			stock_number: item.stock_number,
			vin: item.vin,
			link: item.link
		}));
		console.log('vehicles', vehicles);
		return { vehicles };
	} catch (error) {
		console.error('Error fetching vehicles:', error);
		return { vehicles: [] };
	}
};
