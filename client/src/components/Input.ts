import styled from "styled-components"

export const Input = styled.input`
  width: 100%;
  background: ${({ theme }) => theme["dark-900"]};
  border: none;
  border-radius: 8px;
  padding: 12rem 14rem;
  color: ${({ theme }) => theme["light-400"]};

  &::placeholder {
    color: ${({ theme }) => theme["light-500"]};
    opacity: 1;
  }
`
