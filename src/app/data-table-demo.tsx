"use client"

import * as React from "react"
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MoreVertical } from "lucide-react"
import { z } from "zod"
import { ModeToggle } from "@/components/theme/modeToggle"

const dados = [
  {
    user_id: 1,
    piece_id: 101,
    initial_dimension: 10,
    desired_dimension: 15,
    actual_dimension: 14.8,
    start_datetime: "2024-10-01T08:00:00Z",
    end_datetime: "2024-10-01T10:00:00Z",
  },
  {
    user_id: 2,
    piece_id: 102,
    initial_dimension: 20,
    desired_dimension: 25,
    actual_dimension: 24.5,
    start_datetime: "2024-10-01T09:00:00Z",
    end_datetime: "2024-10-01T11:30:00Z",
  },
  {
    user_id: 3,
    piece_id: 103,
    initial_dimension: 15,
    desired_dimension: 20,
    actual_dimension: 19.8,
    start_datetime: "2024-10-01T07:30:00Z",
    end_datetime: "2024-10-01T09:30:00Z",
  },
  {
    user_id: 4,
    piece_id: 104,
    initial_dimension: 12,
    desired_dimension: 18,
    actual_dimension: 17.5,
    start_datetime: "2024-10-01T10:00:00Z",
    end_datetime: "2024-10-01T12:00:00Z",
  },
  {
    user_id: 5,
    piece_id: 105,
    initial_dimension: 25,
    desired_dimension: 30,
    actual_dimension: 29.8,
    start_datetime: "2024-10-01T06:00:00Z",
    end_datetime: "2024-10-01T08:30:00Z",
  },
  {
    user_id: 6,
    piece_id: 106,
    initial_dimension: 18,
    desired_dimension: 22,
    actual_dimension: 21.9,
    start_datetime: "2024-10-01T11:00:00Z",
    end_datetime: "2024-10-01T12:45:00Z",
  },
  {
    user_id: 7,
    piece_id: 107,
    initial_dimension: 8,
    desired_dimension: 12,
    actual_dimension: 11.7,
    start_datetime: "2024-10-01T12:00:00Z",
    end_datetime: "2024-10-01T13:45:00Z",
  },
  {
    user_id: 8,
    piece_id: 108,
    initial_dimension: 30,
    desired_dimension: 35,
    actual_dimension: 34.5,
    start_datetime: "2024-10-01T05:30:00Z",
    end_datetime: "2024-10-01T07:15:00Z",
  },
  {
    user_id: 9,
    piece_id: 109,
    initial_dimension: 22,
    desired_dimension: 26,
    actual_dimension: 25.8,
    start_datetime: "2024-10-01T04:00:00Z",
    end_datetime: "2024-10-01T05:30:00Z",
  },
  {
    user_id: 10,
    piece_id: 110,
    initial_dimension: 28,
    desired_dimension: 33,
    actual_dimension: 32.9,
    start_datetime: "2024-10-01T13:00:00Z",
    end_datetime: "2024-10-01T14:30:00Z",
  },
  {
    user_id: 1,
    piece_id: 101,
    initial_dimension: 10,
    desired_dimension: 15,
    actual_dimension: 14.8,
    start_datetime: "2024-10-01T08:00:00Z",
    end_datetime: "2024-10-01T10:00:00Z",
  },
  {
    user_id: 2,
    piece_id: 102,
    initial_dimension: 20,
    desired_dimension: 25,
    actual_dimension: 24.5,
    start_datetime: "2024-10-01T09:00:00Z",
    end_datetime: "2024-10-01T11:30:00Z",
  },
  {
    user_id: 3,
    piece_id: 103,
    initial_dimension: 15,
    desired_dimension: 20,
    actual_dimension: 19.8,
    start_datetime: "2024-10-01T07:30:00Z",
    end_datetime: "2024-10-01T09:30:00Z",
  },
  {
    user_id: 4,
    piece_id: 104,
    initial_dimension: 12,
    desired_dimension: 18,
    actual_dimension: 17.5,
    start_datetime: "2024-10-01T10:00:00Z",
    end_datetime: "2024-10-01T12:00:00Z",
  },
  {
    user_id: 5,
    piece_id: 105,
    initial_dimension: 25,
    desired_dimension: 30,
    actual_dimension: 29.8,
    start_datetime: "2024-10-01T06:00:00Z",
    end_datetime: "2024-10-01T08:30:00Z",
  },
  {
    user_id: 6,
    piece_id: 106,
    initial_dimension: 18,
    desired_dimension: 22,
    actual_dimension: 21.9,
    start_datetime: "2024-10-01T11:00:00Z",
    end_datetime: "2024-10-01T12:45:00Z",
  },
  {
    user_id: 7,
    piece_id: 107,
    initial_dimension: 8,
    desired_dimension: 12,
    actual_dimension: 11.7,
    start_datetime: "2024-10-01T12:00:00Z",
    end_datetime: "2024-10-01T13:45:00Z",
  },
  {
    user_id: 8,
    piece_id: 108,
    initial_dimension: 30,
    desired_dimension: 35,
    actual_dimension: 34.5,
    start_datetime: "2024-10-01T05:30:00Z",
    end_datetime: "2024-10-01T07:15:00Z",
  },
  {
    user_id: 9,
    piece_id: 109,
    initial_dimension: 22,
    desired_dimension: 26,
    actual_dimension: 25.8,
    start_datetime: "2024-10-01T04:00:00Z",
    end_datetime: "2024-10-01T05:30:00Z",
  },
  {
    user_id: 1111111,
    piece_id: 110,
    initial_dimension: 28,
    desired_dimension: 33,
    actual_dimension: 32.9,
    start_datetime: "2024-10-01T13:00:00Z",
    end_datetime: "2024-10-01T14:30:00Z",
  },
]

export const ZodPiece = z.object({
  user_id: z.number(),
  piece_id: z.number(),
  initial_dimension: z.number(),
  desired_dimension: z.number(),
  actual_dimension: z.number(),
  start_datetime: z.string(),
  end_datetime: z.string(),
})

export const columns: ColumnDef<z.infer<typeof ZodPiece>>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "piece_id",
    header: "Id",
    id: 'id'
  },
  {
    accessorKey: "user_id",
    header: "Usuário",
  },
  {
    accessorKey: "initial_dimension",
    header: "Dimensão inicial",
  },
  {
    accessorKey: "desired_dimension",
    header: "Dimensão desejada",
  },
  {
    accessorKey: "actual_dimension",
    header: "Dimensão atual",
  },
  {
    accessorKey: "start_datetime",
    header: "Início",
  },
  {
    accessorKey: "end_datetime",
    header: "Fim",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className="flex gap-4 justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => console.log(row.getValue('id'))} className="hover:cursor-pointer">Excluir</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [filterStartValue, setFilterStartValue] = React.useState("");
  const [filterEndValue, setFilterEndValue] = React.useState("");
  const [pageSize, setPageSize] = React.useState(10);
  const [data, setData] = React.useState(dados);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-2 gap-2">
        <Input
          placeholder="Filter by start date"
          value={filterStartValue}
          onChange={(event) => {
            setFilterStartValue(event.target.value);
            table.getColumn("start_datetime")?.setFilterValue(event.target.value);
          }}
          className="max-w-sm"
        />
        <Input
          placeholder="Filter by end date"
          value={filterEndValue}
          onChange={(event) => {
            setFilterEndValue(event.target.value);
            table.getColumn("end_datetime")?.setFilterValue(event.target.value);
          }}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle className="" />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
