"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative flex h-20 items-center justify-between bg-white px-5 md:px-[40px] lg:h-[110px]">
      <Link
        href="/"
        className="font-dela text-[20px] tracking-wider text-black duration-200 hover:opacity-75 md:text-[42px]"
      >
        次世代チャット
      </Link>
      {open && (
        <div
          className="fixed inset-0 z-[98]"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <div
        className={`z-[99] flex flex-1 items-center justify-center gap-6 duration-300 max-lg:pointer-events-none max-lg:absolute max-lg:left-0 max-lg:right-0 max-lg:top-full max-lg:flex-col max-lg:border-y max-lg:border-[#2157E3] max-lg:bg-white max-lg:py-6 max-lg:opacity-0 md:gap-8 xl:gap-[74px] ${
          open ? "max-lg:pointer-events-auto max-lg:opacity-100" : ""
        }`}
      >
        <div className="flex flex-1 justify-center gap-4 max-md:flex-wrap md:justify-end lg:gap-6 xl:gap-10">
          <a
            href="https://lin.ee/6PgmBNE"
            target="_blank"
            className="flex h-12 max-w-[240px] items-center justify-between gap-3 break-keep rounded-[50px] bg-[#00B900] px-4 font-zenkaku text-[13px] font-bold tracking-wider text-white md:h-[68px] md:w-full md:px-[30px] md:text-[16px] xl:max-w-[317px] xl:text-[22px]"
          >
            <span>LINEでお問い合わせ</span>
            <svg
              className="max-md:w-2"
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.52106 0.800481L0.521059 15.2009C0.521517 15.3467 0.561729 15.4896 0.637366 15.6142C0.713002 15.7389 0.8212 15.8405 0.950314 15.9083C1.07943 15.976 1.22457 16.0072 1.37011 15.9986C1.51565 15.99 1.65609 15.9418 1.77629 15.8593L12.1766 8.65911C12.6078 8.3607 12.6078 7.64228 12.1766 7.34307L1.7763 0.142863C1.65634 0.0595201 1.51583 0.0106461 1.37005 0.0015507C1.22426 -0.00754474 1.07877 0.0234863 0.949387 0.0912722C0.82 0.159058 0.711662 0.261007 0.636148 0.386041C0.560634 0.511075 0.52083 0.654413 0.52106 0.800481Z"
                fill="white"
              />
            </svg>
          </a>
          <Link
            href="#download"
            smooth="true"
            className="flex h-12 max-w-[230px] items-center justify-between gap-3 break-keep rounded-[50px] bg-[#2157E3] px-4 font-zenkaku text-[13px] font-bold tracking-wider text-white md:h-[68px] md:w-full md:px-[30px] md:text-[16px] xl:max-w-[281px] xl:text-[22px]"
          >
            <span>アプリをDownload</span>
            <svg
              className="max-md:w-2"
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.52106 0.800481L0.521059 15.2009C0.521517 15.3467 0.561729 15.4896 0.637366 15.6142C0.713002 15.7389 0.8212 15.8405 0.950314 15.9083C1.07943 15.976 1.22457 16.0072 1.37011 15.9986C1.51565 15.99 1.65609 15.9418 1.77629 15.8593L12.1766 8.65911C12.6078 8.3607 12.6078 7.64228 12.1766 7.34307L1.7763 0.142863C1.65634 0.0595201 1.51583 0.0106461 1.37005 0.0015507C1.22426 -0.00754474 1.07877 0.0234863 0.949387 0.0912722C0.82 0.159058 0.711662 0.261007 0.636148 0.386041C0.560634 0.511075 0.52083 0.654413 0.52106 0.800481Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex h-[28px] w-[50px] items-center justify-center md:w-[70px] lg:hidden">
        <button
          className={`group relative block h-[22px] w-8 cursor-pointer border-[none] p-0 max-lg:z-[99] md:w-10 max-lg:[&.active]:absolute ${
            open ? "active" : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          <span className="absolute left-0 top-0 block h-0.5 w-full bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:top-[42%] group-[.active]:rotate-45"></span>
          <span className="absolute left-0 top-2/4 block h-0.5 w-full -translate-y-2/4 bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:opacity-0"></span>
          <span className="absolute bottom-0 left-0 block h-0.5 w-full bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:bottom-2/4 group-[.active]:-rotate-45"></span>
        </button>
      </div>
    </header>
  );
}
