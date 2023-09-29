"use client";
import Card from "@/app/components/card";
import Link from "next/link";
import PropTypes from "prop-types";
import { useState } from "react";

const data = [
  {
    id: "01",
    question: "NFTとは何か？",
    awsners: ["イントロダクション", "NFTの基本", "NFTの基本"],
  },
  {
    id: "02",
    question: "NFTとは何か？",
    awsners: ["イントロダクション", "NFTの基本", "NFTの基本"],
  },
  {
    id: "03",
    question: "NFTとは何か？",
    awsners: ["イントロダクション", "NFTの基本", "NFTの基本"],
  },
  {
    id: "04",
    question: "NFTとは何か？",
    awsners: ["イントロダクション", "NFTの基本", "NFTの基本"],
  },
  {
    id: "05",
    question: "NFTとは何か？",
    awsners: ["イントロダクション", "NFTの基本", "NFTの基本"],
  },
  {
    id: "06",
    question: "NFTとは何か？",
    awsners: ["イントロダクション", "NFTの基本", "NFTの基本"],
  },
  {
    id: "07",
    question: "NFTとは何か？",
    awsners: ["イントロダクション", "NFTの基本", "NFTの基本"],
  },
];
function DetailFaq({ question, awnsers }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <button
        type="button"
        className="flex w-full items-center gap-5 border-b border-black bg-[#EEEEEE] px-5"
        onClick={() => setOpen(!open)}
      >
        <div
          className={`relative flex h-5 w-5 items-center justify-center duration-150 md:h-7 md:w-7 ${
            !open && "rotate-180"
          }`}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="14"
              cy="14"
              r="13.75"
              fill="white"
              stroke="black"
              stroke-width="0.5"
            />
            <path
              d="M8 17.0781L14 10L20 17.0781L17.9505 18L14 13.2212L10.0495 18L8 17.0781Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="flex py-4 ">
          <p className="text-[20px] font-semibold">{question}</p>
        </div>
      </button>
      {open && (
        <div className="">
          {awnsers.map((awnser) => (
            <>
              <div className="flex items-center gap-3 border-b border-black px-12 py-4 text-[16px] font-semibold">
                <svg
                  width="26"
                  height="18"
                  viewBox="0 0 26 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="25"
                    height="17"
                    rx="2.5"
                    fill="white"
                    stroke="black"
                  />
                  <path d="M18 9L9.75 13.3301V4.66987L18 9Z" fill="#7B7B7B" />
                </svg>
                <span>{awnser}</span>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
}

DetailFaq.propTypes = {
  question: PropTypes.node.isRequired,
  awnserS: PropTypes.array.isRequired,
};

export default function Detail() {
  return (
    <main>
      <div className="mx-auto w-full max-w-[1300px] px-8">
        <div className="flex justify-between border-b border-black py-6">
          <p className="text-[34px] font-semibold">ウオレットの作り方</p>
          <p className="text-[28px] font-semibold">8 Answers</p>
        </div>
        <div className="py-[50px]">
          <div className="flex h-[378px] border border-black">
            <div className="">
              <img src="/dummy-3.png" alt="" />
            </div>
            <div className="flex-1 divide-y divide-black overflow-auto border-l border-black">
              <div className="py-2 pl-[180px] text-[20px] font-semibold">
                総時間 : 56分
              </div>
              <div className="">
                {data.map((data) => {
                  return (
                    <DetailFaq
                      question={data.question}
                      awnsers={data.awsners}
                      key={data.id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <p className="text-[16px] font-semibold py-4">※こちらの動画で説明しているバージョンは最新のものでない可能性があります</p>
          <div className="flex justify-end">
            <Link href="/" className="flex items-center gap-7 px-3 border border-black bg-[#DCFAFC] h-[50px] w-[280px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
              <path d="M17 10L0.5 19.5263V0.473721L17 10Z" fill="#7C7C7C"/>
            </svg>
              <span className="text-[20px] font-semibold">お問い合わせメール</span>
            </Link>
          </div>
          <div className="py-4 mb-[84px]">
            <p className="text-[24px] font-semibold mb-3">動画に関する公式サイト</p>
            <div className="bg-[#F2F2F2] flex items-center gap-12 py-5 px-8">
              <p className="text-[24px] font-light text-[#135DEC]">〇〇〇〇〇〇〇〇</p>
              <p className="text-[24px] font-light text-[#135DEC]">〇〇〇〇〇〇〇〇</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
          <Card
            link="/category/test/1"
            imgSrc="/dummy-2.png"
            tags={["タブレット", "NFT"]}
            title="〇〇の作り方"
            content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
            answer="7"
          />
          <Card
            link="/category/test/1"
            imgSrc="/dummy-2.png"
            tags={["タブレット", "NFT"]}
            title="〇〇の作り方"
            content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
            answer="7"
          />
          <Card
            link="/category/test/1"
            imgSrc="/dummy-2.png"
            tags={["タブレット", "NFT"]}
            title="〇〇の作り方"
            content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
            answer="7"
          />
          <Card
            link="/category/test/1"
            imgSrc="/dummy-2.png"
            tags={["タブレット", "NFT"]}
            title="〇〇の作り方"
            content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
            answer="7"
          />
        </div>
        </div>
      </div>
    </main>
  );
}
