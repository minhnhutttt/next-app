"use client";
import { useState } from "react";
import classNames from "classnames";
import DetailPreview from "./component/detail-preview";
import DetailPanel from "./component/detail-panel";
import DetailPanelCell from "./component/detail-panel-cell";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faExchangeAlt, faBullhorn, faInfoCircle, faAward, faFire } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

export default function Details() {
  const [tab, setTab] = useState(1);
  return (
    <main className="px-5 pb-[80px] pt-10 md:pb-[190px] md:pt-[88px]">
      <div className="mx-auto w-full max-w-[1800px]">
        <div className="flex border-b border-[#a1a099]">
          <div className="relative -bottom-[1.5px] flex px-3 md:px-5">
            <button
              className={classNames(
                "border-[#366bb3] px-2 py-2 text-sm uppercase tracking-widest md:px-9 md:text-2xl",
                tab === 1 ? "border-b-[3px] font-bold": 'font-medium'
              )}
              onClick={() => setTab(1)}
            >
              NFT
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
        </div>
        {tab === 1 && (
          <>
            <div className="mt-8 md:mt-16">
              <DetailPreview />
              <div className="mt-10 space-y-8 md:mt-[32px] md:space-y-12">
                <DetailPanel
                  title={
                    <>
                      <FontAwesomeIcon size="lg" icon={faAlignLeft} />
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
                      <FontAwesomeIcon icon={faExchangeAlt} size="lg" rotation={90} />
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
                      <span className="inline-block mr-1"><FontAwesomeIcon icon={faAward} /></span>
                        minted
                      </p>
                    </div>
                    <div className="max-md:flex max-md:items-center max-md:justify-between max-md:gap-3 md:w-1/12">
                      <p className="mb-1 text-[12px] font-bold md:mb-3 md:text-[16px]">
                        Price
                      </p>
                      <p className="flex items-center text-[11px] font-medium md:text-[14px]">
                      <span className="inline-block mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg>
                        </span>
                        0.022
                      </p>
                    </div>
                    <div className="max-md:flex max-md:items-center max-md:justify-between max-md:gap-3 md:w-3/12">
                      <p className="mb-1 flex-1 text-[12px] font-bold md:mb-3  md:text-[16px]">
                        From
                      </p>
                      <p className="flex items-center truncate text-[11px] font-medium md:text-[14px]">
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
                      <FontAwesomeIcon size="lg" icon={faBullhorn} />
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
                      <svg xmlns="http://www.w3.org/2000/svg" height="1.6em" viewBox="0 0 448 512"><path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"/></svg>
                      </button>
                    </div>
                  </DetailPanelCell>
                  <DetailPanelCell title="Token ID">1234</DetailPanelCell>
                  <DetailPanelCell title="Token Standard">
                    DRC-721
                  </DetailPanelCell>
                  <DetailPanelCell title="Blockchain">DIVER</DetailPanelCell>
                  <DetailPanelCell title="NFT Categrory">1TT</DetailPanelCell>
                </DetailPanel>
                <DetailPanel
                  title={
                    <>
                      <FontAwesomeIcon icon={faInfoCircle} size="lg" />
                      <span>Details</span>
                    </>
                  }
                >
                  <DetailPanelCell title="MINT upper limit">
                  300
                  </DetailPanelCell>
                  <DetailPanelCell title="Tel">0312345678</DetailPanelCell>
                  <DetailPanelCell title="Mobile">09012345678</DetailPanelCell>
                  <DetailPanelCell title="Mail">1234</DetailPanelCell>
                  <DetailPanelCell title="Website">
                    <Link
                      href=""
                      className="inline-block border-b border-[#0013c7] text-[12px] text-[#0013c7] md:text-[14px]"
                    >
                      123abc.com
                    </Link>
                  </DetailPanelCell>
                  <DetailPanelCell title="SNS">
                    <Link
                      href=""
                      className="inline-block border-b border-[#0013c7] text-[12px] text-[#0013c7] md:text-[14px]"
                    >
                      twitter.com
                    </Link>
                  </DetailPanelCell>
                  <DetailPanelCell title="Discount">
                  20%
                  </DetailPanelCell>
                </DetailPanel>
              </div>
            </div>
            <div className="mt-8 md:mt-16 flex justify-center">
              <Link
                href="#"
                className="block"
              >
                <img src="/bnr.jpg" alt="" />
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
                      <FontAwesomeIcon size="lg" icon={faAlignLeft} />
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
                      <FontAwesomeIcon icon={faExchangeAlt} size="lg" rotation={90} />
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
                      <span className="inline-block mr-1"><FontAwesomeIcon icon={faAward} /></span>
                        minted
                      </p>
                    </div>
                    <div className="max-md:flex max-md:items-center max-md:justify-between max-md:gap-3 md:w-1/12">
                      <p className="mb-1 text-[12px] font-bold md:mb-3 md:text-[16px]">
                        Price
                      </p>
                      <p className="flex items-center text-[11px] font-medium md:text-[14px]">
                      <span className="inline-block mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/></svg>
                        </span>
                        0.022
                      </p>
                    </div>
                    <div className="max-md:flex max-md:items-center max-md:justify-between max-md:gap-3 md:w-3/12">
                      <p className="mb-1 flex-1 text-[12px] font-bold md:mb-3  md:text-[16px]">
                        From
                      </p>
                      <p className="flex items-center truncate text-[11px] font-medium md:text-[14px]">
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
                      <FontAwesomeIcon icon={faBullhorn} size="lg" />
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
                      <svg xmlns="http://www.w3.org/2000/svg" height="1.6em" viewBox="0 0 448 512"><path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"/></svg>
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
                  <FontAwesomeIcon icon={faFire}  />
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
