"use client";

import Swiper from "swiper";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./BackgroundSlider.css";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DUMMY_HERO_BG_IMGS } from "@/dummy-data";
import HeroSlide from "../Slide";
import getAverageColorsFromImages from "@/app/utils/getAverageColorFromImage";

type Props = {
  setBannerBgColor: Dispatch<SetStateAction<any>>;
};

function BackgroundSlider({ setBannerBgColor }: Props) {
  const [colorsArray, setColorsArray] = useState<any>();

  const slides = useMemo(
    () =>
      DUMMY_HERO_BG_IMGS.map((el, index) => (
        <HeroSlide key={index} imageUrl={el} />
      )),
    []
  );

  function changeBannerBgColor(swiper: Swiper) {
    if (colorsArray) setBannerBgColor(colorsArray[swiper.realIndex]);
  }

  useEffect(() => {
    let array;
    async function getAndSetColorsArray() {
      array = await getAverageColorsFromImages(DUMMY_HERO_BG_IMGS);
      setColorsArray(array);
    }
    getAndSetColorsArray();
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (_: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };

  const swiperParams = {
    pagination: pagination,
    modules: [Pagination, Autoplay],
    className: "mySwiper",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 2000,
  };

  return (
    <div className="hero-slider">
      <SwiperReact {...swiperParams} onSnapIndexChange={changeBannerBgColor}>
        {slides.map((el, index) => (
          <SwiperSlide key={index}>{el}</SwiperSlide>
        ))}
      </SwiperReact>
    </div>
  );
}

export default BackgroundSlider;
