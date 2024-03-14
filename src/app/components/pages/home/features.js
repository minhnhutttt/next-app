"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "./components/sectionTitle";

const features = [
  {
    id: 1,
    featureImage: "/images/feature-01.png",
    text: (
      <>
        買い切りのため
        <br />
        <span className="font-bold">契約不要！</span>
      </>
    ),
  },
  {
    id: 2,
    featureImage: "/images/feature-02.png",
    text: (
      <>
        購入したギガは
        <br />
        <span className="font-bold">ずっと0円！</span>
      </>
    ),
  },
  {
    id: 3,
    featureImage: "/images/feature-03.png",
    text: (
      <>
        わずらわしい
        <br />
        <span className="font-bold">更新/解約も無し</span>
      </>
    ),
  },
];

export default function Features() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div id="features" className="px-5">
      <div className="mx-auto w-full max-w-[1280px] py-10 md:pb-[124px] md:pt-20">
        <div className="mx-auto mb-8 w-full max-w-[640px] md:mb-14">
          <div className="flex justify-center">
            <p className="flex items-center justify-center rounded-[37px] bg-black px-6 py-2 text-[18px] font-bold text-white md:px-16 md:text-[24px]">
              ギガ100年ストレージとは？
            </p>
          </div>
          <p className="texxt-[13px] mt-7 md:text-[16px]">
            写真・音楽・動画・資料・ 契約書 .etc <br />
            <br />
            低価格かつ高セキュリティー、そして100年間の長期保存型オンラインストレージです。
            <br />
            <span className="text-[12px] md:text-[14px]">
            *データをNFT化し、ブロックチェーン制御にて暗号化する技術によって実現しました。
            </span>
          </p>
        </div>
        <SectionTitle>
          ギガ<span className="text-[32px] md:text-[68px]">100</span>
          年ストレージの特徴
        </SectionTitle>
        <div
          ref={animateRefs}
          className="flex flex-wrap justify-center gap-6 mt-8 max-md:flex-col max-md:items-center md:mt-[70px] md:gap-10"
        >
          {features.map(({ id, featureImage, text }) => (
            <div
              key={id}
              className="group xl:[&:nth-of-type(2)]:right-[-24px] xl:[&:nth-of-type(3)]:right-[-24px] relative flex max-w-[320px] flex-1 items-center justify-center md:max-w-[380px] md:basis-[380px]"
            >
              <div className="group-[:nth-of-type(1)]:rotate-[-10.73deg]">
                <img src="/images/feature-bg.png" alt="" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 md:mt-3">
                <figure>
                  <img className="max-md:w-[150px]" src={featureImage} alt="" />
                </figure>
                <div className="text-center text-[16px] font-bold text-white md:text-[24px]">
                  {text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
