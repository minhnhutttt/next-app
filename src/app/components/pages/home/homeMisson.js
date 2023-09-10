export default function HomeMisson() {
  return (
    <div className="bg-[url('/misson-bg.jpg')] bg-[length:100%_100%] py-10 md:py-[120px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6">
        <div className="flex pb-3 max-lg:flex-col-reverse max-lg:items-center max-lg:gap-16 max-md:gap-8">
          <div className="flex-col items-center justify-center max-lg:flex max-md:w-full md:flex-1">
            <h3 className="text-[32px] font-bold leading-none tracking-[0.2em] text-white md:text-[80px] lg:text-[100px]">
              MISSON
            </h3>
            <p className="mb-10 mt-5 text-[14px] leading-[1.75] tracking-wide text-white md:mb-[72px] md:text-[16px]">
              This DAO to promote the development of the blockchain naming
              ecosystem and the functioning of blockchain domain registries with
              and across blockchain-based and traditional web applications.{" "}
              <br />
              <br />
              The Web3 Domain Alliance is dedicated to the technological
              advancement of blockchain domain registries, as well as consumer
              protection by ensuring the interoperability of blockchain domain
              registries. <br />
              <br />
              The Web3 Domain Alliance believes that blockchain-based generic
              web3 Top Level Domains (“TLDs”) developed and marketed by a
              specific organization are intellectual property, and that industry
              participants should respect the intellectual property rights of
              all blockchain naming services for the benefit of consumers as
              well as applications that want to support blockchain domain
              functionality.
            </p>
            <a
              href="#"
              className="flex h-[60px] w-[280px] items-center justify-center border border-white font-['Rubik'] text-[14px] font-bold tracking-[0.2em] text-white md:h-[72px] md:w-[400px] md:text-[18px]"
            >
              READ MORE
            </a>
          </div>
          <div className="max-w-[760px] lg:w-[55%] lg:px-7 lg:pt-2">
            <video src="/AdobeStock_261293765.mov" loop autoPlay muted></video>
          </div>
        </div>
      </div>
    </div>
  );
}
