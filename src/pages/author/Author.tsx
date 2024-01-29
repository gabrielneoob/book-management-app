import * as S from './styles';
import Table from '../../components/table-management/Table';
import useBooks from '../../hooks/useBooks';
import { authorColumns } from './tanstackColumn';
import Header from '../../components/header/Header';
import { Button, Flex } from '@radix-ui/themes';
import { BookmarkIcon, PlusIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';
import NewAuthor from '../../components/new-author/NewAuthor';
import Modal from '../../components/modal/Modal';
import { useState } from 'react';

const Author = () => {
  const { authorData } = useBooks();
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate();
  return (
    <S.Container>
      <Header title='Author Table'/>
      <Flex 
       style={{backgroundColor: "var(--primal-color)"}}
       pb="2"
       justify="between"
       >
        <Button 
        style={{cursor: "pointer"}}
        onClick={() => navigate('/')}
        >
          <BookmarkIcon /> Books Table
        </Button>

        <Button 
         style={{cursor: "pointer", backgroundColor: "#0a0"}}
         onClick={() => setOpenModal(true)}
        >
            <PlusIcon/>New Author
        </Button>

        {openModal && (
          <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
            <NewAuthor setOpenModal={setOpenModal}/>
          </Modal>
        )}
      </Flex>
      <Table
       columns={authorColumns}
       data={ authorData.authors } 
      />
    </S.Container>
  )
}

export default Author