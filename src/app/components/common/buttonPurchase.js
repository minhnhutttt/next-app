"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import Link from "next/link";

export default function ButtonPurchase() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="bg-[url('/images/background-purchase.png')] bg-cover h-[120px] md:h-[180px] flex items-center justify-center">
        <Link ref={animateRefs} href="https://shop.wgiga-wifi.com/collections/%E8%BF%BD%E5%8A%A0%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B8" target="_blank" className="w-full max-w-[300px] md:max-w-[440px] md:h-[100px] h-[64px] flex items-center justify-center bg-black md:text-[32px] font-bold text-white text-[20px] rounded-[50px] relative  [box-shadow:0px_8px_0px_0px_rgba(0,_0,_0,_0.50)] duration-150 hover:!opacity-75">
            <span>ご購入はこちら</span>
            <svg className="absolute right-5 md:right-8 max-md:w-4" xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                <path d="M19.1667 0.333252H11.6667L20 11.9999L11.6667 23.6666H19.1667L27.5 11.9999L19.1667 0.333252Z" fill="white"/>
                <path d="M7.5 0.333252H0L8.33333 11.9999L0 23.6666H7.5L15.8333 11.9999L7.5 0.333252Z" fill="white"/>
            </svg>
        </Link>
    </div>
  );
}

