"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import Link from "next/link";

export default function WSP() {
    const animateRefs = useScrollAnimation("fadeUp");
    return (
        <div className="bg-white md:py-[86px] py-11 px-5">
            <div ref={animateRefs} className="w-full max-w-[900px] mx-auto flex items-center justify-center md:justify-between gap-5 max-md:flex-col">
                <figure>
                    <img className="max-md:w-[180px]" src="/images/logo-wsp.png" alt="W.S.P" />
                </figure>
                <div>
                    <p className="md:text-[20px] text-[14px] font-bold">運営会社</p>
                    <p className="md:text-[16px] text-[12px] mt-4">
                        東京都新宿区西早稲田2-18-23 <br />
                        スカイエスタ西早稲田 2F
                    </p>
                </div>
                <Link href="https://world-scan-project.com/" target="_blank" className="relative flex justify-center items-center lg:w-[280px] md:h-[60px] w-[240px] h-[48px] md:text-[16px] text-[13px] tracking-[0.15rem] border border-[#464646] rounded-[10px] duration-150 hover:opacity-75">
                    <span>Website</span>
                    <svg className="max-md:w-5 absolute right-0" xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                        <path d="M10.6667 9.03307L14.9333 13.2997L10.6667 17.5664" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
            </div>
            
        </div>
    )
  }
  