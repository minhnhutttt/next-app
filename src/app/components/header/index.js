"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="px-4 md:px-8">
      <div className="mx-auto flex h-[80px] w-full max-w-[1600px] items-center justify-between px-5 py-2 md:h-[110px] xl:px-20">
        <Link href="/">
          <img className="max-md:w-[120px]" src="/logo.png" alt="Knock" />
        </Link>
        <div className="flex-1 max-lg:flex max-lg:justify-end lg:ml-6">
          <div
            className={`z-[99] flex items-center justify-end max-lg:pointer-events-none max-lg:fixed max-lg:inset-0 max-lg:flex-col max-lg:justify-center max-lg:gap-8 max-lg:bg-white/90 max-lg:opacity-0 max-md:gap-4 ${
              open ? "max-lg:pointer-events-auto max-lg:opacity-100" : ""
            }`}
          >
            <div className="flex items-center max-lg:flex-col">
              <ul className="flex items-center max-lg:mb-5 max-lg:flex-col lg:mr-9">
                <li className="px-3 py-3 xl:px-6">
                  <Link
                    className="text-[24px] font-medium leading-normal text-[#333] lg:text-base"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="px-3 py-3 xl:px-6">
                  <Link
                    className="text-[24px] font-medium leading-normal text-[#333] lg:text-base"
                    href="/terms-of-service"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li className="px-3 py-3 xl:px-6">
                  <Link
                    className="text-[24px] font-medium leading-normal text-[#333] lg:text-base"
                    href="/privacy-policy"
                  >
                    Privacy policy
                  </Link>
                </li>
                <li className="px-3 py-3 xl:px-6">
                  <Link
                    className="text-[24px] font-medium leading-normal text-[#333] lg:text-base"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
              </ul>
              <div className="flex gap-3">
                <Link href="/" className="">
                  <img className="max-w-[155px]" src="/appstore.png" alt="" />
                </Link>
                <Link href="/" className="">
                  <img
                    className="max-w-[155px]"
                    src="/google-play.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex h-[70px] w-[70px] items-center justify-center lg:hidden">
            <button
              className={`group relative block h-[22px] w-10 cursor-pointer border-[none] p-0 max-lg:z-[99] max-lg:[&.active]:fixed ${
                open ? "active" : ""
              }`}
              onClick={() => setOpen(!open)}
            >
              <span className="absolute left-0 top-0 block h-0.5 w-full bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:top-[42%] group-[.active]:rotate-45"></span>
              <span className="absolute left-0 top-2/4 block h-0.5 w-full -translate-y-2/4 bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:opacity-0"></span>
              <span className="absolute bottom-0 left-0 block h-0.5 w-full bg-black transition-transform duration-[0.3s] ease-[ease] group-[.active]:bottom-2/4 group-[.active]:-rotate-45"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
