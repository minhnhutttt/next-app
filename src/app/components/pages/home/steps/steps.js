"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "../../../common/sectionTitle";
import StepItem from "./stepItem";

export default function Steps() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <section className="px-5 pb-8 pt-10 md:pb-[57px] md:pt-[100px]">
      <div className="mx-auto w-full max-w-[600px] lg:max-w-[1200px]">
        <SectionTitle>簡単3ステップ！</SectionTitle>
        <div ref={animateRefs} className="mt-10 grid gap-[30px] md:mt-[78px] lg:grid-cols-3">
          <StepItem step="/images/img-step-01.png">アドレスを入力する</StepItem>
          <StepItem step="/images/img-step-02.png">検索ボタン押す</StepItem>
          <StepItem step="/images/img-step-03.png">
            履歴に簡単アクセス！
          </StepItem>
        </div>
      </div>
    </section>
  );
}
