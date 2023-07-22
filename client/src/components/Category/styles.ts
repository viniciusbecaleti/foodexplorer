import styled from "styled-components"

export const Container = styled.section`
  > h2 {
    font-size: 32rem;
    font-weight: 500;
    color: ${({ theme }) => theme["light-300"]};
    margin-bottom: 24rem;
  }
`

export const Slider = styled.div`
  position: relative;
`

const NavigationButtonBase = styled.button`
  position: absolute;
  top: 0;
  width: ${({ disabled }) => disabled ? "40rem" : "160rem"};
  height: 100%;
  z-index: 2;

  display: flex;
  align-items: center;

  border: none;
  outline: none;

  color: ${({ theme }) => theme["light-100"]};

  &:focus {
    box-shadow: none;
  }

  &:disabled {
    svg {
      opacity: 0.5;
    }
  }
`

export const PrevButton = styled(NavigationButtonBase)`
  left: 0;
  background: linear-gradient(90deg, rgba(0,10,15,1) 0%, transparent 100%);
`

export const NextButton = styled(NavigationButtonBase)`
  justify-content: end;
  right: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(0,10,15,1) 100%);
`

