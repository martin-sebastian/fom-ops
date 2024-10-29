<script lang="ts">
	import CaretSort from 'svelte-radix/CaretSort.svelte';
	import ChevronDown from 'svelte-radix/ChevronDown.svelte';
	import martin from '$lib/images/martin-sebastian.jpg';
	import { Render, Subscribe, createRender, createTable } from 'svelte-headless-table';
	import {
		addHiddenColumns,
		addPagination,
		addSelectedRows,
		addSortBy,
		addTableFilter
	} from 'svelte-headless-table/plugins';
	import { readable } from 'svelte/store';
	import Actions from './data-table-actions.svelte';
	import DataTableCheckbox from './data-table-checkbox.svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { cn } from '$lib/utils.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { page } from '$app/stores';

	type Vehicle = {
		id: string;
		price: number;
		title: string;
		stock_number: string;
		vin: string; // Make sure this exists
		link: string; // Make sure this exists
		image: string; // Add this property
		pricing: number;
		cost: number;
		fees: number;
		discounts: number;
	};

	const data: Vehicle[] = $page.data.vehicles;

	const table = createTable(readable(data), {
		sort: addSortBy({ disableMultiSort: true }),
		page: addPagination(),
		filter: addTableFilter({
			fn: ({ filterValue, value }) => value.includes(filterValue)
		}),
		select: addSelectedRows(),
		hide: addHiddenColumns()
	});

	const columns = table.createColumns([
		table.column({
			header: (_, { pluginStates }) => {
				const { allPageRowsSelected } = pluginStates.select;
				return createRender(DataTableCheckbox, {
					checked: allPageRowsSelected
				});
			},
			accessor: 'id',
			cell: ({ row }, { pluginStates }) => {
				const { getRowState } = pluginStates.select;
				const { isSelected } = getRowState(row);

				return createRender(DataTableCheckbox, {
					checked: isSelected
				});
			},
			plugins: {
				sort: {
					disable: true
				},
				filter: {
					exclude: true
				}
			}
		}),

		table.column({
			header: 'Image',
			accessor: 'image',
			plugins: {
				sort: { disable: true },
				filter: { exclude: true }
			}
		}),

		table.column({
			header: 'Stock Number',
			accessor: 'stock_number',
			plugins: {
				sort: { disable: false },
				filter: {
					getFilterValue(value) {
						return value.toLowerCase() ?? '';
					}
				}
			}
		}),

		table.column({
			header: 'Title',
			accessor: 'title',
			cell: ({ value }) => value.toLowerCase(),
			plugins: {
				filter: {
					getFilterValue(value) {
						return value.toLowerCase() ?? '';
					}
				}
			}
		}),

		table.column({
			header: 'VIN',
			accessor: 'vin',
			plugins: {
				sort: {
					disable: true
				},
				filter: {
					exclude: true
				}
			}
		}),

		table.column({
			header: 'Price',
			accessor: 'price',
			cell: ({ value }) => {
				const formatted = new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD'
				}).format(value);
				return formatted;
			},
			plugins: {
				sort: {
					disable: true
				},
				filter: {
					exclude: true
				}
			}
		}),

		table.column({
			header: 'Cost',
			accessor: 'cost',
			cell: ({ value }) => {
				const formatted = new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD'
				}).format(value);
				return formatted;
			},
			plugins: {
				sort: {
					disable: true
				},
				filter: {
					exclude: true
				}
			}
		}),

		table.column({
			header: 'Rebates',
			accessor: 'pricing',
			cell: ({ value }) => {
				const formatted = new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD'
				}).format(value);
				return formatted;
			},
			plugins: {
				sort: {
					disable: true
				},
				filter: {
					exclude: true
				}
			}
		}),

		table.column({
			header: 'Discounts',
			accessor: 'discounts',
			plugins: {
				sort: {
					disable: true
				},
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			header: 'Fees',
			accessor: 'fees',
			plugins: {
				sort: {
					disable: true
				},
				filter: {
					exclude: true
				}
			}
		}),

		table.column({
			header: '',
			accessor: (row) => ({
				id: row.id,
				stock_number: row.stock_number,
				vin: row.vin || 'N/A',
				link: row.link || '#',
				image: row.image || '', // Add this line
				fees: row.fees || '0',
				discounts: row.pricing || 0
			}),
			cell: (item) => {
				return createRender(Actions, {
					id: item.value.id,
					stock_number: item.value.stock_number,
					vin: item.value.vin,
					link: item.value.link,
					image: item.value.image,
					fees: item.value.fees,
					discounts: item.value.discounts
				});
			},
			plugins: {
				sort: {
					disable: true
				}
			}
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, flatColumns, pluginStates, rows } =
		table.createViewModel(columns);

	const { sortKeys } = pluginStates.sort;

	const { hiddenColumnIds } = pluginStates.hide;
	const ids = flatColumns.map((c) => c.id);
	let hideForId = Object.fromEntries(ids.map((id) => [id, true]));

	$: $hiddenColumnIds = Object.entries(hideForId)
		.filter(([, hide]) => !hide)
		.map(([id]) => id);

	const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
	const { filterValue } = pluginStates.filter;

	const { selectedDataIds } = pluginStates.select;

	const hideableCols = ['title', 'image', 'stock_number', 'price', 'cost', 'fees', 'discounts'];
</script>

<div class="w-full">
	<div class="mb-4 flex items-center gap-4">
		<Input
			class="max-w-sm"
			placeholder="Filter by title..."
			type="text"
			bind:value={$filterValue}
		/>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button variant="outline" class="ml-auto" builders={[builder]}>
					Columns <ChevronDown class="ml-2 h-4 w-4" />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				{#each flatColumns as col}
					{#if hideableCols.includes(col.id)}
						<DropdownMenu.CheckboxItem bind:checked={hideForId[col.id]}>
							{col.header}
						</DropdownMenu.CheckboxItem>
					{/if}
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
	<div class="rounded-md border">
		<Table.Root {...$tableAttrs}>
			<Table.Header>
				{#each $headerRows as headerRow}
					<Subscribe rowAttrs={headerRow.attrs()}>
						<Table.Row>
							{#each headerRow.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
									<Table.Head {...attrs} class={cn('[&:has([role=checkbox])]:pl-3')}>
										{#if cell.id === 'fees'}
											<div class="text-left">
												<Render of={cell.render()} />
											</div>
										{:else if cell.id === 'title' || cell.id === 'price'}
											<Button
												class="m-0 px-0 py-1 text-start"
												variant="ghost"
												on:click={props.sort.toggle}
											>
												<Render of={cell.render()} />
												<CaretSort class={'ml-1 h-4 w-4'} />
											</Button>
										{:else}
											<Render of={cell.render()} />
										{/if}
									</Table.Head>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Header>
			<Table.Body {...$tableBodyAttrs}>
				{#each $pageRows as row (row.id)}
					<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
						<Table.Row {...rowAttrs} data-state={$selectedDataIds[row.id] && 'selected'}>
							{#each row.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs>
									<Table.Cell class="[&:has([role=checkbox])]:pl-3" {...attrs}>
										{#if cell.id === 'price'}
											<div class="rounded-sm bg-gray-800/100 p-2 text-center font-medium">
												<Render of={cell.render()} />
											</div>
										{:else if cell.id === 'image'}
											<img src={cell.value} alt="Vehicle" class="w-22 h-16 rounded object-cover" />
										{:else if cell.id === 'title'}
											<button
												type="button"
												on:click={() => (window.location.href = `/inventory/${data[row.id].id}`)}
											>
												<div class="font-large uppercase">
													<Render of={cell.render()} />
												</div>
											</button>
										{:else}
											<Render of={cell.render()} />
										{/if}
									</Table.Cell>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<div class="flex items-center justify-end space-x-2 py-4">
		<div class="flex-1 text-sm text-muted-foreground">
			{Object.keys($selectedDataIds).length} of {$rows.length} row(s) selected.
		</div>
		<Button
			variant="outline"
			size="sm"
			on:click={() => ($pageIndex = $pageIndex - 1)}
			disabled={!$hasPreviousPage}>Previous</Button
		>
		<Button
			variant="outline"
			size="sm"
			disabled={!$hasNextPage}
			on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button
		>
	</div>
</div>
