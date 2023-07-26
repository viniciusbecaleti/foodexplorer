import styled from "styled-components"
import { Swiper } from "swiper/react"

export const Container = styled.section`
  > h2 {
    font-size: 18rem;
    font-weight: 500;
    color: ${({ theme }) => theme["light-300"]};
    margin-bottom: 24rem;
  }

  @media (min-width: 600px) {
    > h2 {
      font-size: 32rem;
    }
  }
`

export const SwiperContainer = styled(Swiper)`
  position: relative;

  @media (min-width: 1120px) {
    padding-inline: 60px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 90rem;
      height: 100%;
      z-index: 2;
      pointer-events: none;
    }

    &::before {
      top: 0;
      left: 0;
      background: linear-gradient(90deg, rgba(0,10,15,1) 0%, transparent 100%);
    }

    &::after {
      top: 0;
      right: 0;
      background: linear-gradient(90deg, transparent 0%, rgba(0,10,15,1) 100%);
    }
  }
`
