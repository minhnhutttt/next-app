export default function About() {
  return (
    <div className="flex bg-[#64D2FF]/[0.1] pt-10 pb-1 md:pt-[74px]" id="about">
        <div className="w-full md:max-w-[1200px] max-w-[480px] px-5 mx-auto">
        <div className="flex gap-4 max-md:flex-col">
            <figure className="w-full md:w-[41.5%] max-w-[476px]">
            <img src="/images/img-map-about.png" alt="NFT-MAPとは" />
            </figure>
            <div className='mt-[6%] flex-1 relative'>
                <div className="w-full max-w-[446px]">
                <p className="font-['Oswald'] md:text-[20px] text-[16px] tracking-[0.35em]">ABOUT</p>
                <h3 className="md:text-[36px] text-[24px] font-bold mb-5">NFT-MAPとは</h3>
                <p className="text-[14px] md:text-[18px] leading-[1.8]">
                    指定された位置情報の範囲内でQRコードを読み込むと、セットされたNFTを受信することができます。<br />
                    イベント、店舗、施設など<span className="relative inline-block after:absolute after:content-[''] after:w-full after:z-[-1] after:h-2 after:bg-[#F7F71A] after:bottom-1 after:left-0">それぞれの場所限定NFT</span>を受け取ることができます。
                </p>
                </div>
                <figure className="absolute right-[-4%] max-md:top-full md:bottom-[-60%] lg:bottom-[-38%] xl:bottom-[-22%] md:w-[46%] w-[53%]">
                <img className='w-full' src="/images/img-nft-get-01.png" alt="" />
                </figure>
            </div>
        </div>
        <figure className="mt-2 max-md:w-[44%]">
            <img className='max-md:w-full' src="/images/deco-01.png" alt="" />
        </figure>
        </div>
    </div>
  )
}
