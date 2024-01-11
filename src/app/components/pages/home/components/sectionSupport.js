"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

export default function SectionSupport() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <>
    <p ref={animateRefs} className="text-center md:text-[24px] text-[16px] font-bold tracking-[0.18em] mb-4">【 トリプルキャリア対応 】</p>
    <div ref={animateRefs} className="flex justify-center md:gap-7 gap-4">
        <figure>
            <img src="/images/logo-docomo.png" alt="docomo" />
        </figure>
        <figure>
            <img src="/images/logo-au.png" alt="au" />
        </figure>
        <figure>
            <img src="/images/logo-sb.png" alt="Softbank" />
        </figure>
    </div>
    </>
  );
}