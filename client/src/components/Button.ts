import styled from "styled-components"

export const Button = styled.button`
  background: ${({ theme }) => theme["tomato-100"]};
  padding: 12rem 32rem;
  border: none;
  border-radius: 5px;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14rem;
  color: ${({ theme }) => theme["light-100"]};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme["tomato-200"]};
  }

  &:disabled {
    background: ${({ theme }) => theme["tomato-400"]};
    cursor: not-allowed;
  }
`
