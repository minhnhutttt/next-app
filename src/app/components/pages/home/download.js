"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import Link from "next/link";

export default function Download() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="px-5 pb-20 pt-10 md:pb-[145px] md:pt-[86px]">
      <div
        ref={animateRefs}
        className="mx-auto w-full max-w-[1000px] rounded-[20px] border-[6px] border-[#2A5293] bg-white/90 px-5 py-7 md:py-10"
      >
        <div ref={animateRefs} className="flex justify-center mb-5 md:mb-8">
          <h5 className="rounded-[50px] bg-[#FAFF00] px-6 py-3 text-center text-[20px] font-bold leading-[1.2] tracking-widest md:px-8 md:py-5 md:text-[34px]">
          ギガ100年ストレージを契約すると
          </h5>
        </div>
        <div className="mx-auto w-full max-w-[850px]">
          <div
            ref={animateRefs}
            className="flex items-center gap-6 px-[12px] max-md:flex-col md:gap-10"
          >
            <figure className="">
              <img src="/images/diver-storage.png" alt="DIVER Storage" />
            </figure>
            <div className="flex-1">
              <p className="border-b border-black pb-8 text-[14px] font-bold tracking-wider md:pl-5 md:text-[24px]">
              オンラインストレージがいつまでも使い放題！
              </p>
              <div className="pt-3 md:pl-6 md:pt-5">
                <p className="mb-1 text-[13px] font-bold md:text-[18px]">
                ストレージのご利用には、DIVER Walletが必要です。
                </p>
                <p className="text-[13px] leading-[1.8] md:text-[18px]">
                  ①無料のDIVER Walletをダウンロードし、ウォレット作成<br />
                  ②DIVER Storageサイトへアクセスし、DIVER Walletをコネクトするとストレージがご利用いただけます。
                </p>
              </div>
            </div>
          </div>
          <div
            ref={animateRefs}
            className="mt-5 flex justify-center gap-5 rounded-[20px] bg-[#2A5293] px-5 py-5 max-md:flex-col max-md:items-center md:mt-6 md:gap-10 md:py-9"
          >
            <figure className="mt-4">
              <img src="/images/diver-wallet.png" alt="DIVER Wallet" />
            </figure>
            <div className="">
              <p className="text-[13px] tracking-[0.16rem] text-white max-md:text-center md:pl-[51px] md:text-[18px]">
                DIVER Wallet <br className="md:hidden" />
                ダウンロードはこちら
              </p>
              <div className="flex gap-4 mt-4 max-md:flex-wrap max-md:justify-center md:mt-6 md:gap-10">
                <Link
                  className="duration-150 hover:opacity-75"
                  href="https://apps.apple.com/jp/app/diver-wallet/id6444421722"
                  target="_blank"
                >
                  <img
                    className="max-md:w-[160px]"
                    src="/images/btn-app-store.png"
                    alt="App Store"
                  />
                </Link>
                <Link
                  className="duration-150 hover:opacity-75"
                  href="https://play.google.com/store/apps/details?id=com.hyerdesign.diver.wallet&pli=1"
                  target="_blank"
                >
                  <img
                    className="max-md:w-[160px]"
                    src="/images/btn-google-play.png"
                    alt="Google Play"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
