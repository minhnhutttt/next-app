"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import Link from "next/link";
import PropTypes from "prop-types";

export default function DownloadStore({color = "white"}) {
  const animateRefs = useScrollAnimation("fadeUp");
    return (
        <div className="space-y-6 w-full max-w-[410px]">
           <div ref={animateRefs} className="flex gap-3 max-lg:flex-wrap justify-center">
            <Link href="/" className="block duration-150 hover:opacity-75">
                <img className="max-md:w-[180px]" src="/images/btn-app-store.png" alt="App Store" />
            </Link>
            <Link href="/" className="block duration-150 hover:opacity-75">
                <img className="max-md:w-[180px]" src="/images/btn-google-play.png" alt="Google Play" />
            </Link>
           </div>
           <div ref={animateRefs} className={`w-full max-w-[340px] mx-auto md:text-[32px] text-[20px] font-black  flex items-center justify-center after:block after:flex-1 after:h-px before:block before:flex-1 before:h-px  gap-[18px] ${color === "black" ? 'text-black before:bg-black after:bg-black' : 'text-white before:bg-white after:bg-white'}`}><span>PC</span></div>
           <div ref={animateRefs} className="flex justify-center items-center">
            <Link href="/" className="block duration-150 hover:opacity-75">
                    <img className="max-md:w-[180px]" src="/images/btn-chrome-web-store.png" alt="Chrome Web Store" />
                </Link>
           </div>
        </div>
    )
  }

  DownloadStore.propTypes = {
    color: PropTypes.oneOf(['black', 'white']),
  };
  