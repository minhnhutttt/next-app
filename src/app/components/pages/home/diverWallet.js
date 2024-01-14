"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import DownloadStore from "./components/downloadStore";

export default function DiverWallet() {
    const animateRefs = useScrollAnimation("fadeUp");
    return (
        <div className="bg-white px-5 py-10 md:py-20">
            <div className="w-full md:max-w-[700px] max-w-[410px] mx-auto flex max-md:flex-col md:gap-[72px] gap-8">
                <div ref={animateRefs} className="md:pl-[22px] flex flex-col items-center justify-center">
                    <p className="text-center font-noto md:text-[24px] text-[20px] font-bold tracking-[0.14em] md:mb-7 mb-5">
                        DIVER Wallet <br />
                        ダウンロード
                    </p>
                    <div className="[box-shadow:0.803px_3.214px_40px_0px_rgba(42,_82,_151,_0.10),_1.607px_1.607px_40px_0px_rgba(42,_82,_151,_0.10)] rounded-[30px] overflow-hidden">
                        <img src="/images/ic-wallet.png" alt="DIVER Wallet" />
                    </div>
                </div>
                <div className="md:pt-4">
                    <DownloadStore color="black" />
                </div>
            </div>
        </div>
    )
  }
