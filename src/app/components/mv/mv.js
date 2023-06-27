'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MVThumb from './mvThumb';

export default function MV() {
  const settings = {
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
    dotsClass: 'slider-dots',
  };
  const sliderRef = useRef(null);

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };
  return (
    <div className="slider mx-auto w-full max-w-[1740px]">
      <Slider {...settings} ref={sliderRef}>
        <div>
          <img src="/mv01.jpg" alt="" />
        </div>
        <div>
          <img src="/mv02.jpg" alt="" />
        </div>
        <div>
          <img src="/mv03.jpg" alt="" />
        </div>
        <div>
          <img src="/mv04.jpg" alt="" />
        </div>
      </Slider>
      <div className="border-b border-[#8d8d8d] pb-2.5 pt-4">
        <div className="flex">
          <MVThumb onClick={() => goToSlide(0)} imgSrc="/thumb-01.jpg">
            空飛ぶゴーカート
          </MVThumb>
          <MVThumb onClick={() => goToSlide(1)} imgSrc="/thumb-02.jpg">
            天叢雲剣
          </MVThumb>
          <MVThumb onClick={() => goToSlide(2)} imgSrc="/thumb-03.jpg">
            コールドデータセンター
          </MVThumb>
          <MVThumb onClick={() => goToSlide(3)} imgSrc="/thumb-04.jpg">
            ソーラーサンバ
          </MVThumb>
        </div>
      </div>
    </div>
  );
}
