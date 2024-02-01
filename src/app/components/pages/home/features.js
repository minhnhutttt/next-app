"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../common/sectionTitle";

export default function Features() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section className="py-[60px] md:mb-20 md:py-[100px]">
      <div className="w-full">
        <div className="px-5">
          <SectionTitle>
            次世代スキャンは
            <br />
            次世代アプリユーザーの味方！
            <br />
            知っておくべき4つの特徴
          </SectionTitle>
        </div>
        <div className="grid grid-cols-2 mt-10 md:mt-20 md:grid-cols-4">
          <div
            ref={animateRefs}
            className="flex flex-col items-center bg-[#FFDBF7] px-6 py-6 lg:px-5 xl:px-[50px] lg:py-10"
          >
            <figure>
              <img src="/images/img-feature-01.png" alt="ログイン不要" />
            </figure>
            <h5 className="mt-4 text-center text-[15px] font-bold md:mt-5 md:text-[18px]">
              ログイン不要
            </h5>
          </div>
          <div
            ref={animateRefs}
            className="flex flex-col items-center bg-[#99CBF9] px-6 py-6 lg:px-5 xl:px-[50px] lg:py-10"
          >
            <figure>
              <img src="/images/img-feature-02.png" alt="ログイン不要" />
            </figure>
            <h5 className="mt-4 text-center text-[15px] font-bold md:mt-5 md:text-[18px]">
            取引履歴を<br className="lg:hidden" />ダウンロード
            </h5>
          </div>
          <div
            ref={animateRefs}
            className="flex flex-col items-center bg-[#DEFFAC] px-6 py-6 lg:px-5 xl:px-[50px] lg:py-10"
          >
            <figure>
              <img src="/images/img-feature-03.png" alt="ログイン不要" />
            </figure>
            <h5 className="mt-4 text-center text-[15px] font-bold md:mt-5 md:text-[18px]">
              送り先に届いたか<br className="lg:hidden" />簡単確認
            </h5>
          </div>
          <div
            ref={animateRefs}
            className="flex flex-col items-center bg-[#D7B1FC] px-6 py-6 lg:px-5 xl:px-[50px] lg:py-10"
          >
            <figure>
              <img src="/images/img-feature-04.png" alt="ログイン不要" />
            </figure>
            <h5 className="mt-4 text-center text-[15px] font-bold md:mt-5 md:text-[18px]">
              取引履歴を<br className="lg:hidden" />瞬間表示
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
