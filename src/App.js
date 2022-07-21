import styled, { createGlobalStyle } from 'styled-components';
import Map from './Map';

function App() {
  return (
    <>
      <GlobalStyle />
      <Map />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin:0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center
}
`;
