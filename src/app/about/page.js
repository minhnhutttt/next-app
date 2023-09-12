import PageTitle from "../components/common/pageTitle";

export default function Home() {
  return (
    <main>
      <PageTitle>ABOUT</PageTitle>
      <div className="flex max-md:flex-col">
        <div className="md:w-1/2">
            <img className="w-full h-full object-cover" src="/img-about-01.png" alt="" />
        </div>
        <div className="bg-[#0055A3] flex items-center justify-center md:w-1/2 px-5 max-md:py-20">
            <div className="flex flex-col items-center justify-center">
                <span className=""><img className="max-md:w-10" src="/ic-about.png" alt="" /></span>
                <h3 className="text-white text-[24px] md:text-[32px] lg:text-[48px] font-bold text-center tracking-wide mt-2">Redefining Communication</h3>
                <p className="text-white text-[16px] md:text-[22px] tracking-wide mt-1 text-center">A world of free and safe conversation anytime, anywhere.</p>
            </div>
        </div>
      </div>
      <div className="h-[480px] md:h-[640px] flex items-center justify-center bg-[url('/img-about-02.png')] bg-cover px-5">
        <div className="bg-white/90 w-full max-w-[886px] px-5 md:px-10 py-10 md:py-[60px]">
            <h3 className="text-[32px] md:text-[48px] font-bold text-center">Vision</h3>
            <p className="text-[18px] md:text-[22px] font-medium tracking-wide mt-2">
            We continue to pursue revolutionary technologies that drive the world's first decentralized, blockchain-authenticated, anonymous, instant messenger.
            </p>
        </div>
      </div>
    </main>
  )
}
