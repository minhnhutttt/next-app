export default function HomeFV() {
  return (
    <div className="px-5 pt-8 md:pt-[60px]">
      <div className="relative mx-auto flex w-full max-w-[1000px] justify-center px-1 max-md:flex-col xl:max-w-[1440px]">
        <img
          className="max-xl:w-[86%] max-md:w-full"
          src="/fv.png"
          alt="NFT x NFC"
        />
        <div className="bottom-[24%] flex w-full items-start justify-between max-md:gap-3 md:absolute">
          <p className="text-[2.8vw] font-medium leading-[1.4] max-md:w-1/2 md:text-[16px] xl:text-[24px]">
            A new ownership experience <br className="max-md:hidden" />
            where physical and digital <br className="max-md:hidden" />
            spaces merge.
          </p>
          <p className="text-right text-[2.8vw] font-medium leading-[1.4] max-md:w-1/2 md:text-[16px] xl:text-[24px]">
            DIVER Tag bridges the physical <br className="max-md:hidden" />
            and digital worlds by linking digital{" "}
            <br className="max-md:hidden" />
            NFT to non-counterfeitable <br className="max-md:hidden" />
            physical NFC tags.
          </p>
        </div>
      </div>
    </div>
  );
}
