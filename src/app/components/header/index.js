"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative px-6">
      <div className="mx-auto flex h-[80px] w-full items-center justify-between py-2 md:h-[95px]">
        <Link href="/">
          <img className="max-md:w-[240px]" src="/logo.png" alt="" />
        </Link>
        <div
          className={`pointer-events-none absolute left-0 right-0 top-0 z-[99] flex min-h-[95px] py-5 flex-col items-start justify-center gap-8 bg-[#818E96] px-[44px] opacity-0 pr-20 ${
            open ? "pointer-events-auto opacity-100" : ""
          }`}
        >
          <div className="flex items-center flex-wrap xl:gap-8 gap-6">
            <ul className="flex md:items-center max-md:flex-col flex-wrap gap-y-2">
              <li className="md:px-6">
                <a className="text-[18px] font-semibold text-white" href="/videos">
                  動画ライブラリ
                </a>
              </li>
              <li className="md:px-6">
                <a className="text-[18px] font-semibold text-white" href="/">
                  リカバリーフレーズの管理
                </a>
              </li>
              <li className="md:px-6">
                <a className="text-[18px] font-semibold text-white" href="/">
                  安全な利用をするために
                </a>
              </li>
              <li className="md:px-6">
                <a className="text-[18px] font-semibold text-white" href="/">
                  FAQ
                </a>
              </li>
            </ul>
            <div>
              <a
                href="/"
                className="block border-2 border-white px-3 md:px-6 py-2.5 text-[18px] font-semibold text-white"
              >
                アプリダウンロードページ
              </a>
            </div>
          </div>
        </div>
        <div className="md:mr-5 flex w-[40px] md:w-[61px] items-center justify-center">
          <button
            className={`group relative z-[99] block h-[20px] md:h-[30px] w-[40px] md:w-[61px] cursor-pointer border-[none] p-0 [&.active]:fixed ${
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
