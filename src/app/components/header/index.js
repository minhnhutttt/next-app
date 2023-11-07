"use client";
import Link from "next/link";
import { useState } from "react";
import PropTypes from "prop-types";
import { usePathname } from "next/navigation";
import ButtonContact from "../common/buttonContact";

function MenuItem({ link, children, handleClick }) {
  return (
    <li className="px-3 py-3 xl:px-10">
      <a
      onClick={() => handleClick(false)}
        className="text-[24px] font-bold text-black transition duration-300 hover:opacity-75 lg:text-[20px]"
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
    <header className="border-b border-black px-2.5">
      <div className="mx-auto flex h-[80px] w-full max-w-[1600px] items-center justify-between py-2 md:h-[110px]">
        <div className="w-full">
          <div
            className={`z-[99] flex items-center justify-between max-lg:pointer-events-none max-lg:fixed max-lg:inset-0 max-lg:flex-col max-lg:justify-center max-lg:gap-8 max-lg:bg-white/90 max-lg:opacity-0 max-md:gap-4 ${
              open ? "max-lg:pointer-events-auto max-lg:opacity-100" : ""
            }`}
          >
            <div className="flex items-center max-lg:flex-col">
              <ul className="flex items-center max-lg:mb-5 max-lg:flex-col lg:mr-9">
                <MenuItem handleClick={setOpen} link="#about">ABOUT</MenuItem>
                <MenuItem handleClick={setOpen} link="#feature">特徴</MenuItem>
                <MenuItem handleClick={setOpen} link="#guide">活用シーン</MenuItem>
                <MenuItem handleClick={setOpen} link="#flow">実施までの流れ</MenuItem>
                <MenuItem handleClick={setOpen} link="#how-to-use">使い方</MenuItem>
              </ul>
            </div>
            <ButtonContact sm />
          </div>
          <div className="ml-auto flex h-[70px] w-[70px] items-center justify-center lg:hidden">
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
