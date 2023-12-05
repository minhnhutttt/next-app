import Link from "next/link";

export default function Enjoy() {
    return (
        <div className="flex bg-[#FF2D55]/[0.1] pt-10 pb-2.5 md:pt-[74px]" id="enjoy">
            <div className="w-full md:max-w-[1200px] max-w-[480px] px-5 mx-auto">
                <div className="flex gap-4 max-md:flex-col-reverse">
                    <div className='mt-[6%] flex-1 relative md:pl-5'>
                        <div className="w-full max-w-[446px]">
                        <p className="font-['Oswald'] md:text-[20px] text-[16px] tracking-[0.35em]">ENJOY</p>
                        <h3 className="md:text-[36px] text-[24px] font-bold mb-5">楽しみ方</h3>
                        <p className="text-[14px] md:text-[18px] leading-[1.8]">
                            欲しいNFTを見つけて<span className="relative inline-block after:absolute after:content-[''] after:w-full after:h-2 after:z-[-1] after:bg-[#F7F71A] after:bottom-1 after:left-0">その場所へ行くだけ！</span><br />推しのトレカやお店のクーポン券がGETできます。<br />※NFT受け取りには<Link href="/">ダイバーウォレット</Link>が必要です、
                        </p>
                        </div>
                        <figure className="max-md:top-full w-[41.86%] max-w-[298px] mt-2">
                        <img className='w-full' src="/images/img-nft-get-02.png" alt="" />
                        </figure>
                    </div>
                    <div className="flex gap-4 md:w-[43.1%] max-w-[499px] md:mr-[-7.5%]">
                    <figure className="w-[56%]">
                        <img src="/images/img-phone-enjoy.png" alt="楽しみ方" />
                    </figure>
                    <figure className="w-[40.4%]">
                        <img src="/images/deco-02.png" alt="" />
                    </figure>
                    </div>
                </div>
            </div>
      </div>
    )
  }
