"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#333333] px-5">
      <div className="mx-auto w-full max-w-[660px] pb-[30px] pt-12 md:px-6 md:pt-[115px] lg:max-w-[1440px]">
        <div className="mb-[50px] flex justify-center gap-5 max-lg:flex-col max-lg:items-center max-lg:gap-10">
          <div className="px-[3%] xl:px-[7.4%]">
            <Link href="/">
              <img
                className="max-md:w-[140px]"
                src="/footer-logo.png"
                alt="META MAGIC"
              />
            </Link>
          </div>
          <div className="flex max-lg:w-full max-lg:justify-between max-[400px]:flex-wrap">
            <ul className="space-y-6 border-white p-4 text-[14px] text-white lg:w-[220px] lg:border-l">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/economics">Token Economics</Link>
              </li>
              <li>
                <Link href="/product">Product</Link>
              </li>
              <li>
                <Link href="/">Governance</Link>
              </li>
            </ul>
            <ul className="space-y-6 border-white p-4 text-[14px] text-white lg:w-[220px] lg:border-l">
              <li>
                <Link href="/">FAQ</Link>
              </li>
              <li>
                <Link href="/disclaimer">Disclaimer</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
            <ul className="space-y-6 border-white p-4 text-[14px] text-white lg:w-[220px] lg:border-l">
              <li>
                <Link href="/" className="flex items-center gap-1 uppercase">
                  <img src="/ic-mail.png" alt="" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-['Rubik] text-center text-[12px] text-white md:text-right md:text-[14px]">
          © META MAGIC, 2023 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
