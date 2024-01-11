import Link from "next/link";
import SectionTitle from "./components/sectionTitle";

export default function Plan() {
    return (
        <div className="bg-[url('/images/background-plan.png')] bg-cover py-10 md:py-20 px-5">
            <div className="w-full max-w-[1106px] mx-auto mb-8">
                <SectionTitle>武将プラン</SectionTitle>
                <div className="rounded-[20px] bg-black/50 px-4 md:px-7 mt-8 md:mt-16 pt-6 md:pt-12">
                    <div className="flex md:items-start max-md:flex-col items-center md:gap-[60px]">
                        <div className="flex flex-col justify-center items-center">
                            <p className="text-white md:text-[70px] text-[40px] font-bold mb-4">27,500 <span className="md:text-[52px] text-[28px]">円</span></p>
                            <Link href="/" className="md:w-[300px] w-[240px] h-[60px] md:h-[70px] flex justify-center items-center text-white bg-[#D80000] md:text-[20px] font-bold text-[14px] rounded-[50px] relative [box-shadow:0px_5.579px_0px_0px_#850403]">
                                <span>ご購入はこちら</span>
                                <svg className="absolute right-[14px]" xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                    <path d="M13.4554 0.882529C13.0941 0.331761 12.4797 0 11.821 0C10.2664 0 9.33394 1.72689 10.1866 3.02676L12.0372 5.84782C12.8622 7.10551 12.8622 8.73288 12.0372 9.99057L10.1866 12.8116C9.33394 14.1115 10.2664 15.8384 11.821 15.8384C12.4797 15.8384 13.0941 15.5066 13.4554 14.9559L15.2219 12.2628C16.952 9.62548 16.952 6.21291 15.2219 3.57554L13.4554 0.882529Z" fill="white"/>
                                    <path d="M6.18277 0.882529C5.82148 0.331761 5.20709 0 4.54839 0C2.9938 0 2.06132 1.72689 2.91401 3.02676L4.76456 5.84782C5.58958 7.10551 5.58958 8.73288 4.76456 9.99057L2.91401 12.8116C2.06133 14.1115 2.9938 15.8384 4.54839 15.8384C5.20709 15.8384 5.82148 15.5066 6.18277 14.9559L7.94933 12.2628C9.67938 9.62548 9.67938 6.21291 7.94933 3.57554L6.18277 0.882529Z" fill="white"/>
                                </svg>
                            </Link>
                            <div className="flex justify-center items-center mt-3">
                                <img className="max-md:max-w-[340px] max-md:w-full" src="/images/plan-nft.png" alt="" />
                            </div>
                        </div>
                        <div className="pt-4 max-md:flex max-md:flex-col max-md:items-center">
                            <h5 className="mb-8 md:mb-16 max-md:ml-[6vw]">
                                <img className="max-md:max-w-[360px] max-md:w-full" src="/images/plan-storage.png" alt="100GB 通信 + 300GB(オンラインストレージ付き)" />
                            </h5>
                            <div className="space-y-2">
                                <p><img className="max-md:max-w-[280px] max-md:w-full" src="/images/plan-text-01.png" alt="NFT武将トレカ当たる！" /></p>
                                <p><img className="max-md:max-w-[280px] max-md:w-full" src="/images/plan-text-02.png" alt="NFTクーポンもらえる！" /></p>
                                <p><img className="max-md:max-w-[280px] max-md:w-full" src="/images/plan-text-03.png" alt="NFTスタンプもらえる！" /></p>
                            </div>
                        </div>
                    </div>
                    <p className="md:text-[14px] text-[12px] text-white text-right px-3 pb-5 max-md:pt-5">※画像はイメージです、実際に届くNFTと違う場合があります。</p>
                </div>
            </div>
            <div className="flex justify-center md:mb-[-135px] mb-[-70px] relative">
                <img className="max-md:w-[43px]" src="/images/arrow-down.png" alt="" />
            </div>
        </div>
    )
  }
  