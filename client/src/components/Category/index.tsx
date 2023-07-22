import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, A11y } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/a11y"

import { Container } from "./styles"

import { Dish } from "../Dish"

export function Category() {
  return (
    <Container>
      <h2>Refeições</h2>

      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={16}
        slidesPerView={1.5}
        navigation={{
          enabled: false
        }}
        breakpoints={{
          425: {
            navigation: {
              enabled: true
            },
            spaceBetween: 16,
            slidesPerView: 2
          },
          768: {
            spaceBetween: 16,
            slidesPerView: 3
          },
          1024: {
            spaceBetween: 16,
            slidesPerView: 3.5
          }
        }}
      >
        <SwiperSlide>
          <Dish />
        </SwiperSlide>

        <SwiperSlide>
          <Dish />
        </SwiperSlide>

        <SwiperSlide>
          <Dish />
        </SwiperSlide>

        <SwiperSlide>
          <Dish />
        </SwiperSlide>

        <SwiperSlide>
          <Dish />
        </SwiperSlide>

        <SwiperSlide>
          <Dish />
        </SwiperSlide>

        <SwiperSlide>
          <Dish />
        </SwiperSlide>

        <SwiperSlide>
          <Dish />
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}
