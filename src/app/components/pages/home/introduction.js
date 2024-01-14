"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";

export default function Introduction() {
    const animateRefs = useScrollAnimation("fadeUp");
    return (
        <div className="bg-[url('/images/background-introduction.png')] bg-cover bg-center px-5 pt-10 pb-12 md:pt-20 md:pb-[96px]">
            <div className="w-full md:max-w-[1280px] max-w-[440px] mx-auto">
                <SectionTitle>
                    新しい価値観、次世代を始めよう！<br />
                    次世代アカウントだからできること
                </SectionTitle>
                <div className="grid gap-5 mt-8 md:mt-12 md:grid-cols-2 xl:gap-10">
                    <div ref={animateRefs} className="bg-white rounded-[10px] flex items-center justify-center xl:min-h-[260px] md:min-h-[200px] min-h-[100px] md:gap-5 md:p-5 gap-4 p-4">
                        <figure>
                            <img className="max-md:w-[36px] max-lg:w-[56px]" src="/images/icon-introduction-01.png" alt="NFTを無料で送れる" />
                        </figure>
                        <div className="xl:text-[32px] md:text-[22px] text-[18px] font-bold text-[#1C1C1C] leading-[1.2]">
                            NFTを無料で送れる
                        </div>
                    </div>
                    <div ref={animateRefs} className="bg-white rounded-[10px] flex items-center justify-center xl:min-h-[260px] md:min-h-[200px] min-h-[100px] md:gap-5 md:p-5 gap-4 p-4">
                        <figure>
                            <img className="max-md:w-[37px] max-lg:w-[57px]" src="/images/icon-introduction-02.png" alt="QRコードを撮るだけでNFTが受け取れる" />
                        </figure>
                        <div className="xl:text-[28px] md:text-[18px] text-[16px] font-bold text-[#1C1C1C] leading-[1.2]">
                            QRコードを撮るだけ<br />でNFTが受け取れる
                        </div>
                    </div>
                    <div ref={animateRefs} className="bg-white rounded-[10px] flex items-center justify-center xl:min-h-[260px] md:min-h-[200px] min-h-[100px] md:gap-5 md:p-5 gap-4 p-4">
                        <figure>
                            <img className="max-md:w-[46px] max-lg:w-[66px]" src="/images/icon-introduction-03.png" alt="電話番号の登録なしでメッセージアプリが使える" />
                        </figure>
                        <div className="xl:text-[28px] md:text-[18px] text-[16px] font-bold text-[#1C1C1C] leading-[1.2]">
                            電話番号の登録なしで<br />
                            メッセージアプリが使える
                        </div>
                    </div>
                    <div ref={animateRefs} className="bg-white rounded-[10px] flex items-center justify-center xl:min-h-[260px] md:min-h-[200px] min-h-[100px] md:gap-5 md:p-5 gap-4 p-4">
                        <figure>
                            <img className="max-md:w-[50px] max-lg:w-[70px]" src="/images/icon-introduction-04.png" alt="ビットコインやイーサリアムの送受信ができる" />
                        </figure>
                        <div className="xl:text-[28px] md:text-[18px] text-[16px] font-bold text-[#1C1C1C] leading-[1.2]">
                            ビットコインやイーサリ<br />アムの送受信ができる
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
