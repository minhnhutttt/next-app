import HomeFaqItem from "./homeFaqItem";

const dataFaq = [
  {
    id: "01",
    question: "What is a DIVER Domain?",
    awsner:
      "DIVER Domain are a revolutionary system, offering a new level of security to domain owners through a single NFT (Non-Fungible Token). This system combines two key ideas that not only act as a website domain, but also as a cryptocurrency wallet address.",
  },
  {
    id: "02",
    question: "How much does it cost to register?",
    awsner:
      "Since the cost is set by various combinations, please check on the application screen.",
  },
  {
    id: "03",
    question: "Can I transfer my DIVER Domains?",
    awsner:
      "Yes, DIVER Domain is DRC20 (NFT). You can transfer domains using wallets that support DRC20.",
  },
  {
    id: "04",
    question: "What are DAOs?",
    awsner:
      "A DAO is a set of rules encoded as a transparent computer program, controlled by members of the organization and free from central authority. DAO's financial transaction records and program rules are public and managed on the blockchain.",
  },
  {
    id: "05",
    question: "Are NFT domains worth more than regular domains?",
    awsner:
      "NFTs may have high value in the future. Exclusive ownership and traceability of digital assets is driving market demand. DIVER Domain has all the technology.",
  },
  {
    id: "06",
    question: "Can DIVER Domains be traded on NFT maketplace?",
    awsner: "Yes, DIVER Domains can be traded on NFT marketplaces soon.",
  },
];

export default function HomeFaq() {
  return (
    <div className="pb-16 pt-16 md:pb-[125px] md:pt-[160px]">
      <div className="mx-auto w-full max-w-[1440px] bg-[#f5f5f5] px-4 pb-8 pt-12 md:px-6 md:pb-[70px] md:pt-[80px]">
        <h4 className="text-center text-[32px] font-bold leading-none tracking-[0.2em] text-[#333333] md:text-[80px] lg:text-[100px]">
          FAQ
        </h4>
        <p className="mx-auto mt-6 w-full max-w-[685px] text-center text-[14px] leading-[1.8] tracking-wide md:mt-8 md:text-[18px]">
          If you have any questions about MERA Magic, please contact us.
        </p>
        <div className="mx-auto mt-8 w-full max-w-[1200px] border-t border-[#313333] md:mt-16">
          {dataFaq.map((data) => {
            return (
              <HomeFaqItem
                question={data.question}
                awnser={data.awsner}
                key={data.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
