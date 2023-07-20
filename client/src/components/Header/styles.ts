import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.header`
  background: ${({ theme }) => theme["dark-600"]};
`

export const Content = styled.div`
  width: 100%;
  max-width: 1168rem;
  margin-inline: auto;
  padding: 24rem;

  display: flex;
  align-items: center;
  gap: 32rem;

  position: relative;

  @media (max-width: 768px) {
    gap: 16rem;
  }
`

export const OpenMenu = styled.button`
  border: none;
  background: none;
  line-height: 0;
  color: ${({ theme }) => theme["light-100"]};
`

export const Logo = styled(Link)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: end;
  gap: 0 8rem;

  img {
    width: 197rem;
  }

  span {
    font-family: "Poppins", sans-serif;
    font-size: 12rem;
    color: ${({ theme }) => theme["cake-200"]};
  }

  @media (max-width: 768px) {
    flex: 1;

    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`

export const Nav = styled.nav`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: end;
  gap: 32rem;

  @media (max-width: 768px) {
    flex: initial;
  }
`

export const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;

  font-family: "Poppins", sans-serif;
  font-size: 14rem;
  font-weight: 500;
  color: ${({ theme }) => theme["light-100"]};
  white-space: nowrap;

  padding: 12rem 32rem;
  border-radius: 5px;
  background: ${({ theme }) => theme["tomato-100"]};
`

export const Orders = styled(Link)`
  line-height: 0;
  color: ${({ theme }) => theme["light-100"]};
  position: relative;

  span {
    position: absolute;
    top: -5rem;
    right: -5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20rem;
    height: 20rem;

    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14rem;

    border-radius: 50%;

    background: ${({ theme }) => theme["tomato-100"]};
  }
`

export const LogOut = styled.button`
  border: none;
  background: none;
  line-height: 0;
  color: ${({ theme }) => theme["light-100"]};
`
