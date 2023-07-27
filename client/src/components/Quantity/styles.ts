import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 14rem;

  > button {
    span {
      margin-left: 2rem;

      &::before {
        content: "•";
        font-size: 10rem;
        margin-right: 4rem;
      }
    }
  }
`

export const Controller = styled.div`
  display: flex;
  align-items: center;
  gap: 14rem;

  > button {
    line-height: 0;
    border: none;
    background: none;
    color: ${({ theme }) => theme["light-100"]};
  }
`
