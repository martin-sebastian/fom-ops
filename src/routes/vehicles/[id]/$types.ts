import type { PageLoad } from './$types';

export interface Image {
	id: string;
	url: string;
	alt: string;
}

export interface Attribute {
	id: string;
	name: string;
	value: string;
}

export interface PriceItem {
	id: string;
	name: string;
	value: number; // Assuming this is a number based on usage
}

export interface ProgramItem {
	id: string;
	item_type: string; // Matches your schema
	amount: number; // Matches your schema
}

export interface Vehicle {
	id: string;
	created: string;
	updated: string;
	webid: string;
	title: string;
	link: string;
	description: string;
	price: number;
	price_type: string;
	stock_number: string;
	vin: string;
	manufacturer: string;
	year: number; // updated to number
	color: string;
	model_type: string;
	model_name: string;
	condition: string;
	usage: string;
	location: string;
	date_updated: Date;
	metric_type: string;
	metric_value: string;

	// Optional relations from PocketBase expand feature
	vehicle_images?: Image[];
	vehicle_attributes?: Attribute[];
	vehicle_pricing?: PriceItem[];
	program?: {
		id: string;
		program_name: string;
		expiration_date: Date;
		program_items?: ProgramItem[];
	};
}

export type { PageLoad };
