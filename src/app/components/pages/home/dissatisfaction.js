"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "./components/sectionTitle";

export default function Dissatisfaction() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="relative flex items-end  overflow-hidden bg-[url('/images/background-dissatisfaction.png')] bg-cover bg-top">
      <div ref={animateRefs} className="absolute bottom-0 right-0">
        <img
          className="max-xl:w-[500px] max-md:w-[44vw]"
          src="/images/dissatisfaction-character.png"
          alt=""
        />
      </div>
      <div className="relative mx-auto w-full max-w-[1320px] px-5 pb-8 pt-12 md:pb-[52px] md:pt-[100px]">
        <SectionTitle>ポケットWi-Fiとストレージへの不満</SectionTitle>
        <div className="mt-10 flex flex-col gap-5">
          <div ref={animateRefs} className="max-md:mr-4">
            <div className="inline-flex min-h-[60px] items-center justify-center bg-white/80 px-4 py-5 text-[14px] font-bold tracking-widest md:min-h-[123px] md:px-[64px] md:py-[38px] md:text-[28px]">
              ２年間という縛りが納得できない
            </div>
          </div>
          <div ref={animateRefs} className="ml-7 md:ml-[118px]">
            <div className="inline-flex min-h-[60px] items-center justify-center bg-white/80 px-4 py-5 text-[14px] font-bold tracking-widest md:min-h-[123px] md:px-[80px] md:py-[38px] md:text-[28px]">
              通信が遅い！電波が弱いのかと感じる
            </div>
          </div>
          <div ref={animateRefs} className="max-md:mr-4">
            <div className="inline-flex min-h-[60px] items-center justify-center bg-white/80 px-4 py-5 text-[14px] font-bold tracking-widest md:min-h-[123px] md:px-[64px] md:py-[38px] md:text-[28px]">
              月額費用を支払ってまで必要としない
            </div>
          </div>
          <div ref={animateRefs} className="ml-7 md:ml-[118px]">
            <div className="inline-flex min-h-[60px] items-center justify-center bg-white/80 px-10 py-5 text-[14px] font-bold tracking-widest md:min-h-[123px] md:min-w-[636px] md:px-[80px] md:py-[38px] md:text-[28px]">
              外出が続き使用しない時がある
            </div>
          </div>
          <div ref={animateRefs} className="max-md:mr-4">
            <div className="inline-flex min-h-[60px] items-center justify-center bg-white/80 px-4 py-5 text-[14px] font-bold tracking-widest md:min-h-[123px] md:px-[64px] md:py-[38px] md:text-[28px]">
              容量不足で使えない時は怒りを感じる
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
