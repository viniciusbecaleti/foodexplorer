import styled from "styled-components"

interface ContainerProps {
  open: boolean
}

export const Container = styled.div<ContainerProps>`
  display: ${({ open }) => !open && "none"};

  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  z-index: 999;

  background: ${({ theme }) => theme["dark-400"]};
`

export const Header = styled.div`
  height: 104rem;
  padding-inline: 24rem;

  display: flex;
  align-items: center;
  gap: 16rem;

  background: ${({ theme }) => theme["dark-700"]};

  > button {
    border: none;
    background: none;
    line-height: 0;
    color: ${({ theme }) => theme["light-100"]};
  }

  span {
    font-size: 20rem;
  }
`

export const Content = styled.div`
  padding: 24rem;
`

export const SearchForm = styled.form`
  height: 56rem;

  display: flex;
  align-items: center;

  padding-inline: 14rem;
  border-radius: 5px;

  background: ${({ theme }) => theme["dark-900"]};

  svg {
    color: ${({ theme }) => theme["light-400"]};
  }

  input {
    max-width: 344rem;
    background: none;
    box-shadow: none;
  }
`
