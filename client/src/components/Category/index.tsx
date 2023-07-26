import { SwiperSlide } from "swiper/react"
import { Navigation, A11y } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/a11y"

import { Container, SwiperContainer } from "./styles"

import { DishType } from "../../contexts/DishesContext"

import { Dish } from "../Dish"

interface CategoryProps {
  category: string
  dishes: DishType[]
}

export function Category({ category, dishes }: CategoryProps) {
  return (
    <Container>
      <h2>{category}</h2>

      <SwiperContainer
        modules={[Navigation, A11y]}
        spaceBetween={16}
        slidesPerView={1.5}
        navigation={{
          enabled: false
        }}
        grabCursor={true}
        breakpoints={{
          425: {
            navigation: {
              enabled: false
            },
            grabCursor: true,
            spaceBetween: 16,
            slidesPerView: 1.5
          },
          768: {
            navigation: {
              enabled: false
            },
            grabCursor: true,
            spaceBetween: 16,
            slidesPerView: 2.5
          },
          1120: {
            navigation: {
              enabled: true
            },
            grabCursor: false,
            spaceBetween: 16,
            slidesPerView: 3.3
          }
        }}
      >
        {dishes.map(dish => (
          <SwiperSlide key={dish.id}>
            <Dish dish={dish} />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </Container>
  )
}
