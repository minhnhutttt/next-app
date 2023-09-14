import Link from "next/link";
import FooterItem from "./footerItem";

export default function Footer() {
    return (
        <div className="bg-[#E0F3FF] px-5 pt-8 md:pt-12 pb-5">
            <div className="w-full max-w-[727px] mx-auto flex md:items-start items-center gap-8 max-md:flex-col md:gap-[70px] mb-16 md:mb-[60px]">
                <Link href="/">
                    <img className="max-md:w-[120px]" src="/logo-footer.png" alt="DIVER Tag" />
                </Link>
                <div className="flex gap-4 md:gap-[50px] max-md:items-center pt-4">
                    <ul className="flex flex-col">
                        <FooterItem link="/">Buy Tag</FooterItem>
                        <FooterItem link="/terms-of-service">Terms of Service</FooterItem>
                        <FooterItem link="/privacy-policy">Buy Tag</FooterItem>
                        <FooterItem link="/about">About</FooterItem>
                        <FooterItem link="/">Contact</FooterItem>
                    </ul>
                    <div className="flex max-md:flex-col max-md:w-[140px] gap-6">
                        <Link href="/">
                            <img className="w-full max-w-[166px]" src="/btn-app-store.png" alt="" />
                        </Link>
                        <Link href="/">
                            <img className="w-full max-w-[166px]" src="/btn-google-play.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <p className="text-center text-[12px] md:text-[16px] font-['Work_Sans']">Copyright © 2023 DIVER Tag.</p>
        </div>
    );
  }