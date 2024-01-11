"use client";
import Link from "next/link";
import { useState } from "react";
const links = [
    {
      id: 1,
      link: "/",
      text: "特徴"
    },
    {
        id: 2,
        link: "/",
        text: "メリット"
    },
    {
        id: 3,
        link: "/",
        text: "商品紹介"
    },
    {
        id: 4,
        link: "/",
        text: "おすすめプラン"
    },
    {
        id: 5,
        link: "/",
        text: "ご利用の流れ"
    },
    {
        id: 6,
        link: "/",
        text: "FAQ"
    },
  ];

export default function Header() {
    const [open, setOpen] = useState(false);
    return (
      <div className="absolute inset-x-0 top-0 px-5 h-[110px] flex items-center justify-between z-50">
        <Link href="/" className="block ml-5 max-md:hidden">
            <img src="/images/giga-wifi.png" alt="ギガ二刀流Wi-Fi" />
        </Link>
        {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}></div>}
        <div 
        className={`flex z-50 items-center gap-8 xl:gap-2 max-xl:flex-col max-xl:justify-center max-xl:pointer-events-none max-xl:absolute max-xl:opacity-0 xl:py-4 overflow-hidden max-xl:h-screen max-xl:inset-y-0 max-xl:bg-black/90 max-xl:right-0 duration-300 ${
            open ? "max-xl:pointer-events-auto max-xl:opacity-100 max-xl:w-[280px]" : "max-xl:w-0"
          }`}
        >
            <nav>
                <ul className="flex max-xl:flex-col gap-8 xl:gap-2.5">
                    {links.map(({ id, link, text }) => (
                        <li key={id}>
                            <Link href={link} className="min-[1366px]:text-[20px] max-xl:text-white text-[18px] font-bold min-[1366px]:px-[15px] px-3 py-3">{text}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <Link href="https://shop.wgiga-wifi.com" target="_blank" className="min-[1366px]:text-[20px] text-[16px] text-white font-bold flex items-center justify-center min-[1366px]::w-[260px] min-[1366px]::h-[60px] w-[216px] h-[50px] rounded-[35px] max-xl:border-white max-xl:border overflow-hidden bg-black [box-shadow:0px_5.579px_0px_0px_#D80000] relative tracking-wider">
                <span>ご購入はこちら</span>
                <svg className="absolute max-md:w-3 md:right-3 right-2.5" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4263 0H6.37433L10.8765 6.78788L6.37433 13.5758H10.4263L14.9284 6.78788L10.4263 0Z" fill="white"/>
                    <path d="M4.12336 0H0.0714111L4.57358 6.78788L0.0714111 13.5758H4.12336L8.62553 6.78788L4.12336 0Z" fill="white"/>
                </svg>
            </Link>
        </div>
        <div className="absolute md:right-10 right-5 flex h-[28px] w-[35px] items-center justify-center xl:hidden">
            <button
            className={`group relative block h-[28px] w-8 cursor-pointer border-[none] p-0 max-xl:z-[99] md:w-10 max-xl:[&.active]:absolute ${
                open ? "active" : ""
            }`}
            onClick={() => setOpen(!open)}
            >
            <span className="absolute left-0 top-0 block h-1 rounded-3xl w-full bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:bg-white group-[.active]:top-[33%] group-[.active]:rotate-45"></span>
            <span className="absolute left-0 top-2/4 block h-1 rounded-3xl w-full -translate-y-2/4 bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:bg-white group-[.active]:opacity-0"></span>
            <span className="absolute bottom-0 left-0 block h-1 rounded-3xl w-full bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:bg-white group-[.active]:bottom-2/4 group-[.active]:-rotate-45"></span>
            </button>
        </div>
      </div>
    )
  }
  