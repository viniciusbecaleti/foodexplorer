import { useState } from "react"
import { Swiper as SwiperProps } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Controller } from "swiper/modules"
import { Navigation, A11y, Keyboard } from "swiper/modules"
import { CaretLeft, CaretRight } from "@phosphor-icons/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"
import "swiper/css/a11y"
import "swiper/css/keyboard"

import { Container, NextButton, PrevButton, Slider } from "./styles"

import { useWindowResize } from "../../hooks/useWindowResize"

import { Dish } from "../Dish"

export function Category() {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperProps | null>(null)
  const [isPrevEnabled, setIsPrevEnabled] = useState(false)
  const [isNextEnabled, setIsNextEnabled] = useState(false)

  const [width,] = useWindowResize()

  function toggleNavigation(swiper: SwiperProps) {
    if (swiper.isBeginning === isPrevEnabled) {
      setIsPrevEnabled(!swiper.isBeginning)
    }

    if (swiper.isEnd === isNextEnabled) {
      setIsNextEnabled(!swiper.isEnd)
    }
  }

  return (
    <Container>
      <h2>Refeições</h2>

      <Slider>
        {width > 768 && (
          <PrevButton
            type="button"
            onClick={() => controlledSwiper?.slidePrev()}
            disabled={!isPrevEnabled}
          >
            <CaretLeft size={40} />
          </PrevButton>
        )}

        <Swiper
          modules={[Navigation, A11y, Keyboard, Controller]}
          controller={{ control: controlledSwiper }}
          onSwiper={setControlledSwiper}
          spaceBetween={16}
          slidesPerView={1.5}
          grabCursor
          navigation={{
            nextEl: null,
            prevEl: null
          }}
          keyboard
          breakpoints={{
            640: {
              spaceBetween: 28,
              slidesPerView: 2.5
            },
            1120: {
              spaceBetween: 28,
              slidesPerView: 3.5
            }
          }}
          onInit={swiper => !swiper.isEnd && setIsNextEnabled(true)}
          onSlideChange={toggleNavigation}
          onSliderMove={toggleNavigation}
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

        {width > 768 && (
          <NextButton
            type="button"
            onClick={() => controlledSwiper?.slideNext()}
            disabled={!isNextEnabled}
          >
            <CaretRight size={40} />
          </NextButton>
        )}
      </Slider>
    </Container>
  )
}
