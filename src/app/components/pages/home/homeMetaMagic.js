export default function HomeMetaMagic() {
  return (
    <div className="pt-12 md:pt-[150px]">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6">
        <h4 className="text-center text-[24px] font-bold leading-none tracking-[0.1em] text-[#333333] md:text-[60px] lg:text-[80px]">
          WHAT IS MERA MAGIC
        </h4>
        <div className="mt-8 flex justify-center max-md:flex-col-reverse">
          <div className="pt-5 md:w-1/2 md:pt-9">
            <div className="md:pl-16">
              <div className="max-w-[580px]">
                <p className="mb-5 mt-2 text-[14px] leading-[1.75] md:mb-[32px] md:text-[18px]">
                  Meta Magic was created as a decentralized, autonomous
                  organization, with all governance and decision-making power
                  vested in the platform users; Meta Magic provides users with
                  the opportunity to propose and vote on platform upgrades,
                  thereby making the platform a public good that responds
                  directly to community members to become a public good that
                  responds directly to its community members.
                </p>
              </div>
            </div>
            <div className="flex gap-4 pl-1.5">
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
