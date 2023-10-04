import PropTypes from "prop-types";

function FeaturesItem({ title, children }) {
  return (
    <div className="bg-white rounded-[23px] py-5 px-10 shadow-[0px_20px_40px_0px_#F5F5FF] min-h-[191px]">
        <h6 className="text-[24px] font-bold leading-snug mb-5">{title}</h6>
        <p className="text-[18px] font-medium leading-snug">{children}</p>
    </div>
  );
}

FeaturesItem.propTypes = {
    title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Features() {
    return (
      <div className="relative px-5 pt-[3.5%]">
        <span className="absolute inset-0 bg-[#E8F3FE] rounded-t-[37vw] z-1"></span>
        <div className="w-full max-w-[1440px] mx-auto relative">
            <h4 className="text-[64px] font-bold leading-snug text-center tracking-tight mb-[4%]">Features</h4>
            <div className="grid grid-cols-2 gap-x-[126px] gap-y-[34px] w-full max-w-[1272px] mx-auto">
                <FeaturesItem title="Make a great first impression">
                With their unique and interactive designs, NFT business cards are more memorable than traditional paper cards. This makes them ideal for making a lasting impression at networking events or conferences.
                </FeaturesItem>
                <FeaturesItem title="Mobile Utilization">
                Make phone calls, send e-mails, and search for maps with a single touch.<br />Contact customers quickly! Improve your sales efficiency.
                </FeaturesItem>
                <FeaturesItem title="Superior Searchability">
                Easily search for the business card information you need.<br />You can easily search for business card information whenever and wherever you need it by keywords such as name, company name, department, job title, etc.
                </FeaturesItem>
                <FeaturesItem title="Robust Security with Blockchain">
                NFT business cards are verified on the blockchain network, making them nearly impossible to duplicate or forge. This ensures that the information on NFT business cards is safe and secure.
                </FeaturesItem>
                <FeaturesItem title="sustainable and environmentally friendly">
                Digital business cards are also extremely sustainable, reducing the reliance on paper and saving millions of trees a year…
                </FeaturesItem>
                <FeaturesItem title="Name display on incoming calls">
                Even if a person does not have their contact information registered on their smartphone, their business card information will be displayed on incoming calls.
                </FeaturesItem>
            </div>
            <div className="flex justify-center mt-2 pl-[3%]">
                <img src="/img-features.png" alt="" />
            </div>
        </div>
      </div>
    );
  }
  