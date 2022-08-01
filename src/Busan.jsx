import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import axios from 'axios';

function Busan() {
  const [position, setPosition] = useState();
  const [date, setDate] = useState();

  // 08/08
  const firstPositions = [
    {
      title: '브라운도트',
      latlng: { lat: 35.1686008, lng: 129.1141368 },
    },
    {
      title: '부산종합버스터미널',
      latlng: { lat: 35.285, lng: 129.0954 },
    },
    {
      title: '수변최고돼지국밥 본점',
      latlng: { lat: 35.1569, lng: 129.1343 },
    },
    {
      title: '광안리 요이쿠마',
      latlng: { lat: 35.1581, lng: 129.1266 },
    },
    {
      title: '류센소 광안직영점',
      latlng: { lat: 35.1498, lng: 129.1147 },
    },
  ];

  // 08/09
  const secondPositions = [
    {
      title: '코모도호텔',
      latlng: { lat: 35.1092, lng: 129.0355 },
    },
    {
      title: '뚱보집',
      latlng: { lat: 35.1007, lng: 129.0361 },
    },
  ];

  // 08/10
  const lastPositions = [
    {
      title: '신발원',
      latlng: { lat: 35.1149, lng: 129.0387 },
    },
  ];

  const clickHandler = () => {
    setDate();
  };

  useEffect(() => {
    console.log('date :>> ', date);
  }, [date]);

  return (
    <>
      <GlobalStyle />
      <ButtonWrapper>
        <Button
          onClick={() => {
            setDate([...firstPositions, ...secondPositions, ...lastPositions]);
          }}>
          전체 보기
        </Button>
        <Button
          onClick={() => {
            setDate(firstPositions);
          }}>
          08/08(월)
        </Button>
        <Button
          onClick={() => {
            setDate(secondPositions);
          }}>
          08/09(화)
        </Button>
        <Button
          onClick={() => {
            setDate(lastPositions);
          }}>
          08/10(수)
        </Button>
        <Button>길 찾기</Button>
      </ButtonWrapper>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 35.285,
          lng: 129.0954,
        }}
        style={{
          // 지도의 크기
          width: '500px',
          height: '500px',
        }}
        level={3} // 지도의 확대 레벨
      >
        {date
          ? date.map((position, index) => (
              <MapMarker
                key={`${position.title}-${position.latlng}`}
                position={position.latlng} // 마커를 표시할 위치
                image={{
                  src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
                  size: {
                    width: 24,
                    height: 35,
                  }, // 마커이미지의 크기입니다
                }}
                title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              />
            ))
          : firstPositions.map((position, index) => (
              <MapMarker
                key={`${position.title}-${position.latlng}`}
                position={position.latlng} // 마커를 표시할 위치
                image={{
                  src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
                  size: {
                    width: 24,
                    height: 35,
                  }, // 마커이미지의 크기입니다
                }}
                title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              />
            ))}
      </Map>
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
  align-items: center
}
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const Button = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: aliceblue;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;
