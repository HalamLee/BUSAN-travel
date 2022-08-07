import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {
  Map,
  MapMarker,
  // MarkerWithCustomOverlayStyle,
  CustomOverlayMap,
} from 'react-kakao-maps-sdk';
import axios from 'axios';
import {
  all,
  firstPositions,
  secondPositions,
  lastPositions,
} from './data/data';

function Busan() {
  const [date, setDate] = useState(all);
  const [focus, setFocus] = useState();

  const clickHandler = (place) => {
    setFocus(place.latlng);
  };

  return (
    <>
      <GlobalStyle />
      <ButtonWrapper>
        <Button
          onClick={() => {
            setDate(all);
            setFocus({ lat: 35.1686008, lng: 129.1141368 });
          }}>
          전체 보기
        </Button>
        <Button
          onClick={() => {
            setDate(firstPositions);
            setFocus({ lat: 35.1686008, lng: 129.1141368 });
          }}>
          08/08(월)
        </Button>
        <Button
          onClick={() => {
            setDate(secondPositions);
            setFocus({ lat: 35.1092, lng: 129.0355 });
          }}>
          08/09(화)
        </Button>
        <Button
          onClick={() => {
            setDate(lastPositions);
            setFocus({ lat: 35.1149, lng: 129.0387 });
          }}>
          08/10(수)
        </Button>
      </ButtonWrapper>
      <Map // 지도를 표시할 Container
        center={
          focus
            ? {
                // 지도의 중심좌표
                lat: focus.lat,
                lng: focus.lng,
              }
            : { lat: 35.1686008, lng: 129.1141368 }
        }
        style={{
          // 지도의 크기
          width: '350px',
          height: '400px',
        }}
        level={3} // 지도의 확대 레벨
      >
        {date
          ? date.map((position, index) => (
              <>
                <CustomOverlayMap
                  position={position.latlng}
                  yAnchor={1}
                  key={index}>
                  <div className="customoverlay">
                    <Link
                      href={`https://map.kakao.com/link/to/${position.title},${position.latlng.lat},${position.latlng.lng}`}
                      target="_blank"
                      rel="noreferrer">
                      <Title>{position.title}</Title>
                    </Link>
                  </div>
                </CustomOverlayMap>
              </>
            ))
          : firstPositions.map((position, index) => (
              <>
                <CustomOverlayMap
                  position={position.latlng}
                  yAnchor={1}
                  key={index}>
                  <div className="customoverlay">
                    <Link
                      href={`https://map.kakao.com/link/to/${position.title},${position.latlng.lat},${position.latlng.lng}`}
                      target="_blank"
                      rel="noreferrer">
                      <Title>{position.title}</Title>
                    </Link>
                  </div>
                </CustomOverlayMap>
              </>
            ))}
      </Map>
      {date && (
        <ListWrapper>
          {date.map((place, index) => (
            <List key={index} onClick={() => clickHandler(place)}>
              {place.title}
            </List>
          ))}
        </ListWrapper>
      )}
    </>
  );
}

export default Busan;

const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin:0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const Button = styled.div`
  width: 80px;
  height: 50px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: aliceblue;
  cursor: pointer;
  &:hover {
    background-color: #9de0c1;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Title = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 8px;
  background-color: rgba(142, 231, 239, 0.4);
  border-radius: 10px;
  &:hover {
    background-color: #8edcef;
    color: white;
  }
`;

const ListWrapper = styled.div`
  margin-top: 20px;
  width: 350px;
  height: 150px;
  overflow-y: scroll;
`;

const List = styled.div`
  width: 100%;
  height: fit-content;
  padding: 10px;
  box-sizing: border-box;
  &:hover {
    background-color: #9de0c1;
    cursor: pointer;
  }
`;
