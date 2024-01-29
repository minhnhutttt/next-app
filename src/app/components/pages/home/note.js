"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import ButtonCheck from "../../common/buttonCheck";
import SectionTitle from "../../common/sectionTitle";

export default function Note() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section className="px-5">
      <div className="mx-auto w-full max-w-[1024px]">
        <SectionTitle>
          これだけは覚えて帰って！
          <br />
          あなたが次世代スキャンを使う時
        </SectionTitle>
        <div className="mt-[60px] rounded-[35px] bg-[linear-gradient(180deg,_#FFCA00_0%,_#FFE500_100%)] px-5 py-10 md:rounded-[70px] md:p-20">
          <div className="mx-auto w-full max-w-[380px] md:max-w-[664px]">
            <div className="space-y-6 md:space-y-12">
              <div
                ref={animateRefs}
                className="flex items-center justify-center gap-6 md:gap-9"
              >
                <figure className="flex-[0_0_60px] md:flex-[0_0_100px]">
                  <img src="/images/girl.png" alt="" />
                </figure>
                <div className="relative rounded-xl bg-white p-4 text-[13px] font-medium after:absolute after:-left-4 after:top-1/2 after:h-[25px] after:w-[34px] after:-translate-y-1/2 after:bg-[url('/images/triangle-w.png')] after:bg-cover md:w-[437px] md:rounded-[20px] md:p-5 md:text-[16px] md:after:-left-6">
                  ふむふむ。わからない言葉もあるけど、これだけはわかったわ。とにかく、何か取引のことを確認したくなったら次世代スキャンを使えばいいんだね！
                </div>
              </div>
              <div
                ref={animateRefs}
                className="flex items-center justify-center gap-6 md:gap-9"
              >
                <div className="relative rounded-xl bg-white p-4 text-[13px] font-medium after:absolute after:-right-4 after:top-1/2 after:h-[25px] after:w-[34px] after:-translate-y-1/2 after:rotate-180 after:bg-[url('/images/triangle-w.png')] after:bg-cover md:w-[437px] md:rounded-[20px] md:p-5 md:text-[16px] md:after:-right-6">
                  その通り！使えば使うほどわかることも増えるから、取引のたびに次世代スキャンでチェックするといいよ。ブックマークもしておこう！
                </div>
                <figure className="flex-[0_0_60px] md:flex-[0_0_100px]">
                  <img src="/images/boy.png" alt="" />
                </figure>
              </div>
            </div>
            <div
              ref={animateRefs}
              className="mt-7 flex flex-col items-center justify-center rounded-[20px] bg-white px-5 pb-8 pt-6 md:mt-[60px] md:pb-[60px] md:pt-10"
            >
              <figure>
                <img
                  className="max-md:w-[100px]"
                  src="/images/check.png"
                  alt=""
                />
              </figure>
              <p className="mt-6 text-center text-[13px] font-medium md:mt-9 md:text-[16px]">
                まだ取引がなくて特に確認することがないキミもこれだけは絶対暗記！
              </p>
              <p className="mb-3 py-3 text-center text-[16px] font-black leading-loose text-black/[0.99] md:mb-4 md:py-4 md:text-[20px]">
                ① 取引を確認したくなったら次世代スキャンを訪れる
                <br />② 次世代スキャンのサイトは以下をブックマークしておく
              </p>
              <ButtonCheck />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
