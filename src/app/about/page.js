import PageTitle from "../components/common/pageTitle";

export default function About() {
  return (
    <main>
      <PageTitle>About</PageTitle>
      <div className="mb-[16%] px-5">
        <div className="mx-auto w-full max-w-[440px] md:max-w-[1440px]">
          <div className="mb-14 mt-9 flex items-center justify-center gap-6 max-md:flex-col md:mb-[104px] md:mt-[67px] md:gap-10">
            <div className="">
              <img
                src="/img-about-01.png"
                alt="Bringing blockchain into everyday life"
              />
            </div>
            <div className="md:-mt-[8%]">
              <h3 className="text-[28px] font-medium md:text-[40px]">
                Bringing blockchain into everyday life
              </h3>
              <p className="mt-3 text-[16px] md:mt-6 md:text-[18px]">
                We push the possibilities of blockchain and create new value.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[1174px]">
            <div className="mb-16 flex items-center justify-center gap-5 max-md:flex-col-reverse md:mb-[137px] md:gap-[60px]">
              <div className="md:w-1/2">
                <h3 className="text-[32px] font-bold md:text-[48px]">Vision</h3>
                <p className="mt-2 text-[16px] font-medium md:mt-6 md:text-[24px]">
                  We place &quot;innovation&quot; at the core of our business.
                  We will bring about a world where blockchain becomes an
                  integral part of everyday life.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  className="max-w-full"
                  src="/img-about-02.png"
                  alt="Vision"
                />
              </div>
            </div>
            <div className="mb-16 flex items-center justify-center gap-5 max-md:flex-col md:mb-[137px] md:gap-[60px]">
              <div className="md:w-1/2">
                <img
                  className="max-w-full"
                  src="/img-about-03.png"
                  alt="Mission"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-[32px] font-bold md:text-[48px]">
                  Mission
                </h3>
                <p className="mt-2 text-[16px] font-medium md:mt-6 md:text-[24px]">
                  We will provide innovative and creative products and services
                  that will change people&apos;s perception of blockchain and
                  make blockchain an integral part of their daily lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
