import { TrashIcon } from "@radix-ui/react-icons"
import { AlertDialog, Box, Button, Flex } from "@radix-ui/themes"
import { AlertTypes } from "./alert.types"

const Alert = ({
   id,
   deleteBook,
   deleteAuthor
  }: AlertTypes) => {

  return (
    <Box width="max-content">
      <AlertDialog.Root>
        <AlertDialog.Trigger style={{backgroundColor: "#d1d1d3", border: "none"}}>
          <Button color="gray" style={{cursor: 'pointer'}}>
            <TrashIcon height="20" width="20" color="#000"/>
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content style={{ maxWidth: 450 }}>
          <AlertDialog.Title>Deletar Livro</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Are you sure? This application will no longer be accessible and any
            existing sessions will be expired.
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
                if(deleteAuthor) deleteAuthor(id)
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