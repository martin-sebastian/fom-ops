<script lang="ts">
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';

	export let id: string;
	export let stock_number: string;
	export let vin: string;
	export let link: string;

	console.log(id, stock_number, vin, link);
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button variant="ghost" builders={[builder]} size="icon" class="relative h-8 w-8 p-0">
			<span class="sr-only">Open menu</span>
			<Ellipsis class="h-4 w-4" />
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.Label>Options</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<DropdownMenu.Item on:click={() => (window.location.href = `/vehicles/${id}`)}>
				EDIT VEHICLE
			</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item on:click={() => (window.location.href = `${link}`)}>
				VIEW ON WEBSITE
			</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item>PRINT HANG TAG</DropdownMenu.Item>
			<DropdownMenu.Item>PRINT KEY TAG</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item on:click={() => navigator.clipboard.writeText(`${stock_number}`)}>
				COPY STOCK #
			</DropdownMenu.Item>
			<DropdownMenu.Item on:click={() => navigator.clipboard.writeText(`${vin}`)}>
				COPY VIN NUMBER
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
