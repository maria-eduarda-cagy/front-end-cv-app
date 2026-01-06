import styled from "styled-components";

export const HeaderBackground = styled.div`
  width: 100%;
  height: 64px;
  display:none;
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

export const FooterBackground = styled.footer`
  width: 100%;
  height: 64px;
  margin-top: 2rem;

  background-color: #7b4ae2;
  opacity: 0.3;

  display: flex;
  justify-content: center;
  align-items: center;

`;