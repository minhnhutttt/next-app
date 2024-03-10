"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
const links = [
  {
    id: 1,
    link: "#features",
    text: "特徴",
  },
  {
    id: 2,
    link: "#advantages",
    text: "メリット",
  },
  {
    id: 3,
    link: "#product",
    text: "商品紹介",
  },
  {
    id: 4,
    link: "#price",
    text: "価格一覧",
  },
  {
    id: 5,
    link: "#flow",
    text: "ご利用の流れ",
  },
  {
    id: 6,
    link: "#faq",
    text: "FAQ",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleLinksClick = () => {
      setOpen(false);
    };

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", handleLinksClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinksClick);
      });
    };
  }, []);
  return (
    <div className="absolute inset-x-0 top-0 z-50 flex h-[90px] items-center justify-between px-5 md:h-[110px] md:px-10">
      <Link href="/" className="block duration-150 hover:opacity-75">
        <img
          className="max-md:w-[208px]"
          src="/images/giga-logo.png"
          alt="ギガ100年ストレージ"
        />
      </Link>
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <div
        className={`z-50 flex items-center gap-8 overflow-hidden duration-300 max-xl:pointer-events-none max-xl:fixed max-xl:inset-y-0 max-xl:right-0 max-xl:h-screen max-xl:flex-col max-xl:justify-center max-xl:bg-black/90 max-xl:opacity-0 xl:gap-2 xl:py-4 ${
          open
            ? "max-xl:pointer-events-auto max-xl:w-[280px] max-xl:opacity-100"
            : "max-xl:w-0"
        }`}
      >
        <nav>
          <ul className="flex gap-8 max-xl:flex-col xl:gap-2.5">
            {links.map(({ id, link, text }) => (
              <li key={id}>
                <Link
                  href={link}
                  smooth="true"
                  className="px-3 py-3 text-[18px] font-bold duration-150 hover:opacity-75 max-xl:text-white min-[1366px]:px-[15px] min-[1366px]:text-[20px]"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="https://shop.wgiga-wifi.com/products/%E3%82%AE%E3%82%AC%E4%BA%8C%E5%88%80%E6%B5%81wi-fi-%E6%AD%A6%E5%B0%86%E3%83%97%E3%83%A9%E3%83%B3-100gb%E9%80%9A%E4%BF%A1-300gb%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%82%B8"
          target="_blank"
          className="relative flex h-[50px] w-[216px] items-center justify-center overflow-hidden rounded-[35px] bg-black text-[16px] font-bold tracking-wider text-white duration-150 [box-shadow:0px_5.579px_0px_0px_#D80000] hover:opacity-75 max-xl:border max-xl:border-white min-[1366px]:h-[60px] min-[1366px]:w-[260px] min-[1366px]:text-[20px]"
        >
          <span>ご購入はこちら</span>
          <svg
            className="absolute right-2.5 max-md:w-3 md:right-3"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4263 0H6.37433L10.8765 6.78788L6.37433 13.5758H10.4263L14.9284 6.78788L10.4263 0Z"
              fill="white"
            />
            <path
              d="M4.12336 0H0.0714111L4.57358 6.78788L0.0714111 13.5758H4.12336L8.62553 6.78788L4.12336 0Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
      <div className="absolute right-5 flex h-[28px] w-[35px] items-center justify-center md:right-10 xl:hidden">
        <button
          className={`group relative block h-[28px] w-8 cursor-pointer border-[none] p-0 max-xl:z-[99] md:w-10 max-xl:[&.active]:fixed ${
            open ? "active" : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          <span className="absolute left-0 top-0 block h-1 w-full rounded-3xl bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:top-[33%] group-[.active]:rotate-45 group-[.active]:bg-white"></span>
          <span className="absolute left-0 top-2/4 block h-1 w-full -translate-y-2/4 rounded-3xl bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:bg-white group-[.active]:opacity-0"></span>
          <span className="absolute bottom-0 left-0 block h-1 w-full rounded-3xl bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:bottom-2/4 group-[.active]:-rotate-45 group-[.active]:bg-white"></span>
        </button>
      </div>
    </div>
  );
}
