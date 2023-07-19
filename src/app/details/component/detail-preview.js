import Link from "next/link";

export default function DetailPreview() {
  return (
    <div className="mx-auto flex w-full max-w-[1300px] rounded-[20px] border border-[#dcdddf] p-6 pb-12">
      <div>
        <p className="mb-8">
          <img src="/img-details.jpg" alt="" />
        </p>
        <button className="mx-auto flex h-[60px] w-[280px] items-center justify-center gap-3 rounded-[5px] bg-[#366bb3] text-xl font-medium text-white">
          <img src="/ic-preview.png" alt="" />
          <span>Preview</span>
        </button>
      </div>
      <div className="ml-8 mt-4 flex-1">
        <p className="inline-block h-[34px] rounded-[3px] bg-black px-8 text-base font-bold uppercase text-white md:text-2xl">
          0TT
        </p>
        <div className="mt-5 flex gap-[22px]">
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
        <div className="mt-1">
          <a
            href="#"
            className="border-b border-[#0013c7] text-[28px] text-[#0013c7]"
          >
            コレクションコレクションコレクション名
          </a>
        </div>
        <div className="mt-14 flex w-full gap-5">
          <div className="flex-1 border border-[#dcdddf] pb-7">
            <div className="flex h-12 items-center gap-1.5 bg-[#f3f3f3] px-5">
              <img src="/ic-nft.png" alt="" />
              <span className="text-base font-medium">Minted NFTs</span>
            </div>
            <div className="mb-2 py-6 text-center text-[48px] font-bold">
              3/10
            </div>
            <Link
              href="#"
              className="mx-auto flex h-[46px] w-[230px] items-center justify-center rounded-[5px] border-2 border-[#366bb3] text-base font-medium"
            >
              View on DIVER Scan
            </Link>
          </div>
          <div className="flex-1 border border-[#dcdddf] pb-7">
            <div className="flex h-12 items-center gap-1.5 bg-[#f3f3f3] px-5">
              <img src="/ic-received.png" alt="" />
              <span className="text-base font-medium">Received NFTs</span>
            </div>
            <div className="mb-2 py-6 text-center text-[48px] font-bold">
              4/8
            </div>
            <Link
              href="#"
              className="mx-auto flex h-[46px] w-[230px] items-center justify-center rounded-[5px] border-2 border-[#366bb3] text-base font-medium"
            >
              View on DIVER Scan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
