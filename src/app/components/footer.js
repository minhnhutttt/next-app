export default function Footer() {
  return (
    <footer className="px-5 pb-3">
        <div className="w-full max-w-[710px] mx-auto flex max-md:flex-col gap-10 justify-between items-center py-[60px] md:py-[100px]">
            <a href="/" className="flex items-end">
                <div>
                    <p className="text-[2.4vw] md:text-[13px] text-[#3D3D3D] text-center leading-none tracking-[0.3em] mb-1">じせだい</p>
                    <p className="text-[8vw] md:text-[42px] text-stroke-min leading-none tracking-[0.2em]">
                        <span className="text-[#2157E3]">次</span>
                        <span className="text-[#8F01FE]">世</span>
                        <span className="text-[#98FE01]">代</span>
                    </p>
                </div>
                <div>
                    <p className="text-[8vw] md:text-[42px] text-stroke-min leading-none tracking-[0.2em]">
                        <span className="text-[#E70012]">ア</span>
                        <span className="text-[#F9FE01]">プ</span>
                        <span className="text-[#FE01F4]">リ</span>
                    </p>
                </div>
                <div>
                    <p className="text-[2.4vw] md:text-[13px] text-[#3D3D3D] text-center leading-none tracking-[0.3em] mb-1">だいしゅうごう</p>
                    <p className="text-[8vw] md:text-[42px] text-stroke-min leading-none tracking-[0.2em]">
                        <span className="text-[#22ABF3]">大</span>
                        <span className="text-[#FF7F02]">集</span>
                        <span className="text-[#00A90C]">合</span>
                    </p>
                </div>
            </a>
            <div className="text-[14px] md:text-[16px] font-noto font-bold md:space-y-[30px] space-y-[24px] max-md:text-center">
                <a href="/privacy-policy" className="block duration-150 hover:opacity-75">プライバシーポリシー</a>
                <a href="/company" className="block duration-150 hover:opacity-75">運営会社</a>
            </div>
        </div>
        <p className="text-center font-fredoka text-[14px] p-3">Copyright © JISEDAI- PORTAL</p>
    </footer>
  );
}
