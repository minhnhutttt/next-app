import SectionTitle from "./components/sectionTitle";

export default function Dissatisfaction() {
    return (
      <div className="bg-[url('/images/background-dissatisfaction.png')] bg-cover bg-top  flex items-end relative">
        <div className="absolute right-0 bottom-0">
            <img className="max-md:w-[44vw] max-xl:w-[500px]" src="/images/dissatisfaction-character.png" alt="" />
        </div>
         <div className="w-full max-w-[1320px] mx-auto pt-12 pb-8 md:pt-[100px] md:pb-[52px] relative px-5">
            <SectionTitle>ポケットWi-Fiとストレージへの不満</SectionTitle>
            <div className="mt-10 flex flex-col gap-5">
                <div className="max-md:mr-4">
                    <div className="bg-white/80 md:min-h-[123px] min-h-[60px] md:text-[28px] text-[14px] font-bold inline-flex md:px-[64px] px-4 py-5 md:py-[38px] items-center justify-center tracking-widest">２年間という縛りが納得できない</div>
                </div>
                <div className="ml-7 md:ml-[118px]">
                    <div className="bg-white/80 md:min-h-[123px] min-h-[60px] md:text-[28px] text-[14px] font-bold inline-flex md:px-[80px] px-4 py-5 md:py-[38px] items-center justify-center tracking-widest">通信が遅い！電波が弱いのかと感じる</div>
                </div>
                <div className="max-md:mr-4">
                    <div className="bg-white/80 md:min-h-[123px] min-h-[60px] md:text-[28px] text-[14px] font-bold inline-flex md:px-[64px] px-4 py-5 md:py-[38px] items-center justify-center tracking-widest">月額費用を支払ってまで必要としない</div>
                </div>
                <div className="ml-7 md:ml-[118px]">
                    <div className="bg-white/80 md:min-h-[123px] min-h-[60px] md:min-w-[636px] md:text-[28px] text-[14px] font-bold inline-flex md:px-[80px] px-10 py-5 md:py-[38px] items-center justify-center tracking-widest">外出が続き使用しない時がある</div>
                </div>
                <div className="max-md:mr-4">
                    <div className="bg-white/80 md:min-h-[123px] min-h-[60px] md:text-[28px] text-[14px] font-bold inline-flex md:px-[64px] px-4 py-5 md:py-[38px] items-center justify-center tracking-widest">容量不足で使えない時は怒りを感じる</div>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
  