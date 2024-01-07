"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import GuideItem from "./guideItem";
import ButtonContact from "@/app/components/common/button/buttonContact";
import ButtonLine from "@/app/components/common/button/buttonLine";

export default function Guide() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="bg-[url(/images/image-howto.jpg)] bg-cover px-5 pb-8 pt-10 md:pb-[68px] md:pt-[84px] overflow-hidden">
      <div className="mx-auto w-full max-w-[400px] rounded-[30px] bg-white/30 py-6 md:max-w-[1180px] md:py-10 overflow-hidden">
        <h5 ref={animateRefs} className="text-center text-[20px] font-bold md:text-[42px]">
          購入方法
        </h5>
        <div className="flex justify-center px-5 mt-10 max-md:flex-col max-md:items-center lg:px-10">
          <GuideItem imageSrc="/images/image-guide-01.png" step="容量を決める">
            ご希望の容量を決めてください。
            <br />
            ※容量は後から追加も可能です
          </GuideItem>
          <figure ref={animateRefs} className="px-2 max-md:my-4 md:mt-[14%] lg:px-4 xl:px-10">
            <img
              className="max-lg:w-5 max-md:rotate-90"
              src="/images/icon-arrow.svg"
              alt=""
            />
          </figure>
          <GuideItem imageSrc="/images/image-guide-02.png" step="購入申請">
            <span>購入サポートセンターよりご購入ください</span>
            <div className="flex flex-col items-center justify-center gap-2 mt-3 md:gap-4">
              <ButtonContact />
              <ButtonLine />
            </div>
          </GuideItem>
          <figure ref={animateRefs} className="px-2 max-md:my-4 md:mt-[14%] lg:px-4 xl:px-10">
            <img
              className="max-lg:w-5 max-md:rotate-90"
              src="/images/icon-arrow.svg"
              alt=""
            />
          </figure>
          <GuideItem imageSrc="/images/image-guide-03.png" step="支払う">
            決済後、購入時に入力したメールアドレス宛に【購入明細と初期設定に関するご案内】というタイトルのメールが自動送信されますので、メールをご確認いただき初期設定を完了させてください。
          </GuideItem>
        </div>
      </div>
    </div>
  );
}
