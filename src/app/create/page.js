"use client";
import { useState } from "react";
import CreateAddress from "./components/create-address";
import Process from "./components/progress";

export default function Create() {
    const [step, setStep] = useState(1);
    const nextStep = () => {
        if (step < 3) {
            setStep(step+1);
        }
    }
  return (
    <main className="px-5 py-10 md:pt-[100px]">
      <Process step={step} />
      <div className="mx-auto w-full max-w-[480px] py-[100px] md:max-w-[1000px]">
        <div className="border-b border-[#333333] pb-10">
          <h2 className="text-[32px] font-medium md:text-[70px]">
            QRに位置情報を登録する
          </h2>
          <p className="text-[16px] font-medium text-[#ee3f3f] md:text-[24px]">
            *印は入力必須項目です。
          </p>
        </div>
        <CreateAddress onClick={nextStep}  />
      </div>
    </main>
  );
}
