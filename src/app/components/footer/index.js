import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-black px-5 pt-10 md:pt-[82px] pb-5">
            <div className="w-full max-w-[686px] mx-auto flex items-center gap-12 max-md:flex-col md:gap-[90px] mb-16 md:mb-20">
                <Link href="/">
                    <img className="max-md:w-[80px]" src="/logo-footer.png" alt="" />
                </Link>
                <div className="flex gap-4 md:gap-8 max-md:items-center">
                    <ul className="flex flex-col max-md:-ml-5">
                        <li>
                            <Link href="/terms-of-service" className="text-white block py-[5px] px-5 md:px-6 text-[14px] md:text-[16px] font-medium">
                            Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy" className="text-white block py-[5px] px-5 md:px-6 text-[14px] md:text-[16px] font-medium">
                            Privacy policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-white block py-[5px] px-5 md:px-6 text-[14px] md:text-[16px] font-medium">
                            About
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="text-white block py-[5px] px-5 md:px-6 text-[14px] md:text-[16px] font-medium">
                            Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center flex-col max-md:w-[140px] gap-7">
                        <Link href="/">
                            <img className="w-full max-w-[166px]" src="/appstore.png" alt="" />
                        </Link>
                        <Link href="/">
                            <img className="w-full max-w-[166px]" src="/google-play.png" alt="" />
                        </Link>
                        </div>
                </div>
            </div>
            <p className="text-center text-white text-[12px] md:text-[16px]">Copyright © 2023 Knock.</p>
        </div>
    );
  }