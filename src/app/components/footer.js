import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#DEDEDE] px-10 py-12 md:pb-2.5 md:pt-[90px]">
      <div className="mx-auto mb-14 flex w-full max-w-[926px] max-md:flex-col max-md:items-center md:justify-between">
        <div className="">
          <Link
            href="/"
            className="font-dela text-[32px] tracking-widest [text-shadow:4px_3px_0px_#000] duration-150 hover:opacity-75"
          >
            <img
              className="max-md:w-[200px]"
              src="/images/logo-footer.png"
              alt="次世代チャット"
            />
          </Link>
          <p className="mb-4 mt-6 text-[14px] leading-[2.2] md:text-[16px]">
            プライバシーポリシー <br />
            利用規約
          </p>
          <a
            href="https://lin.ee/6PgmBNE"
            target="_blank"
            className="flex h-12 max-w-[240px] items-center justify-between gap-3 break-keep rounded-[50px] bg-[#00B900] px-4 font-zenkaku text-[14px] font-bold tracking-wider text-white md:h-[64px] md:w-full md:px-6 md:text-[18px] xl:max-w-[247px] duration-150 hover:opacity-75"
          >
            <span>LINEでお問い合わせ</span>
            <svg
              className="max-md:w-2.5"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
            >
              <path
                d="M0.0157804 0.800481L0.0157798 15.2009C0.0162375 15.3467 0.0564492 15.4896 0.132086 15.6142C0.207723 15.7389 0.31592 15.8405 0.445034 15.9083C0.574147 15.976 0.719288 16.0072 0.86483 15.9986C1.01037 15.99 1.15081 15.9418 1.27102 15.8593L11.6713 8.65911C12.1025 8.3607 12.1025 7.64228 11.6713 7.34307L1.27102 0.142863C1.15106 0.0595201 1.01055 0.0106461 0.864769 0.0015507C0.718984 -0.00754474 0.573494 0.0234863 0.444107 0.0912722C0.31472 0.159058 0.206383 0.261007 0.130869 0.386041C0.0553541 0.511075 0.0155506 0.654413 0.0157804 0.800481Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        <div className="mt-5 max-md:mt-10 md:ml-10 lg:ml-[90px]">
          <div className="flex items-center gap-5 rounded-[20px] bg-white px-6 py-5 max-md:flex-col md:rounded-[30px] lg:px-[50px] lg:py-[30px]">
            <figure>
              <img src="/images/logo-knock-footer.png" alt="Knock" />
            </figure>
            <div className="flex justify-center gap-4 md:gap-6">
              <a
                href="https://apps.apple.com/jp/app/diver-knock/id6450264436"
                target="_blank"
              >
                <img
                  className="md:w-[187px]"
                  src="/images/btn-app-store.png"
                  alt="App Store"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.bigant.diver.limited.talk.flutter_project&pcampaignid=web_share"
                target="_blank"
              >
                <img
                  className="md:w-[187px]"
                  src="/images/btn-google-play.png"
                  alt="App Store"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-[12px] text-black md:text-[15px]">
        Copyright © JISEDAI CHAT
      </p>
    </footer>
  );
}
