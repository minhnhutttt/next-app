export default function Footer() {
  return (
    <footer className="px-5 pb-3">
      <div className="mx-auto flex w-full max-w-[710px] items-center justify-between gap-10 py-[60px] max-md:flex-col md:py-[100px]">
        <a href="/" className="flex items-end">
          <div>
            <p className="mb-1 text-center text-[2.4vw] leading-none tracking-[0.3em] text-[#3D3D3D] md:text-[13px]">
              じせだい
            </p>
            <p className="text-stroke-min text-[8vw] leading-none tracking-[0.2em] md:text-[42px]">
              <span className="text-[#2157E3]">次</span>
              <span className="text-[#8F01FE]">世</span>
              <span className="text-[#98FE01]">代</span>
            </p>
          </div>
          <div>
            <p className="text-stroke-min text-[8vw] leading-none tracking-[0.2em] md:text-[42px]">
              <span className="text-[#E70012]">ア</span>
              <span className="text-[#F9FE01]">プ</span>
              <span className="text-[#FE01F4]">リ</span>
            </p>
          </div>
          <div>
            <p className="mb-1 text-center text-[2.4vw] leading-none tracking-[0.3em] text-[#3D3D3D] md:text-[13px]">
              だいしゅうごう
            </p>
            <p className="text-stroke-min text-[8vw] leading-none tracking-[0.2em] md:text-[42px]">
              <span className="text-[#22ABF3]">大</span>
              <span className="text-[#FF7F02]">集</span>
              <span className="text-[#00A90C]">合</span>
            </p>
          </div>
        </a>
        <div className="space-y-[24px] font-noto text-[14px] font-bold max-md:text-center md:space-y-[30px] md:text-[16px]">
          <a
            href="/privacy-policy"
            className="block duration-150 hover:opacity-75"
          >
            プライバシーポリシー
          </a>
          <a href="/company" className="block duration-150 hover:opacity-75">
            運営会社
          </a>
        </div>
      </div>
      <p className="p-3 text-center font-fredoka text-[14px]">
        Copyright © JISEDAI- PORTAL
      </p>
    </footer>
  );
}
