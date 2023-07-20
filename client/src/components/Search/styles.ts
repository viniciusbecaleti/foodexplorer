import styled from "styled-components"

export const Container = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-inline: 14rem;
  border-radius: 5px;
  background: ${({ theme }) => theme["dark-900"]};

  input {
    flex: 1;
    max-width: 344rem;
    background: none;
    box-shadow: none;
  }

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme["cake-100"]};
  }
`
