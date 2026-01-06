import styled from "styled-components";

export const MyCareerContainer = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #7b4ae280;
  border-radius: 16px;
  padding: 10px;
`;

export const CarouselWrapper = styled.section`
  position: relative;
  width: 100%;
`;
export const CarouselRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Track = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  flex: 1;
  gap: 2rem;
  overscroll-behavior-x: contain;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  width: 100%;
  scroll-snap-align: start;

  scroll-snap-stop: always;
`;

export const ArrowButton = styled.button`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 44px;
    height: 44px;
    border-radius: 50%;

    border: 1px solid rgba(255, 255, 255, 0.18);
    background: rgba(255, 255, 255, 0.06);
    color: #fff;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const Button = styled.button`
  padding: 0.6rem 1rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
