export default function HomeFV() {
    return (
      <div className="px-5 pt-8 md:pt-[60px]">
        <div className="relative w-full max-w-[1000px] xl:max-w-[1440px] mx-auto px-1 flex justify-center max-md:flex-col">
            <img className="max-md:w-full max-xl:w-[86%]" src="/fv.png" alt="NFT x NFC" />
            <div className="flex items-start justify-between md:absolute w-full bottom-[24%] max-md:gap-3">
                <p className="max-md:w-1/2 text-[2.8vw] md:text-[16px] xl:text-[24px] font-medium leading-[1.4]">
                A new ownership experience <br className="max-md:hidden" />where physical and digital <br className="max-md:hidden" />spaces merge.
                </p>
                <p className="max-md:w-1/2 text-[2.8vw] md:text-[16px] xl:text-[24px] font-medium leading-[1.4] text-right">
                DIVER Tag bridges the physical <br className="max-md:hidden" />and digital worlds by linking digital <br className="max-md:hidden" />NFT to non-counterfeitable <br className="max-md:hidden" />physical NFC tags.
                </p>
            </div>
        </div>
      </div>
    );
  }
  