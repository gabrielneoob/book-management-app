import { Box, Button, Flex, Heading, Text, TextField } from '@radix-ui/themes'
import { SubmitHandler, useForm } from 'react-hook-form'
import RequiredSpan from '../required-span/RequiredSpan'
import useBooks from '../../hooks/useBooks'
import { AuthorTypes } from '../../types/author.types'

const NewAuthor = ({setOpenModal}: {setOpenModal: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const { 
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<AuthorTypes>();
  const { authorData } = useBooks();

  const handleFormSubmit: SubmitHandler<AuthorTypes> = (data) => {
    const { name, email} = data;
    if(data && name) {
      authorData.createNewAuthor(name, email as string);
    }
    setOpenModal(false);
  }


  return (
    <>
      <Box>
        <Box style={{ minWidth: 450 }}>
          <form onSubmit={handleSubmit(handleFormSubmit)}>

            <Heading>Author</Heading>
            <Text size="2" mb="4">
              Create a new Author
            </Text>

            <Flex direction="column" gap="3" mt="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Author name <RequiredSpan/>
                </Text>
                <TextField.Input
                  defaultValue=""
                  placeholder="Enter Author name..."
                  {...register("name", { required: true })}
                />
                {errors.name?.type === 'required' && <Text color='red' size="2">Insira o nome do Author</Text>}
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                 Email
                </Text>
                <TextField.Input
                  defaultValue=""
                  placeholder="Enter Email..."
                  {...register("email", { required: false })}
                />
                {errors.email?.type === 'required' && <Text color='red' size="2">Author obrigatório</Text>}
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Box>
                <Button 
                variant="soft" 
                color="gray"
                onClick={() => setOpenModal(false)}
                >
                  Cancel
                </Button>
              </Box>
                <Button type='submit'>Create</Button>
            </Flex>
          </form>
          
        </Box>
      </Box>
    </>
  )
}

export default NewAuthor