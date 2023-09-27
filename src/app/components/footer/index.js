import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-black pt-[14px] bg-[url('/bg-footer.png')] bg-cover">
        <div className="border-t-[5px] border-white">
            <div className="w-full max-w-[1300px] mx-auto">
                <div className="flex justify-between pt-6 pb-9 pl-9">
                    <Link href="/">
                        <img src="/logo-footer.png" alt="" />
                    </Link>
                    <div className="border-l border-white w-[440px] pt-9 pb-[150px]">
                        <div className="flex justify-center">
                            <Link href="/">
                            <img src="/img-footer.png" alt="" />
                            </Link>
                        </div>
                        <div className="flex justify-center items-center gap-[62px] mt-[38px]">
                            <p className="text-white text-[16px] font-semibold">
                                株式会社〇〇〇 <br />
                                東京都〇〇<br />
                                03-0000-0001
                            </p>
                            <Link href="/" className="text-[22px] flex justify-center items-center font-semibold text-white w-[136px] h-[42px] border border-white bg-white/[0.16]">
                            contact
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-white border-y px-10">
                    <ul className="flex items-center gap-[108px]">
                        <li>
                            <Link href="/" className="text-[18px] font-semibold text-white py-4 block">プライバシーポリシー</Link>
                        </li>
                        <li>
                            <Link href="/" className="text-[18px] font-semibold text-white py-4 block">運営会社</Link>
                        </li>
                        <li>
                            <Link href="/" className="text-[18px] font-semibold text-white py-4 block">特定商取引法に関する表示</Link>
                        </li>
                    </ul>
                </div>
                <p className="text-right text-white text-[18px] font-semibold py-[30px] px-5">（C)2023　DIVER HELP CENTER　</p>
            </div>
        </div>
    </footer>
  );
}
