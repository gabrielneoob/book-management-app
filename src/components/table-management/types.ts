export type ColumnsType = {
  accessorKey: string;
  header: string;
  cell: (props: any) => any;
  enableSorting?: boolean;
}

