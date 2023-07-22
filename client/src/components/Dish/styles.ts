import styled from "styled-components"

export const Container = styled.article`
  padding: 24rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme["dark-300"]};
  background: ${({ theme }) => theme["dark-200"]};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rem;

  text-align: center;

  h3 {
    font-size: 24rem;
    font-weight: 700;
    color: ${({ theme }) => theme["light-300"]};
  }

  p {
    font-size: 14rem;
    color: ${({ theme }) => theme["light-400"]};
    line-height: 1.6;
  }

  strong {
    font-weight: 400;
    font-size: 32rem;
    color: ${({ theme }) => theme["cake-200"]};
  }
`
