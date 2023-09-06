import ButtonLink from '@/app/components/common/button'

export default function MainVisual() {
  return (
    <div className="relative flex md:min-h-[470px] min-h-[440px]">
      <img className='object-cover' src="/mv.png" alt="" />
      <div className="absolute inset-0 h-full px-5">
        <div className="w-full max-w-[1640px] mx-auto h-full flex justify-end items-end">
          <div className="md:w-1/2 w-3/4 pl-[6%] pr-[2%] pb-[6.5%]">
            <h1 className="text-[20px] md:text-[24px] xl:text-[42px] text-[#0045a6] font-bold tracking-[0.08em] max-md:[text-shadow:_1px_1px_5px_rgb(255_255_255_/_100%)]">
              Unlock Limitless Potential, <br />
              Connect Worldwide
            </h1>
            <p className="text-[16px] md:text-[18px] xl:text-[24px] font-medium tracking-[0.08em] mt-4 mb-8 leading-relaxed max-md:[text-shadow:_1px_1px_5px_rgb(255_255_255_/_100%)]">
            CONNECT TO WORLD aims to realize seamless access to WEB3 through DIVER Connect, and to smoothly connect WEB3 globally with DIVER Chain.
            </p>
            <ButtonLink link="/">Service</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  )
}
