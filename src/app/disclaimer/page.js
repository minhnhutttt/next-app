import PageTitle from "../components/common/pageTitle";

export default function Disclaimer() {
  return (
    <main>
      <PageTitle>Disclaimer</PageTitle>
      <div className="px-5 pb-[60px] pt-10 md:pb-[170px] md:pt-[100px]">
        <div className="mx-auto w-full max-w-[1440px] bg-[#f5f5f5]/[0.5] px-5 pb-16 pt-10 md:pb-[270px] md:pt-[90px]">
          <div className="mx-auto w-full max-w-[920px]">
            <h2 className="text-center text-[20px] font-bold tracking-wide md:text-[36px]">
              MATA MAGIC Website Disclaimer
            </h2>
            <p className="mt-6 text-[14px] leading-[1.75] tracking-wider md:mt-[72px] md:text-[18px]">
              The information provided on the website https://meta-magic.io/
              (referred to as the "Website") and any associated documentation is
              purely for informational purposes. It should be noted that none of
              the information on the Website should be considered as advice, and
              the accuracy and currentness of the information cannot be
              guaranteed. <br />
              <br />
              Due to the complete decentralization of the MATA MAGIC smart
              contracts, there is no entity or individual involved in any future
              developments or technical functionalities once the contracts are
              deployed. Therefore, any use of pronouns such as "we" or "our" on
              the Website or in the accompanying documentation is referring to
              the MATA MAGIC smart contract itself. This applies even in cases
              where pronouns are not used.
              <br />
              <br />
              The MATA MAGIC smart contracts, as well as the MATA MAGIC itself,
              are decentralized finance (DeFi) applications that can be easily
              integrated into third-party projects or applications. The same
              applies to the LCD token. Any references to such integration or
              use cases on the Website are provided for informational purposes
              only.
              <br />
              <br />
              This website disclaimer is governed by the substantive laws of
              Switzerland and shall be interpreted in accordance with them,
              excluding Swiss conflict of law rules. The United Nations
              Convention for the International Sales of Goods is not
              applicable.vv
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}