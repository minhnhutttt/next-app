import ButtonLink from "@/app/components/common/button";

export default function Diver() {
  return (
    <div className="relative md:flex md:min-h-[384px]">
      <img className="object-cover max-md:hidden" src="/img-diver.jpg" alt="" />
      <img className="md:hidden" src="/img-diver-sp.jpg" alt="" />
      <div className="inset-0 h-full px-5 max-md:bg-[#010328] md:absolute">
        <div className="mx-auto flex h-full w-full max-w-[1640px] items-center justify-end">
          <div className="px-[3%] pt-[2%] max-md:pb-[10%] md:w-1/2">
            <h3 className="text-[24px] font-bold tracking-[0.04em] text-white md:text-[42px]">
              What is a diver
            </h3>
            <p className="mb-10 mt-3 text-[14px] leading-relaxed text-white md:text-[18px]">
              We pursue true Web3 with cutting-edge technology and flexible
              approaches, and aim to realize a society where individuals are
              respected.
            </p>
            <ButtonLink link="/" noBg>
              Official site
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
