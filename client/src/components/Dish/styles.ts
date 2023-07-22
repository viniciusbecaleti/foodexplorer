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

  strong {
    font-weight: 400;
    color: ${({ theme }) => theme["cake-200"]};
  }

  > button:last-child {
    width: 100%;
    padding-block: 4rem;
  }
`
