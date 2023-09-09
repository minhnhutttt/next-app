export default function HomeMetaMagic() {
    return (
        <div className="pt-12 md:pt-[150px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6">
          <h4 className="text-[#333333] text-[24px] md:text-[60px] lg:text-[80px] font-bold leading-none tracking-[0.1em] text-center">WHAT IS MERA MAGIC</h4>
          <div className="flex max-md:flex-col-reverse justify-center mt-8">
            <div className="md:w-1/2 pt-5 md:pt-9">
              <div className="md:pl-16">
                <div className="max-w-[580px]">
                  <p className="text-[14px] md:text-[18px] leading-[1.75] mt-2 mb-5 md:mb-[32px]">
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
            
            <div className="md:w-1/2">
              <img src="/mera-magic.png" alt="" />
            </div>
          </div>
        </div>  
      </div>
    );
  }
  