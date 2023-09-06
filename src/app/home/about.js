export default function About() {
  return (
    <div className="bg-[url('/about-bg.jpg')] pt-10 md:pt-[7%] pb-[3%]">
        <div className="w-full max-w-[768px] mx-auto px-5">
            <h4 className="text-[24px] md:text-[42px] font-bold text-center">About Us</h4>
            <p className="text-[13px] md:text-[16px] md:leading-[2.8] leading-[2] tracking-wider mt-4 md:mt-10">
            We are a fast growing company providing blockchain and software solutions to clients around the world. We have a portfolio of reliable projects, each contributing to a stronger innovation ecosystem, fostering collaboration and providing our clients with unparalleled customer service and expert technical support. Our first priority is to take care of the individuals who make it possible for us to deliver our services, and witnessing our clients' satisfaction with the work we have accomplished brings us great pride. Nothing.
            </p>
        </div>
        <div className="mt-[7.5%]">
            <img src="/about-img.png" alt="" />
        </div>
        <div className="px-5 flex items-center justify-center py-[50px] md:py-[74px]">
            <div className="w-full max-w-[712px] border border-[#aeaeae] rounded-[20px] bg-white/60 md:py-9 py-6">
                <div className="flex justify-center">
                    <p className="font-['Roboto_Slab'] md:text-[20px] text-[18px] font-bold border-b border-black px-5 md:px-10">CONNECT TO WORLD LTD.</p>
                </div>
                <p className="font-['Roboto_Slab'] md:text-[16px] text-[13px] px-5 md:px-20 leading-[2] pt-6 md:pt-10 pb-3">
                        Jurisdiction: NEVADA <br />
                        Street Address: 5348 VEGAS DRIVE, LAS VEGAS, NV,89108, USA
                    </p>
            </div>
        </div>
    </div>
  )
}
