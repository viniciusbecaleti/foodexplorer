import styled from "styled-components"

export const Select = styled.select`
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

export const SearchButton = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme["light-100"]};
  line-height: 0;
`

export const FloatingSearch = styled.div`
  position: absolute;
  bottom: -38rem;
  left: 0;
  right: 0;

  width: calc(100% - 48rem);
  margin-inline: auto;

  select {
    border: 2px solid ${({ theme }) => theme["cake-100"]};
    box-shadow: none;
  }
`
