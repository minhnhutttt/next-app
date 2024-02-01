"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import ButtonCheck from "../../common/buttonCheck";

export default function Introduction() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section className="px-5">
      <div className="mx-auto flex w-full max-w-[440px] justify-center bg-white px-6 py-6 md:max-w-[1280px] md:px-16 md:py-[72px]">
        <div
          ref={animateRefs}
          className="flex w-full max-w-[1150px] gap-6 max-md:flex-col-reverse md:gap-[60px]"
        >
          <div className="flex-1">
            <h4 className="mb-4 text-[32px] font-bold md:mb-8 md:py-2 md:text-[40px]">
              次世代スキャンとは？
            </h4>
            <p className="mb-3 text-[14px] font-black tracking-widest md:mb-5 md:text-[18px]">
              次世代アドレスの簡単アドレスチェッカーのことです。
            </p>
            <p className="mb-7 text-[13px] leading-tight tracking-wider md:mb-11 md:text-[15px]">
              次世代スキャンの正式なサービス名は「DIVER Scan」と言います。
              <br />
              【チェックする】ボタンを押すと、DIVER Scanのページが開かれます。
              <br />
              DIVER
              Scanは、簡単な操作で指定のアドレスの取引確認ができる便利なウェブサイトです。ブックマークしておきましょう。
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
  );
}
