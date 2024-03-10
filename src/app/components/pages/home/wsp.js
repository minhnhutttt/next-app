"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import Link from "next/link";

export default function WSP() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="bg-white px-5 py-11 md:py-[86px]">
      <div
        ref={animateRefs}
        className="mx-auto flex w-full max-w-[900px] items-center justify-center gap-5 max-md:flex-col md:justify-between"
      >
        <figure>
          <img
            className="max-md:w-[180px]"
            src="/images/logo-wsp.png"
            alt="W.S.P"
          />
        </figure>
        <div>
          <p className="text-[14px] font-bold md:text-[20px]">運営会社</p>
          <p className="mt-4 text-[12px] md:text-[16px]">
          東京都新宿区西早稲田2-18-23 <br />
          スカイエスタ西早稲田 2F
          </p>
        </div>
        <Link
          href="https://world-scan-project.com/"
          target="_blank"
          className="relative flex h-[48px] w-[240px] items-center justify-center rounded-[10px] border border-[#464646] text-[13px] tracking-[0.15rem] duration-150 hover:opacity-75 md:h-[60px] md:text-[16px] lg:w-[280px]"
        >
          <span>Website</span>
          <svg
            className="absolute right-0 max-md:w-5"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="27"
            viewBox="0 0 26 27"
            fill="none"
          >
            <path
              d="M10.6667 9.03307L14.9333 13.2997L10.6667 17.5664"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
