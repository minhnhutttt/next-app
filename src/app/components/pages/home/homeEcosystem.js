export default function HomeEcosystem() {
  return (
    <div className="pt-12 md:pt-[160px]">
      <div className="mx-auto w-full max-w-[1440px] bg-[#f5f5f5] px-4 pb-9 pt-10 md:px-6 md:pb-[70px] md:pt-[80px]">
        <h4 className="text-center text-[32px] font-bold leading-none tracking-[0.2em] text-[#333333] md:text-[80px] lg:text-[100px]">
          ECOSYSTEM
        </h4>
        <p className="mx-auto mt-5 w-full max-w-[685px] text-center text-[14px] leading-[1.8] tracking-wide md:mt-8 md:text-[18px]">
          Contribute to the development of a unique interoperable blockchain
          domain namespace, the NFT domain, and a thriving broader ecosystem.
        </p>
        <div className="mt-10 flex justify-center max-md:flex-col">
          <div className="flex items-start justify-center px-5 md:w-1/2 md:justify-end md:px-24">
            <img className="max-md:w-[240px]" src="/diver-domain.png" alt="" />
          </div>
          <div className="mt-6 md:w-1/2 lg:mt-[72px]">
            <div className="max-w-[580px] max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
              <p className="text-[20px] font-bold tracking-widest md:text-[30px]">
                DIVER Domain Name Service
              </p>
              <p className="mb-6 mt-2 text-[14px] leading-[1.7] max-md:text-center md:mb-[58px] md:text-[18px]">
                Create a human-readable identity by replacing decentralized
                addresses with a domain name of your choice
              </p>
              <a
                href="#"
                className="flex h-[60px] w-full max-w-[280px] items-center justify-center border border-[#1d5097] font-['Rubik'] text-[14px] font-bold tracking-[0.2em] text-[#1d5097] md:h-[72px] md:max-w-[400px] md:text-[18px]"
              >
                DIVER Domain
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
