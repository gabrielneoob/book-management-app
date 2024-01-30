import { TrashIcon } from "@radix-ui/react-icons"
import { AlertDialog, Box, Button, Flex } from "@radix-ui/themes"
import { AlertTypes } from "./alert.types"
import useBooks from "../../hooks/useBooks"

const Alert = ({
   id,
   deleteBook,
   deleteAuthor
  }: AlertTypes) => {
    const { bookData, authorData } = useBooks()

  return (
    <Box width="max-content">
      <AlertDialog.Root>
        <AlertDialog.Trigger style={{backgroundColor: "#d1d1d3", border: "none"}}>
          <Button color="gray" style={{cursor: 'pointer', height: "max-content", width: "max-content", padding: "0 0 0 2px"}}>
            <TrashIcon height="20" width="20" color="#000"/>
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content style={{ maxWidth: 450 }}>
          <AlertDialog.Title>Deletar {
             deleteAuthor ? "Author" : "Livro"
            }</AlertDialog.Title>
          <AlertDialog.Description size="2">
            {deleteAuthor ? "Você tem certeza? Excluir um Autor removera todos os livros relacionados a ele." : "Você tem certeza em exlcuir o livro?"}
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button 
               variant="solid"
               color="red"
               onClick={() => {
                if(deleteBook) deleteBook(id)
                if(deleteAuthor) {
                  const authorName = authorData.authors.find((author) => author.id === id)?.name;
                  bookData.setBooks(bookData.books.filter((book) => book.author_id !== authorName));
                  deleteAuthor(id);
                }
               }}
               >
                Delete
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </Box>
  )
}

export default Alert