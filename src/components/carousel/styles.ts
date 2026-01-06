import styled, { keyframes } from "styled-components";



export const CarouselWrapper = styled.div`
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

export const CarouselTrack = styled.div`
  display: flex;
  gap: 1.5rem;
  width: max-content;
  animation: ${scroll} 20s linear infinite;
`;