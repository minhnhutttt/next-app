import HomeFaqItem from "./homeFaqItem";

const dataFaq = [
  {
    id: '01',
    question: 'What is a DIVER Domain?',
    awsner: 'DIVER Domain are a revolutionary system, offering a new level of security to domain owners through a single NFT (Non-Fungible Token). This system combines two key ideas that not only act as a website domain, but also as a cryptocurrency wallet address.'
  },
  {
    id: '02',
    question: 'How much does it cost to register?',
    awsner: 'Since the cost is set by various combinations, please check on the application screen.'
  },
  {
    id: '03',
    question: 'Can I transfer my DIVER Domains?',
    awsner: 'Yes, DIVER Domain is DRC20 (NFT). You can transfer domains using wallets that support DRC20.'
  },
  {
    id: '04',
    question: 'What are DAOs?',
    awsner: "A DAO is a set of rules encoded as a transparent computer program, controlled by members of the organization and free from central authority. DAO's financial transaction records and program rules are public and managed on the blockchain."
  },
  {
    id: '05',
    question: 'Are NFT domains worth more than regular domains?',
    awsner: 'NFTs may have high value in the future. Exclusive ownership and traceability of digital assets is driving market demand. DIVER Domain has all the technology.'
  },
  {
    id: '06',
    question: 'Can DIVER Domains be traded on NFT maketplace?',
    awsner: 'Yes, DIVER Domains can be traded on NFT marketplaces soon.'
  }
]

export default function HomeFaq() {
    return (
        <div className="pt-16 md:pt-[160px] pb-16 md:pb-[125px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 bg-[#f5f5f5] pt-12 md:pt-[80px] pb-8 md:pb-[70px]">
          <h4 className="text-[#333333] text-[32px] md:text-[80px] lg:text-[100px] font-bold leading-none tracking-[0.2em] text-center">FAQ</h4>
          <p className="text-center text-[14px] md:text-[18px] w-full max-w-[685px] leading-[1.8] mx-auto mt-6 md:mt-8 tracking-wide">
          If you have any questions about MERA Magic, please contact us.
          </p>
          <div className="border-t border-[#313333] mt-8 md:mt-16 w-full max-w-[1200px] mx-auto">
            {dataFaq.map(data => {
              return <HomeFaqItem question={data.question} awnser={data.awsner} key={data.id} />
            })}
          </div>
        </div>  
      </div>
    );
}
  