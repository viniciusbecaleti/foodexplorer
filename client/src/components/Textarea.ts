import styled from "styled-components"

export const Textarea = styled.textarea`
  width: 100%;
  height: 172rem;
  background: ${({ theme }) => theme["dark-900"]};
  border: none;
  border-radius: 8px;
  padding: 12rem 14rem;
  color: ${({ theme }) => theme["light-400"]};
  resize: none;
  line-height: 1.6;

  &::placeholder {
    color: ${({ theme }) => theme["light-500"]};
    opacity: 1;
  }
`
