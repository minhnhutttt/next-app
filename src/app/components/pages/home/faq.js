"use client";
import PropTypes from "prop-types";
import { useState } from "react";

const data = [
  {
    id: "01",
    question: "What is an NFT business card?",
    awsner:
      "NFT business cards are used by both individuals and businesses to instantly share contacts, social profiles, websites, etc. NFT business cards are not only a cost-effective and environmentally friendly alternative to traditional paper business cards, but are also irreplaceable digital business cards that are recorded on the blockchain.",
  },
  {
    id: "02",
    question:
      "What is the difference between a digital business card, NFT business card?",
    awsner:
      "NFT business cards are unique and reliable because NFTs reside on a blockchain and their data is immutable and difficult to duplicate or alter. On the other hand, traditional digital business cards can be easily duplicated or altered.",
  },
  {
    id: "03",
    question: "What should be in a NFT business card?",
    awsner:
      "When creating a digital business card, there are several important elements that should be included to effectively promote your business: email, website, contact information, and areas of expertise.",
  },
  {
    id: "04",
    question: "How do I sign in to my DIVER Knock account?",
    awsner:
      "You can sign in to DIVER Wallet by using Connect to Wallet authentication, and your account will be managed by the private key of the wallet you have connected.",
  },
  {
    id: "05",
    question: "How do I make an NFT business card?",
    awsner:
      "Please create an account, link to the Business Card NFT creation service from your profile page, and MINT your business card NFT. You can easily create a business card NFT linked to your profile.",
  },
  {
    id: "06",
    question: "Which blockchain does DIVER Biz support?",
    awsner:
      "The DIVER Time Chain is supported. The NFT standard also supports DRC721/DRC1155 tokens.",
  },
  {
    id: "07",
    question: "How do I access my account if I lose my phone?",
    awsner:
      "To access your account, you will need the DIVER Wallet private key that you selected when you signed in. With this private key, you will be able to access your account.",
  },
];

function FaqItem({ id, question, awnser }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-4 border-b border-white p-4 md:space-y-4 md:px-5 md:pb-10 md:pt-11">
      <button
        type="button"
        className="flex w-full items-center justify-between"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-4 md:gap-8">
          <p className="text-[20px] font-bold uppercase tracking-widest text-white md:text-[32px]">
            {id}
          </p>
          <p className="text-left text-[18px] font-bold text-white max-md:mt-0.5 md:text-[22px]">
            {question}
          </p>
        </div>
        <div
          className={`relative ml-2 flex h-8 w-8 items-center justify-center duration-150 md:h-12 md:w-12 ${
            open && "rotate-180"
          }`}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="23.5" stroke="white" />
            <path
              d="M28.2666 21.8666L23.9999 26.1332L19.7333 21.8666"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </button>
      {open && (
        <div className="flex pl-11 md:pl-20">
          <p className="pb-4 text-[14px] leading-[1.6] text-white md:w-[85%] md:pb-7 md:text-[16px]">
            {awnser}
          </p>
        </div>
      )}
    </div>
  );
}

FaqItem.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.node.isRequired,
  awnser: PropTypes.node.isRequired,
};

export default function Faq() {
  return (
    <div className="py-[20%] md:pb-[9%] md:pt-[9%]">
      <div className="mx-auto w-full max-w-[940px] px-4 md:px-5">
        <h4 className="text-center text-[24px] font-bold text-white md:text-[32px] lg:text-[64px]">
          FAQ
        </h4>
        <div className="mx-auto mt-5 w-full border-t border-white md:mt-4">
          {data.map((data) => {
            return (
              <FaqItem
                question={data.question}
                awnser={data.awsner}
                id={data.id}
                key={data.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
