import Link from "next/link";

export default function Download() {
    return (
        <div className="px-5 pt-10 pb-6 md:pt-[86px] md:pb-[52px]">
            <div className="w-full max-w-[1000px] mx-auto border-[6px] border-[#2A5293] bg-white/90 rounded-[20px] py-7 md:py-10 px-5">
                <div className="flex justify-center mb-4 md:mb-6">
                    <h5 className="md:text-[34px] font-bold text-[20px] px-6 md:px-8 py-3 md:py-5 bg-[#FAFF00] rounded-[50px] leading-[1.2] tracking-widest text-center">ギガ二刀流Wi-Fiをご注文いただくと</h5>
                </div>
                <div className="w-full max-w-[850px] mx-auto">
                    <div className="flex items-center gap-6 md:gap-10 px-[12px] max-md:flex-col">
                        <figure className="">
                            <img src="/images/diver-storage.png" alt="DIVER Storage" />
                        </figure>
                        <div className="flex-1">
                            <p className="md:text-[24px] text-[14px] font-bold md:pl-5 border-b border-black tracking-wider pb-2.5"><span className="md:text-[42px] text-[28px]">300</span>GBのオンラインストレージが付いてくる！</p>
                            <div className="pt-3 md:pt-5 md:pl-6">
                                <p className="text-[13px] md:text-[18px] font-bold mb-1">ストレージのご利用には、DIVER Walletが必要です。</p>
                                <p className="md:text-[16px] text-[12px] leading-[1.8]">①無料のDIVER Walletをダウンロードし、ウォレット作成 <br />
                                ②DIVER Storageサイトへアクセスし、DIVER Walletをコネクトするとストレージがご利用いただけます。</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex max-md:flex-col max-md:items-center justify-center gap-5 md:gap-10 bg-[#2A5293] px-5 rounded-[20px] mt-5 md:mt-9 py-5 md:py-9">
                        <figure className="mt-4">
                            <img src="/images/diver-wallet.png" alt="DIVER Wallet" />
                        </figure>
                        <div className="">
                            <p className="md:text-[18px] text-[13px] text-white md:pl-[51px] tracking-[0.16rem] max-md:text-center">DIVER Wallet <br className="md:hidden" />ダウンロードはこちら</p>
                            <div className="flex max-md:justify-center gap-4 md:gap-10 mt-4 max-md:flex-wrap md:mt-6">
                                <Link href="">
                                    <img className="max-md:w-[160px]" src="/images/btn-app-store.png" alt="App Store" />
                                </Link>
                                <Link href="">
                                    <img className="max-md:w-[160px]" src="/images/btn-google-play.png" alt="Google Play" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  