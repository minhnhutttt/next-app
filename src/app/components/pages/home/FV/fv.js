"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import FVCard from "./fvCard";
import FVCardNav from "./fvCardNav";

export default function FV() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainSliderRef = useRef(null);
  const navSliderRef = useRef(null);

  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    arrows: false,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    cssEase: "linear",
    asNavFor: navSliderRef.current,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  const navSliderSettings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    focusOnSelect: false,
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1500,
    variableWidth: true,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    adaptiveHeight: true,
    asNavFor: mainSliderRef.current,
  };

  const getColorByIndex = (index) => {
    switch (index) {
      case 0:
        return "#99CBF9";
      case 1:
        return "#D7B1FC";
      case 2:
        return "#DEFFAC";
      case 3:
        return "#FFD2F0";
      case 4:
        return "#FDFFAA";
      case 5:
        return "#FFDBF7";
      default:
        return "";
    }
  };
  return (
    <main>
      <div
        className="relative px-5 py-20 md:px-14"
        style={{ backgroundColor: getColorByIndex(currentSlide) }}
      >
        <div className="mx-auto w-full max-w-[1328px]">
          <div className="flex gap-[3.333vw] max-md:flex-col-reverse max-md:gap-[10vw] min-[1440px]:gap-12">
            <div className="max-w-[720px] md:w-[50vw]">
              <div className="px-5 js-slider-main">
                <Slider ref={mainSliderRef} {...mainSliderSettings}>
                  <FVCard
                    anchor="/#account"
                    type="ACCOUNT"
                    text="アドレス"
                    image="/images/slider-account.png"
                  />
                  <FVCard
                    anchor="/#chat"
                    type="CHAT"
                    text="チャット"
                    image="/images/slider-chat.png"
                  />
                  <FVCard
                    anchor="/#domain"
                    type="DOMAIN"
                    text="ドメイン"
                    image="/images/slider-domain.png"
                  />
                  <FVCard
                    anchor="/#tag"
                    type="TAG"
                    text="タグ"
                    image="/images/slider-tag.png"
                  />
                  <FVCard
                    anchor="/#scan"
                    type="SCAN"
                    text="スキャン"
                    image="/images/slider-scan.png"
                  />
                  <FVCard
                    anchor="/#coupon"
                    type="COUPON"
                    text="クーポン"
                    image="/images/slider-coupon.png"
                  />
                </Slider>
              </div>
              <div className="js-slider-nav -mt-7">
                <div className="border-x-2 border-black pb-2.5">
                  <Slider ref={navSliderRef} {...navSliderSettings}>
                    <FVCardNav type="ACCOUNT" text="アドレス" />
                    <FVCardNav type="CHAT" text="チャット" />
                    <FVCardNav type="DOMAIN" text="ドメイン" />
                    <FVCardNav type="TAG" text="タグ" />
                    <FVCardNav type="SCAN" text="スキャン" />
                    <FVCardNav type="COUPON" text="クーポン" />
                  </Slider>
                </div>
              </div>
            </div>
            <div className="flex flex-1 mt-2 max-md:justify-center">
              <div className="relative pt-[18vw] text-center max-md:px-[10vw] md:pr-[5.556vw] md:pt-[7.292vw] min-[1440px]:pr-20 min-[1440px]:pt-[105px]">
                <div className="absolute right-0 top-0 flex aspect-[179/146] w-[24vw] items-center justify-center bg-[url('/images/bubble.png')] bg-cover font-fredoka text-[4vw] font-bold tracking-wider md:w-[12.431vw] md:text-[2.222vw] min-[1440px]:w-[179px] min-[1440px]:text-[32px]">
                  PORTAL
                </div>
                <p className="text-[4vw] leading-none tracking-[0.9em] text-[#3D3D3D] md:text-[1.667vw] min-[1440px]:text-[24px]">
                  じせだい
                </p>
                <h4 className="text-stroke-lg mb-10 break-keep text-[18vw] leading-[0.8] tracking-[0.24em] md:text-[8.889vw] min-[1440px]:text-[128px]">
                  <span className="text-[#2157E3]">次</span>
                  <span className="text-[#8F01FE]">世</span>
                  <span className="text-[#98FE01]">代</span>
                </h4>
                <h4 className="text-stroke-lg mb-5 break-keep text-[18vw] leading-[0.8] tracking-[0.24em] md:text-[8.889vw] min-[1440px]:text-[128px]">
                  <span className="text-[#E70012]">ア</span>
                  <span className="text-[#F9FE01]">プ</span>
                  <span className="text-[#FE01F4]">リ</span>
                </h4>
                <p className="text-[4vw] leading-none tracking-[0.9em] text-[#3D3D3D] md:text-[1.667vw] min-[1440px]:text-[24px]">
                  だいしゅうごう
                </p>
                <h4 className="text-stroke-lg break-keep text-[18vw] leading-[0.8] tracking-[0.24em] md:text-[8.889vw] min-[1440px]:text-[128px]">
                  <span className="text-[#22ABF3]">大</span>
                  <span className="text-[#FF7F02]">集</span>
                  <span className="text-[#00A90C]">合</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
