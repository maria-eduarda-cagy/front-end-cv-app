import styled from "styled-components";

export const MyCareerContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #7b4ae280;
  border-radius: 16px;
  padding: 10px;
  position: relative;
`;

export const CarouselWrapper = styled.section`
  position: relative;
  width: 100%;
`;

export const CarouselRow = styled.div`
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

export const Button = styled.button`
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  cursor: pointer;

  width: 24px;
  height: 24px;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
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
