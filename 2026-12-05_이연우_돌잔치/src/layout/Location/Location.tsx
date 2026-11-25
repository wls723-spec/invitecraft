import { useState } from 'react';
import styled from '@emotion/styled';
import data from '@/data.json';
import parkingMapImg from '@/assets/images/parking-map.jpg';
import { Caption, PointTitle } from '@/components/Text.tsx';

interface LocationProps {
  onZoom: (src: string, alt: string) => void;
}

const Location = ({ onZoom }: LocationProps) => {
  const { location } = data;
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(location.copyAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = location.copyAddress;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <LocationWrapper>
      <VenueBox>
        <PointTitle>{location.name}</PointTitle>
        <Caption>{location.address}</Caption>
      </VenueBox>

      <ButtonRow>
        <MapLink href={location.naverMap} target="_blank" rel="noreferrer">
          네이버 지도
        </MapLink>
        <MapLink href={location.kakaoMap} target="_blank" rel="noreferrer">
          카카오맵
        </MapLink>
        <CopyButton type="button" onClick={handleCopyAddress}>
          {copied ? '주소 복사됨 ✓' : '주소 복사'}
        </CopyButton>
      </ButtonRow>

      <ParkingCard>
        <ParkingBadge>주차 안내</ParkingBadge>
        <ParkingTitle>{location.parkingTitle}</ParkingTitle>
        <ParkingMain>{location.parkingMain}</ParkingMain>
        <ParkingSub>{location.parkingSub}</ParkingSub>
        <MapImageButton
          type="button"
          onClick={() => onZoom(parkingMapImg, '에이엠소반 주차장 안내 지도')}
          aria-label="주차장 안내 지도 크게 보기"
        >
          <ParkingMapImg src={parkingMapImg} alt="에이엠소반 주차장 안내 지도" />
        </MapImageButton>
        <HintText>지도를 누르면 크게 확대됩니다</HintText>
      </ParkingCard>
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const VenueBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;

const sharedBtnStyle = `
  padding: 9px 14px;
  border-radius: 999px;
  border: 1px solid #dce4d2;
  background-color: #f6f8f3;
  color: #2f2120;
  font-family: inherit;
  font-size: 0.86rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  line-height: 1.2;
`;

const MapLink = styled.a`
  ${sharedBtnStyle}
`;

const CopyButton = styled.button`
  ${sharedBtnStyle}
  background-color: #ffffff;
  border-color: #e2d8d5;
`;

const ParkingCard = styled.div`
  width: 100%;
  margin-top: 4px;
  padding: 18px 14px 14px;
  border-radius: 16px;
  background-color: #fdf9f5;
  border: 1px solid #efe2d6;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const ParkingBadge = styled.span`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  background-color: #e88ca6;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
`;

const ParkingTitle = styled.div`
  font-size: 1.05rem;
  font-weight: 700;
  color: #2f2120;
  margin-top: 2px;
`;

const ParkingMain = styled.p`
  margin: 0;
  font-size: 0.92rem;
  font-weight: 700;
  line-height: 1.55;
  color: #2f2120;
  word-break: keep-all;
`;

const ParkingSub = styled.p`
  margin: 0 0 6px;
  font-size: 0.83rem;
  line-height: 1.5;
  color: #7c6761;
  word-break: keep-all;
`;

const MapImageButton = styled.button`
  width: 100%;
  padding: 0;
  border: 1px solid #e6ddd5;
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
  cursor: pointer;
`;

const ParkingMapImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const HintText = styled.span`
  font-size: 0.78rem;
  color: #8a7f7c;
`;
