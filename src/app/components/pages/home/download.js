import Title from "@/app/components/common/title";
import Link from "next/link";

export default function Download() {
    return (
      <>
      <div className="md:pt-[8%] pt-[15%] md:pb-[47px] px-5">
            <div className="w-full md:max-w-[1400px] max-w-[440px] mx-auto">
                <Title>DIVER Wallet ダウンロード</Title>
                <div className="flex max-md:flex-col justify-center max-md:items-center md:ml-10 md:mt-[5%] mt-[10%]">
                    <div className="max-md:max-w-[220px] max-md:mx-auto">
                        <img src="/img-download.png" alt="" />
                    </div>
                    <div className="lg:ml-[110px] md:ml-[40px] md:mt-[2.4%] mt-[8%]">
                        <h4 className="text-[#1853a1] text-[30px] md:text-[40px] lg:text-[60px] font-black leading-snug">
                            安心、安全、シンプル <br />
                            <span className="text-[24px] md:text-[36px] lg:text-[54px]">ワンクリックでかんたん操作</span>
                        </h4>
                        <p className="text-[15px] md:text-[20px] font-medium mt-[2.5%]">高速で直感的なUI/UXを追求。数回タップするだけで購入、販売、取引可能です。</p>
                        <div className="bg-[#1853a1] rounded-[20px] mt-[6.5%] pt-[6%] md:pt-[2.5%] pb-[10%] md:pb-[5%] max-w-[692px] px-4">
                            <p className="text-center text-white text-[24px] md:text-[32px] font-bold flex items-center justify-center">今すぐダウンロード<svg xmlns="http://www.w3.org/2000/svg" className="fill-white" height="1em" viewBox="0 0 512 512"><path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3H304V160c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32v96H150.3C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z"/></svg></p>
                            <div className="flex justify-center gap-5 md:gap-[34px] mt-[6%] md:mt-[3%]">
                                <Link href="/">
                                    <img src="/btn-apple.png" alt="" />
                                </Link>
                                <Link href="/">
                                    <img src="/btn-google.png" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      </>
    );
  }
  