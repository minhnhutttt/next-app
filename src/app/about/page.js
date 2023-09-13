import PageTitle from "../components/common/pageTitle";

export default function Home() {
  return (
    <main>
      <PageTitle>ABOUT</PageTitle>
      <div className="flex max-md:flex-col">
        <div className="md:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="/img-about-01.png"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center bg-[#0055A3] px-5 max-md:py-20 md:w-1/2">
          <div className="flex flex-col items-center justify-center">
            <span className="">
              <img className="max-md:w-10" src="/ic-about.png" alt="" />
            </span>
            <h3 className="mt-2 text-center text-[24px] font-bold tracking-wide text-white md:text-[32px] lg:text-[48px]">
              Redefining Communication
            </h3>
            <p className="mt-1 text-center text-[16px] tracking-wide text-white md:text-[22px]">
              A world of free and safe conversation anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-[480px] items-center justify-center bg-[url('/img-about-02.png')] bg-cover px-5 md:h-[640px]">
        <div className="w-full max-w-[886px] bg-white/90 px-5 py-10 md:px-10 md:py-[60px]">
          <h3 className="text-center text-[32px] font-bold md:text-[48px]">
            Vision
          </h3>
          <p className="mt-2 text-[18px] font-medium tracking-wide md:text-[22px]">
            We continue to pursue revolutionary technologies that drive the
            world's first decentralized, blockchain-authenticated, anonymous,
            instant messenger.
          </p>
        </div>
      </div>
    </main>
  );
}
