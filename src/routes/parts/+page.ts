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
			part_number: item.material_no,
			part_desc: item.part_desc,
			retail_price: item.retail_price,
			dealer_price: item.dealer_price,
			distributor_price: item.distributor_price,
			superseded_part: item.superseded_part,
			superseded_by: item.superseded_by,
			last_yr_util: item.last_yr_util,
			in_package_qty: item.in_package_qty
		}));
		console.log('parts', parts);
		return { parts };
	} catch (error) {
		console.error('Error fetching parts:', error);
		return { parts: [] };
	}
};
