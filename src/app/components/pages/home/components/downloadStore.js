"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import Link from "next/link";
import PropTypes from "prop-types";

export default function DownloadStore({ color = "white" }) {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="w-full max-w-[410px] space-y-6">
      <div
        ref={animateRefs}
        className="flex justify-center gap-3 max-lg:flex-wrap"
      >
        <Link href="https://apps.apple.com/jp/app/diver-wallet/id6444421722" target="_blank" className="block duration-150 hover:opacity-75">
          <img
            className="max-md:w-[180px]"
            src="/images/btn-app-store.png"
            alt="App Store"
          />
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=com.hyerdesign.diver.wallet&pli=1" target="_blank" className="block duration-150 hover:opacity-75">
          <img
            className="max-md:w-[180px]"
            src="/images/btn-google-play.png"
            alt="Google Play"
          />
        </Link>
      </div>
      <div
        ref={animateRefs}
        className={`mx-auto flex w-full max-w-[340px] items-center justify-center  gap-[18px] text-[20px] font-black before:block before:h-px before:flex-1 after:block after:h-px after:flex-1  md:text-[32px] ${
          color === "black"
            ? "text-black before:bg-black after:bg-black"
            : "text-white before:bg-white after:bg-white"
        }`}
      >
        <span>PC</span>
      </div>
      <div ref={animateRefs} className="flex items-center justify-center">
        <Link href="https://chrome.google.com/webstore/detail/diver-wallet/pdlocjdlejekdbpghdcmedeacpkfiiof/related?utm_source=ext_app_menu" target="_blank" className="block duration-150 hover:opacity-75">
          <img
            className="max-md:w-[180px]"
            src="/images/btn-chrome-web-store.png"
            alt="Chrome Web Store"
          />
        </Link>
      </div>
    </div>
  );
}

DownloadStore.propTypes = {
  color: PropTypes.oneOf(["black", "white"]),
};
