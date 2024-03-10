"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "./components/sectionTitle";

export default function Dissatisfaction() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="relative flex items-end max-md:flex-col-reverse overflow-hidden bg-[url('/images/background-dissatisfaction.png')] bg-cover bg-no-repeat bg-top">
      <div ref={animateRefs} className="bottom-0 right-0 md:absolute max-md:flex">
        <img
          className="max-md:w-[44vw] max-xl:w-[35vw] max-[1439px]:w-[43.472vw] max-[1366px]:w-[40vw]"
          src="/images/dissatisfaction-character.png"
          alt=""
        />
        <p className="absolute md:text-[14px] text-[10px] font-bold text-white md:bottom-6 bottom-2 right-4">©諏訪原寛幸／七大陸</p>
      </div>
      <div className="relative mx-auto w-full md:max-w-[1300px] max-w-[440px] px-5 pb-5 pt-12 md:pb-[135px] md:pt-[100px]">
        <SectionTitle>オンラインストレージへの不満</SectionTitle>
        <div className="flex flex-col gap-5 mt-16 md:gap-8">
          <div ref={animateRefs} className="max-md:mr-4">
            <div className="max-md:w-full inline-flex min-h-[60px] items-center justify-center bg-white/80 px-4 py-5 text-[14px] font-bold xl:min-h-[123px] md:min-h-[90px] md:px-[36px] md:py-[38px] md:text-[2vw] xl:text-[28px]">
            少しだけの利用だと損している気がする
            </div>
          </div>
          <div ref={animateRefs} className="ml-7 md:ml-[80px] xl:ml-[118px]">
            <div className="max-md:w-full inline-flex min-h-[60px] items-center justify-center bg-white/80 px-4 py-5 text-[14px] font-bold xl:min-h-[123px] md:min-h-[90px] md:px-[110px] md:py-[38px] md:text-[2vw] xl:text-[28px]">
            クラウド保存はセキュリティが不安
            </div>
          </div>
          <div ref={animateRefs} className="max-md:mr-4">
            <div className="max-md:w-full inline-flex min-h-[60px] items-center justify-center bg-white/80 px-4 py-5 text-[14px] font-bold xl:min-h-[123px] md:min-h-[90px] md:px-[100px] md:py-[38px] md:text-[2vw] xl:text-[28px]">
            一度利用してしまうと解約しづらい
            </div>
          </div>
          <div ref={animateRefs} className="ml-7 md:ml-[60px] xl:ml-[84px]">
            <div className="max-md:w-full inline-flex min-h-[60px] items-center justify-center bg-white/80 px-4 py-5 text-[14px] font-bold xl:min-h-[123px] md:min-h-[90px] xl:min-w-[636px] md:px-10 xl:px-[44px] md:tracking-[0.08em] md:py-[38px] md:text-[2vw] xl:text-[28px]">
            使用していないストレージ分も料金が毎月かかる
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
