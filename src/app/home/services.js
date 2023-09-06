import ButtonLink from '@/app/components/common/button'
import PropTypes from "prop-types";

function ServicesItem({imgSrc, title, content}) {
    return (
        <div className="bg-white rounded-[10px] shadow-[4px_0px_15px_rgba(114,159,217,0.1)] pt-[10%] pb-[8.5%] px-3 md:pl-[12%] md:pr-[10%]">
            <div className="md:w-[92px] w-[60px] h-[55px] md:h-[85px] flex items-center justify-center mx-auto">
                <img src={imgSrc} alt={title} />
            </div>
            <div className="text-center justify-center text-[16px] md:text-[22px] font-medium mt-6 md:mt-12">{title}</div>
            <p className="lg:text-[18px] md:text-[14px] min-[600px]:text-[13px] text-[11px] font-medium md:mt-6 mt-3 leading-[1.7]">
                {content}
            </p>
        </div>
    )
}

ServicesItem.propTypes = {
    imgSrc: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
  };

export default function Services() {
  return (
    <div className="bg-[#e8f6ff] pt-16 md:pt-[140px] pb-20 md:pb-[170px] px-5">
        <div className="w-full max-w-[1640px] mx-auto">
            <h4 className="text-[42px] font-bold text-center">Our Services</h4>
            <div className="grid lg:gap-12 md:gap-6 gap-3 md:grid-cols-3 grid-cols-2 mt-6 md:mt-12">
                <ServicesItem imgSrc="/img-servies-01.png" title="Blockchain Development" content={<>We will build the foundation of a blockchain network tailored to your needs, such as transaction creation, verification, block generation, and consensus mechanism implementation. We use cutting-edge technology to maximize the performance and efficiency of blockchain, realize secure and highly reliable digital transactions, streamline business processes, and support the creation of new business models. </>} />
                <ServicesItem imgSrc="/img-servies-02.png" title="NFT Development" content={<>NFT development service supports the construction and deployment of high-quality and secure NFT services according to client needs. <br />We will realize new digital experiences by supporting various use cases using NFTs, such as games, virtual worlds, digital collections, and licensing platforms. </>} />
                <ServicesItem imgSrc="/img-servies-03.png" title="Smart Contracts Development" content={<>The smart contract development service provides design and development of automatically executable blockchain contracts (smart contracts). We program secure and reliable smart contracts based on your business rules and transaction terms. This enables highly reliable trading and application automation. </>} />
                <ServicesItem imgSrc="/img-servies-04.png" title="dApp Development" content={<>Our decentralized application (dApp) development service develops custom applications that run on the blockchain. We design and implement dApps tailored to your business and ideas, leveraging the characteristics of security, transparency and decentralization. Users can run their applications on a trusted blockchain without relying on a centralized infrastructure. </>} />
                <ServicesItem imgSrc="/img-servies-05.png" title="DEX Development" content={<>DEX Development Service supports the construction of a decentralized exchange (DEX). We are working on the design and implementation of DEX to provide a safe and transparent cryptocurrency trading environment. Unlike centralized exchanges, DEX is a decentralized trading protocol that leverages blockchain technology and gives users full control over their assets. The development of DEX allows users to trade using self-owned private keys and trade in a more secure and controllable environment.</>} />
                <ServicesItem imgSrc="/img-servies-06.png" title="Cryptocurrency Development" content={<>Cryptocurrency development services provide custom cryptocurrency design and development. We create our own cryptocurrencies based on blockchain technology to meet the needs of our customers' businesses and projects. We provide development services that meet customer requirements, such as the characteristics of virtual currency, building a token economy, and strengthening security. It also enables token issuance and smart contract integration on the blockchain network.</>} />
            </div>
            <div className="flex justify-center mt-10 md:mt-[84px]">
                <ButtonLink link="/">Contact us</ButtonLink>
            </div>
        </div>
    </div>
  )
}
