import { Button, Flex, } from "@radix-ui/themes";
import Header from "../../components/header/Header";
import Table from "../../components/table-management/Table"
import useBooks from "../../hooks/useBooks"
import { bookColumns } from "./tanstackColumns";
import { PersonIcon, PlusIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import NewBook from "../../components/new-book/NewBook";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import * as S from './styles'

const Book = () => {
  const { bookData } = useBooks();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  
  return (
    <>
      <S.Container>
        <Header title='Book Table'/>
        <Flex 
        style={{backgroundColor: "var(--primal-color)"}}
        pb="2"
        justify="between"
        >
          <Button 
          style={{cursor: "pointer"}}
          onClick={() => navigate('/authors')}
          >
            <PersonIcon /> Authors Table
          </Button>

          <Button 
          style={{cursor: "pointer", backgroundColor: "#0a0"}}
          onClick={() => setOpenModal(true)}
          >
              <PlusIcon/>New Book
          </Button>
          {openModal && (
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
              <NewBook setOpenModal={setOpenModal}/>
            </Modal>
          )}
          {/* <NewBook /> */}
        </Flex>
        <Table
        data={bookData.books}
        columns={bookColumns} 
        />
      </S.Container>
    </>
  )
}

export default Book