"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import DownloadStore from "./components/downloadStore";

export default function DiverWallet() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="bg-white px-5 py-10 md:py-20">
      <div className="mx-auto flex w-full max-w-[410px] gap-8 max-md:flex-col md:max-w-[700px] md:gap-[72px]">
        <div
          ref={animateRefs}
          className="flex flex-col items-center justify-center md:pl-[22px]"
        >
          <p className="mb-5 text-center font-noto text-[20px] font-bold tracking-[0.14em] md:mb-7 md:text-[24px]">
            DIVER Wallet <br />
            ダウンロード
          </p>
          <div className="overflow-hidden rounded-[30px] [box-shadow:0.803px_3.214px_40px_0px_rgba(42,_82,_151,_0.10),_1.607px_1.607px_40px_0px_rgba(42,_82,_151,_0.10)]">
            <img src="/images/ic-wallet.png" alt="DIVER Wallet" />
          </div>
        </div>
        <div className="md:pt-4">
          <DownloadStore color="black" />
        </div>
      </div>
    </div>
  );
}
