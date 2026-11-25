import { useState } from 'react';
import styled from '@emotion/styled';
import data from '@/data.json';
import parkingMapImg from '@/assets/images/parking-map.jpg';

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
      <VenueCard>
        <VenueName>{location.name}</VenueName>
        <VenueAddr>{location.address}</VenueAddr>
      </VenueCard>

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

      <ParkingSection>
        <ParkingTitle>{location.parkingTitle}</ParkingTitle>
        <ParkingDesc>{location.parkingMain}</ParkingDesc>
        <MapImageButton
          type="button"
          onClick={() => onZoom(parkingMapImg, '에이엠소반 주차장 안내 지도')}
          aria-label="에이엠소반 주차장 안내 지도"
        >
          <ParkingMapImg src={parkingMapImg} alt="에이엠소반 주차장 안내 지도" />
        </MapImageButton>
      </ParkingSection>
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

const VenueCard = styled.div`
  width: 100%;
  padding: 20px 16px;
  background-color: #ffffff;
  border: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const VenueName = styled.div`
  font-family: var(--font-serif);
  font-size: 1.12rem;
  font-weight: 700;
  color: var(--ink);
`;

const VenueAddr = styled.div`
  font-size: 0.9rem;
  color: var(--ink-soft);
`;

const ButtonRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  width: 100%;
`;

const sharedActionStyle = `
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  border: 1px solid #d7d0c4;
  background-color: #ffffff;
  color: var(--ink);
  font-family: var(--font-sans);
  font-size: 0.84rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
`;

const MapLink = styled.a`
  ${sharedActionStyle}
`;

const CopyButton = styled.button`
  ${sharedActionStyle}
`;

const ParkingSection = styled.div`
  width: 100%;
  margin-top: 12px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ParkingTitle = styled.div`
  font-family: var(--font-serif);
  font-size: 1.04rem;
  font-weight: 700;
  color: var(--ink);
`;

const ParkingDesc = styled.p`
  margin: 0 0 8px;
  font-size: 0.9rem;
  line-height: 1.65;
  color: var(--ink-soft);
  word-break: keep-all;
`;

const MapImageButton = styled.button`
  width: 100%;
  padding: 6px;
  border: 1px solid var(--line);
  background: #ffffff;
  cursor: zoom-in;
`;

const ParkingMapImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
