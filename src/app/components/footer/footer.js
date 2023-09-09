"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#333333] px-5">
        <div className="w-full lg:max-w-[1440px] max-w-[660px] mx-auto md:px-6 pt-12 md:pt-[115px] pb-[30px]">
            <div className="flex max-lg:flex-col max-lg:items-center max-lg:gap-10 justify-center gap-5 mb-[30px]">
                <div className="px-[3%] xl:px-[7.4%]">
                    <Link href="/">
                        <img className="max-md:w-[140px]" src="/footer-logo.png" alt="META MAGIC" />
                    </Link>
                </div>
                <div className="flex max-[400px]:flex-wrap max-lg:justify-between max-lg:w-full">
                    <ul className="lg:border-l border-white text-white text-[14px] lg:w-[220px] p-4 space-y-6">
                        <li><Link href="/">HOME</Link></li>
                        <li><Link href="/">Token Economics</Link></li>
                        <li><Link href="/">Product</Link></li>
                        <li><Link href="/">Governance</Link></li>
                    </ul>
                    <ul className="lg:border-l border-white text-white text-[14px] lg:w-[220px] p-4 space-y-6">
                        <li><Link href="/">FAQ</Link></li>
                        <li><Link href="/">Disclaimer</Link></li>
                        <li><Link href="/">About</Link></li>
                    </ul>
                    <ul className="lg:border-l border-white text-white text-[14px] lg:w-[220px] p-4 space-y-6">
                        <li><Link href="/" className="flex items-center gap-1 uppercase"><img src="/ic-mail.png" alt="" />Contact</Link></li>
                    </ul>
                </div>
            </div>
            <p className="md:text-right text-center text-['Rubik] text-white text-[12px] md:text-[14px]">© META MAGIC, 2023 All Rights Reserved</p>
        </div>
    </footer>
  );
}
