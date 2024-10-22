import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const load: PageLoad = async () => {
	try {
		const paymentsResponse = await pb.collection('payments').getList(1, 10, {
			sort: '-updated'
		});

		const payments = paymentsResponse.items.map((item) => ({
			id: item.id,
			amount: item.amount,
			status: item.status,
			email: item.email
		}));

		return { payments };
	} catch (error) {
		console.error('Error fetching payments:', error);
		return { payments: [] };
	}
};
