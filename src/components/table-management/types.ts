export type ColumnsType = {
  accessorKey: string;
  header: string;
  cell: (props: any) => any;
  enableSorting?: boolean;
}

export type BookType = {
  id: string;
  name: string;
  author_id: string;
  pages?: number;
}

export type AuthorType = {
  id: string;
  name: string;
  email?: string;
}