import styled from '@emotion/styled';
import dolsangImg from '@/assets/images/photo-dolsang.jpg';

interface GalleryProps {
  onZoom: (src: string, alt: string) => void;
}

const Gallery = ({ onZoom }: GalleryProps) => {
  const altText = '이연우 첫돌 돌상 기념 사진';

  return (
    <PhotoFrame
      type="button"
      onClick={() => onZoom(dolsangImg, altText)}
      aria-label={altText}
    >
      <PhotoImg src={dolsangImg} alt={altText} />
    </PhotoFrame>
  );
};

export default Gallery;

const PhotoFrame = styled.button`
  width: 100%;
  padding: 8px;
  border: 1px solid var(--line);
  background: #ffffff;
  cursor: zoom-in;
  display: block;
`;

const PhotoImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
