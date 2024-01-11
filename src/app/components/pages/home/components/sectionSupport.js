"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

export default function SectionSupport() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <>
      <p
        ref={animateRefs}
        className="mb-4 text-center text-[16px] font-bold tracking-[0.18em] md:text-[24px]"
      >
        【 トリプルキャリア対応 】
      </p>
      <div ref={animateRefs} className="flex justify-center gap-4 md:gap-7">
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
