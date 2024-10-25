import type { PageLoad } from './$types';

export interface Image {
	id: string;
	url: string;
	name?: string;
}

export interface Attribute {
	id: string;
	name: string;
	value: string;
}
export interface PriceItem {
	id: string;
	name: string;
	value: string;
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
	year: string;
	color: string;
	model_type: string;
	model_name: string;
	condition: string;
	usage: string;
	location: string;
	date_updated: string;
	metric_type: string;
	metric_value: string;
}

export interface PageData {
	vehicle: Vehicle | null;
	images: Image[];
	attributes: Attribute[];
	pricing: PriceItem[];
}

// You might want to export the load type as well
export type { PageLoad };
