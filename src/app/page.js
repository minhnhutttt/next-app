'use client'
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainSliderRef = useRef(null);
  const navSliderRef = useRef(null);

  const mainSliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true ,
    autoplaySpeed: 1500,
    fade: true,
    arrows: false,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    cssEase: 'linear',
    asNavFor: navSliderRef.current,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  const navSliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
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
        return '#99CBF9';
      case 1:
        return '#D7B1FC';
      case 2:
        return '#DEFFAC';
      case 3:
        return '#FFD2F0';
      case 4:
        return '#FDFFAA';
      case 5:
        return '#FFDBF7';
      default:
        return '';
    }
  };
  return (
    <main>
      <div className="relative min-h-screen px-14" style={{ backgroundColor: getColorByIndex(currentSlide) }}>
        <div className="h-[80px] px-2 flex justify-end items-center tracking-[0.2em]">
          <Link href="/contact" className="font-fredoka font-bold text-[18px] block">CONTACT
          </Link>
        </div>
        <div className="w-full max-w-[1328px] mx-auto">
          <div className="flex min-[1440px]:gap-12 gap-[3.333vw]">
            <div className="w-[50vw] max-w-[720px]">
            <div className="js-slider-main">
              <Slider ref={mainSliderRef} {...mainSliderSettings}>
                <div>
                  <div className="relative flex items-center justify-center w-[33.472vw] min-[1440px]:w-[482px] mx-auto rounded-[10px] border border-black bg-[#7A9FFF] [box-shadow:0px_2.692px_2.692px_0px_rgba(0,_0,_0,_0.25)] overflow-hidden">
                    <figure>
                      <img className="w-full" src="/images/slider-account.png" alt="ACCOUT" />
                    </figure>
                    <div className="absolute min-[1440px]:bottom-[76px] bottom-[5.278vw]">
                      <p className="text-center text-stroke text-[#2157E3] text-[4.722vw] min-[1440px]:text-[68px] leading-none">次世代</p>
                      <div className="flex justify-center pt-3 pb-1">
                        <p className="font-fredoka text-[2.222vw] min-[1440px]:text-[32px] bg-white px-[12px] py-1.5 border-y-2 border-x-[0.5px] border-black leading-none font-bold tracking-widest">ACCOUT</p>
                      </div>
                      <p className="text-center text-stroke text-[#2157E3] text-[4.722vw] min-[1440px]:text-[68px] leading-none">アカウント</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative flex items-center justify-center w-[33.472vw] min-[1440px]:w-[482px] mx-auto rounded-[10px] border border-black bg-[#AC7AFF] [box-shadow:0px_2.692px_2.692px_0px_rgba(0,_0,_0,_0.25)] overflow-hidden">
                    <figure>
                      <img className="w-full" src="/images/slider-chat.png" alt="CHAT" />
                    </figure>
                    <div className="absolute min-[1440px]:bottom-[76px] bottom-[5.278vw]">
                      <p className="text-center text-stroke text-[#8F01FE] text-[4.722vw] min-[1440px]:text-[68px] leading-none">次世代</p>
                      <div className="flex justify-center pt-3 pb-1">
                        <p className="font-fredoka text-[2.222vw] min-[1440px]:text-[32px] bg-white px-[12px] py-1.5 border-y-2 border-x-[0.5px] border-black leading-none font-bold tracking-widest">CHAT</p>
                      </div>
                      <p className="text-center text-stroke text-[#8F01FE] text-[4.722vw] min-[1440px]:text-[68px] leading-none">チャット</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative flex items-center justify-center w-[33.472vw] min-[1440px]:w-[482px] mx-auto rounded-[10px] border border-black bg-[#C5FA77] [box-shadow:0px_2.692px_2.692px_0px_rgba(0,_0,_0,_0.25)] overflow-hidden">
                    <figure>
                      <img className="w-full" src="/images/slider-domain.png" alt="DOMAIN" />
                    </figure>
                    <div className="absolute min-[1440px]:bottom-[76px] bottom-[5.278vw]">
                      <p className="text-center text-stroke text-[#98FE01] text-[4.722vw] min-[1440px]:text-[68px] leading-none">次世代</p>
                      <div className="flex justify-center pt-3 pb-1">
                        <p className="font-fredoka text-[2.222vw] min-[1440px]:text-[32px] bg-white px-[12px] py-1.5 border-y-2 border-x-[0.5px] border-black leading-none font-bold tracking-widest">DOMAIN</p>
                      </div>
                      <p className="text-center text-stroke text-[#98FE01] text-[4.722vw] min-[1440px]:text-[68px] leading-none">ドメイン</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative flex items-center justify-center w-[33.472vw] min-[1440px]:w-[482px] mx-auto rounded-[10px] border border-black bg-[#FFA4A4] [box-shadow:0px_2.692px_2.692px_0px_rgba(0,_0,_0,_0.25)] overflow-hidden">
                    <figure>
                      <img className="w-full" src="/images/slider-tag.png" alt="TAG" />
                    </figure>
                    <div className="absolute min-[1440px]:bottom-[76px] bottom-[5.278vw]">
                      <p className="text-center text-stroke text-[#E70012] text-[4.722vw] min-[1440px]:text-[68px] leading-none">次世代</p>
                      <div className="flex justify-center pt-3 pb-1">
                        <p className="font-fredoka text-[2.222vw] min-[1440px]:text-[32px] bg-white px-[12px] py-1.5 border-y-2 border-x-[0.5px] border-black leading-none font-bold tracking-widest">TAG</p>
                      </div>
                      <p className="text-center text-stroke text-[#E70012] text-[4.722vw] min-[1440px]:text-[68px] leading-none">タグ</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative flex items-center justify-center w-[33.472vw] min-[1440px]:w-[482px] mx-auto rounded-[10px] border border-black bg-[#FBF18D] [box-shadow:0px_2.692px_2.692px_0px_rgba(0,_0,_0,_0.25)] overflow-hidden">
                    <figure>
                      <img className="w-full" src="/images/slider-scan.png" alt="SCAN" />
                    </figure>
                    <div className="absolute min-[1440px]:bottom-[76px] bottom-[5.278vw]">
                      <p className="text-center text-stroke text-[#F9FE01] text-[4.722vw] min-[1440px]:text-[68px] leading-none">次世代</p>
                      <div className="flex justify-center pt-3 pb-1">
                        <p className="font-fredoka text-[2.222vw] min-[1440px]:text-[32px] bg-white px-[12px] py-1.5 border-y-2 border-x-[0.5px] border-black leading-none font-bold tracking-widest">SCAN</p>
                      </div>
                      <p className="text-center text-stroke text-[#F9FE01] text-[4.722vw] min-[1440px]:text-[68px] leading-none">スキャン</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative flex items-center justify-center w-[33.472vw] min-[1440px]:w-[482px] mx-auto rounded-[10px] border border-black bg-[#EFB0E5] [box-shadow:0px_2.692px_2.692px_0px_rgba(0,_0,_0,_0.25)] overflow-hidden">
                    <figure>
                      <img className="w-full" src="/images/slider-coupon.png" alt="COUPON" />
                    </figure>
                    <div className="absolute min-[1440px]:bottom-[76px] bottom-[5.278vw]">
                      <p className="text-center text-stroke text-[#FE01F4] text-[4.722vw] min-[1440px]:text-[68px] leading-none">次世代</p>
                      <div className="flex justify-center pt-3 pb-1">
                        <p className="font-fredoka text-[2.222vw] min-[1440px]:text-[32px] bg-white px-[12px] py-1.5 border-y-2 border-x-[0.5px] border-black leading-none font-bold tracking-widest">COUPON</p>
                      </div>
                      <p className="text-center text-stroke text-[#FE01F4] text-[4.722vw] min-[1440px]:text-[68px] leading-none">クーポン</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          <div className="-mt-7 js-slider-nav">
            <div className="border-x-2 border-black pb-2.5">
              <Slider ref={navSliderRef} {...navSliderSettings}>
                <div className='px-[3px] pt-3'>
                  <div className="relative w-[8.333vw] h-[7.917vw] min-[1440px]:w-[120px] min-[1440px]:h-[114px] flex items-center justify-center bg-[#7A9FFF] rounded-[20px] border-black border-[3px]">
                  <div className="triangle absolute top-[-3px] left-0 right-0 ">
                    <div className="w-3 h-3 mx-auto border-t-2 border-l-2 border-black [transform:translate(0,-50%)_scale(1,1.5)_rotate(45deg)] bg-[#7A9FFF] "></div>
                  </div>
                    <div>
                      <p className="text-center text-stroke-sm text-[#2157E3] text-[1.667vw] min-[1440px]:text-[24px] leading-none">次世代</p>
                      <div className="flex justify-center pt-1">
                        <p className="font-fredoka text-[10px] lg:text-[13px] bg-white px-[3px]  border-y border-black leading-none font-bold tracking-widest">ACCOUNT</p>
                      </div>
                      <p className="text-center text-stroke-sm text-[#2157E3] text-[1.389vw] min-[1440px]:text-[20px] leading-none">アカウント</p>
                    </div>
                  </div>
                </div>
                <div className='px-[3px] pt-3'>
                  <div className="relative w-[8.333vw] h-[7.917vw] min-[1440px]:w-[120px] min-[1440px]:h-[114px] flex items-center justify-center bg-[#D7B1FC] rounded-[20px] border-black border-[3px]">
                  <div className="triangle absolute top-[-3px] left-0 right-0 ">
                    <div className="w-3 h-3 mx-auto border-t-2 border-l-2 border-black [transform:translate(0,-50%)_scale(1,1.5)_rotate(45deg)] bg-[#D7B1FC] "></div>
                  </div>
                    <div>
                      <p className="text-center text-stroke-sm text-[#8F01FE] text-[1.667vw] min-[1440px]:text-[24px] leading-none">次世代</p>
                      <div className="flex justify-center pt-1">
                        <p className="font-fredoka text-[10px] lg:text-[13px] bg-white px-[3px]  border-y border-black leading-none font-bold tracking-widest">CHAT</p>
                      </div>
                      <p className="text-center text-stroke-sm text-[#8F01FE] text-[1.389vw] min-[1440px]:text-[20px] leading-none">チャット</p>
                    </div>
                  </div>
                </div>
                <div className='px-[3px] pt-3'>
                  <div className="relative w-[8.333vw] h-[7.917vw] min-[1440px]:w-[120px] min-[1440px]:h-[114px] flex items-center justify-center bg-[#C5FA77] rounded-[20px] border-black border-[3px]">
                  <div className="triangle absolute top-[-3px] left-0 right-0 ">
                    <div className="w-3 h-3 mx-auto border-t-2 border-l-2 border-black [transform:translate(0,-50%)_scale(1,1.5)_rotate(45deg)] bg-[#C5FA77] "></div>
                  </div>
                    <div>
                      <p className="text-center text-stroke-sm text-[#98FE01] text-[1.667vw] min-[1440px]:text-[24px] leading-none">次世代</p>
                      <div className="flex justify-center pt-1">
                        <p className="font-fredoka text-[10px] lg:text-[13px] bg-white px-[3px]  border-y border-black leading-none font-bold tracking-widest">DOMAIN</p>
                      </div>
                      <p className="text-center text-stroke-sm text-[#98FE01] text-[1.389vw] min-[1440px]:text-[20px] leading-none">ドメイン</p>
                    </div>
                  </div>
                </div>
                <div className='px-[3px] pt-3'>
                  <div className="relative w-[8.333vw] h-[7.917vw] min-[1440px]:w-[120px] min-[1440px]:h-[114px] flex items-center justify-center bg-[#FFA4A4] rounded-[20px] border-black border-[3px]">
                  <div className="triangle absolute top-[-3px] left-0 right-0 ">
                    <div className="w-3 h-3 mx-auto border-t-2 border-l-2 border-black [transform:translate(0,-50%)_scale(1,1.5)_rotate(45deg)] bg-[#FFA4A4] "></div>
                  </div>
                    <div>
                      <p className="text-center text-stroke-sm text-[#E70012] text-[1.667vw] min-[1440px]:text-[24px] leading-none">次世代</p>
                      <div className="flex justify-center pt-1">
                        <p className="font-fredoka text-[10px] lg:text-[13px] bg-white px-[3px]  border-y border-black leading-none font-bold tracking-widest">TAG</p>
                      </div>
                      <p className="text-center text-stroke-sm text-[#E70012] text-[1.389vw] min-[1440px]:text-[20px] leading-none">タグ</p>
                    </div>
                  </div>
                </div>
                <div className='px-[3px] pt-3'>
                  <div className="relative w-[8.333vw] h-[7.917vw] min-[1440px]:w-[120px] min-[1440px]:h-[114px] flex items-center justify-center bg-[#FBF18D] rounded-[20px] border-black border-[3px]">
                  <div className="triangle absolute top-[-3px] left-0 right-0 ">
                    <div className="w-3 h-3 mx-auto border-t-2 border-l-2 border-black [transform:translate(0,-50%)_scale(1,1.5)_rotate(45deg)] bg-[#FBF18D] "></div>
                  </div>
                    <div>
                      <p className="text-center text-stroke-sm text-[#F9FE01] text-[1.667vw] min-[1440px]:text-[24px] leading-none">次世代</p>
                      <div className="flex justify-center pt-1">
                        <p className="font-fredoka text-[10px] lg:text-[13px] bg-white px-[3px]  border-y border-black leading-none font-bold tracking-widest">SCAN</p>
                      </div>
                      <p className="text-center text-stroke-sm text-[#F9FE01] text-[1.389vw] min-[1440px]:text-[20px] leading-none">スキャン</p>
                    </div>
                  </div>
                </div>
                <div className='px-[3px] pt-3'>
                  <div className="relative w-[8.333vw] h-[7.917vw] min-[1440px]:w-[120px] min-[1440px]:h-[114px] flex items-center justify-center bg-[#EFB0E5] rounded-[20px] border-black border-[3px]">
                  <div className="triangle absolute top-[-3px] left-0 right-0 ">
                    <div className="w-3 h-3 mx-auto border-t-2 border-l-2 border-black [transform:translate(0,-50%)_scale(1,1.5)_rotate(45deg)] bg-[#EFB0E5] "></div>
                  </div>
                    <div>
                      <p className="text-center text-stroke-sm text-[#FE01F4] text-[1.667vw] min-[1440px]:text-[24px] leading-none">次世代</p>
                      <div className="flex justify-center pt-1">
                        <p className="font-fredoka text-[10px] lg:text-[13px] bg-white px-[3px]  border-y border-black leading-none font-bold tracking-widest">COUPON</p>
                      </div>
                      <p className="text-center text-stroke-sm text-[#FE01F4] text-[1.389vw] min-[1440px]:text-[20px] leading-none">クーポン</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            </div>
            </div>
            <div className="flex flex-1 mt-2">
              <div className="relative text-center pt-[7.292vw] min-[1440px]:pt-[105px] pr-[5.556vw] min-[1440px]:pr-20">
                <div className="absolute top-0 right-0 bg-[url('/images/bubble.png')] bg-cover w-[12.431vw] min-[1440px]:w-[179px] aspect-[179/146] flex items-center justify-center font-fredoka text-[2.222vw] min-[1440px]:text-[32px] font-bold tracking-wider"> PORTAL</div>
                <p className="text-[#3D3D3D] text-[1.667vw] min-[1440px]:text-[24px] tracking-[0.9em] leading-none">じせだい</p>
                <h4 className="text-stroke-lg text-[8.889vw] min-[1440px]:text-[128px] tracking-[0.24em] leading-[0.8] mb-10 break-keep">
                  <span className="text-[#2157E3]">次</span>
                  <span className="text-[#8F01FE]">世</span>
                  <span className="text-[#98FE01]">代</span>
                </h4>
                <h4 className="text-stroke-lg text-[8.889vw] min-[1440px]:text-[128px] tracking-[0.24em] leading-[0.8] mb-5 break-keep">
                  <span className="text-[#E70012]">ア</span>
                  <span className="text-[#F9FE01]">プ</span>
                  <span className="text-[#FE01F4]">リ</span>
                </h4>
                <p className="text-[#3D3D3D] text-[1.667vw] min-[1440px]:text-[24px] tracking-[0.9em] leading-none">だいしゅうごう</p>
                <h4 className="text-stroke-lg text-[8.889vw] min-[1440px]:text-[128px] tracking-[0.24em] leading-[0.8] break-keep">
                  <span className="text-[#22ABF3]">大</span>
                  <span className="text-[#FF7F02]">集</span>
                  <span className="text-[#00A90C]">合</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-2">
          <div className="bg-[#7A9FFF] flex justify-center items-center relative">
            <figure>
              <img src="/images/image-account.png" alt="ACCOUNT" />
            </figure>
            <div className="absolute min-[1440px]:bottom-[76px] bottom-[5.278vw]">
              <p className="text-center text-stroke-lg text-[#2157E3] text-[6.944vw] min-[1440px]:text-[100px] leading-none">次世代</p>
              <div className="flex justify-center pt-3 pb-1">
                <p className="font-fredoka text-[3.333vw] min-[1440px]:text-[48px] bg-white px-[12px] py-1.5 border-y-2 border-x-[0.5px] border-black leading-none font-bold tracking-widest">ACCOUT</p>
              </div>
              <p className="text-center text-stroke-lg text-[#2157E3] text-[6.944vw] min-[1440px]:text-[100px] leading-none">アカウント</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
