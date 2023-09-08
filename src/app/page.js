import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="px-5 mb-12">
        <div className="w-full max-w-[1440px] mx-auto bg-[url('/fv.png')] bg-cover h-[640px] flex justify-center items-end">
          <div className="pb-12">
            <p className="text-[36px] font-bold text-center text-white mb-6">Empower blockchain naming service users through a member-led DAO.</p>
            <p className="text-[22px] text-center w-[68%] mx-auto text-white">
            Meta Magic is a member-led, member-driven DAO dedicated to improving the technological and public policy environments for users of blockchain naming services. 
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[url('/misson-bg.jpg')] bg-cover py-[120px]">
        <div className="w-full max-w-[1440px] mx-auto px-6">
          <div className="flex pb-3">
            <div className="flex-1">
              <h3 className="text-[100px] font-bold leading-none tracking-[0.2em] text-white">
              MISSON
              </h3>
              <p className="text-white text-[16px] mt-5 mb-[72px] leading-[1.75] tracking-wide">
              This DAO to promote the development of the blockchain naming ecosystem and the functioning of blockchain domain registries with and across blockchain-based and traditional web applications. <br />
              <br />
              The Web3 Domain Alliance is dedicated to the technological advancement of blockchain domain registries, as well as consumer protection by ensuring the interoperability of blockchain domain registries. <br />
              <br />
              The Web3 Domain Alliance believes that blockchain-based generic web3 Top Level Domains (“TLDs”) developed and marketed by a specific organization are intellectual property, and that industry participants should respect the intellectual property rights of all blockchain naming services for the benefit of consumers as well as applications that want to support blockchain domain functionality.
              </p>
              <a href="#" className="flex justify-center items-center w-[400px] h-[72px] border border-white text-white text-[18px] font-bold font-['Rubik'] tracking-[0.2em]">
              READ MORE
              </a>
            </div>
            <div className="w-[55%] max-w-[760px] pt-2 px-7">
              <video src="/AdobeStock_261293765.mov" loop autoPlay muted></video>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[160px]">
        <div className="w-full max-w-[1440px] mx-auto px-6 bg-[#f5f5f5] pt-[80px] pb-[70px]">
          <h4 className="text-[#333333] text-[100px] font-bold leading-none tracking-[0.2em] text-center">ECOSYSTEM</h4>
          <p className="text-center text-[18px] w-full max-w-[685px] leading-[1.8] mx-auto mt-8 tracking-wide">
          Contribute to the development of a unique interoperable blockchain domain namespace, the NFT domain, and a thriving broader ecosystem.
          </p>
          <div className="flex justify-center mt-10">
            <div className="w-1/2 flex justify-end px-24">
              <img src="/diver-domain.png" alt="" />
            </div>
            <div className="w-1/2 mt-[72px]">
              <div className="max-w-[580px]">
                <p className="font-bold text-[30px] tracking-widest">DIVER Domain Name Service</p>
                <p className="text-[18px] leading-[1.7] mt-2 mb-[58px]">
                  Create a human-readable identity by replacing decentralized addresses with a domain name of your choice
                </p>
                <a href="#" className="flex justify-center items-center w-[400px] h-[72px] border border-[#1d5097] text-[#1d5097] text-[18px] font-bold font-['Rubik'] tracking-[0.2em]">
                DIVER Domain
                </a>
              </div>
            </div>
          </div>
        </div>  
      </div>
      <div className="py-[150px]">
        <div className="w-full max-w-[1440px] mx-auto px-6">
          <h4 className="text-[#333333] text-[80px] font-bold leading-none tracking-[0.1em] text-center">WHAT IS MERA MAGIC</h4>
          <div className="flex justify-center mt-8">
            <div className="w-1/2 pt-9">
              <div className="pl-16">
                <div className="max-w-[580px]">
                  <p className="text-[18px] leading-[1.75] mt-2 mb-[32px]">
                  Meta Magic was created as a decentralized, autonomous organization, with all governance and decision-making power vested in the platform users; Meta Magic provides users with the opportunity to propose and vote on platform upgrades, thereby making the platform a public good that responds directly to community members to become a public good that responds directly to its community members.
                  </p>
                </div>
              </div>
              <div className="flex pl-1.5 gap-4">
                <a href="#">
                  <img src="/btn-01.png" alt="" />
                </a>
                <a href="#">
                  <img src="/btn-02.png" alt="" />
                </a>
              </div>
            </div>
            
            <div className="w-1/2">
              <img src="/mera-magic.png" alt="" />
            </div>
          </div>
        </div>  
      </div>
    </main>
  )
}
