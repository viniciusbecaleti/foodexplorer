import styled from "styled-components"

export const Container = styled.footer`
  grid-area: footer;
  padding-block: 24rem;
  background: ${({ theme }) => theme["dark-600"]};
`

export const Content = styled.div`
  width: 100%;
  max-width: 1168rem;
  margin-inline: auto;
  padding-inline: 24rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8rem;

  img {
    height: 30rem;
  }

  p {
    font-size: 14rem;
    color: ${({ theme }) => theme["light-200"]};
  }

  @media (max-width: 500px) {
    img {
      height: 18rem;
    }

    p {
      font-size: 12rem;
    }
  }
`
