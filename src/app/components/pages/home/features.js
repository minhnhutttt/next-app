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
        契約不要！
      </>
    ),
  },
  {
    id: 2,
    featureImage: "/images/feature-02.png",
    text: (
      <>
        通信で使うギガは
        <br />
        チャージ式！
      </>
    ),
  },
  {
    id: 3,
    featureImage: "/images/feature-03.png",
    text: (
      <>
        発送に必要な送料
        <br />
        完全無料！
      </>
    ),
  },
];

export default function Features() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div id="features" className="px-5">
      <div className="mx-auto w-full max-w-[1280px] py-10 md:pb-[140px] md:pt-20">
        <SectionTitle>ギガ二刀流Wi-Fiの特徴</SectionTitle>
        <div
          ref={animateRefs}
          className="mt-8 flex flex-wrap justify-center gap-6 max-md:flex-col max-md:items-center md:mt-16 md:gap-10"
        >
          {features.map(({ id, featureImage, text }) => (
            <div
              key={id}
              className="relative flex max-w-[320px] flex-1 items-center justify-center md:max-w-[380px] md:basis-[380px]"
            >
              <div>
                <img src="/images/feature-bg.png" alt="" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
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
