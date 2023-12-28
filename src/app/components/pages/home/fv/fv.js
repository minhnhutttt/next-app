"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import FVItem from "./fvItem";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FV() {
  const animateRefs = useScrollAnimation("fadeUp");
  const animate3Refs = useScrollAnimation("fadeUp", 0.3);
  const animate5Refs = useScrollAnimation("fadeUp", 0.5);
  const animate7Refs = useScrollAnimation("fadeUp", 0.7);
  const animate9Refs = useScrollAnimation("fadeUp", 0.9);
  const animate11Refs = useScrollAnimation("fadeUp", 1.1);

  const fvRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      fvRef.current,
      { autoAlpha: 0, scaleX: 0.9, scaleY: 0.9 },
      {
        autoAlpha: 1,
        left: 0,
        scaleX: 1,
        scaleY: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: fvRef.current,
          start: "top bottom-=30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <div className="px-2 pt-3 md:px-5 md:pt-[25px]">
      <div
        ref={fvRef}
        className="mx-auto flex w-full max-w-[1380px] flex-col items-center justify-center overflow-visible rounded-[10px] bg-white px-2 py-4 opacity-0 md:min-h-[670px] md:rounded-[20px] md:px-[18px] md:py-[23px]"
      >
        <div className="h-full w-full flex-1 transition-transform duration-300 [transform-style:_preserve-3d]">
          <div className="absolute flex h-full w-full flex-col items-center justify-center overflow-hidden [backface-visibility:_hidden] before:absolute before:block before:h-[300%] before:w-[25%] before:animate-[rotation\_481_5000ms_infinite_linear] before:bg-[#98FE01] before:content-['']">
            <div className="absolute flex h-[calc(100%-8px)] w-[calc(100%-8px)] justify-center gap-10 bg-white text-black md:h-[calc(100%-10px)] md:w-[calc(100%-10px)]"></div>
          </div>
          <div className="relative col-span-3 mx-auto grid h-[calc(100%-8px)] w-[calc(100%-8px)] max-w-[400px] px-3 pb-[6%] pt-[5%] text-black md:h-[calc(100%-10px)] md:w-[calc(100%-10px)] md:max-w-[1166px] md:px-5">
            <figure
              ref={animateRefs}
              className="col-[1_/_2] row-[1_/_3] mr-5 max-md:flex max-md:items-center max-md:justify-end md:mr-10"
            >
              <img
                className="max-md:w-[80px]"
                src="/images/peep-standing.png"
                alt=""
              />
            </figure>
            <div className="col-[2] row-[1] max-w-[915px] flex-1 pr-5 md:col-[2_/_4] md:row-[1]">
              <h1 ref={animate3Refs} className="font-dela leading-[1.3]">
                <span className="text-[28px] md:text-[66px]">WEB3.0</span>
                <span className="text-[20px] md:text-[51px]">でも</span>
                <br className="md:hidden" />
                <span className="text-[32px] md:text-[80px]">自分らしく</span>
              </h1>
              <p
                ref={animate5Refs}
                className="font-dela text-[16px] md:text-[29px]"
              >
                次世代ドメイン（＝Web3.0アカウントの名前）を簡単取得
              </p>
            </div>
            <div className="col-[1_/_3] row-[3] mt-4 max-w-[915px] space-y-2.5 md:col-[2_/_4] md:row-[2]">
              <div
                ref={animate7Refs}
                className="flex flex-wrap gap-x-0.5 gap-y-1.5"
              >
                <FVItem size="lg">.red</FVItem>
                <FVItem size="lg">.orange</FVItem>
                <FVItem size="lg">.yellow</FVItem>
                <FVItem size="lg">.green</FVItem>
                <FVItem size="lg">.blue</FVItem>
                <FVItem size="lg">.indigo</FVItem>
                <FVItem size="lg">.purple</FVItem>
                <FVItem size="lg">.gold</FVItem>
                <FVItem size="lg">.black</FVItem>
              </div>
              <div
                ref={animate9Refs}
                className="flex flex-wrap gap-x-0.5 gap-y-1.5"
              >
                <FVItem size="md">.web3</FVItem>
                <FVItem size="md">.star</FVItem>
                <FVItem size="md">.hero</FVItem>
                <FVItem size="md">.king</FVItem>
                <FVItem size="md">.queen</FVItem>
                <FVItem size="md">.samurai</FVItem>
                <FVItem size="md">.sengoku</FVItem>
                <FVItem size="md">.ninja</FVItem>
                <FVItem size="md">.bushi</FVItem>
                <FVItem size="md">.player</FVItem>
                <FVItem size="md">.dreamer</FVItem>
                <FVItem size="md">.kitty</FVItem>
                <FVItem size="md">.fairy</FVItem>
              </div>
              <div
                ref={animate11Refs}
                className="flex flex-wrap gap-x-0.5 gap-y-1.5"
              >
                <FVItem size="sm">.a</FVItem>
                <FVItem size="sm">.b</FVItem>
                <FVItem size="sm">.c</FVItem>
                <FVItem size="sm">.d</FVItem>
                <FVItem size="sm">.e</FVItem>
                <FVItem size="sm">.f</FVItem>
                <FVItem size="sm">.g</FVItem>
                <FVItem size="sm">.h</FVItem>
                <FVItem size="sm">.i</FVItem>
                <FVItem size="sm">.j</FVItem>
                <FVItem size="sm">.k</FVItem>
                <FVItem size="sm">.l</FVItem>
                <FVItem size="sm">.m</FVItem>
                <FVItem size="sm">.n</FVItem>
                <FVItem size="sm">.o</FVItem>
                <FVItem size="sm">.p</FVItem>
                <FVItem size="sm">.q</FVItem>
                <FVItem size="sm">.r</FVItem>
                <FVItem size="sm">.s</FVItem>
                <FVItem size="sm">.t</FVItem>
                <FVItem size="sm">.u</FVItem>
                <FVItem size="sm">.v</FVItem>
                <FVItem size="sm">.w</FVItem>
                <FVItem size="sm">.x</FVItem>
                <FVItem size="sm">.y</FVItem>
                <FVItem size="sm">.z</FVItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
