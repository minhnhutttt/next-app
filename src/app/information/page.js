"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import PageTitle from "../components/common/pageTitle";

export default function Information() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <>
      <PageTitle>特定商取引法に基づく表記</PageTitle>
      <div ref={animateRefs} className="mb-[40px] px-5 opacity-0 md:mb-[55px]">
        <div className="mx-auto w-full max-w-[440px] space-y-6 py-4 font-worksans text-[13px] font-bold md:max-w-[880px] md:space-y-5 md:py-6 md:text-[20px]">
          <div className="flex gap-1 max-md:flex-col md:gap-5">
            <p className="md:w-[340px] md:pl-[60px]">販売業者</p>
            <p className="flex-1 max-md:pl-5">
              株式会社ワールドスキャンプロジェクト
            </p>
          </div>
          <div className="flex gap-1 max-md:flex-col md:gap-5">
            <p className="md:w-[340px] md:pl-[60px]">所在地</p>
            <p className="flex-1 max-md:pl-5">
              東京都新宿区西早稲田2-18-23 スカイエスタ西早稲田 2F
            </p>
          </div>
          <div className="flex gap-1 max-md:flex-col md:gap-5">
            <p className="md:w-[340px] md:pl-[60px]">連絡先</p>
            <p className="flex-1 max-md:pl-5">
              下記メールよりお問い合わせください
            </p>
          </div>
          <div className="flex gap-1 max-md:flex-col md:gap-5">
            <p className="md:w-[340px] md:pl-[60px]">公開メールアドレス</p>
            <p className="flex-1 max-md:pl-5">info@new-generation-domain.com</p>
          </div>
          <div className="flex gap-1 max-md:flex-col md:gap-5">
            <p className="md:w-[340px] md:pl-[60px]">ホームページURL</p>
            <p className="flex-1 max-md:pl-5">
              https://world-scan-project.com/
            </p>
          </div>
          <div className="flex gap-1 max-md:flex-col md:gap-5">
            <p className="md:w-[340px] md:pl-[60px]">販売価格</p>
            <p className="flex-1 max-md:pl-5">
              商品詳細ページに記載されている価格になります。
            </p>
          </div>
          <div className="flex gap-1 max-md:flex-col md:gap-5">
            <p className="md:w-[340px] md:pl-[60px]">商品代金以外の必要料金</p>
            <p className="flex-1 max-md:pl-5">なし</p>
          </div>
          <div className="flex gap-1 max-md:flex-col md:gap-5">
            <p className="md:w-[340px] md:pl-[60px]">引き渡し時期</p>
            <p className="flex-1 max-md:pl-5">ご指定はできません。</p>
          </div>
          <div className="flex gap-1 max-md:flex-col md:gap-5">
            <p className="md:w-[340px] md:pl-[60px]">お支払方法</p>
            <p className="flex-1 max-md:pl-5">
              株式会社ワールドスキャンプロジェクト
            </p>
          </div>
          <div className="flex gap-1 max-md:flex-col md:gap-5">
            <p className="md:w-[340px] md:pl-[60px]">返品期限</p>
            <p className="flex-1 max-md:pl-5">
              商品の性質上商品の返品・交換は応じられません。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
