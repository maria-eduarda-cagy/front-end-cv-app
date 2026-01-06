import styled, { keyframes } from "styled-components";



export const CarouselAutoWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const CarouselAutoTrack = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  animation: ${scroll} 20s linear infinite;
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: none;
  }
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "14px" : "6px")};
  height: 6px;
  border-radius: 999px;
  border: none;

  background: ${({ $active }) =>
    $active ? "#7b4ae280" : "rgba(255, 255, 255, 0.35)"};

  transition: all 0.25s ease;
  cursor: pointer;

  padding: 0;
  outline: none;

  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
`;
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
`;

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
export const Slide = styled.div`
  flex: 0 0 100%;
  width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position:relative;
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


export const CarouselManualRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .controls {
    display: flex;
    gap: 0.2rem;
    position: absolute;
    top: -60px;
    right: 0;
    margin: 0.5rem;
  }

  .pagination-container {
    width: 100%;
  }
`;
export const CarouselManualWrapper = styled.section`
  position: relative;
  width: 100%;
`;


