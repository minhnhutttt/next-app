"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { useEffect, useRef } from "react";

export default function FV() {
  const animateRefs = useScrollAnimation("fadeUp");
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <video
        ref={videoRef}
        muted
        loop
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/fv.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-0 font-black text-white">
        <h1
          ref={animateRefs}
          className="my-8 text-[40px] leading-[0.6] opacity-0 [text-shadow:0px_4px_100px_#000] md:my-16 md:text-[70px] lg:text-[100px]"
        >
          <p>心ゆくまで</p> <br />
          <p className="ml-[50px] md:ml-[100px] lg:ml-[200px]">まるごと保管</p>
        </h1>
        <p
          ref={animateRefs}
          className="text-center text-[18px] opacity-0 [text-shadow:0px_4px_100px_#000] md:text-[24px] lg:text-[32px]"
        >
          低コストで安全 <br />
          買い切り型オンラインストレージ
        </p>
      </div>
      <div className="absolute bottom-0 left-2/4 h-[50px] after:absolute after:top-[0] after:h-[30px] after:w-px after:animate-[pathmove_1.4s_ease-in-out_infinite] after:bg-[#eee] after:opacity-0 after:content-['']">
        <span className="absolute -left-[24px] -top-[15px] text-[12px] font-medium uppercase tracking-wider text-[#eee]">
          Scroll
        </span>
      </div>
    </div>
  );
}
