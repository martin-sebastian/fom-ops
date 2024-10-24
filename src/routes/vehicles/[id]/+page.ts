import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

export const load: PageLoad = async ({ params }) => {
	const pb = new PocketBase('http://127.0.0.1:8090'); // Adjust this URL as needed
	const { id } = params;

	try {
		const vehicle = await pb.collection('vehicles').getOne(id, {
			expand: 'vehicle_images,vehicle_attributes,vehicle_pricing,vehicle_program'
		});
		// console.log(
		// 	'vehicle_program_items ->',
		// 	JSON.stringify(vehicle.expand?.vehicle_program_items, null, 2)
		// );
		console.log('Fetched vehicle ->', JSON.stringify(vehicle, null, 2));
		console.log('Fetched program ->', JSON.stringify(vehicle.expand?.vehicle_program, null, 2));

		// const programItems = JSON.stringify(
		// 	vehicle.expand?.vehicle_program.vehicle_program_items,
		// 	null,
		// 	2
		// );
		// console.log('programItems ->', programItems);
		return {
			vehicle,
			images: vehicle.expand?.vehicle_images || [],
			attributes: vehicle.expand?.vehicle_attributes || [],
			pricing: vehicle.expand?.vehicle_pricing || [],
			program: vehicle.expand?.vehicle_program || [],
			program_items: vehicle.expand?.vehicle_program_items || []
		};
	} catch (err) {
		console.error('Error fetching vehicle:', err);
		throw error(404, 'Vehicle not found');
	}
};
