"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="px-6 relative">
      <div className="mx-auto flex h-[80px] w-full items-center justify-between py-2 md:h-[95px]">
        <Link href="/">
          <img className="max-md:w-[120px]" src="/logo.png" alt="" />
        </Link>
          <div
            className={`z-[99] flex items-start pointer-events-none h-full absolute top-0 left-0 right-0 bg-[#818E96] flex-col justify-center gap-8 opacity-0 px-[44px] ${
              open ? "pointer-events-auto opacity-100" : ""
            }`}       
          >
            <div className="flex items-center">
              <ul className="flex items-center">
                <li className="px-6">
                  <Link
                    className="text-[18px] text-white font-semibold"
                    href="/"
                  >
                    動画ライブラリ
                  </Link>
                </li>
                <li className="px-6">
                  <Link
                    className="text-[18px] text-white font-semibold"
                    href="/"
                  >
                    リカバリーフレーズの管理
                  </Link>
                </li>
                <li className="px-6">
                  <Link
                    className="text-[18px] text-white font-semibold"
                    href="/"
                  >
                    安全な利用をするために
                  </Link>
                </li>
                <li className="px-6">
                  <Link
                    className="text-[18px] text-white font-semibold"
                    href="/"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
              <div className="ml-8">
                <Link href="/" className="border-2 px-6 py-2.5 border-white text-[18px] text-white font-semibold">アプリダウンロードページ</Link>
              </div>
            </div>
          </div>
          <div className="flex mr-5 w-[61px] items-center justify-center">
            <button
              className={`group relative block h-[30px] w-[61px] cursor-pointer border-[none] p-0 z-[99] [&.active]:fixed ${
                open ? "active" : ""
              }`}
              onClick={() => setOpen(!open)}
            >
              <span className="absolute left-0 top-0 block h-0.5 w-full bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:top-[42%] group-[.active]:rotate-[24deg] group-[.active]:bg-white"></span>
              <span className="absolute left-0 top-2/4 block h-0.5 w-full -translate-y-2/4 bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:opacity-0"></span>
              <span className="absolute bottom-0 left-0 block h-0.5 w-full bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:bottom-2/4 group-[.active]:-rotate-[24deg] group-[.active]:bg-white"></span>
            </button>
          </div>
        </div>
    </header>
  );
}
