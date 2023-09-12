"use client";
import PropTypes from "prop-types";
import { useState } from "react";

const data = [
  {
    id: "01",
    question: "What is Knock?",
    awsner:
      "Knock is a next-generation decentralized messaging application built on cutting-edge technology based on blockchain technology and combines wallet functionality. In addition to the decentralized nature of the blockchain, end-to-end encryption allows users to enjoy private and secure chats and voice calls.",
  },
  {
    id: "02",
    question: "Can I make voice calls with Knock?",
    awsner:
      "Yes, you can. You can make end-to-end encrypted voice and video calls.",
  },
  {
    id: "03",
    question: "Does Knock work on desktop?",
    awsner:
      "Not at this time. In the future, we plan to offer the service in a desktop version, but at this time, it will only work with our iOS and Android smartphone applications.",
  },
  {
    id: "04",
    question: "Which blockchain does Knock support?",
    awsner:
      "DIVER Time Chain is supported.",
  },
  {
    id: "05",
    question: "How do I sign in to my Knock account?",
    awsner:
      "You can sign in to DIVER Wallet by using Connect to Wallet authentication, and your account will be managed by the private key of the wallet you have connected.",
  },
  {
    id: "06",
    question: "How do I access my account if I lose my phone?",
    awsner: "To access your account, you will need the DIVER Wallet private key that you selected when you signed in. With this private key, you will be able to access your account.",
  },
  {
    id: "07",
    question: "What assets are supported for sending and receiving cryptocurrency on Knock?",
    awsner: "We currently support DIV and DRC20 tokens, as well as some DRC721/DRC1155 tokens.",
  },
];

function FaqItem({ id, question, awnser }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="space-y-4 border-b border-[#313333] p-4 md:space-y-4 md:px-5 md:pt-11 md:pb-10">
          <button
            type="button"
            className="flex w-full items-center justify-between"
            onClick={() => setOpen(!open)}
          >
            <div className="flex items-center gap-4 md:gap-8">
              <p className="text-[20px] font-bold uppercase tracking-widest md:text-[32px]">
                {id}
              </p>
              <p className="text-left text-[18px] font-bold max-md:mt-0.5 md:text-[22px]">
                {question}
              </p>
            </div>
            <div className={`relative ml-2 flex h-8 w-8 items-center justify-center md:h-12 md:w-12 duration-150 ${open && 'rotate-180'}`}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="23.5" stroke="black"/>
                <path d="M28.2666 21.8666L23.9999 26.1332L19.7333 21.8666" stroke="#343A3F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
          </button>
          {open && (
            <div className="flex pl-11 md:pl-20">
              <p className="text-[14px] leading-[1.6] md:text-[16px] md:w-[85%] pb-4 md:pb-7">
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
    <div className="py-10 md:pb-[145px] md:pt-[137px]">
      <div className="mx-auto w-full max-w-[940px] px-4 md:px-5">
        <h4 className="text-center text-[24px] font-bold md:text-[32px] lg:text-[64px]">
          FAQ
        </h4>
        <div className="mx-auto mt-5 w-full border-t border-[#313333] md:mt-3">
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
