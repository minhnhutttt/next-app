"use client";
import PropTypes from "prop-types";
import { useState } from "react";
import Title from "../../common/title";

const data = [
  {
    id: "01",
    question: "利用料金はあるの？",
    awsner:
      "無料でNFTを受け取ることができます。NFTには様々な特典があるものや限定NFTなどがございます。ぜひ店舗一覧よりご確認ください。",
  },
  {
    id: "02",
    question:
      "受け取ったNFTはどのように使えばいいの？",
    awsner:
      "地図に登録されていいるNFT店舗に実際に足を運びNFTをゲットし提示してください。店舗によって受けられるサービスが異なる場合もございます。",
  },
  {
    id: "03",
    question: "DIVERWalletの設定方法がわかりません。どこで詳しく聞くことができますか？",
    awsner:
      "DIVER HELP CENTERというDIVER関連連のサポートがありますのでそちらをご確認ください。https://www.diver-help.space/",
  },
];

function FaqItem({ question, awnser }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-4 space-y-4 border-b border-black md:space-y-4 md:px-5 md:pb-7 md:pt-7">
      <button
        type="button"
        className="flex items-center justify-between w-full"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-4">
          <p className="text-left text-[16px] md:text-[24px]">
            {question}
          </p>
        </div>
        <div
          className={`relative ml-2 flex h-8 w-8 items-center justify-center duration-150 md:h-12 md:w-12 ${
            open && "rotate-180"
          }`}
        >
          <svg className="max-md:w-5" width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7381 0L15.7381 30M30.5 15.2381L0.5 15.2381" stroke="#1B3764" strokeWidth="0.75"/>
        </svg>
        </div>
      </button>
      {open && (
        <div className="flex pl-6 md:pl-20">
          <p className="pb-4 text-[13px] leading-[1.6] md:w-[85%] md:pb-7 md:text-[16px]">
            {awnser}
          </p>
        </div>
      )}
    </div>
  );
}

FaqItem.propTypes = {
  question: PropTypes.node.isRequired,
  awnser: PropTypes.node.isRequired,
};

export default function Faq() {
  return (
    <div className="flex bg-[#F2F2F2] py-10 md:pt-20 md:pb-[56px]" id="faq">
        <div className="w-full md:max-w-[1040px] max-w-[440px] px-5 mx-auto">
            <Title head="FAQ">よくある質問</Title>
            <div className="mx-auto mt-5 w-full border-t border-black md:mt-[100px] md:mb-[75px]">
            {data.map((data) => {
                return (
                <FaqItem
                    question={data.question}
                    awnser={data.awsner}
                    key={data.id}
                />
                );
            })}
            </div>
        </div>
    </div>
  );
}
