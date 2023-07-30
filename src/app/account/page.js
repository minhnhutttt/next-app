"use client";
import { useState } from "react";
import classNames from "classnames";
import NFTItem from "./components/nft-item";

export default function Account() {
  const [tab, setTab] = useState(1);
  return (
    <main className="px-5 pb-[80px] pt-10 md:pb-[190px] md:pt-[92px]">
      <div className="mx-auto w-full max-w-[1800px]">
        <div className="flex justify-between border-b border-[#a1a099]">
          <div className="relative -bottom-[1.5px] flex px-3 md:px-5">
            <button
              className={classNames(
                "border-[#366bb3] px-2 py-2 text-sm uppercase tracking-widest md:px-9 md:text-2xl",
                tab === 1 ? "border-b-[3px] font-bold": 'font-medium'
              )}
              onClick={() => setTab(1)}
            >
              MINTED NFT
            </button>
            <button
              className={classNames(
                "border-[#366bb3] px-2 py-2 text-sm uppercase tracking-widest md:px-9 md:text-2xl",
                tab === 2 ? "border-b-[3px] font-bold": 'font-medium'
              )}
              onClick={() => setTab(2)}
            >
              MY Collection
            </button>
          </div>
          <div className="md:text-2xl text-sm font-medium uppercase">8 items</div>
        </div>
        <div className="mt-[40px] grid grid-cols-2 gap-x-3 gap-y-4 md:grid-cols-4 md:gap-x-[27px] md:gap-y-6">
          <NFTItem
            link="/01"
            imgSrc="/img-01.jpg"
            head="コレクション名"
            title="NFT名NFT名NFT名NFT名"
          />
          <NFTItem
            link="/02"
            imgSrc="/img-02.jpg"
            head="コレクション名"
            title="NFT名NFT名NFT名NFT名"
          />
          <NFTItem
            link="/03"
            imgSrc="/img-03.jpg"
            head="コレクション名"
            title="NFT名NFT名NFT名NFT名"
          />
          <NFTItem
            link="/04"
            imgSrc="/img-04.jpg"
            head="コレクション名"
            title="NFT名NFT名NFT名NFT名"
          />
          <NFTItem
            link="/05"
            imgSrc="/img-01.jpg"
            head="コレクション名"
            title="NFT名NFT名NFT名NFT名"
          />
          <NFTItem
            link="/06"
            imgSrc="/img-02.jpg"
            head="コレクション名"
            title="NFT名NFT名NFT名NFT名"
          />
          <NFTItem
            link="/07"
            imgSrc="/img-03.jpg"
            head="コレクション名"
            title="NFT名NFT名NFT名NFT名"
          />
          <NFTItem
            link="08"
            imgSrc="/img-04.jpg"
            head="コレクション名"
            title="NFT名NFT名NFT名NFT名"
          />
        </div>
        <div className="flex justify-center items-center mt-16">
          <button className="flex h-12 w-[280px] md:w-[300px] items-center justify-center gap-3 rounded-[5px] bg-[#366bb3] text-base font-medium text-white md:h-[62px] md:text-lg">
              <span>NftTを作る</span>
            </button>
        </div>
      </div>
    </main>
  );
}
