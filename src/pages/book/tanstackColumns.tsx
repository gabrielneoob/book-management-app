import { Flex, Text } from "@radix-ui/themes"
import useBooks from "../../hooks/useBooks"
import { EyeOpenIcon } from "@radix-ui/react-icons"
import Alert from "../../components/alert/Alert"
import { useState } from "react"
import { BookTypes } from "../../types/book.types"
import Modal from "../../components/modal/Modal"
import ModelDetails from "../../components/model-detail/ModelDetails"

export const bookColumns = [
  {
    accessorKey: 'name',
    header: "Book",
    cell: (props: any) => {
      return (
        <Text>
          {props.getValue()}
        </Text>
      )
    }
  },
  {
    accessorKey: 'author_id',
    header: "Author",
    cell: (props: any) => {
      // const { bookData, authorData } = useBooks()

      return (
        <Text
        
        >
          {/* {props.getValue()} */}
          {/* {.authors.find((author) => author.id === '0'))} */}
          {/* {authorData.authors.find((author) => author.id === props.getValue())?.name} */}
          {props.getValue()}
        </Text>
      )
    }
  },
  {
    accessorKey: 'pages',
    header: "Pages",
    cell: (props: any) => <Text>{props.getValue()}</Text>,
  },
  {
    accessorKey: 'functionalities',
    header: "",
    cell: (props: any) => {
      const { bookData } = useBooks()
      const [openModal, setOpenModal] = useState(false);
      const [book, setBook] = useState<BookTypes>();

      return (
        <Flex align="center">          
          <Flex
           mr="2" 
           style={{cursor: 'pointer'}}
           onClick={() => {
             const data = bookData.books.find((item) => item.id === props.row.original.id);
             setBook(data);
             setOpenModal(true)
           }}
          >
            {openModal && (
              <Modal isOpen={openModal} onClose={setOpenModal}>
                {book && (
                  <ModelDetails
                   id={book.id}
                   name={book.name}
                   title="Book"
                   author_id={book.author_id}
                   page={book.pages}
                  />
                )}
              </Modal>
            )}
            <EyeOpenIcon height="20" width="20"/>
          </Flex>
          <Flex 
           
           style={{cursor: "pointer"}}
          >
            <Alert id={bookData.books.find((item) => item.id === props.row.original.id)?.id as string} deleteBook={bookData.deleteBook}/>
          </Flex>
        </Flex>
      )
    },
    enableSorting: false
  },
]