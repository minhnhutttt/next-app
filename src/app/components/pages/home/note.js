"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import ButtonCheck from "../../common/buttonCheck";
import SectionTitle from "../../common/sectionTitle";

export default function Note() {
    const animateRefs = useScrollAnimation("fadeUp");
    return (
        <section className="px-5">
            <div className="w-full max-w-[1024px] mx-auto">
                <SectionTitle>
                    これだけは覚えて帰って！<br />
                    あなたが次世代スキャンを使う時
                </SectionTitle>
                <div className="bg-[linear-gradient(180deg,_#FFCA00_0%,_#FFE500_100%)] px-5 py-10 md:p-20 md:rounded-[70px] rounded-[35px] mt-[60px]">
                    <div className="w-full md:max-w-[664px] max-w-[380px] mx-auto">
                        <div className="space-y-6 md:space-y-12">
                            <div ref={animateRefs} className="flex items-center justify-center gap-6 md:gap-9">
                                <figure className="md:flex-[0_0_100px] flex-[0_0_60px]">
                                    <img src="/images/girl.png" alt="" />
                                </figure>
                                <div className="relative md:w-[437px] md:text-[16px] text-[13px] font-medium md:p-5 p-4 md:rounded-[20px] rounded-xl bg-white after:absolute after:w-[34px] after:h-[25px] after:bg-[url('/images/triangle-w.png')] after:bg-cover md:after:-left-6 after:-left-4 after:top-1/2 after:-translate-y-1/2">
                                ふむふむ。わからない言葉もあるけど、これだけはわかったわ。とにかく、何か取引のことを確認したくなったら次世代スキャンを使えばいいんだね！
                                </div>
                            </div>
                            <div ref={animateRefs} className="flex items-center justify-center gap-6 md:gap-9">
                                <div className="relative md:w-[437px] md:text-[16px] text-[13px] font-medium md:p-5 p-4 md:rounded-[20px] rounded-xl bg-white after:absolute after:w-[34px] after:h-[25px] after:bg-[url('/images/triangle-w.png')] after:bg-cover after:rotate-180 md:after:-right-6 after:-right-4 after:top-1/2 after:-translate-y-1/2">
                                その通り！使えば使うほどわかることも増えるから、取引のたびに次世代スキャンでチェックするといいよ。ブックマークもしておこう！
                                </div>
                                <figure className="md:flex-[0_0_100px] flex-[0_0_60px]">
                                    <img src="/images/boy.png" alt="" />
                                </figure>
                            </div>
                        </div>
                        <div ref={animateRefs} className="bg-white rounded-[20px] flex items-center justify-center flex-col md:pt-10 md:pb-[60px] pt-6 pb-8 px-5 md:mt-[60px] mt-7">
                            <figure>
                                <img className="max-md:w-[100px]" src="/images/check.png" alt="" />
                            </figure>
                            <p className="text-center md:text-[16px] text-[13px] font-medium mt-6 md:mt-9">
                                まだ取引がなくて特に確認することがないキミもこれだけは絶対暗記！
                            </p>
                            <p className="text-center text-black/[0.99] text-[16px] md:text-[20px] font-black py-3 md:py-4 leading-loose mb-3 md:mb-4">
                                ① 取引を確認したくなったら次世代スキャンを訪れる<br />
                                ② 次世代スキャンのサイトは以下をブックマークしておく
                            </p>
                            <ButtonCheck />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
  