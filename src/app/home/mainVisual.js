import ButtonLink from "@/app/components/common/button";

export default function MainVisual() {
  return (
    <div className="relative flex min-h-[440px] md:min-h-[470px]">
      <img className="object-cover" src="/mv.png" alt="" />
      <div className="absolute inset-0 h-full px-5">
        <div className="mx-auto flex h-full w-full max-w-[1640px] items-end justify-end">
          <div className="w-3/4 pb-[6.5%] pl-[6%] pr-[2%] md:w-1/2">
            <h1 className="text-[20px] font-bold tracking-[0.08em] text-[#0045a6] max-md:[text-shadow:_1px_1px_5px_rgb(255_255_255_/_100%)] md:text-[24px] xl:text-[42px]">
              Unlock Limitless Potential, <br />
              Connect Worldwide
            </h1>
            <p className="mb-8 mt-4 text-[16px] font-medium leading-relaxed tracking-[0.08em] max-md:[text-shadow:_1px_1px_5px_rgb(255_255_255_/_100%)] md:text-[18px] xl:text-[24px]">
              CONNECT TO WORLD aims to realize seamless access to WEB3 through
              DIVER Connect, and to smoothly connect WEB3 globally with DIVER
              Chain.
            </p>
            <ButtonLink link="/">Service</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
