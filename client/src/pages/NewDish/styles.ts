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
`
