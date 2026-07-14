import styled from "styled-components";

export const RecommendationContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-accent-80);
  border-radius: 16px;
  padding: 10px;
  position: relative;
  height: fit-content;

  .description {
    display: flex;
    flex-direction: column;
  }

  .profile-image {
    border-radius: 50%;
    width: 50px;
    border: 2px solid var(--color-text);
  }
`;
