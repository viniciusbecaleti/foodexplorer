import styled from "styled-components"

export const Container = styled.article`
  padding: 24rem 24rem 48rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme["dark-300"]};
  background: ${({ theme }) => theme["dark-200"]};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rem;

  text-align: center;

  position: relative;

  > button:first-child {
    border: none;
    background: none;
    line-height: 0;

    position: absolute;
    top: 16rem;
    right: 16rem;

    color: ${({ theme }) => theme["light-300"]};
  }

  img {
    max-width: 88rem;
    max-height: 88rem;
  }

  h3 {
    font-size: 14rem;
    font-weight: 500;
    color: ${({ theme }) => theme["light-300"]};
  }

  p {
    display: none;

    font-size: 14rem;
    line-height: 1.6;
    color: ${({ theme }) => theme["light-400"]};

    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  strong {
    font-weight: 400;
    color: ${({ theme }) => theme["cake-200"]};
  }

  > div {
    width: 100%;

    button {
      width: 100%;
      padding-block: 4rem;
    }
  }

  @media (min-width: 600px) {
    img {
      max-width: 176rem;
      max-height: 176rem;
    }

    h3 {
      font-size: 24rem;
      font-weight: 700;
    }

    p {
      display: -webkit-box;
    }

    strong {
      font-size: 32rem;
    }

    > div {
      width: auto;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16rem;

      > button {
        padding: 12rem 24rem;
      }
    }
  }
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 14rem;

  > button {
    line-height: 0;
    border: none;
    background: none;
    color: ${({ theme }) => theme["light-100"]};
  }

  @media (max-width: 599px) {
    display: none;
  }
`
