"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import DownloadStore from "./components/downloadStore";

export default function Download() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div className="mb-20 md:mb-[160px] px-5">
      <div id="download" className="pt-20 md:pt-[160px]">
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
      <div className="flex justify-center mt-[54px] ">
        <div className="flex gap-[5px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M9.16667 6.70939H10.8333V8.37606H9.16667V6.70939ZM9.16667 10.0427H10.8333V15.0427H9.16667V10.0427ZM10 2.54272C5.40001 2.54272 1.66667 6.27606 1.66667 10.8761C1.66667 15.4761 5.40001 19.2094 10 19.2094C14.6 19.2094 18.3333 15.4761 18.3333 10.8761C18.3333 6.27606 14.6 2.54272 10 2.54272ZM10 17.5427C6.32501 17.5427 3.33334 14.5511 3.33334 10.8761C3.33334 7.20106 6.32501 4.20939 10 4.20939C13.675 4.20939 16.6667 7.20106 16.6667 10.8761C16.6667 14.5511 13.675 17.5427 10 17.5427Z" fill="white"/>
          </svg>
          <p className="md:text-[14px] text-[13px] text-white">
            <span className="font-bold">ウォレットアカウントとは、暗号資産を入れるお財布機能がついたユーザーIDです。</span>
            <br />
            <br />
            <span>このアカウントは、ログイン機能だけではなく、NFTはもちろんビットコイン、<br />
            イーサリアムなどの暗号資産を受け取ったり、他の人に送ったりすることが可能です。</span>
          </p>
        </div>
      </div>
    </div>
  );
}
