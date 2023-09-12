import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-black px-5 pt-[82px] pb-5">
            <div className="w-full max-w-[686px] mx-auto flex items-center gap-[90px] mb-20">
                <Link href="/">
                    <img src="/logo-footer.png" alt="" />
                </Link>
                <div className="flex gap-8">
                    <ul className="flex flex-col">
                        <li>
                            <Link href="/" className="text-white block py-[5px] px-6 text-[16px] font-medium">
                            Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="text-white block py-[5px] px-6 text-[16px] font-medium">
                            Privacy policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="text-white block py-[5px] px-6 text-[16px] font-medium">
                            About
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="text-white block py-[5px] px-6 text-[16px] font-medium">
                            Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center flex-col gap-7">
                        <Link href="/">
                            <img className="max-w-[166px]" src="/appstore.png" alt="" />
                        </Link>
                        <Link href="/">
                            <img className="max-w-[166px]" src="/google-play.png" alt="" />
                        </Link>
                        </div>
                </div>
            </div>
            <p className="text-center text-white text-[16px]">Copyright © 2023 Knock.</p>
        </div>
    );
  }