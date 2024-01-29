import { Box, Button, Flex, Heading, Text, TextField } from '@radix-ui/themes'
import { SubmitHandler, useForm } from 'react-hook-form'
import RequiredSpan from '../required-span/RequiredSpan'
import { BookTypes } from '../../types/book.types'
import useBooks from '../../hooks/useBooks'

const NewBook = ({setOpenModal}: {setOpenModal: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const { 
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<Omit<BookTypes, "id">>();
  const { bookData, authorData } = useBooks();

  const handleFormSubmit: SubmitHandler<Omit<BookTypes, "id">> = (data) => {
    const { name, author_id, pages } = data;
    const author = authorData.authors.find((author) => author.name === author_id);
    const authorName = author?.name;

    if(!author) {
      return alert("Author não encontrado no banco de dados.");
    }
    if(data && authorName) {
      bookData.createNewBook(name, authorName, Number(pages));
      setOpenModal(false);
    }

  }


  return (
    <>
        <Box style={{ minWidth: 450, maxWidth: 500 }}>
          <form onSubmit={handleSubmit(handleFormSubmit)}>

            <Heading>Book</Heading>
            <Text size="2" >
              Você precisa do nome do author cadastrado no banco de dados para poder criar um livro (livros e autores estão relacionados)
            </Text>

            <Flex direction="column" gap="3" mt="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Book name <RequiredSpan/>
                </Text>
                <TextField.Input
                  defaultValue=""
                  placeholder="Enter book name..."
                  {...register("name", { required: true })}
                />
                {errors.name?.type === 'required' && <Text color='red' size="2">Insira o nome do livro</Text>}
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                 Author <RequiredSpan />
                </Text>
                <TextField.Input
                  defaultValue=""
                  placeholder="Enter Author Name..."
                  {...register("author_id", { required: true })}
                />
                {errors.author_id?.type === 'required' && <Text color='red' size="2">Author obrigatório</Text>}
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                 Pages 
                </Text>
                <TextField.Input
                  defaultValue=""
                  type='number'
                  placeholder="Enter total pages..."
                  {...register("pages", {min: 1, max: 1000})}
                />
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
                <Button variant="soft" color="gray" onClick={() => setOpenModal(false)}>
                  Cancel
                </Button>
                <Button type='submit'>Save</Button>
            </Flex>
          </form>
        </Box>
    </>
  )
}

export default NewBook