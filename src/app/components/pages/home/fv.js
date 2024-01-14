"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import Link from "next/link";

export default function FV() {
    const animateRefs = useScrollAnimation("fadeUp");
    const animateZoomRefs = useScrollAnimation("zoom");
    return (
      <div className="w-full max-w-[1440px] mx-auto md:pb-[140px] pb-[70px]">
          <div ref={animateZoomRefs} className="flex place-content-center">
              <img className="w-full max-w-[1420px]" src="/images/hello-new-internet.png" alt="HELLO NEW INTERNET" />
          </div>
          <div className="px-5">
            <div ref={animateRefs} className="flex place-content-center mx-auto mt-[-2.2%] mr-[5.5%]">
              <img className="w-[84%] md:w-[74.15%] md:max-w-[981px] max-w-[400px]" src="/images/fv-text.png" alt="" />
            </div>
            <div className="w-full max-w-[1260px] mx-auto flex max-md:flex-col-reverse items-center md:items-end justify-between pr-2.5 mt-10 xl:mt-[-3.5%] md:gap-10 gap-8">
              <div ref={animateRefs} className="flex flex-1 gap-4 md:items-center max-md:flex-col md:gap-6 xl:pb-9 max-xl:flex-wrap max-xl:justify-center">
                <Link href="/" className="leading-none text-white font-dela block">
                  <p className="md:text-[34px] text-[24px] tracking-[0.5rem] break-keep">次世代</p>
                  <p className="md:text-[50px] text-[32px] tracking-wider pl-6 md:pl-10 break-keep">アカウント</p>
                </Link>
                <div className="md:space-y-[30px] space-y-5">
                  <Link href="#" className="md:text-[22px] text-[16px] font-bold text-white flex items-center justify-center gap-2 md:w-[280px] w-[240px] md:h-[62px] h-12 rounded-[50px] bg-[#00B900] duration-150 hover:opacity-75">
                    <span> LINEでお問い合わせ</span>
                    <svg className="max-md:w-2" width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.0105009 0.800969L0.0105002 15.2014C0.010958 15.3472 0.0511697 15.4901 0.126807 15.6147C0.202443 15.7394 0.310641 15.841 0.439755 15.9088C0.568868 15.9765 0.714009 16.0077 0.859551 15.9991C1.00509 15.9905 1.14553 15.9423 1.26574 15.8598L11.666 8.65959C12.0972 8.36119 12.0972 7.64277 11.666 7.34356L1.26574 0.143351C1.14578 0.0600084 1.00527 0.0111344 0.859489 0.00203898C0.713704 -0.00705646 0.568214 0.0239745 0.438828 0.0917605C0.309441 0.159546 0.201103 0.261495 0.125589 0.386529C0.0500746 0.511563 0.010271 0.654901 0.0105009 0.800969Z" fill="white"/>
                    </svg>
                  </Link>
                  <Link href="#download" smooth="true" className="md:text-[20px] text-[14px] font-bold text-[#2A5297] flex items-center justify-center gap-2 md:w-[280px] w-[240px] md:h-[62px] h-12 rounded-[50px] bg-white duration-150 hover:opacity-75">
                    <span> ウォレットアカウント</span>
                    <svg className="max-md:w-2" xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                      <path d="M0.510531 0.800969L0.510531 15.2014C0.510989 15.3472 0.5512 15.4901 0.626837 15.6147C0.702474 15.7394 0.810671 15.841 0.939785 15.9088C1.0689 15.9765 1.21404 16.0077 1.35958 15.9991C1.50512 15.9905 1.64556 15.9423 1.76577 15.8598L12.1661 8.65959C12.5973 8.36119 12.5973 7.64277 12.1661 7.34356L1.76577 0.143351C1.64581 0.0600084 1.5053 0.0111344 1.35952 0.00203898C1.21373 -0.00705646 1.06824 0.0239745 0.938858 0.0917605C0.809471 0.159546 0.701134 0.261495 0.62562 0.386529C0.550105 0.511563 0.510302 0.654901 0.510531 0.800969Z" fill="#2A5297"/>
                    </svg>
                  </Link>
                </div>
              </div>
              <div ref={animateRefs} className="flex-1">
                <img className="max-md:max-w-[400px] max-md:w-full [filter:drop-shadow(3px_4px_20px_rgba(0,_0,_0,_0.25))]" src="/images/fv-img.png" alt="" />
              </div>
            </div>
          </div>
      </div>
    )
  }
  