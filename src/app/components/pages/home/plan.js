import Link from "next/link";

export default function Plan() {
    return (
      <div className="bg-white pt-[100px] pb-[110px] px-5">
        <div className="w-full md:max-w-[1030px] max-w-[400px] mx-auto">
            <h3 className="text-center md:text-[42px] text-[18px] font-bold">料金プラン</h3>
            <p className="text-center font-bold md:text-[28px] text-[16px] mt-2">次世代USBのNESを<span className="text-[#FF3A14]">最安価格</span>でご提供！</p>
            <div className="flex justify-center bg-white/90 rounded-[26px] [box-shadow:0px_4px_50px_0px_rgba(0,_0,_0,_0.10)] px-5 mt-10 md:mt-[128px]">
                <div className="flex md:max-w-[865px] w-full py-10 max-md:flex-col max-md:items-center md:py-11 justify-center gap-10 lg:gap-20">
                    <div className="max-md:bg-white max-md:[box-shadow:0px_20px_34px_0px_rgba(0,_64,_158,_0.30)] max-md:p-5 max-md:rounded-[26px]">
                        <div className="w-[207px] ">
                            <p className="text-center md:text-[24px] text-[18px] font-medium border-b border-[#22ABF3] py-3">2GB Storage</p>
                            <p className="text-center md:text-[36px] text-[20px] font-bold mt-4">1,100<span className="md:text-[28px] text-[16px]">円</span></p>
                            <ul className="space-y-5 my-4">
                                <li className="flex justify-center md:text-[16px] text-[13px] gap-2 font-bold">
                                    <figure><img src="/images/check-circle.svg" alt="" /></figure>
                                    <p>1GBあたり550円</p>
                                </li>
                                <li className="flex justify-center md:text-[16px] text-[13px] gap-2 font-bold">
                                    <figure><img src="/images/check-circle.svg" alt="" /></figure>
                                    <p>
                                        画像：約408枚 <br />
                                        <span className="font-medium md:text-[14px] text-[12px]">(1200万画素の場合)</span>
                                    </p>
                                </li>
                            </ul>
                            <Link href="/" className="flex items-center justify-center h-[45px] bg-[#22ABF3]/[0.6] rounded-3xl font-bold md:text-[15px] text-[12px] duration-150 hover:opacity-50">
                            はじめる
                            </Link>
                        </div>
                    </div>
                    <div className="md:mt-[-110px] w-[292px] bg-white md:px-[30px] px-5 border-2 md:border-4 border-[#22ABF3] rounded-[26px] [box-shadow:0px_20px_34px_0px_rgba(0,_64,_158,_0.30)] pt-6 md:pt-10 pb-8 md:pb-[46px]">
                        <div className="w-[232px] mx-auto">
                            <div className="flex justify-center mb-2">
                                <p className="md:text-[14px] text-[12px] text-white font-bold px-3 py-1 leading-snug bg-[#FF3A14] rounded-xl tracking-wider relative">
                                    <span>迷ったらこれ！</span>
                                    <svg className="absolute top-full left-1/2 -translate-x-1/2" xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                        <path d="M4 6L0.535899 -6.52533e-07L7.4641 -4.68497e-08L4 6Z" fill="#FF3A14"/>
                                    </svg>
                                </p>
                            </div>
                            <p className="text-center md:text-[24px] text-[18px] font-medium border-b border-[#22ABF3] py-3">100GB Storage</p>
                            <p className="text-center md:text-[36px] text-[20px] font-bold mt-4">6,820<span className="md:text-[28px] text-[16px]">円</span></p>
                            <ul className="space-y-5 my-4">
                                <li className="flex justify-center md:text-[16px] text-[13px] gap-2 font-bold">
                                    <figure><img src="/images/check-circle.svg" alt="" /></figure>
                                    <p>1GBあたり68円</p>
                                </li>
                                <li className="flex justify-center md:text-[16px] text-[13px] gap-2 font-bold">
                                    <figure><img src="/images/check-circle.svg" alt="" /></figure>
                                    <p>
                                    画像：約2.2万枚 <br />
                                        <span className="font-medium md:text-[14px] text-[12px]">(1200万画素の場合)</span>
                                    </p>
                                </li>
                            </ul>
                            <Link href="/" className="flex items-center justify-center h-[45px] bg-[#22ABF3] rounded-3xl font-bold md:text-[15px] text-[12px] duration-150 hover:opacity-50">
                            はじめる
                            </Link>
                        </div>
                    </div>
                    <div className="max-md:bg-white max-md:[box-shadow:0px_20px_34px_0px_rgba(0,_64,_158,_0.30)] max-md:p-5 max-md:rounded-[26px]">
                    <div className="w-[207px]">
                        <p className="text-center md:text-[24px] text-[18px] font-medium border-b border-[#22ABF3] py-3">500GB Storage</p>
                        <p className="text-center md:text-[36px] text-[20px] font-bold mt-4">25,300<span className="md:text-[28px] text-[16px]">円</span></p>
                        <ul className="space-y-5 my-4">
                            <li className="flex justify-center md:text-[16px] text-[13px] gap-2 font-bold">
                                <figure><img src="/images/check-circle.svg" alt="" /></figure>
                                <p>1GBあたり50円</p>
                            </li>
                            <li className="flex justify-center md:text-[16px] text-[13px] gap-2 font-bold">
                                <figure><img src="/images/check-circle.svg" alt="" /></figure>
                                <p>
                                画像：約11.3万枚 <br />
                                    <span className="font-medium md:text-[14px] text-[12px]">(1200万画素の場合)</span>
                                </p>
                            </li>
                        </ul>
                        <Link href="/" className="flex items-center justify-center h-[45px] bg-[#22ABF3]/[0.6] rounded-3xl font-bold md:text-[15px] text-[12px] duration-150 hover:opacity-50">
                        はじめる
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  