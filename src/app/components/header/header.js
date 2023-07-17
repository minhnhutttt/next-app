'use client';
import Link from 'next/link';
import { useState } from 'react';
import HeaderMenu from './header-menu/header-menu';
import SearchBar from '../search-bar/search-bar';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="md:pl-7 pr-2 pl-4 shadow-[3px_3px_5px_rgba(79,79,79,0.2)]">
      <div className="mx-auto flex w-full items-center justify-between py-2 h-[60px] md:h-[94px]">
        <Link href="/">
          <img className="max-md:w-[180px]" src="/logo.png" alt="" />
        </Link>
        <div className="flex-1 min-[1600px]:ml-6 max-[1599px]:flex max-[1599px]:justify-end">
        <div
          className={`z-[99] flex justify-between items-center max-md:gap-4 max-[1599px]:gap-8 max-[1599px]:pointer-events-none max-[1599px]:fixed max-[1599px]:inset-0 max-[1599px]:flex-col max-[1599px]:justify-center max-[1599px]:bg-white/90 max-[1599px]:opacity-0 ${
            open ? 'max-[1599px]:pointer-events-auto max-[1599px]:opacity-100' : ''
          }`}
        >
          <div className="flex items-center min-[1600px]:flex-1 max-[1599px]:flex-col max-[1599px]:gap-8">
            <HeaderMenu />
            <div className="w-[300px] min-[1600px]:w-[18.125vw] min-[1600px]:ml-6">
              <SearchBar />
            </div>
          </div>
          <div className="flex max-md:w-[300px] max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-6 min-[1600px]:h-full min-[1600px]:w-[28.333vw]">
            <div className="flex gap-5 md:px-[30px]">
              <Link href="/">
                <img src="/btn-install.png" alt="" />
              </Link>
              <Link href="/">
                <img src="/btn-connect.png" alt="" />
              </Link>
            </div>
            <div className="md:border-l border-[#333] flex items-center px-[1.458vw]">
              <Link href="/" >
                <img src="/btn-language.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex h-[70px] w-[70px] items-center justify-center min-[1600px]:hidden">
          <button
            className={`group relative block h-[22px] w-10 cursor-pointer border-[none] p-0 max-[1599px]:z-[99] max-[1599px]:[&.active]:fixed ${
              open ? 'active' : ''
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