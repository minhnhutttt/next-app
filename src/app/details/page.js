"use client";
import { useState } from "react";
import classNames from "classnames";
import DetailPreview from "./component/detail-preview";

export default function Details() {
  const [tab, setTab] = useState(1);
  return (
    <main className="px-5 pt-10 pb-[80px] md:pt-[88px] md:pb-[190px]">
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
              PIN
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
        <div className="mt-16">
            <DetailPreview />
          </div>
      </div>
    </main>
  );
}
