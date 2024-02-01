"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import CardText from "./components/common/card/cardText";
import FV from "./components/pages/home/FV/fv";
import SectionCard from "./components/pages/home/sectionCard";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainSliderRef = useRef(null);
  const navSliderRef = useRef(null);

  const mainSliderSettings = {
    dots: false,
    infinite: true,
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
      <FV />
      <div className="">
        <div className="grid md:grid-cols-2">
          <SectionCard
            anchor="account"
            type="ACCOUNT"
            text="アドレス"
            image="/images/image-account.png"
            button="アドレスを作る"
          >
            <figure>
              <img
                className="max-md:w-[80px]"
                src="/images/ic-diver-wallet.png"
                alt=""
              />
            </figure>
            <div className="flex w-full flex-col items-center gap-5 pb-3 pt-5 md:gap-7 md:pb-5 md:pt-[30px]">
              <Link href="/" className="duration-150 hover:opacity-75">
                <img
                  className="max-md:w-[160px]"
                  src="/images/btn-app-store.png"
                  alt=""
                />
              </Link>
              <Link href="/" className="duration-150 hover:opacity-75">
                <img
                  className="max-md:w-[160px]"
                  src="/images/btn-google-play.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="flex w-full flex-col items-center border-t border-[#E4E7EC] py-4 md:py-5">
              <Link href="/" className="duration-150 hover:opacity-75">
                <img
                  className="max-md:w-[160px]"
                  src="/images/btn-chrome-web-store.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="flex items-center w-full gap-2 mb-5">
              <span className="h-px flex-1 bg-[#E4E7EC]"></span>
              <span className="font-inter text-[12px] font-medium md:text-[14px]">
                OR
              </span>
              <span className="h-px flex-1 bg-[#E4E7EC]"></span>
            </div>
            <div className="flex justify-center w-full">
              <Link
                href="/"
                className="flex h-12 w-full items-center justify-center rounded-lg border-2 border-black font-inter text-[14px] font-semibold duration-150 [box-shadow:0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] hover:opacity-75 md:h-[58px] md:text-[16px]"
              >
                詳細ページはこちら
              </Link>
            </div>
          </SectionCard>
          <SectionCard
            anchor="chat"
            type="CHAT"
            text="チャット"
            image="/images/image-chat.png"
            button="チャットを使う"
          >
            <figure>
              <img
                className="max-md:w-[80px]"
                src="/images/ic-knock.png"
                alt=""
              />
            </figure>
            <div className="flex w-full flex-col items-center gap-5 pb-3 pt-5 md:gap-7 md:pb-5 md:pt-[30px]">
              <Link href="/" className="duration-150 hover:opacity-75">
                <img
                  className="max-md:w-[160px]"
                  src="/images/btn-app-store.png"
                  alt=""
                />
              </Link>
              <Link href="/" className="duration-150 hover:opacity-75">
                <img
                  className="max-md:w-[160px]"
                  src="/images/btn-google-play.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="flex items-center w-full gap-2 mb-5">
              <span className="h-px flex-1 bg-[#E4E7EC]"></span>
              <span className="font-inter text-[12px] font-medium md:text-[14px]">
                OR
              </span>
              <span className="h-px flex-1 bg-[#E4E7EC]"></span>
            </div>
            <div className="flex justify-center w-full">
              <Link
                href="/"
                className="flex h-12 w-full items-center justify-center rounded-lg border-2 border-black font-inter text-[14px] font-semibold duration-150 [box-shadow:0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] hover:opacity-75 md:h-[58px] md:text-[16px]"
              >
                詳細ページはこちら
              </Link>
            </div>
          </SectionCard>
          <SectionCard
            anchor="domain"
            type="DOMAIN"
            text="ドメイン"
            image="/images/image-domain.png"
            button="ドメインを探す"
          >
            <figure>
              <img
                className="max-md:w-[80px]"
                src="/images/ic-diver-domain.png"
                alt=""
              />
            </figure>
            <div className="flex w-full flex-col items-center gap-5 pb-3 pt-5 md:gap-7 md:pb-5 md:pt-[30px]">
              <Link href="/" className="duration-150 hover:opacity-75">
                <img
                  className="max-md:w-[160px]"
                  src="/images/btn-web-site.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="flex items-center w-full gap-2 mb-5">
              <span className="h-px flex-1 bg-[#E4E7EC]"></span>
              <span className="font-inter text-[12px] font-medium md:text-[14px]">
                OR
              </span>
              <span className="h-px flex-1 bg-[#E4E7EC]"></span>
            </div>
            <div className="flex justify-center w-full">
              <Link
                href="/"
                className="flex h-12 w-full items-center justify-center rounded-lg border-2 border-black font-inter text-[14px] font-semibold duration-150 [box-shadow:0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] hover:opacity-75 md:h-[58px] md:text-[16px]"
              >
                詳細ページはこちら
              </Link>
            </div>
          </SectionCard>
          <SectionCard
            anchor="tag"
            type="TAG"
            text="タグ"
            image="/images/image-tag.png"
            button="NFTをタッチでもらう"
          >
            <figure>
              <img
                className="max-md:w-[80px]"
                src="/images/ic-diver-tag.png"
                alt=""
              />
            </figure>
            <div className="flex w-full flex-col items-center gap-5 pb-3 pt-5 md:gap-7 md:pb-5 md:pt-[30px]">
              <Link href="/" className="duration-150 hover:opacity-75">
                <img
                  className="max-md:w-[160px]"
                  src="/images/btn-app-store.png"
                  alt=""
                />
              </Link>
              <Link href="/" className="duration-150 hover:opacity-75">
                <img
                  className="max-md:w-[160px]"
                  src="/images/btn-google-play.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="flex items-center w-full gap-2 mb-5">
              <span className="h-px flex-1 bg-[#E4E7EC]"></span>
              <span className="font-inter text-[12px] font-medium md:text-[14px]">
                OR
              </span>
              <span className="h-px flex-1 bg-[#E4E7EC]"></span>
            </div>
            <div className="flex justify-center w-full">
              <Link
                href="/"
                className="flex h-12 w-full items-center justify-center rounded-lg border-2 border-black font-inter text-[14px] font-semibold duration-150 [box-shadow:0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] hover:opacity-75 md:h-[58px] md:text-[16px]"
              >
                詳細ページはこちら
              </Link>
            </div>
          </SectionCard>
          <SectionCard
            anchor="scan"
            type="SCAN"
            text="スキャン"
            image="/images/image-scan.png"
            button="取引を確認する"
          >
            <figure>
              <img
                className="max-md:w-[80px]"
                src="/images/ic-diver-scan.png"
                alt=""
              />
            </figure>
            <div className="flex w-full flex-col items-center gap-5 pb-3 pt-5 md:gap-7 md:pb-5 md:pt-[30px]">
              <Link href="/" className="duration-150 hover:opacity-75">
                <img
                  className="max-md:w-[160px]"
                  src="/images/btn-web-site.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="flex items-center w-full gap-2 mb-5">
              <span className="h-px flex-1 bg-[#E4E7EC]"></span>
              <span className="font-inter text-[12px] font-medium md:text-[14px]">
                OR
              </span>
              <span className="h-px flex-1 bg-[#E4E7EC]"></span>
            </div>
            <div className="flex justify-center w-full">
              <Link
                href="/"
                className="flex h-12 w-full items-center justify-center rounded-lg border-2 border-black font-inter text-[14px] font-semibold duration-150 [box-shadow:0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] hover:opacity-75 md:h-[58px] md:text-[16px]"
              >
                詳細ページはこちら
              </Link>
            </div>
          </SectionCard>
          <SectionCard
            anchor="coupon"
            type="COUPON"
            text="クーポン"
            image="/images/image-coupon.png"
            button="クーポンを見る"
            isComming
          >
            <figure>
              <img
                className="max-md:w-[80px]"
                src="/images/ic-chainpin.png"
                alt=""
              />
            </figure>
            <div className="flex w-full flex-col items-center gap-5 pb-3 pt-5 md:gap-7 md:pb-5 md:pt-[30px]">
              <Link href="/" className="duration-150 hover:opacity-75">
                <img
                  className="max-md:w-[160px]"
                  src="/images/btn-web-site.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="flex items-center w-full gap-2 mb-5">
              <span className="h-px flex-1 bg-[#E4E7EC]"></span>
              <span className="font-inter text-[12px] font-medium md:text-[14px]">
                OR
              </span>
              <span className="h-px flex-1 bg-[#E4E7EC]"></span>
            </div>
            <div className="flex justify-center w-full">
              <Link
                href="/"
                className="flex h-12 w-full items-center justify-center rounded-lg border-2 border-black font-inter text-[14px] font-semibold duration-150 [box-shadow:0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] hover:opacity-75 md:h-[58px] md:text-[16px]"
              >
                詳細ページはこちら
              </Link>
            </div>
          </SectionCard>
        </div>
      </div>
    </main>
  );
}
