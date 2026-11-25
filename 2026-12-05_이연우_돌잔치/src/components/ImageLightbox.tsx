import { useEffect } from 'react';
import styled from '@emotion/styled';

interface ImageLightboxProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

const ImageLightbox = ({ src, alt, onClose }: ImageLightboxProps) => {
  useEffect(() => {
    if (!src) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [src, onClose]);

  if (!src) return null;

  return (
    <Overlay onClick={onClose} role="dialog" aria-modal="true" aria-label={alt}>
      <CloseButton type="button" onClick={onClose} aria-label="닫기">
        ✕
      </CloseButton>
      <ZoomedImg src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </Overlay>
  );
};

export default ImageLightbox;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: rgba(24, 20, 19, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(0, 0, 0, 0.45);
  color: #ffffff;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ZoomedImg = styled.img`
  max-width: 100%;
  max-height: 88vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
`;
