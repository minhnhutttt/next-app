"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import FaqItem from "./faqItem";

export default function FAQ() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div id="faq" className="px-5 py-10 md:pb-[100px] md:pt-[86px]">
      <div className="mx-auto w-full max-w-[920px]">
        <h4
          ref={animateRefs}
          className="text-center text-[24px] font-bold tracking-wider md:text-[48px]"
        >
          FAQ
        </h4>
        <div className="mx-auto mt-5 w-full space-y-[20px] md:mt-20 md:space-y-[30px]">
          <FaqItem
            question={<>タイトルテキストが入ります。</>}
            awnser={
              <>
                お問い合わせページを開いていただき、「お申し込み」にチェックを入れて情報を入力後、送信ボタンを押してください。担当者よりご連絡させていただきます。
              </>
            }
          />
          <FaqItem
            question={<>タイトルテキストが入ります。</>}
            awnser={
              <>
                お問い合わせページを開いていただき、「お申し込み」にチェックを入れて情報を入力後、送信ボタンを押してください。担当者よりご連絡させていただきます。
              </>
            }
          />
          <FaqItem
            question={<>タイトルテキストが入ります。</>}
            awnser={
              <>
                お問い合わせページを開いていただき、「お申し込み」にチェックを入れて情報を入力後、送信ボタンを押してください。担当者よりご連絡させていただきます。
              </>
            }
          />
          <FaqItem
            question={<>タイトルテキストが入ります。</>}
            awnser={
              <>
                お問い合わせページを開いていただき、「お申し込み」にチェックを入れて情報を入力後、送信ボタンを押してください。担当者よりご連絡させていただきます。
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}
