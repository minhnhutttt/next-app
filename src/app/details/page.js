"use client";
import { useState } from "react";
import classNames from "classnames";
import DetailPreview from "./component/detail-preview";
import DetailSearch from "./component/detail-search";
import DetailPanel from "./component/detail-panel";
import DetailPanelCell from "./component/detail-panel-cell";
import Link from "next/link";

export default function Details() {
  const [tab, setTab] = useState(1);
  return (
    <main className="px-5 pb-[80px] pt-10 md:pb-[190px] md:pt-[88px]">
      <div className="mx-auto w-full max-w-[1800px]">
        <div className="flex border-b border-[#a1a099]">
          <div className="relative -bottom-[1.5px] flex px-5">
            <button
              className={classNames(
                "border-[#366bb3] px-3 py-2 text-base font-medium uppercase tracking-widest md:px-9 md:text-2xl",
                { "border-b-[3px] font-bold": tab === 1 }
              )}
              onClick={() => setTab(1)}
            >
              PIN
            </button>
            <button
              className={classNames(
                "border-[#366bb3] px-3 py-2 text-base font-medium uppercase tracking-widest md:px-9 md:text-2xl",
                { "border-b-[3px] font-bold": tab === 2 }
              )}
              onClick={() => setTab(2)}
            >
              MY Collection
            </button>
          </div>
        </div>
        <div className="mt-16">
          <DetailPreview />
          <DetailSearch />
          <div className="mt-[60px] space-y-16">
            <DetailPanel
              title={
                <>
                  <img src="/ic-desc.png" alt="" />
                  <span>Descriptiom</span>
                </>
              }
            >
              <div className="px-6 py-4 text-[16px]">
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
              </div>
            </DetailPanel>
            <DetailPanel
              title={
                <>
                  <img src="/ic-info.png" alt="" />
                  <span>Information</span>
                </>
              }
            >
              <DetailPanelCell title="Ow ner">
                0xc142F69A849e3fa2D000F5f12D27EB8984B111B0
              </DetailPanelCell>
              <DetailPanelCell title="Contract Addewss">
                <div className="flex items-center">
                  0xc142F69A849e3fa2D000F5f12D27EB8984B111B0{" "}
                  <img src="/ic-copy.png" alt="" />
                </div>
              </DetailPanelCell>
              <DetailPanelCell title="Token ID">1234</DetailPanelCell>
              <DetailPanelCell title="Token Standard">DRC-721</DetailPanelCell>
              <DetailPanelCell title="Blockchain">DIVER</DetailPanelCell>
              <DetailPanelCell title="NFT Categrory">0TT</DetailPanelCell>
            </DetailPanel>
            <DetailPanel
              title={
                <>
                  <img src="/ic-detail.png" alt="" />
                  <span>Details</span>
                </>
              }
            >
              <DetailPanelCell title="MINT upper limit">
              0TT
              </DetailPanelCell>
              <DetailPanelCell title="Tel">
              0312345678
              </DetailPanelCell>
              <DetailPanelCell title="Mobile">09012345678</DetailPanelCell>
              <DetailPanelCell title="Mail">1234</DetailPanelCell>
              <DetailPanelCell title="Website"><Link href="" className="md:text-[14px] text-[12px] text-[#0013c7] inline-block border-b border-[#0013c7]">DRC-721</Link></DetailPanelCell>
              <DetailPanelCell title="SNS"><Link href="" className="md:text-[14px] text-[12px] text-[#0013c7] inline-block border-b border-[#0013c7]">DIVER</Link></DetailPanelCell>
            </DetailPanel>
          </div>
        </div>
        <div className="mt-16">
        <Link
              href="#"
              className="mx-auto flex h-[60px] w-[300px] items-center justify-center rounded-[5px] border-2 border-[#366bb3] text-lg font-medium gap-2"
            >
              <img src="/ic-burn.png" alt="" />
              <span>BURN</span>
            </Link>
        </div>
      </div>
    </main>
  );
}
