import { Table, Box, IconButton, Text } from '@radix-ui/themes';
import { flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { ReactNode, memo } from 'react';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { AuthorType, BookType, ColumnsType } from './types';



const TableManagement = ({ columns, data }: { columns: ColumnsType[], data: any }) => {

  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel:getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  })
  
  return (
    <Box style={{backgroundColor:"var(--primal-color)"}}> 
      <Table.Root variant="surface">
        <Table.Header>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Row key={headerGroup.id}>
                {headerGroup.headers.map(
                  header => (
                    <Table.ColumnHeaderCell 
                      key={header.id}
                    > 
                      <Text mr="2">
                        {header.column.columnDef.header as ReactNode}
                      </Text>
                      {
                        header.column.getCanSort() && (
                          <IconButton 
                          style={{backgroundColor: "inherit", cursor: "pointer"}}
                          size="1"
                          onClick={header.column.getToggleSortingHandler()}
                          >
                            <CaretSortIcon height="20" width="20" color='#222'/>
                          </IconButton>
                        )
                      }
                    </Table.ColumnHeaderCell>
                  )
                )}
              </Table.Row>
            ))}
        </Table.Header>

        <Table.Body>
          {table.getRowModel().rows.map((row) => (
            <Table.Row key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Table.Cell key={cell.id}>
                  {
                    flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )
                  }
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  )
}

export default memo(TableManagement)