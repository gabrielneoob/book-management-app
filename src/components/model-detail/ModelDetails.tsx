import { Box, Heading, Strong, Text } from '@radix-ui/themes'

type ModelDetailsProps = {
  id: string;
  name: string;
  author_id?: string;
  page?: number;
  email?: string;
  title: string;
}

const ModelDetails = ({
  id,
  name,
  author_id,
  email,
  page,
  title
}: ModelDetailsProps) => {
  

  return (
    <Box>
      <Heading
       align="center"
       mb="4"
      >{title}</Heading>
      <Box mb="2">
        <Text size="3"><Strong>Name: </Strong>{name}</Text>
      </Box>
      <Box mb="2">
        {email && (
          <> 
            <Text size="3"><Strong>Email: </Strong>{email}</Text>
          </>
        )}
      </Box>
      <Box mb="2">
        {author_id && (
          <> 
            <Text size="3">
              <Strong>Author Name: </Strong>
              {author_id}
            </Text>
          </>
        )}
      </Box>
      <Box mb="3">
        {page && (
          <> 
            <Text size="3"><Strong>Pages: </Strong> {page}</Text>
          </>
        )}
      </Box>
      <Box>
        <Text size="3"><Strong>ID: </Strong>{id}</Text>
      </Box>
    </Box>
  )
}

export default ModelDetails