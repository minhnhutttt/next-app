'use client'
import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Home() {
  const mainSliderRef = useRef(null);
  const navSliderRef = useRef(null);

  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: navSliderRef.current,
  };

  const navSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    asNavFor: mainSliderRef.current,
  };
  return (
    <main>
      <div className="flex h-screen px-14">
        <div className="w-full max-w-[1328px] mx-auto">
          <div className="flex">
            <div className="w-1/2">
            <Slider ref={mainSliderRef} {...mainSliderSettings}>
              <div>
                <div className="relative flex items-center justify-center w-[480px] h-[530px] mx-auto rounded-[10.136px] border-[0.673px] border-[solid] border-[#000] bg-[#7A9FFF] [box-shadow:0px_2.692px_2.692px_0px_rgba(0,_0,_0,_0.25)]">
                  <figure>
                    <img className="w-full max-w-[370px]" src="/images/image-account.png" alt="ACCOUT" />
                  </figure>
                </div>
              </div>
              <div>
                <div className="relative flex items-center justify-center w-[480px] h-[530px] mx-auto rounded-[10.136px] border-[0.673px] border-[solid] border-[#000] bg-[#7A9FFF] [box-shadow:0px_2.692px_2.692px_0px_rgba(0,_0,_0,_0.25)]">
                  <figure>
                    <img className="w-full max-w-[370px]" src="/images/image-account.png" alt="ACCOUT" />
                  </figure>
                </div>
              </div>
              <div>
                <div className="relative flex items-center justify-center w-[480px] h-[530px] mx-auto rounded-[10.136px] border-[0.673px] border-[solid] border-[#000] bg-[#7A9FFF] [box-shadow:0px_2.692px_2.692px_0px_rgba(0,_0,_0,_0.25)]">
                  <figure>
                    <img className="w-full max-w-[370px]" src="/images/image-account.png" alt="ACCOUT" />
                  </figure>
                </div>
              </div>
              <div>
                <div className="relative flex items-center justify-center w-[480px] h-[530px] mx-auto rounded-[10.136px] border-[0.673px] border-[solid] border-[#000] bg-[#7A9FFF] [box-shadow:0px_2.692px_2.692px_0px_rgba(0,_0,_0,_0.25)]">
                  <figure>
                    <img className="w-full max-w-[370px]" src="/images/image-account.png" alt="ACCOUT" />
                  </figure>
                </div>
              </div>
            </Slider>
            </div>
          </div>
          
          <Slider ref={navSliderRef} {...navSliderSettings}>
              <div>
                <div className="relative flex items-center justify-center w-[480px] h-[530px] mx-auto rounded-[10.136px] border-[0.673px] border-[solid] border-[#000] bg-[#7A9FFF] [box-shadow:0px_2.692px_2.692px_0px_rgba(0,_0,_0,_0.25)]">
                  <figure>
                    <img className="w-full max-w-[370px]" src="/images/image-account.png" alt="ACCOUT" />
                  </figure>
                </div>
              </div>
              <div>
                <div className="relative flex items-center justify-center w-[480px] h-[530px] mx-auto rounded-[10.136px] border-[0.673px] border-[solid] border-[#000] bg-[#7A9FFF] [box-shadow:0px_2.692px_2.692px_0px_rgba(0,_0,_0,_0.25)]">
                  <figure>
                    <img className="w-full max-w-[370px]" src="/images/image-account.png" alt="ACCOUT" />
                  </figure>
                </div>
              </div>
              <div>
                <div className="relative flex items-center justify-center w-[480px] h-[530px] mx-auto rounded-[10.136px] border-[0.673px] border-[solid] border-[#000] bg-[#7A9FFF] [box-shadow:0px_2.692px_2.692px_0px_rgba(0,_0,_0,_0.25)]">
                  <figure>
                    <img className="w-full max-w-[370px]" src="/images/image-account.png" alt="ACCOUT" />
                  </figure>
                </div>
              </div>
              <div>
                <div className="relative flex items-center justify-center w-[480px] h-[530px] mx-auto rounded-[10.136px] border-[0.673px] border-[solid] border-[#000] bg-[#7A9FFF] [box-shadow:0px_2.692px_2.692px_0px_rgba(0,_0,_0,_0.25)]">
                  <figure>
                    <img className="w-full max-w-[370px]" src="/images/image-account.png" alt="ACCOUT" />
                  </figure>
                </div>
              </div>
            </Slider>
        </div>
      </div>
    </main>
  )
}
