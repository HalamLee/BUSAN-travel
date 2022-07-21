import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function App() {
  const [position, setPosition] = useState();
  return (
    <>
      <GlobalStyle />
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: '500px', height: '500px', borderRadius: '30px' }}
        level={3}
        onClick={(_t, mouseEvent) =>
          setPosition({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
          })
        }>
        {position && <MapMarker position={position} />}
      </Map>
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

const MapContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: red;
`;
