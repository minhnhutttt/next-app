"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

export default function Movie() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="flex items-center justify-center bg-[#0C0C0C] px-5 py-[100px] md:py-[140px]">
      <div ref={animateRefs}>
        <img src="/images/movie-dummy.png" alt="" />
      </div>
    </div>
  );
}
