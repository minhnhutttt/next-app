"use client";
import Link from "next/link";
import { useState } from "react";
import MenuItem from "./menuItem";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="px-4 md:px-8">
      <div className="mx-auto flex py-5 w-full max-w-[1440px] justify-between">
        <div className="flex w-full justify-between">
          <Link href="/">
            <img
              className="max-md:w-[140px]"
              src="/logo.png"
              alt="DIVER Tag"
            />
          </Link>
          <div className="flex-1 max-lg:flex max-lg:justify-end lg:ml-6">
            <div
              className={`z-[99] flex items-center justify-end max-lg:pointer-events-none max-lg:fixed max-lg:inset-0 max-lg:flex-col max-lg:justify-center max-lg:gap-8 max-lg:bg-white/90 max-lg:opacity-0 max-md:gap-4 ${
                open ? "max-lg:pointer-events-auto max-lg:opacity-100" : ""
              }`}
            >
              <div className="flex items-center gap-6 max-md:flex-col">
                <ul className="flex items-center max-lg:flex-col">
                  <li onClick={() => setOpen(false)}><MenuItem link="/">Home</MenuItem></li>
                  <li onClick={() => setOpen(false)}><MenuItem onClick={() => setOpen(false)} link="/">Buy Tag</MenuItem></li>
                  <li onClick={() => setOpen(false)}><MenuItem onClick={() => setOpen(false)} link="/terms-of-service">Terms of Service</MenuItem></li>
                  <li onClick={() => setOpen(false)}><MenuItem onClick={() => setOpen(false)} link="/privacy-policy">Privacy policy</MenuItem></li>
                  <li onClick={() => setOpen(false)}><MenuItem onClick={() => setOpen(false)} link="/about">About</MenuItem></li>
                </ul>
                <div className="flex gap-3 md:gap-[18px]">
                    <Link href="/">
                        <img className="max-md:max-w-[140px] max-xl:max-w-[120px]" src="/btn-app-store.png" alt="" />
                    </Link>
                    <Link href="/">
                        <img className="max-md:max-w-[140px] max-xl:max-w-[120px]" src="/btn-google-play.png" alt="" />
                    </Link>
                </div>
              </div>
            </div>
            <div className="flex h-[28px] w-[50px] md:w-[70px] items-center justify-center lg:hidden">
              <button
                className={`group relative block h-[22px] w-8 md:w-10 cursor-pointer border-[none] p-0 max-lg:z-[99] max-lg:[&.active]:fixed ${
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
      </div>
    </header>
  );
}
