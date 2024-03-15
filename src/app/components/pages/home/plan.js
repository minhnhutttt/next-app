"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "./components/sectionTitle";

export default function Plan() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div
      id="price"
      className="relative bg-[url('/images/background-plan.png')] bg-cover px-2 py-10 md:mt-[100px] md:px-5 md:pb-[80px] md:pt-[110px]"
    >
      <p className="absolute bottom-2 right-4 z-10 text-[10px] font-bold text-white md:bottom-6 md:text-[14px]">
        ©諏訪原寛幸／七大陸
      </p>
      <div className="mx-auto mb-8 w-full max-w-[500px] md:max-w-[970px]">
        <SectionTitle>
          ストレージ価格一覧
          <br />
          (ストレージ比較)
        </SectionTitle>
        <div
          ref={animateRefs}
          className="mt-8 rounded-[20px] bg-black/50 px-4 pb-6 pt-6 md:mt-10 md:px-7 md:pb-8 md:pt-[60px]"
        >
          <div className="mx-auto w-full max-w-[440px] md:max-w-[766px] md:gap-[60px]">
            <table className="w-full border-collapse border border-[#B3B3B3]">
              <thead>
                <tr>
                  <th className="border border-[#B3B3B3] bg-[#DA0A00]"></th>
                  <th className="border border-[#B3B3B3] bg-[#DA0A00] px-2 py-3 text-center font-bold text-white">
                    <span className="text-[18px] md:text-[28px]">2</span>
                    <span className="text-[14px] md:text-[20px]">GB</span>{" "}
                    <br />
                    <span className="text-[16px] md:text-[24px]">1,100</span>
                    <span className="text-[12px] md:text-[16px]">
                      円<br className="md:hidden" />
                      (税込)
                    </span>
                  </th>
                  <th className="border border-[#B3B3B3] bg-[#DA0A00] px-2 py-3 text-center font-bold text-white">
                    <span className="text-[18px] md:text-[28px]">100</span>
                    <span className="text-[14px] md:text-[20px]">GB</span>{" "}
                    <br />
                    <span className="text-[16px] md:text-[24px]">3,410</span>
                    <span className="text-[12px] md:text-[16px]">
                      円<br className="md:hidden" />
                      (税込)
                    </span>
                  </th>
                  <th className="border border-[#B3B3B3] bg-[#DA0A00] px-2 py-3 text-center font-bold text-white">
                    <span className="text-[18px] md:text-[28px]">500</span>
                    <span className="text-[14px] md:text-[20px]">GB</span>{" "}
                    <br />
                    <span className="text-[16px] md:text-[24px]">12,650</span>
                    <span className="text-[12px] md:text-[16px]">
                      円<br className="md:hidden" />
                      (税込)
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-[12px] font-bold md:p-3 md:text-[16px]">
                    画像 (1,200画素)
                  </td>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-center text-[12px] md:p-3 md:text-[16px]">
                    408枚
                  </td>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-center text-[12px] md:p-3 md:text-[16px]">
                    約2.2万枚
                  </td>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-center text-[12px] md:p-3 md:text-[16px]">
                    約11.3万枚
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-[12px] font-bold md:p-3 md:text-[16px]">
                    フルHD動画
                  </td>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-center text-[12px] md:p-3 md:text-[16px]">
                    5分の動画 1本
                  </td>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-center text-[12px] md:p-3 md:text-[16px]">
                    30分の動画 25本
                  </td>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-center text-[12px] md:p-3 md:text-[16px]">
                    30分の動画 125本
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-[12px] font-bold md:p-3 md:text-[16px]">
                    Excel (1MB)
                  </td>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-center text-[12px] md:p-3 md:text-[16px]">
                    約2,000点
                  </td>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-center text-[12px] md:p-3 md:text-[16px]">
                    約10万点
                  </td>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-center text-[12px] md:p-3 md:text-[16px]">
                    約50万点
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-[12px] font-bold md:p-3 md:text-[16px]">
                    Word (200KB)
                  </td>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-center text-[12px] md:p-3 md:text-[16px]">
                    約1.4万点
                  </td>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-center text-[12px] md:p-3 md:text-[16px]">
                    約50万点
                  </td>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-center text-[12px] md:p-3 md:text-[16px]">
                    約250万点
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-[12px] font-bold md:p-3 md:text-[16px]">
                    MP3<span className="text-[#DA0A00]">*</span> 音楽データ
                  </td>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-center text-[12px] md:p-3 md:text-[16px]">
                    約450曲
                  </td>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-center text-[12px] md:p-3 md:text-[16px]">
                    約2.5万曲
                  </td>
                  <td className="border border-[#B3B3B3] bg-white p-2 text-center text-[12px] md:p-3 md:text-[16px]">
                    約11万曲
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="pt-[24px] text-[12px] text-white md:text-[14px]">
              *音楽データ:
              4分の曲を128kbps、MP3形式で圧縮、1ファイルあたり=4MBとして計算
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-[-70px] flex justify-center md:mb-[-135px]">
        <img
          ref={animateRefs}
          className="max-md:w-[43px]"
          src="/images/arrow-down.png"
          alt=""
        />
      </div>
    </div>
  );
}
