"use client";
import { useState } from "react";
import CreateLocation from "./components/create-location";
import Process from "./components/progress";
import CreateQR from "./components/create-qr";

export default function Create() {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  return (
    <main className="px-5 py-10 md:pt-[100px]">
      <Process step={step} />
      <div className="mx-auto w-full max-w-[480px] py-[60px] md:max-w-[1000px] md:py-[100px]">
        {step === 1 && <CreateLocation onClick={nextStep} />}
        {step === 2 && <CreateQR />}
      </div>
    </main>
  );
}
