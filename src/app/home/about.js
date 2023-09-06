export default function About() {
  return (
    <div className="bg-[url('/about-bg.jpg')] pb-[3%] pt-10 md:pt-[7%]">
      <div className="mx-auto w-full max-w-[768px] px-5">
        <h4 className="text-center text-[24px] font-bold md:text-[42px]">
          About Us
        </h4>
        <p className="mt-4 text-[13px] leading-[2] tracking-wider md:mt-10 md:text-[16px] md:leading-[2.8]">
          We are a fast growing company providing blockchain and software
          solutions to clients around the world. We have a portfolio of reliable
          projects, each contributing to a stronger innovation ecosystem,
          fostering collaboration and providing our clients with unparalleled
          customer service and expert technical support. Our first priority is
          to take care of the individuals who make it possible for us to deliver
          our services, and witnessing our clients' satisfaction with the work
          we have accomplished brings us great pride. Nothing.
        </p>
      </div>
      <div className="mt-[7.5%]">
        <img src="/about-img.png" alt="" />
      </div>
      <div className="flex items-center justify-center px-5 py-[50px] md:py-[74px]">
        <div className="w-full max-w-[712px] rounded-[20px] border border-[#aeaeae] bg-white/60 py-6 md:py-9">
          <div className="flex justify-center">
            <p className="border-b border-black px-5 font-['Roboto_Slab'] text-[18px] font-bold md:px-10 md:text-[20px]">
              CONNECT TO WORLD LTD.
            </p>
          </div>
          <p className="px-5 pb-3 pt-6 font-['Roboto_Slab'] text-[13px] leading-[2] md:px-20 md:pt-10 md:text-[16px]">
            Jurisdiction: NEVADA <br />
            Street Address: 5348 VEGAS DRIVE, LAS VEGAS, NV,89108, USA
          </p>
        </div>
      </div>
    </div>
  );
}
