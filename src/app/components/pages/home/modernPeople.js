"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "./components/sectionTitle";

export default function ModernPeople() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="relative flex items-end overflow-hidden px-5 pb-20 pt-10 md:pb-[140px] md:pt-[72px]">
      <div ref={animateRefs} className="absolute inset-x-0 bottom-0">
        <img
          className="w-full"
          src="/images/background-modern-people.png"
          alt=""
        />
      </div>
      <div className="mx-auto flex w-full max-w-[440px] justify-end pl-10 md:max-w-[1280px] md:pl-[130px]">
        <div className="w-full max-w-[900px]">
          <SectionTitle>現代人の皆様へ</SectionTitle>
          <div className="relative mt-20 rounded-[30px] bg-white/40 px-4 py-12 md:mt-16 md:p-8 lg:p-12">
            <figure
              ref={animateRefs}
              className="absolute -left-12 -top-20 md:left-[-130px] md:top-[-120px] lg:top-[-150px]"
            >
              <img
                className="max-lg:w-[220px] max-md:w-[140px]"
                src="/images/giga-wifi-circle.png"
                alt=""
              />
            </figure>
            <div
              ref={animateRefs}
              className="flex gap-6 border-b border-black pb-8 max-md:flex-col"
            >
              <p className="text-center text-[18px] font-bold md:w-[364px] md:text-[20px] lg:text-[28px]">
                契約手続き無し！
              </p>
              <p className="text-[14px] font-medium md:w-[356px] md:text-[18px]">
                安心買切りシステムで、解約の手間がかかる月額課金も面倒な契約書も全て不要！
              </p>
            </div>
            <div ref={animateRefs} className="flex gap-6 pt-12 max-md:flex-col">
              <p className="text-center text-[18px] font-bold md:w-[364px] md:text-end md:text-[20px] lg:text-[28px]">
                通信もストレージも買切り！ <br />
                使いすぎも防止できる！
              </p>
              <p className="text-[14px] font-medium md:w-[356px] md:text-[18px]">
                追加チャージは、「購入 or
                後払い」必要な分だけいつでも「チャージできる or
                使った分だけ」後払いができる！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
