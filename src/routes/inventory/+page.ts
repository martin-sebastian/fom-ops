import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const load: PageLoad = async () => {
	try {
		const vehiclesResponse = await pb.collection('vehicles').getList(1, 500, {
			expand: 'vehicle_images, vehicle_pricing, vehicle_discounts, vehicle_fees',
			sort: '-created'
		});

		// const vehiclePricing = vehiclesResponse.items.map(
		// 	(item) => item.expand?.vehicle_pricing?.value
		// );
		// const totalPricing = pricing.reduce((sum, item) => sum + (item || 0), 0);

		const vehicles = vehiclesResponse.items.map((item) => ({
			id: item.id,
			image: item.expand?.vehicle_images?.[0]?.imageurl || '',
			price: item.price,
			title: item.title,
			stock_number: item.stock_number,
			vin: item.vin,
			link: item.link
		}));

		const vehicle_pricing = vehiclesResponse.items.map((item) => ({
			id: item.id,
			pricing_value: item.expand?.vehicle_pricing?.[0]?.value || 0,
			pricing_name: item.expand?.vehicle_pricing?.[0]?.name || ''
		}));

		// console.log('Processed vehicles:', vehicles, vehicle_pricing);
		// console.log('First vehicle image:', vehicles[0]?.image);

		return { vehicles, vehicle_pricing };
	} catch (error) {
		console.error('Error fetching vehicles:', error);
		return { vehicles: [] };
	}
};
