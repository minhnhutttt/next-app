export default function HomeMisson() {
    return (
        <div className="bg-[url('/misson-bg.jpg')] bg-cover py-10 md:py-[120px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6">
          <div className="flex max-lg:flex-col-reverse max-lg:items-center max-md:gap-8 max-lg:gap-16 pb-3">
            <div className="md:flex-1 max-md:w-full max-lg:flex justify-center items-center flex-col">
              <h3 className="text-[32px] md:text-[80px] lg:text-[100px] font-bold leading-none tracking-[0.2em] text-white">
              MISSON
              </h3>
              <p className="text-white text-[14px] md:text-[16px] mt-5 mb-10 md:mb-[72px] leading-[1.75] tracking-wide">
              This DAO to promote the development of the blockchain naming ecosystem and the functioning of blockchain domain registries with and across blockchain-based and traditional web applications. <br />
              <br />
              The Web3 Domain Alliance is dedicated to the technological advancement of blockchain domain registries, as well as consumer protection by ensuring the interoperability of blockchain domain registries. <br />
              <br />
              The Web3 Domain Alliance believes that blockchain-based generic web3 Top Level Domains (“TLDs”) developed and marketed by a specific organization are intellectual property, and that industry participants should respect the intellectual property rights of all blockchain naming services for the benefit of consumers as well as applications that want to support blockchain domain functionality.
              </p>
              <a href="#" className="flex justify-center items-center w-[280px] md:w-[400px] h-[60px] md:h-[72px] border border-white text-white text-[14px] md:text-[18px] font-bold font-['Rubik'] tracking-[0.2em]">
              READ MORE
              </a>
            </div>
            <div className="lg:w-[55%] max-w-[760px] lg:pt-2 lg:px-7">
              <video src="/AdobeStock_261293765.mov" loop autoPlay muted></video>
            </div>
          </div>
        </div>
      </div>
    );
  }
  