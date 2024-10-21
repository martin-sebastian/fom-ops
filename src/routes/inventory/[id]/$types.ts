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

export interface ProgramItem {
	id: string;
	program_name: string;
	program_value: number;
}

export interface Program {
	id: string;
	name: string;
	expand?: {
		vehicle_program_items: ProgramItem[];
	};
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
	vehicle_attributes: string[];
	vehicle_program: string;
	expand?: {
		vehicle_images: Image[];
		vehicle_attributes: Attribute[];
		vehicle_program: Program & {
			expand?: {
				vehicle_program_items: ProgramItem[];
			};
		};
	};
}

export interface PageData {
	vehicle: Vehicle | null;
	images: Image[];
	attributes: Attribute[];
	program: Program | null;
	programItems: ProgramItem[];
}

// You might want to export the load type as well
export type { PageLoad };
