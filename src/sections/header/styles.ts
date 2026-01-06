import styled from "styled-components";
export const Background = styled.div`
  width: 100%;
  height: 64px;
  .mobile-header-icons {
    display: flex;
    justify-content: center;
    gap: 16px;
  }

  @media and (min-width: 768px) {
    background-color: #7b4ae2;
    opacity: 0.3;
    border-radius: 17px;
   
  }
`;
