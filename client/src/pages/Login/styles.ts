import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 1168rem;
  margin-inline: auto;
  padding-inline: 24rem;

  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    gap: 64rem;

    padding: 24rem;
  }
`

export const Form = styled.form`
  width: 100%;
  max-width: 476rem;
  padding: 64rem;
  border-radius: 16px;

  background: ${({ theme }) => theme["dark-700"]};

  display: flex;
  flex-direction: column;
  gap: 32rem;

  h1 {
    font-size: 32rem;
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 8rem;

    span {
      color: ${({ theme }) => theme["light-400"]};
    }

    small {
      color: ${({ theme }) => theme["light-700"]};
    }
  }

  a {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14rem;
    text-align: center;
    color: ${({ theme }) => theme["light-100"]};
  }

  @media (max-width: 900px) {
    padding: initial;
    max-width: 316rem;
    background: none;

    h1 {
      display: none;
    }
  }
`
