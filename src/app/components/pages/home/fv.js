"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function FV() {
  const animateRefs = useScrollAnimation("fadeUp");
  const animateZoomRefs = useScrollAnimation("zoom");
  return (
    <div className="relative flex items-end bg-[url('/images/background-fv-sp.jpg')] bg-cover max-md:h-screen md:bg-[url('/images/background-fv.jpg')]">
      <div
        ref={animateZoomRefs}
        className="absolute top-5 flex justify-center px-5 opacity-0 max-md:z-30 md:inset-x-0 md:top-[10%] md:px-10"
      >
        <div className="mx-auto w-full max-w-[246px] md:max-w-[1321px]">
          <img
            className="max-md:hidden"
            src="/images/logo.png"
            alt="ギガ二刀流Wi-Fi"
          />
          <img
            className="md:hidden"
            src="/images/logo-sp.png"
            alt="ギガ二刀流Wi-Fi"
          />
        </div>
      </div>
      <div
        ref={animateRefs}
        className="relative mx-auto flex w-full justify-center overflow-hidden pt-[16.5%] opacity-0 max-md:z-10"
      >
        <figure>
          <img
            className="relative object-contain max-md:bottom-[-4vw] max-md:left-[-2.5vw] max-md:mx-auto max-md:max-h-[50vh] max-md:w-[122vw] max-md:max-w-[600px] max-[600px]:left-[-5vw]"
            src="/images/fv-character.png"
            alt="ギガ二刀流Wi-Fi"
          />
        </figure>
      </div>
      <div
        ref={animateZoomRefs}
        className="absolute inset-x-0 bottom-12 px-8 opacity-0 max-md:z-20 md:bottom-10 md:px-10"
      >
        <div className="mx-auto w-full max-w-[540px] max-md:flex max-md:justify-end md:max-w-[1280px]">
          <img
            className="max-[1440px]:w-[21.736vw] max-md:hidden"
            src="/images/fv-wifi.png"
            alt="Wifi"
          />
          <img
            className="max-md:max-h-[23vh] max-md:max-w-[27.733vw] md:hidden"
            src="/images/fv-wifi-sp.png"
            alt="Wifi"
          />
        </div>
      </div>
      <div
        ref={animateZoomRefs}
        className="absolute inset-x-0 px-4 opacity-0 max-md:top-[18vh] max-md:z-0 md:bottom-4 md:px-10"
      >
        <div className="mx-auto flex w-full max-w-[1280px] justify-center md:justify-end">
          <img
            className="max-[1440px]:max-w-[29.653vw] max-md:max-h-[54vh] max-md:max-w-[81.333vw]"
            src="/images/fv-freebot.png"
            alt="Freebot"
          />
        </div>
      </div>
    </div>
  );
}
