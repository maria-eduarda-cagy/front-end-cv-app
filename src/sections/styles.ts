import styled from "styled-components";

export const FooterBackground = styled.footer`
  width: 100%;
  height: 84px;
  margin-top: 2rem;

  background-color: var(--color-footer-bg);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;

  span {
    font-size: 14px;
  }

  .mobile-header-icons {
    display: flex;
    gap: 1rem;

    img {
      filter: var(--icon-filter);
    }
  }
`;
