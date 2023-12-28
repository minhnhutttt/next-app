"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PageTitle from "../components/common/pageTitle";

export default function Company() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <>
      <PageTitle>会社概要</PageTitle>
      <div className="mb-[70px] px-5 md:mb-[120px]">
        <div
          ref={animateRefs}
          className="mx-auto w-full max-w-[1350px] bg-[url('/images/company-bg.jpg')] bg-cover px-5 py-12 opacity-0 md:py-16"
        >
          <div className="flex justify-center">
            <img
              className="max-md:w-[130px]"
              src="/images/logo-wsp.png"
              alt="WORLD SCAN PROJECT"
            />
          </div>
          <div className="mx-auto mb-2 mt-8 w-full max-w-[506px] space-y-7 font-zenkaku text-[14px] text-white md:mt-12 md:text-[16px]">
            <div className="flex gap-3 border-b border-white py-2 md:gap-8">
              <p className="w-[60px] px-2 md:w-[70px]">会社名</p>
              <p className="flex-1">株式会社ワールドスキャンプロジェクト</p>
            </div>
            <div className="flex gap-3 border-b border-white py-2 md:gap-8">
              <p className="w-[60px] px-2 md:w-[70px]">所在地</p>
              <p className="flex-1">
                東京都新宿区西早稲田2-18-23 スカイエスタ西早稲田 2F
              </p>
            </div>
            <div className="flex gap-3 border-b border-white py-2 md:gap-8">
              <p className="w-[60px] px-2 md:w-[70px]">設立</p>
              <p className="flex-1">2020年1月22日</p>
            </div>
            <div className="flex gap-3 border-b border-white py-2 md:gap-8">
              <p className="w-[60px] px-2 md:w-[70px]">Website</p>
              <p className="flex-1">https://world-scan-project.com/</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
