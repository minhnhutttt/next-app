"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import Link from "next/link";

export default function NFT() {
  const animateRefs = useScrollAnimation("fadeUp");
    return (
        <div className="lg:mt-[116px] md:mt-[80px] mt-16 ">
            <div className="bg-[url('/images/background-nft.jpg')] bg-[length:100%_100%] bg-no-repeat pt-12 lg:pt-[120px] md:pt-[80px] lg:pb-[200px] md:pb-[140px] pb-[120px] px-5">
                <div className="flex w-full max-md:max-w-[440px] md:max-w-[1320px] mx-auto md:pl-6 gap-10 lg:gap-4 max-lg:flex-col max-lg:justify-center max-lg:items-center">
                    <div className="w-full max-w-[348px] pt-5">
                        <div ref={animateRefs} className="relative z-10 w-[150px] md:w-[189px] aspect-square mx-auto bg-white rounded-full border-[9px] border-[#FFC84D] flex justify-center items-center flex-col font-noto font-black text-center leading-tight">
                            <span className="md:text-[34px] text-[24px]">今だけ</span>
                            <span className="md:text-[44px] text-[32px] bg-[linear-gradient(to_top,_#FBC02D_40%,_transparent_40%)]">無料</span>
                            <span className="md:text-[26px] text-[20px] tracking-[-0.3rem]">キャンペーン</span>
                        </div>
                        <div ref={animateRefs} className="bg-white rounded-[30px] py-10 px-[30px] -mt-8">
                            <h4 className="relative text-center md:text-[32px] text-[20px] font-black pb-5 before:absolute before:-left-[5px] md:before:-left-[10px] before:bottom-0 before:w-full before:h-[12px] before:-skew-x-[50deg] md:before:bg-[repeating-linear-gradient(90deg,_transparent_0_5px,_#2A5297_8px_16px)] before:bg-[repeating-linear-gradient(90deg,_transparent_0_3px,_#2A5297_8px_12px)] before:content-['']">
                                初めてのWEB3.0 <br />
                                NFTを送ろう！
                            </h4>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div ref={animateRefs} className="text-center font-bold">
                            <h4 className="md:text-[24px] text-[18px]">大切な人への贈り物として、この特別な包装を選んでみませんか？</h4>
                            <p className="md:text-[18px] text-[14px] mt-2">「見れればいいってだけじゃない!」</p>
                        </div>
                        <div ref={animateRefs} className="flex max-md:flex-wrap justify-center items-start gap-5 md:px-5 mt-8 md:mt-12">
                            <div className="md:w-1/3 w-[calc(50%-10px)] flex flex-col justify-center items-center">
                                <figure>
                                    <img className="max-md:w-[150px]" src="/images/nft-ic-01.png" alt="記念日のメッセージ" />
                                </figure>
                                <div className="mt-3 md:mt-5">
                                    <h5 className="md:text-[18px] text-[15px] text-center font-bold">記念日のメッセージ</h5>
                                    <p className="text-center mt-2 md:text-[16px] text-[13px] tracking-tighter">卒業式や入園式、誕生日や結婚記念日に</p>
                                </div>
                            </div>
                            <div className="md:w-1/3 w-[calc(50%-10px)] flex flex-col justify-center items-center">
                                <figure>
                                    <img className="max-md:w-[150px]" src="/images/nft-ic-02.png" alt="記念日のメッセージ" />
                                </figure>
                                <div className="mt-3 md:mt-5">
                                    <h5 className="md:text-[18px] text-[15px] text-center font-bold">記念写真</h5>
                                    <p className="text-center mt-2 md:text-[16px] text-[13px] tracking-tighter">家族写真や友達との思い出の写真など</p>
                                </div>
                            </div>
                            <div className="md:w-1/3 w-[calc(50%-10px)] flex flex-col justify-center items-center">
                                <figure>
                                    <img className="max-md:w-[150px]" src="/images/nft-ic-03.png" alt="記念日のメッセージ" />
                                </figure>
                                <div className="mt-3 md:mt-5">
                                    <h5 className="md:text-[18px] text-[15px] text-center font-bold">来場者記念</h5>
                                    <p className="text-center mt-2 md:text-[16px] text-[13px] tracking-tighter">イベントの来場者記念や、達成記念に</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-5">
                <div ref={animateRefs} className="relative w-full max-w-[578px] mx-auto bg-white md:rounded-[170px] rounded-[70px] p-8 md:p-[60px] -mt-[88px] md:mt-[-119px] after:bg-[url('/images/triangle.png')] md:after:w-10 after:w-8 md:after:h-9 after:h-7 after:bg-cover after:absolute after:top-[calc(100%-12px)] after:left-1/2 after:-translate-x-1/2">
                    <div className="border-y border-[#EA4335] py-5">
                        <p className="md:text-[18px] text-[14px] leading-tight font-medium">NFTへと昇華したデータには、花言葉のような言葉にしない優しさも刻まれます。</p>
                        <p className="md:text-[14px] text-[12px] mt-2 max-md:pr-4">※NFTとはWeb3.0技術を使った、改ざんができない特別な証明書です。</p>
                    </div>
                    <figure className="absolute right-1.5 md:bottom-9 bottom-4">
                        <img className="max-md:w-[60px]" src="/images/flowers.png" alt="" />
                    </figure>
                </div>
                <div ref={animateRefs} className="bg-[#00B900] rounded-[20px] w-full max-w-[912px] mx-auto mt-10 md:mt-[60px] px-6 md:pt-[38px] pt-8 md:px-11 md:pb-8 pb-5">
                    <div ref={animateRefs} className="flex max-md:items-center max-md:flex-col-reverse md:gap-11 gap-6">
                        <div className="pt-3 md:pt-6">
                            <h6 className="text-white md:text-[32px] text-[22px] font-bold text-center flex items-center justify-center before:block md:before:w-[28px] before:w-[20px] md:before:h-[55px] before:h-[39px] after:scale-x-[-1] after:bg-[url('/images/line.png')]  before:bg-[url('/images/line.png')] before:bg-cover after:block md:after:mt-4 md:before:mt-4 after:mt-2 before:mt-2 md:after:w-[28px] after:w-[20px] md:after:h-[55px] after:h-[39px] after:bg-cover">キャンペーンに参加する</h6>
                            <div className="w-full max-w-[334px] mx-auto mt-6">
                                <Link href="/" className="mx-auto relative font-noto md:text-[32px] text-[24px] font-black ư-full md:max-w-[320px] max-w-[240px] h-16 md:h-20 flex items-center justify-center bg-[#FBBC04] [box-shadow:0px_4px_0px_0px_#000] rounded-[10px] duration-150 hover:opacity-75">
                                    <span>申し込む</span>
                                    <svg className="absolute right-3" xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                                        <path d="M15 7.64637C16.3333 8.41617 16.3333 10.3407 15 11.1105L3 18.0387C1.66667 18.8085 -8.94676e-07 17.8462 -8.27378e-07 16.3066L-2.21695e-07 2.45021C-1.54397e-07 0.910614 1.66667 -0.0516367 3 0.718164L15 7.64637Z" fill="black"/>
                                        </svg>
                                </Link>
                                <div className="border-t border-white mt-[30px] pt-[25px]">
                                    <p className="text-white md:text-[16px] text-[13px] font-bold leading-[1.3]">
                                    LINE登録後「キャンペーンに参加」をタップし、ガイダンスに従い「NFTにしたい写真や画像」と「ウォレットアドレス」を送ってください。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <img className="max-md:max-w-[300px]" src="/images/campaign.png" alt="" />
                        </div>
                    </div>
                    <div ref={animateRefs} className="flex justify-center items-center mt-8 gap-2">
                        <img src="/images/girl.png" alt="" />
                        <span className="md:text-[20px] text-[15px] text-white font-bold">わからないことはLINEで何でもお問い合わせください。</span>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  