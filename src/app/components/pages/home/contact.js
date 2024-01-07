"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import Link from "next/link";
import FormInput from "../../common/form/formInput";
import FormRadio from "../../common/form/formRadio";
import { useState } from "react";

export default function Contact() {
  const animateRefs = useScrollAnimation("fadeUp");
  const options = [
    { label: "2G", value: "2G" },
    { label: "100G", value: "100G" },
    { label: "500G", value: "500G" },
  ];
  const [checkedRadio, setCheckedRadio] = useState("2G");

  const handleRadioChange = (value) => {
    setCheckedRadio(value);
  };
  return (
    <div className="bg-white px-5 py-[50px] md:pb-[100px] md:pt-[120px]">
      <div className="mx-auto flex w-full max-w-[1228px] items-center gap-10 max-md:flex-col md:gap-[70px]">
        <div className="flex-1">
          <h4 ref={animateRefs} className="font-dm text-[30px] font-bold md:text-[4.5vw] xl:text-[60px]">
            お申し込みフォーム
          </h4>
          <p ref={animateRefs} className="text-[14px] md:text-[1.6vw] xl:text-[20px]">
            ご不明点はLINEよりお問い合わせください。
          </p>
        </div>
        <div ref={animateRefs} className="flex-1 space-y-6 md:space-y-10">
          <FormInput label="・お名前" placeholder="山田　太郎" />
          <FormInput label="・メールアドレス" placeholder="abc@domein.com" />
          <FormInput label="・お電話番号" placeholder="090-1234-5678" />
          <FormRadio
            label="・容量選択"
            options={options}
            checkedValue={checkedRadio}
            onChange={handleRadioChange}
          />
          <Link
            href="/"
            className="mx-auto flex h-[48px] w-[280px] items-center justify-center rounded-[20px] bg-[#22ABF3] font-dm text-[18px] font-bold text-white md:h-[62px] md:text-[22px] duration-150 hover:opacity-75"
          >
            送　信
          </Link>
        </div>
      </div>
    </div>
  );
}
