"use client";
import { useState } from "react";
import classNames from "classnames";
import NFTItem from "../components/nft/nft-item";

export default function Mypage() {
  const [tab, setTab] = useState(1);
  return (
    <main className="px-5 pt-10 pb-[80px] md:pt-[92px] md:pb-[190px]">
      <div className="mx-auto w-full max-w-[1800px]">
        <div className="flex border-b border-[#a1a099]">
          <div className="relative -bottom-[1.5px] flex px-5">
            <button
              className={classNames(
                "border-[#366bb3] px-3 md:px-9 py-2 text-base md:text-2xl font-medium uppercase tracking-widest",
                { "border-b-[3px] font-bold": tab === 1 }
              )}
              onClick={() => setTab(1)}
            >
              NFT
            </button>
            <button
              className={classNames(
                "border-[#366bb3] px-3 md:px-9 py-2 text-base md:text-2xl font-medium uppercase tracking-widest",
                { "border-b-[3px] font-bold": tab === 2 }
              )}
              onClick={() => setTab(2)}
            >
              MY Collection
            </button>
          </div>
        </div>
        <div className="mt-[55px] grid grid-cols-2 md:grid-cols-4 md:gap-x-5 gap-x-3 md:gap-y-6 gap-y-4">
          <NFTItem
            imgSrc="/nft-01.jpg"
            head="コレクション名"
            title="NFT名NFT名NFT名NFT名"
            content="説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説..."
          />
          <NFTItem
            imgSrc="/nft-02.jpg"
            head="コレクション名"
            title="NFT名NFT名NFT名NFT名"
            content="説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説..."
          />
          <NFTItem
            imgSrc="/nft-03.jpg"
            head="コレクション名"
            title="NFT名NFT名NFT名NFT名"
            content="説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説..."
          />
          <NFTItem
            imgSrc="/nft-03.jpg"
            head="コレクション名"
            title="NFT名NFT名NFT名NFT名"
            content="説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説..."
          />
          <NFTItem
            imgSrc="/nft-03.jpg"
            head="コレクション名"
            title="NFT名NFT名NFT名NFT名"
            content="説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説..."
          />
          <NFTItem
            imgSrc="/nft-03.jpg"
            head="コレクション名"
            title="NFT名NFT名NFT名NFT名"
            content="説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説..."
          />
          <NFTItem
            imgSrc="/nft-03.jpg"
            head="コレクション名"
            title="NFT名NFT名NFT名NFT名"
            content="説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説..."
          />
          <NFTItem
            imgSrc="/nft-03.jpg"
            head="コレクション名"
            title="NFT名NFT名NFT名NFT名"
            content="説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説..."
          />
        </div>
      </div>
    </main>
  );
}
