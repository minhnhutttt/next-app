"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function FV() {
  const animateRefs = useScrollAnimation("fadeUp");

  return (
    <div className="relative flex items-end bg-[url('/images/background-fv-sp.jpg')] bg-cover md:bg-[url('/images/background-fv.jpg')]">
      <div
        ref={animateRefs}
        className="relative mx-auto flex w-full justify-center overflow-hidden pt-[72px] md:pt-[90px] opacity-0 max-md:z-10"
      >
        <figure className="relative">
          <img
            className="relative object-contain max-md:hidden"
            src="/images/fv-image.png"
            alt="ギガ100年ストレージ"
          />
          <img
            className="relative object-contain md:hidden"
            src="/images/fv-image-sp.png"
            alt="ギガ100年ストレージ"
          />
          <p className="absolute md:text-[14px] text-[10px] font-bold text-black md:bottom-4 bottom-2 left-[calc(50%+40px)] md:left-[6%]">©諏訪原寛幸／七大陸</p>
        </figure>
      </div>
    </div>
  );
}
