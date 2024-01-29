import { GlobalStyle, Container } from '../GlobalStyles.ts';
import MainRoutes from './routes/MainRoute.tsx';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <MainRoutes/>
      </Container>
    </>
  )
}

export default App;