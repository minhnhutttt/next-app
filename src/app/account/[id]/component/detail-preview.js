import Link from "next/link";

export default function DetailPreview() {
  return (
    <div className="mx-auto flex w-full max-w-[1300px] rounded-[20px] border border-[#dcdddf] p-3 pb-8 max-lg:flex-col max-lg:items-center md:p-6 md:pb-12">
      <div>
        <p className="mb-4 md:mb-8">
          <img src="/img-details.jpg" alt="" />
        </p>
        <button className="mx-auto flex h-12 w-[280px] items-center justify-center gap-3 rounded-[5px] bg-[#366bb3] text-base font-medium text-white md:h-[60px] md:text-xl">
          <img src="/ic-preview.png" alt="" />
          <span>Preview</span>
        </button>
      </div>
      <div className="mt-8 lg:ml-8 lg:mt-4 lg:flex-1">
        <p className="inline-flex h-[34px] items-center rounded-[3px] bg-black px-8 text-base font-bold uppercase text-white md:text-2xl">
          0TT
        </p>
        <div className="mt-5 flex flex-wrap gap-3 md:gap-[22px]">
          <div className="flex items-center gap-2">
            <img src="/tag-image.png" alt="" />
            <span className="text-base tracking-wider md:text-2xl">IMAGE</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/tag-music.png" alt="" />
            <span className="text-base tracking-wider md:text-2xl">MUSIC</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/tag-movie.png" alt="" />
            <span className="text-base tracking-wider md:text-2xl">MOVIE</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/tag-3d.png" alt="" />
            <span className="text-base tracking-wider md:text-2xl">3D</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/tag-doc.png" alt="" />
            <span className="text-base tracking-wider md:text-2xl">DOC</span>
          </div>
        </div>
        <div className="mt-3 md:mt-1">
          <a
            href="#"
            className="border-b border-[#0013c7] text-xl text-[#0013c7] md:text-[28px]"
          >
            コレクションコレクションコレクション名
          </a>
        </div>
        <div className="mt-8 flex w-full gap-5 max-md:flex-col md:mt-14">
          <div className="flex-1 border border-[#dcdddf] pb-7">
            <div className="flex h-10 items-center gap-1.5 bg-[#f3f3f3] px-5 md:h-12">
              <img src="/ic-nft.png" alt="" />
              <span className="text-sm font-medium md:text-base">
                Minted NFTs
              </span>
            </div>
            <div className="px-5">
              <div className="mb-2 py-4 text-center text-[32px] font-bold md:py-6 md:text-[48px]">
                3/10
              </div>
              <Link
                href="#"
                className="mx-auto flex h-9 w-[230px] items-center justify-center rounded-[5px] border-2 border-[#366bb3] text-sm font-medium md:h-[46px] md:text-base"
              >
                View on DIVER Scan
              </Link>
            </div>
          </div>
          <div className="flex-1 border border-[#dcdddf] pb-7">
            <div className="flex h-10 items-center gap-1.5 bg-[#f3f3f3] px-5 md:h-12">
              <img src="/ic-received.png" alt="" />
              <span className="text-sm font-medium md:text-base">
                Received NFTs
              </span>
            </div>
            <div className="px-5">
              <div className="mb-2 py-4 text-center text-[32px] font-bold md:py-6 md:text-[48px]">
                4/8
              </div>
              <Link
                href="#"
                className="mx-auto flex h-9 w-[230px] items-center justify-center rounded-[5px] border-2 border-[#366bb3] text-sm font-medium md:h-[46px] md:text-base"
              >
                View on DIVER Scan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
