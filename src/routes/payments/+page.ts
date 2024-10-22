import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const load: PageLoad = async () => {
	try {
		const partsResponse = await pb.collection('parts').getList(1, 500, {
			sort: '-updated'
		});

		const parts = partsResponse.items.map((item) => ({
			id: item.id,
			retail_price: item.retail_price,
			material_no: item.material_no,
			part_desc: item.part_desc
		}));
		console.log('parts', parts);
		return { parts };
	} catch (error) {
		console.error('Error fetching parts:', error);
		return { parts: [] };
	}
};
