"use client";

import styled from "styled-components";

export const RatingRow = styled.div`
  display: flex;
  gap: 8px;
  margin: 12px 0 16px;

  .rating-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const RatingButton = styled.button<{ $active: boolean }>`
  min-width: 44px;
  padding: 10px 12px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: none;

  .star {
    display: ${({ $active }) => ($active ? "block" : "none")};
  }
`;

export const Field = styled.div`
  margin-top: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Textarea = styled.textarea`
  width: 90%;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  resize: vertical;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 16px;

  button {
    padding: 10px 14px;
    border-radius: 12px;
    border: none;
    font-weight: 600;
    cursor: pointer;

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    &:last-child {
      background: black;
      color: white;
    }
  }
`;

export const Hide = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  background: #fff;
  width: 250px;
  height: 40px;
  border-radius: 10px 10px 0 0;

  background: #fff;

  box-shadow: 
  -4px -4px 14px rgba(255, 255, 255, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
