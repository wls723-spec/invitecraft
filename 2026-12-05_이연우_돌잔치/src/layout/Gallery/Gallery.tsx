import styled from '@emotion/styled';
import dolsangImg from '@/assets/images/photo-dolsang.jpg';

interface GalleryProps {
  onZoom: (src: string, alt: string) => void;
}

const Gallery = ({ onZoom }: GalleryProps) => {
  const altText = '이연우 첫돌 돌상 기념 사진';

  return (
    <GalleryBox>
      <PhotoFrame
        type="button"
        onClick={() => onZoom(dolsangImg, altText)}
        aria-label="돌상 사진 크게 보기"
      >
        <PhotoImg src={dolsangImg} alt={altText} />
      </PhotoFrame>
      <HintText>사진을 누르면 크게 보실 수 있습니다</HintText>
    </GalleryBox>
  );
};

export default Gallery;

const GalleryBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const PhotoFrame = styled.button`
  width: 100%;
  padding: 0;
  border: 1px solid #ece9e3;
  border-radius: 14px;
  overflow: hidden;
  background: #f9f8f5;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(47, 33, 32, 0.06);
`;

const PhotoImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const HintText = styled.span`
  font-size: 0.78rem;
  color: #8a7f7c;
`;
