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
        {tab === 1 && (
          <>
            <div className="mt-8 md:mt-16">
              <DetailPreview />
              <DetailSearch />
              <div className="mt-10 space-y-8 md:mt-[60px] md:space-y-16">
                <DetailPanel
                  title={
                    <>
                      <img src="/ic-desc.png" alt="" />
                      <span>Descriptiom</span>
                    </>
                  }
                >
                  <div className="px-3 py-2 text-[12px] md:px-6 md:py-4 md:text-[16px]">
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
                  <DetailPanelCell title="Owner">
                    <span className="truncate">
                      0xc142F69A849e3fa2D000F5f12D27EB8984B111B0
                    </span>
                  </DetailPanelCell>
                  <DetailPanelCell title="Contract Addewss">
                    <div className="flex items-center gap-2">
                      <span className="truncate">
                        0xc142F69A849e3fa2D000F5f12D27EB8984B111B0
                      </span>
                      <button>
                        <img src="/ic-copy.png" alt="" />
                      </button>
                    </div>
                  </DetailPanelCell>
                  <DetailPanelCell title="Token ID">1234</DetailPanelCell>
                  <DetailPanelCell title="Token Standard">
                    DRC-721
                  </DetailPanelCell>
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
                  <DetailPanelCell title="Tel">0312345678</DetailPanelCell>
                  <DetailPanelCell title="Mobile">09012345678</DetailPanelCell>
                  <DetailPanelCell title="Mail">1234</DetailPanelCell>
                  <DetailPanelCell title="Website">
                    <Link
                      href=""
                      className="inline-block border-b border-[#0013c7] text-[12px] text-[#0013c7] md:text-[14px]"
                    >
                      DRC-721
                    </Link>
                  </DetailPanelCell>
                  <DetailPanelCell title="SNS">
                    <Link
                      href=""
                      className="inline-block border-b border-[#0013c7] text-[12px] text-[#0013c7] md:text-[14px]"
                    >
                      DIVER
                    </Link>
                  </DetailPanelCell>
                </DetailPanel>
              </div>
            </div>
            <div className="mt-8 md:mt-16">
              <Link
                href="#"
                className="mx-auto flex h-12 w-[260px] items-center justify-center gap-2 rounded-[5px] border-2 border-[#366bb3] text-base font-medium md:h-[60px] md:w-[300px] md:text-lg"
              >
                <img src="/ic-burn.png" alt="" />
                <span>BURN</span>
              </Link>
            </div>
          </>
        )}
        {tab === 2 && (
          <>
            <div className="mx-auto mt-8 w-full max-w-[440px] md:mt-16 md:max-w-[1300px]">
              <div className="bg-[#f5f8fa]">
                <img src="/collection_img.png" alt="" />
                <div className="border border-[#dcdddf] px-5 py-4 md:px-12 md:py-7">
                  <p className="text-[14px] md:text-[18px]">
                    categorycategorycategory
                  </p>
                  <p className="text-[24px] text-[#333333]">コレクション名</p>
                </div>
              </div>
              <div className="mt-[54px] space-y-8 md:space-y-9">
                <DetailPanel
                  title={
                    <>
                      <img src="/ic-desc.png" alt="" />
                      <span>Descriptiom</span>
                    </>
                  }
                >
                  <div className="px-3 py-2 text-[12px] md:px-6 md:py-6 md:text-[16px]">
                    テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
                  </div>
                </DetailPanel>
                <DetailPanel
                  title={
                    <>
                      <img src="/ic-activity.png" alt="" />
                      <span>Item Activity</span>
                    </>
                  }
                >
                  <div className="justify-between px-4 pb-4 pt-4 md:flex md:px-8 md:pb-6">
                    <div className="max-md:flex max-md:items-center max-md:justify-between max-md:gap-3 md:w-1/12">
                      <p className="mb-1 text-[12px] font-bold md:mb-3 md:text-[16px]">
                        Event
                      </p>
                      <p className="flex items-center text-[11px] font-medium md:text-[14px]">
                        <img className="mr-1" src="/ic-minted.png" alt="" />
                        minted
                      </p>
                    </div>
                    <div className="max-md:flex max-md:items-center max-md:justify-between max-md:gap-3 md:w-1/12">
                      <p className="mb-1 text-[12px] font-bold md:mb-3 md:text-[16px]">
                        Price
                      </p>
                      <p className="flex items-center text-[11px] font-medium md:text-[14px]">
                        <img className="mr-1" src="/ic-price.png" alt="" />
                        0.022
                      </p>
                    </div>
                    <div className="max-md:flex max-md:items-center max-md:justify-between max-md:gap-3 md:w-3/12">
                      <p className="mb-1 flex-1 text-[12px] font-bold md:mb-3  md:text-[16px]">
                        From
                      </p>
                      <p className="flex items-center truncate text-[11px] font-medium md:text-[14px]">
                        <img className="mr-1" src="/ic-price.png" alt="" />
                        <span className="truncate">
                          0xc142F69A849e3fa2D000F5f12D27EB8984B111B0
                        </span>
                      </p>
                    </div>
                    <div className="max-md:flex max-md:items-center max-md:justify-between max-md:gap-3 md:w-1/12">
                      <p className="mb-1 text-[12px] font-bold md:mb-3 md:text-[16px]">
                        To
                      </p>
                      <p className="flex items-center text-[11px] font-medium md:text-[14px]">
                        you
                      </p>
                    </div>
                    <div className="max-md:flex max-md:items-center max-md:justify-between max-md:gap-3 md:w-1/12">
                      <p className="mb-1 text-[12px] font-bold md:mb-3 md:text-[16px]">
                        Date
                      </p>
                      <p className="flex items-center text-[11px] font-medium md:text-[14px]">
                        2022/07/25
                      </p>
                    </div>
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
                  <DetailPanelCell title="Owner">
                    <span className="truncate">
                      0xc142F69A849e3fa2D000F5f12D27EB8984B111B0
                    </span>
                  </DetailPanelCell>
                  <DetailPanelCell title="Contract Addewss">
                    <div className="flex items-center gap-2 truncate">
                      <span className="truncate">
                        0xc142F69A849e3fa2D000F5f12D27EB8984B111B0
                      </span>
                      <button>
                        <img src="/ic-copy.png" alt="" />
                      </button>
                    </div>
                  </DetailPanelCell>
                  <DetailPanelCell title="Token ID">1234</DetailPanelCell>
                  <DetailPanelCell title="Token Standard">
                    ECR-1155
                  </DetailPanelCell>
                  <DetailPanelCell title="Blockchain">Ethereum</DetailPanelCell>
                  <DetailPanelCell title="NFT Categrory">
                    NFT HACK
                  </DetailPanelCell>
                </DetailPanel>
              </div>
              <div className="mt-8 md:mt-16">
                <Link
                  href="#"
                  className="mx-auto flex h-12 w-[260px] items-center justify-center gap-2 rounded-[5px] border-2 border-[#366bb3] text-base font-medium md:h-[60px] md:w-[300px] md:text-lg"
                >
                  <img src="/ic-burn.png" alt="" />
                  <span>BURN</span>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
