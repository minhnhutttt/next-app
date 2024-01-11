"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "./components/sectionTitle";

const features = [
  {
    id: 1,
    featureImage: "/images/feature-01.png",
    text: <>買い切りのため<br />契約不要！</>
  },
  {
    id: 2,
    featureImage: "/images/feature-02.png",
    text: <>通信で使うギガは<br />チャージ式！</>
  },
  {
    id: 3,
    featureImage: "/images/feature-03.png",
    text: <>発送に必要な送料<br />完全無料！</>
  },
];

export default function Features() {
  const animateRefs = useScrollAnimation("fadeUp");
    return (
      <div id="features" className="px-5">
        <div className="w-full max-w-[1280px] mx-auto py-10 md:pt-20 md:pb-[140px]">
            <SectionTitle>ギガ二刀流Wi-Fiの特徴</SectionTitle>
            <div ref={animateRefs} className="flex max-md:flex-col max-md:items-center justify-center gap-6 md:gap-10 mt-8 md:mt-16 flex-wrap">
            {features.map(({ id, featureImage, text }) => (
                  <div key={id} className="flex-1 flex justify-center items-center relative md:basis-[380px] md:max-w-[380px] max-w-[320px]">
                    <div>
                      <img src="/images/feature-bg.png" alt="" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                      <figure>
                        <img className="max-md:w-[150px]" src={featureImage} alt="" />
                      </figure>
                      <div className="md:text-[24px] text-[16px] text-center font-bold text-white">{text}</div>
                    </div>
                  </div>
              ))}
            </div>
        </div>
      </div>
    )
  }
  