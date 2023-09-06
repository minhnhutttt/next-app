"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="px-4 md:px-8">
      <div className="mx-auto flex h-[60px] w-full items-center justify-between py-2 md:h-[88px]">
        <Link href="/">
          <img
            className="max-md:w-[180px]"
            src="/logo.png"
            alt="CONNECT TO WORLD"
          />
        </Link>
        <div className="flex-1 max-lg:flex max-lg:justify-end min-[1600px]:ml-6">
          <div
            className={`z-[99] flex items-center justify-end max-lg:pointer-events-none max-lg:fixed max-lg:inset-0 max-lg:flex-col max-lg:justify-center max-lg:gap-8 max-lg:bg-white/90 max-lg:opacity-0 max-md:gap-4 ${
              open ? "max-lg:pointer-events-auto max-lg:opacity-100" : ""
            }`}
          >
            <div className="flex items-center px-3">
              <ul className="flex items-center gap-14 max-md:flex-col">
                <li className="">
                  <Link
                    className="relative font-['Roboto_Slab'] text-[22px] font-bold text-[#0047ab]"
                    href="#product"
                    scroll={false}
                  >
                    PRODUCT
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="relative font-['Roboto_Slab'] text-[22px] font-bold text-[#0047ab]"
                    href="#service"
                    scroll={false}
                  >
                    SERVICE
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="relative font-['Roboto_Slab'] text-[22px] font-bold text-[#0047ab]"
                    href="#about"
                    scroll={false}
                  >
                    ABOUT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex h-[70px] w-[70px] items-center justify-center min-[1600px]:hidden">
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
