"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "./components/sectionTitle";

export default function ModernPeople() {
    const animateRefs = useScrollAnimation("fadeUp");
    return (
      <div className="flex items-end relative md:pt-[72px] pt-10 md:pb-[140px] pb-20 px-5 overflow-hidden">
        <div ref={animateRefs} className="absolute bottom-0 inset-x-0">
            <img className="w-full" src="/images/background-modern-people.png" alt="" />
        </div>
        <div className="w-full md:max-w-[1280px] max-w-[440px] mx-auto flex justify-end pl-10 md:pl-[130px]">
            <div className="w-full max-w-[900px]">
                <SectionTitle>現代人の皆様へ</SectionTitle>
                <div className="bg-white/40 px-4 py-12 md:p-8 lg:p-12 md:mt-16 mt-20 rounded-[30px] relative">
                    <figure ref={animateRefs} className="absolute lg:top-[-150px] md:top-[-120px] -top-20 -left-12 md:left-[-130px]">
                        <img className="max-md:w-[140px] max-lg:w-[220px]" src="/images/giga-wifi-circle.png" alt="" />
                    </figure>
                    <div ref={animateRefs} className="flex max-md:flex-col gap-6 pb-8 border-b border-black">
                        <p className="lg:text-[28px] md:text-[20px] text-[18px] font-bold md:w-[364px] text-center">契約手続き無し！</p>
                        <p className="md:text-[18px] text-[14px] font-medium md:w-[356px]">
                        安心買切りシステムで、解約の手間がかかる月額課金も面倒な契約書も全て不要！
                        </p>
                    </div>
                    <div ref={animateRefs} className="flex max-md:flex-col gap-6 pt-12">
                        <p className="lg:text-[28px] md:text-[20px] text-[18px] font-bold md:w-[364px] text-center md:text-end">
                            通信もストレージも買切り！ <br />
                            使いすぎも防止できる！
                        </p>
                        <p className="md:text-[18px] text-[14px] font-medium md:w-[356px]">
                        追加チャージは、「購入 or 後払い」必要な分だけいつでも「チャージできる or 使った分だけ」後払いができる！
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
  