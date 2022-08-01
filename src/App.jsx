import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import axios from 'axios';

function App() {
  const [position, setPosition] = useState();

  useEffect(() => {
    {
      position &&
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lng}&appid=3920187c07ee1d1397613db28a2ecc29`
          )
          .then((res) => {
            console.log(res.data.name, res.data.weather[0].main);
          })
          .catch((err) => {
            console.log(err);
          });
    }
  }, [position]);

  return (
    <>
      <GlobalStyle />

      <Map
        center={{ lat: 37.631074, lng: 127.055035 }}
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
