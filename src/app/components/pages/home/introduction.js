"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";

export default function Introduction() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="bg-[url('/images/background-introduction.png')] bg-cover bg-center px-5 pb-12 pt-10 md:pb-[96px] md:pt-20">
      <div className="mx-auto w-full max-w-[440px] md:max-w-[1280px]">
        <SectionTitle>
          新しい価値観、次世代を始めよう！
          <br />
          次世代アカウントだからできること
        </SectionTitle>
        <div className="mt-8 grid gap-5 md:mt-12 md:grid-cols-2 xl:gap-10">
          <div
            ref={animateRefs}
            className="flex min-h-[100px] items-center justify-center gap-4 rounded-[10px] bg-white p-4 md:min-h-[200px] md:gap-5 md:p-5 xl:min-h-[260px]"
          >
            <figure>
              <img
                className="max-lg:w-[56px] max-md:w-[36px]"
                src="/images/icon-introduction-01.png"
                alt="NFTを無料で送れる"
              />
            </figure>
            <div className="text-[18px] font-bold leading-[1.2] text-[#1C1C1C] md:text-[22px] xl:text-[32px]">
              NFTを無料で送れる
            </div>
          </div>
          <div
            ref={animateRefs}
            className="flex min-h-[100px] items-center justify-center gap-4 rounded-[10px] bg-white p-4 md:min-h-[200px] md:gap-5 md:p-5 xl:min-h-[260px]"
          >
            <figure>
              <img
                className="max-lg:w-[57px] max-md:w-[37px]"
                src="/images/icon-introduction-02.png"
                alt="QRコードを撮るだけでNFTが受け取れる"
              />
            </figure>
            <div className="text-[16px] font-bold leading-[1.2] text-[#1C1C1C] md:text-[18px] xl:text-[28px]">
              QRコードを撮るだけ
              <br />
              でNFTが受け取れる
            </div>
          </div>
          <div
            ref={animateRefs}
            className="flex min-h-[100px] items-center justify-center gap-4 rounded-[10px] bg-white p-4 md:min-h-[200px] md:gap-5 md:p-5 xl:min-h-[260px]"
          >
            <figure>
              <img
                className="max-lg:w-[66px] max-md:w-[46px]"
                src="/images/icon-introduction-03.png"
                alt="電話番号の登録なしでメッセージアプリが使える"
              />
            </figure>
            <div className="text-[16px] font-bold leading-[1.2] text-[#1C1C1C] md:text-[18px] xl:text-[28px]">
              電話番号の登録なしで
              <br />
              メッセージアプリが使える
            </div>
          </div>
          <div
            ref={animateRefs}
            className="flex min-h-[100px] items-center justify-center gap-4 rounded-[10px] bg-white p-4 md:min-h-[200px] md:gap-5 md:p-5 xl:min-h-[260px]"
          >
            <figure>
              <img
                className="max-lg:w-[70px] max-md:w-[50px]"
                src="/images/icon-introduction-04.png"
                alt="ビットコインやイーサリアムの送受信ができる"
              />
            </figure>
            <div className="text-[16px] font-bold leading-[1.2] text-[#1C1C1C] md:text-[18px] xl:text-[28px]">
              ビットコインやイーサリ
              <br />
              アムの送受信ができる
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
