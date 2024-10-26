import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

interface ProgramItem {
	amount: number;
}

export const load: PageLoad = async ({ params }) => {
	const pb = new PocketBase('http://127.0.0.1:8090'); // Adjust this URL as needed
	const { id } = params;
	let finalPrice = 0;

	try {
		const vehicle = await pb.collection('vehicles').getFirstListItem(`id="${id}"`, {
			expand: 'vehicle_images,vehicle_attributes,vehicle_pricing,program.program_items'
		});

		const msrp = vehicle.price;
		const programItems = vehicle.expand?.program?.program_items || [];

		finalPrice = programItems.reduce(
			(total: number, item: ProgramItem) => total + item.amount,
			msrp
		);
		console.log(`Final Price: $${finalPrice}`);

		return {
			vehicle,
			images: vehicle.expand?.vehicle_images || [],
			attributes: vehicle.expand?.vehicle_attributes || [],
			pricing: vehicle.expand?.vehicle_pricing || [],
			programs: vehicle.expand?.program || [],
			programItems: vehicle.expand?.program?.program_items || []
		};
	} catch (err) {
		console.error('Error fetching vehicle:', err);
		throw error(404, 'Vehicle not found');
	}
};
