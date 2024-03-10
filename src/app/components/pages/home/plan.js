"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import SectionTitle from "./components/sectionTitle";

export default function Plan() {
  const animateRefs = useScrollAnimation("fadeUp");
  return (
    <div
      id="plan"
      className="relative bg-[url('/images/background-plan.png')] bg-cover px-2 md:px-5 py-10 md:pt-[110px] md:pb-[80px] md:mt-[100px]"
    >
      <p className="absolute md:text-[14px] text-[10px] font-bold text-white md:bottom-6 bottom-2 right-4 z-10">©諏訪原寛幸／七大陸</p>
      <div className="mx-auto mb-8 w-full md:max-w-[970px] max-w-[500px]">
        <SectionTitle>100年間保存価格一覧<br />(ストレージ比較)</SectionTitle>
        <div
          ref={animateRefs}
          className="mt-8 rounded-[20px] bg-black/50 px-4 pt-6 md:mt-10 md:px-7 md:pt-[60px] md:pb-8 pb-6"
        >
          <div className="md:gap-[60px] w-full md:max-w-[766px] max-w-[440px] mx-auto">
            <table className="w-full border border-[#B3B3B3] border-collapse">
              <thead>
              <tr>
                <th className="bg-[#DA0A00] border border-[#B3B3B3]"></th>
                <th className="bg-[#DA0A00] text-white text-center font-bold border border-[#B3B3B3] px-2 py-3">
                  <span className="md:text-[28px] text-[18px]">2</span><span className="md:text-[20px] text-[14px]">GB</span> <br />
                  <span className="md:text-[24px] text-[16px]">1,100</span><span className="md:text-[16px] text-[12px]">円<br className="md:hidden" />(税込)</span>
                </th>
                <th className="bg-[#DA0A00] text-white text-center font-bold border border-[#B3B3B3] px-2 py-3">
                  <span className="md:text-[28px] text-[18px]">100</span><span className="md:text-[20px] text-[14px]">GB</span> <br />
                  <span className="md:text-[24px] text-[16px]">3,410</span><span className="md:text-[16px] text-[12px]">円<br className="md:hidden" />(税込)</span>
                </th>
                <th className="bg-[#DA0A00] text-white text-center font-bold border border-[#B3B3B3] px-2 py-3">
                  <span className="md:text-[28px] text-[18px]">500</span><span className="md:text-[20px] text-[14px]">GB</span> <br />
                  <span className="md:text-[24px] text-[16px]">12,650</span><span className="md:text-[16px] text-[12px]">円<br className="md:hidden" />(税込)</span>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td className="font-bold md:text-[16px] text-[12px] border border-[#B3B3B3] p-2 md:p-3 bg-white">
                  画像 (1,200画素)
                </td>
                <td className="md:text-[16px] text-[12px] text-center border border-[#B3B3B3] p-2 md:p-3 bg-white">
                  408枚
                </td>
                <td className="md:text-[16px] text-[12px] text-center border border-[#B3B3B3] p-2 md:p-3 bg-white">
                  約2.2万枚
                </td>
                <td className="md:text-[16px] text-[12px] text-center border border-[#B3B3B3] p-2 md:p-3 bg-white">
                  約11.3万枚
                </td>
              </tr>
              <tr>
                <td className="font-bold md:text-[16px] text-[12px] border border-[#B3B3B3] p-2 md:p-3 bg-white">
                フルHD動画
                </td>
                <td className="md:text-[16px] text-[12px] text-center border border-[#B3B3B3] p-2 md:p-3 bg-white">
                5分の動画 1本
                </td>
                <td className="md:text-[16px] text-[12px] text-center border border-[#B3B3B3] p-2 md:p-3 bg-white">
                30分の動画 25本
                </td>
                <td className="md:text-[16px] text-[12px] text-center border border-[#B3B3B3] p-2 md:p-3 bg-white">
                30分の動画 125本
                </td>
              </tr>
              <tr>
                <td className="font-bold md:text-[16px] text-[12px] border border-[#B3B3B3] p-2 md:p-3 bg-white">
                Excel (1MB)
                </td>
                <td className="md:text-[16px] text-[12px] text-center border border-[#B3B3B3] p-2 md:p-3 bg-white">
                約2,000点
                </td>
                <td className="md:text-[16px] text-[12px] text-center border border-[#B3B3B3] p-2 md:p-3 bg-white">
                約10万点
                </td>
                <td className="md:text-[16px] text-[12px] text-center border border-[#B3B3B3] p-2 md:p-3 bg-white">
                約50万点
                </td>
              </tr>
              <tr>
                <td className="font-bold md:text-[16px] text-[12px] border border-[#B3B3B3] p-2 md:p-3 bg-white">
                Word (200KB)
                </td>
                <td className="md:text-[16px] text-[12px] text-center border border-[#B3B3B3] p-2 md:p-3 bg-white">
                約1.4万点
                </td>
                <td className="md:text-[16px] text-[12px] text-center border border-[#B3B3B3] p-2 md:p-3 bg-white">
                約50万点
                </td>
                <td className="md:text-[16px] text-[12px] text-center border border-[#B3B3B3] p-2 md:p-3 bg-white">
                約250万点
                </td>
              </tr>
              <tr>
                <td className="font-bold md:text-[16px] text-[12px] border border-[#B3B3B3] p-2 md:p-3 bg-white">
                MP3<span className="text-[#DA0A00]">*</span> 音楽データ
                </td>
                <td className="md:text-[16px] text-[12px] text-center border border-[#B3B3B3] p-2 md:p-3 bg-white">
                約450曲
                </td>
                <td className="md:text-[16px] text-[12px] text-center border border-[#B3B3B3] p-2 md:p-3 bg-white">
                約2.5万曲
                </td>
                <td className="md:text-[16px] text-[12px] text-center border border-[#B3B3B3] p-2 md:p-3 bg-white">
                約11万曲
                </td>
              </tr>
              </tbody>
            </table>
            <div className="md:text-[14px] text-[12px] text-white pt-[24px]">*音楽データ: 4分の曲を128kbps、MP3形式で圧縮、1ファイルあたり=4MBとして計算</div>
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
