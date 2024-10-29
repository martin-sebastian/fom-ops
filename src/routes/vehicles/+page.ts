import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const load: PageLoad = async () => {
	try {
		const vehiclesResponse = await pb.collection('vehicles').getList(1, 500, {
			expand: 'vehicle_images, vehicle_attributes',
			sort: '-created'
		});

		const vehicles = vehiclesResponse.items.map((item) => ({
			id: item.id,
			image: item.expand?.vehicle_images?.[0]?.imageurl || '',
			attributes: item.expand?.vehicle_attributes || '',
			price: item.price,
			title: item.title,
			stock_number: item.stock_number,
			vin: item.vin,
			link: item.link
		}));

		console.log('Processed vehicles:', vehicles);
		console.log('First vehicle image:', vehicles[0]?.image);

		return { vehicles };
	} catch (error) {
		console.error('Error fetching vehicles:', error);
		return { vehicles: [] };
	}
};
