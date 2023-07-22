import styled from "styled-components"

export const Container = styled.section`
  > h2 {
    font-size: 18rem;
    font-weight: 500;
    color: ${({ theme }) => theme["light-300"]};
    margin-bottom: 24rem;
  }
`
