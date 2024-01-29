import { Flex, Text } from "@radix-ui/themes";
import useBooks from "../../hooks/useBooks";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import Alert from "../../components/alert/Alert";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import { AuthorTypes } from "../../types/author.types";
import ModelDetails from "../../components/model-detail/ModelDetails";

export const authorColumns = [
  {
    accessorKey: 'name',
    header: "Author",
    cell: (props: any) => (
      <Text>
        {props.getValue()}
      </Text>
    )
  },
  {
    accessorKey: 'email',
    header: "Email",
    cell: (props: any) => <Text>{props.getValue()}</Text>,
    enableSorting: false
  },
  {
    accessorKey: 'id',
    header: "ID",
    cell: (props: any) => <Text>{props.getValue()}</Text>,
  },
  {
    accessorKey: 'functionalities',
    header: "",
    cell: (props: any) => {
      const {authorData} = useBooks();
      const [openModal, setOpenModal] = useState(false);
      const [author, setAuthor] = useState<AuthorTypes>()
      
      return (
        <Flex align="center">
          <Flex
           mr="2" 
           style={{cursor: 'pointer'}}
           onClick={() => {
             const data = authorData.authors.find((item) => item.id === props.row.original.id);
             setAuthor(data);
             setOpenModal(true);
           }}
          >
            {openModal && (
              <Modal isOpen={openModal} onClose={setOpenModal}>
                {author && (
                  <ModelDetails
                   id={author?.id}
                   name={author.name}
                   title="Author"
                   email={author.email} 
                  />
                )}
              </Modal>
            )}
            <EyeOpenIcon height="20" width="20"/>
          </Flex>
          <Flex 
           mr="2" 
           style={{cursor: "pointer"}}
            >
            <Alert id={authorData.authors.find((item) => item.id === props.row.original.id)?.id as string} deleteAuthor={authorData.deleteAuthor}/>
          </Flex>
        </Flex>
      )
    },
    enableSorting: false
  },
]