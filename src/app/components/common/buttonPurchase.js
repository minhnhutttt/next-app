"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import Link from "next/link";

export default function ButtonPurchase() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="flex h-[120px] items-center justify-center bg-[url('/images/background-purchase.png')] bg-cover md:h-[180px]">
      <Link
        ref={animateRefs}
        href="https://shop.wgiga-wifi.com/products/%E3%82%AE%E3%82%AC%E4%BA%8C%E5%88%80%E6%B5%81wi-fi-%E6%AD%A6%E5%B0%86%E3%83%97%E3%83%A9%E3%83%B3-100gb%E9%80%9A%E4%BF%A1-300gb%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%82%B8"
        target="_blank"
        className="relative flex h-[64px] w-full max-w-[300px] items-center justify-center rounded-[50px] bg-black text-[20px] font-bold text-white duration-150 [box-shadow:0px_8px_0px_0px_rgba(0,_0,_0,_0.50)] hover:!opacity-75  md:h-[100px] md:max-w-[440px] md:text-[32px]"
      >
        <span>ご購入はこちら</span>
        <svg
          className="absolute right-5 max-md:w-4 md:right-8"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="24"
          viewBox="0 0 28 24"
          fill="none"
        >
          <path
            d="M19.1667 0.333252H11.6667L20 11.9999L11.6667 23.6666H19.1667L27.5 11.9999L19.1667 0.333252Z"
            fill="white"
          />
          <path
            d="M7.5 0.333252H0L8.33333 11.9999L0 23.6666H7.5L15.8333 11.9999L7.5 0.333252Z"
            fill="white"
          />
        </svg>
      </Link>
    </div>
  );
}
