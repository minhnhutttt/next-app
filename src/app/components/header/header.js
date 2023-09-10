"use client";
import Link from "next/link";
import { useState } from "react";
import MenuItem from "./menuItem";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="px-4 md:px-8">
      <div className="mx-auto max-w-[1440px] flex h-[60px] w-full justify-between pt-3 md:h-[78px]">
        <div className="w-full flex items-center justify-between">
        <Link href="/">
          <img
            className="max-md:w-[180px]"
            src="/logo.png"
            alt="CONNECT TO WORLD"
          />
        </Link>
        <div className="flex-1 max-lg:flex max-lg:justify-end lg:ml-6">
          <div
            className={`z-[99] flex items-center justify-end max-lg:pointer-events-none max-lg:fixed max-lg:inset-0 max-lg:flex-col max-lg:justify-center max-lg:gap-8 max-lg:bg-white/90 max-lg:opacity-0 max-md:gap-4 ${
              open ? "max-lg:pointer-events-auto max-lg:opacity-100" : ""
            }`}
          >
            <div className="flex items-center">
              <ul className="flex items-center gap-5 xl:gap-8 max-lg:flex-col">
                <MenuItem link="#">Token Economics</MenuItem>
                <MenuItem link="/product">Product</MenuItem>
                <MenuItem link="#">Governance</MenuItem>
                <MenuItem link="#">FAQ</MenuItem>
                <MenuItem link="#">Disclaimer</MenuItem>
                <MenuItem link="#">About</MenuItem>
                <MenuItem link="#">Contact</MenuItem>
              </ul>
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
      </div>
    </header>
  );
}
