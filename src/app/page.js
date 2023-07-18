import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black/80">
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-[280px] w-[280px] flex-col items-center rounded-full border-[10px] border-[#00559f] bg-white pt-12 shadow-[4px_5px_0px_rgba(43,38,38,0.85)] md:h-[369px] md:w-[369px] md:pt-[60px]">
            <p className="mb-3 text-center text-sm font-medium md:mb-7 md:text-lg">
              ウォレットを接続する
            </p>
            <img
              className="max-md:max-w-[140px]"
              src="/logo-diver-wallet.png"
              alt=""
            />
          </div>
          <div className="mt-6 flex flex-col gap-4 md:mt-10 md:gap-8">
            <Link
              href="/"
              className="relative flex h-[60px] w-[300px] items-center justify-center rounded-[46px] border border-[#313333] bg-white text-lg font-medium md:h-[92px] md:w-[478px] md:text-2xl"
            >
              使い方を見る
              <span className="absolute right-10">
                <img className="max-md:w-2" src="/ic-arrow.png" alt="" />
              </span>
            </Link>
            <Link
              href="/"
              className="relative flex h-[60px] w-[300px] items-center justify-center rounded-[46px] bg-[#366bb3] text-lg font-medium text-white md:h-[92px] md:w-[478px] md:text-2xl"
            >
              DIVER Walletをダウンロード
              <span className="ml-2">
                <img className="max-md:w-5" src="/ic-dl.png" alt="" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
