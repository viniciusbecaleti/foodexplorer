import { Link } from "react-router-dom"

import styled from "styled-components"

export const Container = styled.header`
  background: ${({ theme }) => theme["dark-600"]};
`

export const Content = styled.div`
  height: 104rem;
  max-width: 1168rem;
  margin-inline: auto;
  padding-inline: 24rem;

  display: flex;
  align-items: center;
  gap: 16rem;

  @media (min-width: 1025px) {
    justify-content: space-between;
    gap: 32rem;
  }
`

export const MenuButton = styled.button`
  border: none;
  background: none;
  line-height: 0;
  color: ${({ theme }) => theme["light-100"]};

  @media (min-width: 1025px) {
    display: none;
  }
`

export const Logo = styled.div`
  flex: 1;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0 8rem;

  img {
    max-height: 32rem;
  }

  span {
    font-size: 12rem;
    color: ${({ theme }) => theme["cake-200"]};
  }

  @media (min-width: 1025px) {
    flex: inherit;
    justify-content: initial;
  }
`

export const InputWrapper = styled.div`
  flex: 1;

  height: 56rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-inline: 32rem;
  border-radius: 5px;

  background: ${({ theme }) => theme["dark-900"]};

  svg {
    color: ${({ theme }) => theme["light-400"]};
  }

  input {
    max-width: 344rem;
    background: none;
    box-shadow: none;
  }

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme["cake-100"]};
  }

  @media (max-width: 1024px) {
    display: none;
  }
`

export const Orders = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  color: ${({ theme }) => theme["light-100"]};

  position: relative;

  span:first-of-type {
    position: absolute;
    top: -5rem;
    right: -5rem;

    width: 20rem;
    height: 20rem;

    background: ${({ theme }) => theme["tomato-200"]};

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14rem;
  }

  span:last-of-type {
    display: none;
  }

  @media (min-width: 1025px) {
    height: 56rem;
    padding-inline: 32rem;
    border-radius: 5px;
    background: ${({ theme }) => theme["tomato-200"]};

    span:first-of-type {
      display: none;
    }

    span:last-of-type {
      display: block;
    }
  }
`

export const NewDishButton = styled(Link)`
  height: 56rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14rem;
  color: ${({ theme }) => theme["light-100"]};

  padding-inline: 32rem;
  border-radius: 5px;

  background: ${({ theme }) => theme["tomato-200"]};

  @media (max-width: 1024px) {
    display: none;
  }
`

export const ExitButton = styled.button`
  border: none;
  background: none;
  line-height: 0;
  color: ${({ theme }) => theme["light-100"]};

  @media (max-width: 1024px) {
    display: none;
  }
`
