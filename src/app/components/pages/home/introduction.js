"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import ButtonCheck from "../../common/buttonCheck";

export default function Introduction() {
    const animateRefs = useScrollAnimation("fadeUp");
    return (
       <section className="px-5">
        <div className="w-full md:max-w-[1280px] max-w-[440px] mx-auto bg-white flex justify-center py-6 md:py-[72px] px-6 md:px-16">
            <div ref={animateRefs} className="w-full max-w-[1150px] flex max-md:flex-col-reverse gap-6 md:gap-[60px]">
                <div className="flex-1">
                    <h4 className="text-[32px] md:text-[40px] font-bold md:py-2 md:mb-8 mb-4">次世代スキャンとは？</h4>
                    <p className="text-[14px] md:text-[18px] font-black tracking-widest md:mb-5 mb-3">次世代アカウントの簡単アドレスチェッカーのことです。</p>
                    <p className="md:text-[15px] text-[13px] leading-tight tracking-wider mb-7 md:mb-11">
                    次世代スキャンの正式なサービス名は「DIVER Scan」と言います。<br />【チェックする】ボタンを押すと、DIVER Scanのページが開かれます。<br />DIVER Scanは、簡単な操作で指定のアドレスの取引確認ができる便利なウェブサイトです。ブックマークしておきましょう。
                    </p>
                    <div className="flex max-md:justify-center">
                        <ButtonCheck />
                    </div>
                </div>
                <figure>
                    <img src="/images/img-introduction.png" alt="" />
                </figure>
            </div>
        </div>
       </section>
    )
  }
  