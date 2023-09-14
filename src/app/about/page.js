import PageTitle from "../components/common/pageTitle";

export default function About() {
  return (
    <main>
      <PageTitle>About</PageTitle>
      <div className="px-5 mb-[16%]">
        <div className="w-full max-w-[440px] md:max-w-[1440px] mx-auto">
            <div className="flex items-center justify-center max-md:flex-col mb-14 md:mb-[104px] mt-9 md:mt-[67px] gap-6 md:gap-10">
                <div className="">
                    <img src="/img-about-01.png" alt="Bringing blockchain into everyday life" />
                </div>
                <div className="md:-mt-[8%]">
                    <h3 className="text-[28px] md:text-[40px] font-medium">Bringing blockchain into everyday life</h3>
                    <p className="text-[16px] md:text-[18px] mt-3 md:mt-6">We push the possibilities of blockchain and create new value.</p>
                </div>
            </div>
            <div className="w-full max-w-[1174px] mx-auto">
                <div className="flex items-center justify-center max-md:flex-col-reverse gap-5 md:gap-[60px] mb-16 md:mb-[137px]">
                    <div className="md:w-1/2">
                        <h3 className="text-[32px] md:text-[48px] font-bold">Vision</h3>
                        <p className="text-[16px] md:text-[24px] font-medium mt-2 md:mt-6">We place &quot;innovation&quot; at the core of our business. We will bring about a world where blockchain becomes an integral part of everyday life.</p>
                    </div>
                    <div className="md:w-1/2">
                        <img className="max-w-full" src="/img-about-02.png" alt="Vision" />
                    </div>
                </div>
                <div className="flex items-center justify-center max-md:flex-col gap-5 md:gap-[60px] mb-16 md:mb-[137px]">
                    <div className="md:w-1/2">
                        <img className="max-w-full" src="/img-about-03.png" alt="Mission" />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-[32px] md:text-[48px] font-bold">Mission</h3>
                        <p className="text-[16px] md:text-[24px] font-medium mt-2 md:mt-6">We will provide innovative and creative products and services that will change people&apos;s perception of blockchain and make blockchain an integral part of their daily lives.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
