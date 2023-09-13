export default function HomeIntro() {
    return (
      <div className="px-5 mt-[30px] mb-[160px]">
        <div className="relative bg-[#E0F3FF]/[0.5] w-full max-w-[1000px] mx-auto py-[81px] px-[73px] flex shadow-[0px_8px_16px_0px_rgba(171,190,209,0.40)] rounded-[10px]">
            <div className="mr-11">
                <img src="/tag.png" alt="" />
            </div>
            <div className="flex-1">
                <h5 className="text-[48px] font-bold tracking-[-0.04em]">What is DIVER Tag?</h5>
                <p className="text-[18px] leading-[1.4] mt-6">
                DIVER is a service that allows NFTs to be associated with proprietary NFT tags, which can be read by NFC tags to transfer the associated NFT to a specified address. <br />By combining the uniqueness of NFTs with the accessibility of NFC tags, the synergy between the physical and digital realms can be enhanced, opening up new possibilities for ownership, authentication, and engagement.
                </p>
            </div>
        </div>
      </div>
    );
  }
  