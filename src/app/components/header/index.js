"use client";
import Link from "next/link";
import { useState } from "react";
import PropTypes from "prop-types";

function MenuItem({ link, children, handleClick }) {
    return (
      <li className="lg:border-l border-black lg:last-of-type:border-r lg:h-[60px] ">
        <a
        onClick={() => handleClick(false)}
          className="text-[20px] lg:text-[18px] text-center font-medium transition duration-300 hover:opacity-75 flex h-full items-center justify-center max-lg:py-3 md:px-5 lg:px-6 xl:px-10"
          href={link}
        >
          {children}
        </a>
      </li>
    );
  }
  
  MenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    handleClick: PropTypes.func.isRequired,
  };


export default function Header() {
    const [open, setOpen] = useState(false);
  return (
    <div className="h-[60px] py-2 md:h-[90px] bg-[#F7F71A] flex justify-center items-center sticky z-50 top-0">
        <div className="w-full max-w-[1200px] px-5 h-[64px] flex justify-between lg:justify-center">
            <Link href="/" className="flex items-center justify-center">
                <img className="max-w-[140px] md:max-w-[180px] lg:max-w-[222px]" src="/images/logo.png" alt="NFT MAP" />
            </Link>
            <div className={`z-[99] flex items-center justify-between max-lg:pointer-events-none max-lg:fixed max-lg:inset-0 max-lg:flex-col max-lg:justify-center max-lg:gap-8 max-lg:bg-white/90  ${open ? "max-lg:pointer-events-auto max-lg:opacity-100" : "max-lg:opacity-0"}`}>
                <div className="flex items-center max-lg:flex-col">
                    <ul className="flex max-lg:flex-col md:ml-5">
                        <MenuItem handleClick={setOpen} link="#about">ABOUT</MenuItem>
                        <MenuItem handleClick={setOpen} link="#enjoy">楽しみ方</MenuItem>
                        <MenuItem handleClick={setOpen} link="#scene">ご利用シーン</MenuItem>
                        <MenuItem handleClick={setOpen} link="#howTo">使い方</MenuItem>
                        <MenuItem handleClick={setOpen} link="#shop">店舗一覧</MenuItem>
                        <MenuItem handleClick={setOpen} link="#faq">FAQ</MenuItem>
                    </ul>
                </div>
            </div>
            <div className="ml-auto flex h-[64px] w-[64px] items-center justify-center lg:hidden">
            <button
              className={`group relative block h-[22px] w-10 cursor-pointer border-[none] p-0 max-lg:z-[99] max-lg:[&.active]:fixed max-lg:[&.active]:top-6 max-lg:[&.active]:right-6 ${
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
  )
}
