"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import DownloadStore from "./components/downloadStore";

export default function Download() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div id="download" className="px-5 pt-20 md:pt-[120px]">
      <div className="mx-auto flex w-full max-w-[912px] items-center rounded-[20px] bg-[#2157E3] bg-[url('/images/background-download.png')] bg-left-bottom bg-no-repeat px-5 py-8 max-md:flex-col-reverse max-md:gap-6 max-md:bg-[length:100%_auto] md:px-9">
        <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
          <div
            ref={animateRefs}
            className="mb-7 flex items-center before:mt-4 before:block before:h-[61px] before:w-[28px] before:bg-[url('/images/line.png')] before:bg-cover after:mt-4  after:block after:h-[61px] after:w-[28px] after:scale-x-[-1] after:bg-[url('/images/line.png')] after:bg-cover md:before:h-[103px] md:before:w-[47px] md:after:h-[103px] md:after:w-[47px] lg:items-start "
          >
            <h6 className="text-center font-black leading-[1.2] tracking-tight text-white [font-size:_min(5vw,24px)] md:text-[3.4vw] lg:text-[32px]">
              ワクワクする未来に向けて
              <br />
              ウォレットアカウントを
              <br />
              <span className="[font-size:_min(5vw,32px)] md:text-[4vw] lg:text-[42px]">
                作ろう！
              </span>
            </h6>
          </div>
          <div className="lg:pl-7">
            <DownloadStore />
          </div>
        </div>
        <div
          ref={animateRefs}
          className="max-lg:w-[40%] max-md:w-[60%] max-md:max-w-[320px]"
        >
          <img src="/images/download-phone.png" alt="" />
        </div>
      </div>
    </div>
  );
}
