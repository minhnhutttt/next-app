'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="px-5">
      <div className="mx-auto flex w-full max-w-[1740px] items-center justify-between py-5 md:pb-5 md:pt-8">
        <Link href="/">
          <img className="max-md:w-[140px]" src="/logo.png" alt="" />
        </Link>
        <div
          className={`z-[99] flex items-center max-md:pointer-events-none max-md:fixed max-md:inset-0 max-md:flex-col max-md:justify-center max-md:bg-black/90 max-md:opacity-0 ${
            open ? 'max-md:pointer-events-auto max-md:opacity-100' : ''
          }`}
        >
          <ul className="flex items-center gap-8 max-md:mb-10 max-md:flex-col md:mr-[70px] md:gap-24">
            <li>
              <Link
                className="font-['Source_Sans_3'] text-[20px] font-bold text-white md:text-[16px]"
                href="#"
              >
                ホーム{' '}
              </Link>
            </li>
            <li>
              <Link
                className="font-['Source_Sans_3'] text-[20px] text-white md:text-[16px]"
                href="#"
              >
                {' '}
                サービス
              </Link>
            </li>
          </ul>
          <Link
            className="flex h-[48px] w-[170px] items-center justify-center border border-white text-base uppercase"
            href=""
          >
            Contact
          </Link>
        </div>
        <div className="flex h-[70px] w-[70px] items-center justify-center md:hidden">
          <button
            className={`group relative block h-[22px] w-10 cursor-pointer border-[none] p-0 max-md:z-[99] max-md:[&.active]:fixed ${
              open ? 'active' : ''
            }`}
            onClick={() => setOpen(!open)}
          >
            <span className="absolute left-0 top-0 block h-0.5 w-full bg-white transition-transform duration-[0.3s] ease-[ease] group-[.active]:top-[42%] group-[.active]:rotate-45"></span>
            <span className="absolute left-0 top-2/4 block h-0.5 w-full -translate-y-2/4 bg-white transition-transform duration-[0.3s] ease-[ease] group-[.active]:opacity-0"></span>
            <span className="absolute bottom-0 left-0 block h-0.5 w-full bg-white transition-transform duration-[0.3s] ease-[ease] group-[.active]:bottom-2/4 group-[.active]:-rotate-45"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
