'use client'
import { fetchCompany } from "@/helpers/api";
import Cookies from "js-cookie";
import {ColumnDef} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown, ChevronDown, MoreHorizontal, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TableComponent from "@/components/TableComponent/TableComponent";
import Link from "next/link";


interface Company {
  id: string;
  name: string;
  metadata: object;
  createdAt: string;
  updatedAt: string;
}

const columns: ColumnDef<Company>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Compnay Id",
    cell: ({ row }) => <div className="lowercase">{row.getValue('id')}</div>,
  },
  {
    accessorKey: "name",
    header: "Company Name",
    cell: ({ row }) => <div>{row.getValue('name')}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const company = row.original;
      console.log(company);
      let isDeleteModalOpen = false;
      return (
        <DropdownMenu>
          
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem><Link href={`/admin/companies/${company.id}`}>View Company</Link></DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                isDeleteModalOpen = true;
              }}
            >
              Delete Company
            </DropdownMenuItem>
            <DropdownMenuItem>Update Company</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const CompaniesPage = async () => {
  const AllCompanies = await fetchCompany(
    Cookies.get("accessToken"),
  );
  return (
    <div className="m-10">
      
      <h1 className="text-center font-bold text-3xl py-5">Companies</h1>
      <div>
        <TableComponent isAddButton={true} AddButtonText={"Add Companies"} data={AllCompanies?.companies} columns={columns} />
      </div>
    </div>
  );
};

export default CompaniesPage;
