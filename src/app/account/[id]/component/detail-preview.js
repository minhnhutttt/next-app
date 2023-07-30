import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket, faFire, faHeart, faEye, faArrowUpRightFromSquare, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

export default function DetailPreview() {
  const [Like, setLike] = useState(true);
  return (
    <div className="mx-auto flex w-full max-w-[1300px] rounded-[20px] border border-[#dcdddf] p-3 pb-8 max-lg:flex-col max-lg:items-center md:pl-14 md:pt-8 md:pb-10">
      <div>
        <p>
          <img src="/img-preview.jpg" alt="" />
        </p>
        <div className="bg-[#eef6fa] flex items-center justify-between py-3.5 px-7">
          <button onClick={()=>setLike(!Like)} className="flex items-center px-2">
            <FontAwesomeIcon icon={faHeart} size="lg" style={{color: Like ? "#ff5a79": '#333333',}} />
            <span className="text-sm md:text-lg ml-1">12</span>
          </button>
          <button className="flex items-center px-2">
          <FontAwesomeIcon icon={faEye} size="lg" />
            <span className="text-sm md:text-lg ml-1">22</span>
          </button>
          <button className="flex items-center px-2">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
            <span className="text-sm md:text-lg ml-1">Link</span>
          </button>
          <button className="flex items-center px-2">
          <FontAwesomeIcon icon={faShareNodes} size="lg" />
            <span className="text-sm md:text-lg ml-1">share</span>
          </button>
        </div>
      </div>
      <div className="mt-8 lg:ml-[70px] lg:mt-2.5 lg:flex-1">
        <p className="inline-flex h-[34px] items-center rounded-[3px] bg-black px-8 text-base font-bold uppercase text-white md:text-2xl">
        1TT
        </p>
        <div className="mt-5 flex flex-wrap gap-3 md:gap-[22px]">
          <div className="flex items-center gap-2">
            <img src="/tag-image.png" alt="" />
            <span className="text-base tracking-wider md:text-2xl">IMAGE</span>
          </div>
        </div>
        <div className="mt-3 md:mt-2">
          <a
            href="#"
            className="border-b border-[#0013c7] text-xl text-[#0013c7] md:text-[28px]"
          >
            コレクションコレクションコレクション名
          </a>
        </div>
        <div className="mt-8 flex w-full gap-5 max-md:flex-col items-center justify-center md:mt-[60px]">
          <div className="w-full max-w-[360px] border border-[#dcdddf] pb-7">
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
        <div className="flex justify-center max-md:flex-col items-center gap-5 md:gap-6 mt-8 md:mt-16">
          <button className="flex h-12 w-[280px] items-center justify-center gap-3 rounded-[5px] bg-[#366bb3] text-base font-medium text-white md:h-[60px] md:text-xl">
          <FontAwesomeIcon icon={faArrowUpFromBracket} style={{color: "#ffffff",}} />
            <span>TRANSFER</span>
          </button>
          <button className="flex h-12 w-[280px] items-center justify-center gap-3 rounded-[5px] bg-white border-2 border-[#366bb3] text-base font-medium text-[#366bb3] md:h-[60px] md:text-xl">
          <FontAwesomeIcon icon={faFire} size="sm" style={{color: "#366bb3",}} />
            <span>BURN</span>
          </button>
        </div>
      </div>
    </div>
  );
}
