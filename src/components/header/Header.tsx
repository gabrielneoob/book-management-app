import { Heading } from '@radix-ui/themes'
import * as S from './style'
const Header = ({title}: {title: string}) => {
  return (
    <S.HeaderWrapper>
      <Heading 
       as='h1'
       size="8"
       mx="auto"
      >
        {title}
      </Heading>
    </S.HeaderWrapper>
  )
}

export default Header