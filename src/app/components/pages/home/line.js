"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

export default function Line() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="px-5 pb-16 pt-10 md:pb-[97px] md:pt-16">
      <h5
        ref={animateRefs}
        className="text-center font-zenkaku text-[36px] font-bold md:text-[80px]"
      >
        まずはLINE登録
      </h5>
      <div ref={animateRefs} className="mt-10 flex justify-center md:mt-[85px]">
        <button
          alt="次世代ドメイン"
          className="group relative flex h-[80px] w-[320px] items-center justify-center overflow-hidden rounded-3xl bg-[#01B202] px-5 text-[24px] text-lg uppercase shadow-[0px_14px_0px_0px_#076807] transition-[31ms] duration-[cubic-bezier(.5,0.7,0.4,1)] before:absolute before:inset-0 before:flex before:items-center before:justify-center before:pl-[56px] before:font-bold before:text-[white] before:opacity-100 before:content-[attr(alt)] hover:before:translate-y-full hover:before:opacity-0 hover:before:transition-all hover:before:duration-[0.0s] active:translate-y-[7px] active:shadow-none active:transition-[35ms] active:duration-[cubic-bezier(.5,0.7,0.4,1)] md:h-[156px] md:w-[548px] md:before:pl-[92px] md:before:text-[32px]"
        >
          <img
            className="mr-4 max-md:w-10 md:mr-[30px]"
            src="/images/icon-line.svg"
            alt=""
          />
          <i className="-translate-y-5 text-[24px] font-bold not-italic text-[white] opacity-0 transition-all duration-[2s] ease-[ease] group-hover:translate-y-0 group-hover:opacity-100 group-hover:transition-all group-hover:delay-[0.045s] group-hover:duration-[0.2s] group-hover:ease-[ease] md:text-[32px]">
            次
          </i>
          <i className="-translate-y-5 text-[24px] font-bold not-italic text-[white] opacity-0 transition-all duration-[2s] ease-[ease] group-hover:translate-y-0 group-hover:opacity-100 group-hover:transition-all group-hover:delay-[calc(0.045s*3)] group-hover:duration-[0.2s] group-hover:ease-[ease] md:text-[32px]">
            世
          </i>
          <i className="-translate-y-5 text-[24px] font-bold not-italic text-[white] opacity-0 transition-all duration-[2s] ease-[ease] group-hover:translate-y-0 group-hover:opacity-100 group-hover:transition-all group-hover:delay-[calc(0.045s*4)] group-hover:duration-[0.2s] group-hover:ease-[ease] md:text-[32px]">
            代
          </i>
          <i className="-translate-y-5 text-[24px] font-bold not-italic text-[white] opacity-0 transition-all duration-[2s] ease-[ease] group-hover:translate-y-0 group-hover:opacity-100 group-hover:transition-all group-hover:delay-[calc(0.045s*5)] group-hover:duration-[0.2s] group-hover:ease-[ease] md:text-[32px]">
            ド
          </i>
          <i className="-translate-y-5 text-[24px] font-bold not-italic text-[white] opacity-0 transition-all duration-[2s] ease-[ease] group-hover:translate-y-0 group-hover:opacity-100 group-hover:transition-all group-hover:delay-[calc(0.045s*6)] group-hover:duration-[0.2s] group-hover:ease-[ease] md:text-[32px]">
            メ
          </i>
          <i className="-translate-y-5 text-[24px] font-bold not-italic text-[white] opacity-0 transition-all duration-[2s] ease-[ease] group-hover:translate-y-0 group-hover:opacity-100 group-hover:transition-all group-hover:delay-[calc(0.045s*7)] group-hover:duration-[0.2s] group-hover:ease-[ease] md:text-[32px]">
            イ
          </i>
          <i className="-translate-y-5 text-[24px] font-bold not-italic text-[white] opacity-0 transition-all duration-[2s] ease-[ease] group-hover:translate-y-0 group-hover:opacity-100 group-hover:transition-all group-hover:delay-[calc(0.045s*8)] group-hover:duration-[0.2s] group-hover:ease-[ease] md:text-[32px]">
            ン
          </i>
        </button>
      </div>
    </div>
  );
}
