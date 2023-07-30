"use client";
import { useState } from "react";
import Process from "./components/progress";
import CreateNFT from "./components/create-nft";

export default function Create() {
  const [step, setStep] = useState(1);
  return (
    <main className="px-5 py-10 md:pt-[100px]">
      <Process step={step} />
      <div className="mx-auto w-full max-w-[480px] py-[60px] md:max-w-[1000px] md:py-[100px]">
        {step === 1 && <CreateNFT />}
      </div>
    </main>
  );
}
