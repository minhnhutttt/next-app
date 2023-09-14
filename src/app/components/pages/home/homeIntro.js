export default function HomeIntro() {
  return (
    <div className="mb-16 mt-[30px] px-5 md:mb-[160px]">
      <div className="relative mx-auto flex w-full max-w-[440px] gap-6 rounded-[10px] bg-[#E0F3FF]/[0.5] px-6 py-10 shadow-[0px_8px_16px_0px_rgba(171,190,209,0.40)] max-md:flex-col max-md:items-center md:max-w-[1000px] md:gap-11 md:px-[73px] md:py-[81px]">
        <div>
          <img src="/tag.png" alt="" />
        </div>
        <div className="flex-1">
          <h5 className="text-[24px] font-bold tracking-[-0.04em] md:text-[48px]">
            What is DIVER Tag?
          </h5>
          <p className="mt-6 text-[14px] leading-[1.4] md:text-[18px]">
            DIVER is a service that allows NFTs to be associated with
            proprietary NFT tags, which can be read by NFC tags to transfer the
            associated NFT to a specified address. <br />
            By combining the uniqueness of NFTs with the accessibility of NFC
            tags, the synergy between the physical and digital realms can be
            enhanced, opening up new possibilities for ownership,
            authentication, and engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
