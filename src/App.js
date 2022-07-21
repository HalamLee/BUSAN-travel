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
}
`;
