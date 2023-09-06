import ButtonLink from '@/app/components/common/button'

export default function Diver() {
  return (
    <div className="relative md:min-h-[384px] md:flex">
    <img className='object-cover max-md:hidden' src="/img-diver.jpg" alt="" />
    <img className='md:hidden' src="/img-diver-sp.jpg" alt="" />
    <div className="md:absolute inset-0 h-full px-5 max-md:bg-[#010328]">
      <div className="w-full max-w-[1640px] mx-auto h-full flex justify-end items-center">
        <div className="md:w-1/2 px-[3%] pt-[2%] max-md:pb-[10%]">
          <h3 className="text-[24px] md:text-[42px] text-white font-bold tracking-[0.04em]">
          What is a diver
          </h3>
          <p className="text-[14px] md:text-[18px] text-white mt-3 mb-10 leading-relaxed">
          We pursue true Web3 with cutting-edge technology and flexible approaches, and aim to realize a society where individuals are respected.
          </p>
          <ButtonLink link="/" noBg>Official site</ButtonLink>
        </div>
      </div>
    </div>
  </div>
  )
}
