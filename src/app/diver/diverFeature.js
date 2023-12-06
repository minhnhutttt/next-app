import PropTypes from "prop-types";

function FeatureItem({image, title, children}) {
  return(
    <div className="bg-white p-4 md:p-8 font-['Work_Sans]">
      <figure className="mb-4 md:mb-8">
        <img src={image} alt="" />
      </figure>
      <p className="md:text-[20px] text-[16px] font-semibold mb-1 md:mb-3">{title}</p>
      <p className="md:text-[16px] text-[14px]">
        {children}
      </p>
    </div>
  )
}

FeatureItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default function DiverFeature() {
    return (
      <div className="md:pt-[140px] pt-[60px] w-full md:max-w-[1240px] max-w-[440px] px-5 mx-auto">
        <h3 className="text-center md:text-[48px] text-[30px] font-bold text-white mb-7 md:mb-[40px]">Features</h3>
        <div className="grid md:grid-cols-2 md:gap-10 gap-6">
          <FeatureItem image="/images/feature-01.png" title="1. Decentralized">
            Data is distributed across geographically dispersed nodes, connected by peer-to-peer networks, so it is always up and running, stable and reliable.
          </FeatureItem>
          <FeatureItem image="/images/feature-02.png" title="2. Encryption">
            Your data is encrypted with AES-256, a military-grade encryption algorithm, split into redundant chunks, and distributed across a global, peer-to-peer network.
          </FeatureItem>
          <FeatureItem image="/images/feature-03.png" title="3. Unmatched Performance">
            Your data is fragmented and optimized for storage on decentralized nodes through peer-to-peer technology. This ensures fast data access from anywhere in the world.
          </FeatureItem>
          <FeatureItem image="/images/feature-04.png" title="4. Privacy first">
            You can control the encryption keys generated by  your DIVER Wallet, making it simple and secure. Only you and those you grant permissions can access your data.
          </FeatureItem>
        </div>
      </div>
    );
  }
  