import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1168rem;
  margin-inline: auto;
  padding: 48rem 24rem;

  display: flex;
  flex-direction: column;
  gap: 48rem;

  > a {
    width: max-content;

    display: flex;
    align-items: center;

    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 24;
    color: ${({ theme }) => theme["light-300"]};
  }

  @media (max-width: 768px) {
    gap: 16rem;
  }
`

export const DishInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 48rem;

  h2 {
    margin-bottom: 24rem;
    font-size: 40rem;
  }

  p {
    margin-bottom: 24rem;

    font-family: "Poppins", sans-serif;
    font-size: 24rem;
    line-height: 1.4;
  }

  a:last-child {
    color: ${({ theme }) => theme["light-100"]};
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-weight: 14;

    padding: 12rem 24rem;
    border-radius: 5px;

    background: ${({ theme }) => theme["tomato-100"]};

    &:hover {
      background: ${({ theme }) => theme["tomato-200"]};
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 16rem;

    text-align: center;

    img {
      max-width: 264rem;
    }

    > div {
      > div:last-child {
        justify-content: center;
      }
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 28rem;
    }

    p {
      font-size: 16rem;
    }
  }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12rem;

  margin-bottom: 48rem;

  span {
    padding: 4rem 8rem;
    border-radius: 5px;

    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14rem;

    background: ${({ theme }) => theme["dark-1000"]};
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`
