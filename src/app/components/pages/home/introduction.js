import ButtonCheck from "../../common/buttonCheck";

export default function Introduction() {
    return (
       <div className="px-5">
        <div className="w-full max-w-[1280px] mx-auto bg-white flex justify-center py-10 md:py-[72px] px-8 md:px-16">
            <div className="w-full max-w-[1150px] flex gap-[60px]">
                <div className="flex-1">
                    <h4 className="text-[32px] md:text-[40px] font-bold md:py-2 md:mb-8 mb-4">次世代スキャンとは？</h4>
                    <p className="text-[14px] md:text-[18px] font-black tracking-widest md:mb-5 mb-3">次世代アカウントの簡単アドレスチェッカーのことです。</p>
                    <p className="md:text-[15px] text-[13px] leading-tight tracking-wider">
                    次世代スキャンの正式なサービス名は「DIVER Scan」と言います。<br />【チェックする】ボタンを押すと、DIVER Scanのページが開かれます。<br />DIVER Scanは、簡単な操作で指定のアドレスの取引確認ができる便利なウェブサイトです。ブックマークしておきましょう。
                    </p>
                    <ButtonCheck />
                </div>
                <figure>
                    <img src="/images/img-introduction.png" alt="" />
                </figure>
            </div>
        </div>
       </div>
    )
  }
  