import { createGlobalStyle, styled } from 'styled-components';
import '@radix-ui/themes/styles.css';


export const GlobalStyle = createGlobalStyle`
  :root {
    --primal-color: #181924;
    --text-color: #d0d1d8;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100vh;
    background-color: var(--primal-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }

`

export const Container = styled.main`
  margin: 0 auto;
`