import styled from "styled-components"

export const Container = styled.header`
  background: ${({ theme }) => theme["dark-600"]};
`

export const Content = styled.div`
  width: 100%;
  height: 104rem;
  max-width: 1168rem;
  margin-inline: auto;
  padding-inline: 24rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32rem;

  button[data-button="open"] {
    display: none;

    color: ${({ theme }) => theme["light-100"]};
    line-height: 0;

    border: none;
    background: none;
  }

  a.logo {
    img {
      width: 197rem;
    }
  }

  div.search {
    flex: 1;
    height: 48rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;

    background: ${({ theme }) => theme["dark-900"]};

    input {
      max-width: 344rem;
      background: none;
      box-shadow: none;
    }

    &:focus-within {
      box-shadow: 0 0 0 2px ${({ theme }) => theme["cake-100"]};
    }
  }

  button.search-mobile {
    display: none;

    line-height: 0;
    color: ${({ theme }) => theme["light-100"]};

    border: none;
    border-radius: 5px;
    background: none;

    padding: 12rem;

    &:hover {
      background: ${({ theme }) => theme["dark-900"]};
    }
  }

  a.button-link {
    width: 216rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12rem;

    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14rem;
    color: ${({ theme }) => theme["light-100"]};

    padding: 12rem 32rem;
    border-radius: 5px;

    background: ${({ theme }) => theme["tomato-100"]};

    &:hover {
      background: ${({ theme }) => theme["tomato-200"]};
    }
  }

  a.pedidos-mobile {
    display: none;

    color: ${({ theme }) => theme["light-100"]};
    line-height: 0;

    position: relative;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 20rem;
      height: 20rem;

      position: absolute;
      top: -4rem;
      right: -4rem;

      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 14rem;

      border-radius: 50%;

      background: ${({ theme }) => theme["tomato-200"]};
    }
  }

  a.logout {
    color: ${({ theme }) => theme["light-100"]};
  }

  @media (max-width: 1000px) {
    gap: 16rem;

    div.search {
      display: none;
    }

    button.search-mobile {
      display: block;
    }

    a.logo {
      flex: 1;
    }
  }

  @media (max-width: 768px) {
    button[data-button="open"] {
      display: block;
    }

    a.logo {
      img {
        margin: 0 auto;
      }
    }

    a.button-link {
      display: none;
    }

    a.pedidos-mobile {
      display: block;
    }

    a.logout {
      display: none;
    }
  }
`
