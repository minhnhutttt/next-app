import Link from "next/link";

export default function FV() {
  return (
    <div className="bg-[url('/images/fv-sp.png')] md:bg-[url('/images/fv.png')] bg-cover bg-center h-screen relative flex md:items-center">
        <div className="px-5 max-md:py-8 md:px-20">
            <h1 className="text-[36px] md:text-[70px] font-black leading-[1.4] md:mb-8 mb-4">
            今までなかった<br />全く新しい
            </h1>
            <figure className="mb-8 md:mb-12">
                <img className="max-md:max-w-[260px]" src="/images/nft-map.png" alt="NFT MAP" />
            </figure>
            <div className="">
                <Link href="/" className="relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center w-full max-w-[240px] md:max-w-[360px] h-[60px] md:h-[80px] border-2 md:border-[5px] border-[#F7F71A] bg-white md:rounded-[50px] rounded-[25px]">
                    <span className="text-[16px] md:text-[24px] font-medium">NFT設置店舗一覧</span>
                    <svg className="absolute right-2.5" width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.46821 17.988L11.2358 11.2204C11.4781 10.9786 11.6703 10.6915 11.8014 10.3754C11.9325 10.0593 12 9.72043 12 9.37821C12 9.03599 11.9325 8.69713 11.8014 8.38103C11.6703 8.06493 11.4781 7.77779 11.2358 7.53605L4.46821 0.768413C2.82203 -0.877769 1.6666e-06 0.298075 1.46329e-06 2.62363L2.79999e-07 16.1589C7.66918e-08 18.4845 2.82203 19.6342 4.46821 17.988Z" fill="black"/>
                    </svg>

                </Link>
            </div>
        </div>
    </div>
  )
}
