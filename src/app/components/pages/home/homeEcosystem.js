export default function HomeEcosystem() {
    return (
        <div className="pt-12 md:pt-[160px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 bg-[#f5f5f5] pt-10 md:pt-[80px] pb-9 md:pb-[70px]">
          <h4 className="text-[#333333] text-[32px] md:text-[80px] lg:text-[100px] font-bold leading-none tracking-[0.2em] text-center">ECOSYSTEM</h4>
          <p className="text-center text-[14px] md:text-[18px] w-full max-w-[685px] leading-[1.8] mx-auto md:mt-8 mt-5 tracking-wide">
          Contribute to the development of a unique interoperable blockchain domain namespace, the NFT domain, and a thriving broader ecosystem.
          </p>
          <div className="flex max-md:flex-col justify-center mt-10">
            <div className="md:w-1/2 flex justify-center md:justify-end items-start px-5 md:px-24">
              <img className="max-md:w-[240px]" src="/diver-domain.png" alt="" />
            </div>
            <div className="md:w-1/2 lg:mt-[72px] mt-6">
              <div className="max-w-[580px] max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
                <p className="font-bold text-[20px] md:text-[30px] tracking-widest">DIVER Domain Name Service</p>
                <p className="text-[14px] md:text-[18px] leading-[1.7] mt-2 mb-6 md:mb-[58px] max-md:text-center">
                  Create a human-readable identity by replacing decentralized addresses with a domain name of your choice
                </p>
                <a href="#" className="flex justify-center items-center w-full max-w-[280px] md:max-w-[400px] h-[60px] md:h-[72px] border border-[#1d5097] text-[#1d5097] text-[14px] md:text-[18px] font-bold font-['Rubik'] tracking-[0.2em]">
                DIVER Domain
                </a>
              </div>
            </div>
          </div>
        </div>  
      </div>
    );
  }
  