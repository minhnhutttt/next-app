"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import DownloadStore from "./components/downloadStore";

export default function Download() {
  const animateRefs = useScrollAnimation("fadeUp");
    return (
        <div id="download" className="px-5 pt-20 md:pt-[120px]">
            <div className="w-full max-w-[912px] mx-auto bg-[#2157E3] rounded-[20px] py-8 px-5 md:px-9 flex max-md:flex-col-reverse items-center bg-[url('/images/background-download.png')] max-md:bg-[length:100%_auto] bg-no-repeat bg-left-bottom max-md:gap-6">
                <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
                    <div ref={animateRefs} className="flex items-center lg:items-start before:block md:before:w-[47px] before:w-[28px] md:before:h-[103px] before:h-[61px] after:scale-x-[-1] after:bg-[url('/images/line.png')]  before:bg-[url('/images/line.png')] before:bg-cover after:block after:mt-4 before:mt-4 md:after:w-[47px] after:w-[28px] md:after:h-[103px] after:h-[61px] after:bg-cover mb-7 ">
                        <h6 className="text-white lg:text-[32px] md:text-[3.4vw] [font-size:_min(5vw,24px)] font-black text-center leading-[1.2] tracking-tight">
                        ワクワクする未来に向けて<br />
                        ウォレットアカウントを<br />
                        <span className="lg:text-[42px] md:text-[4vw] [font-size:_min(5vw,32px)]">作ろう！</span>
                        </h6>
                    </div>
                    <div className="lg:pl-7">
                        <DownloadStore />
                    </div>
                </div>
                <div ref={animateRefs} className="max-md:w-[60%] max-md:max-w-[320px] max-lg:w-[40%]">
                    <img src="/images/download-phone.png" alt="" />
                </div>
            </div>
        </div>
    )
  }
  