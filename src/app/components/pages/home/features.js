import PropTypes from "prop-types";

function FeaturesItem({ title, children }) {
  return (
    <div className="rounded-[23px] bg-white px-6 py-5 shadow-[0px_20px_40px_0px_#F5F5FF] md:min-h-[191px] md:px-10">
      <h6 className="mb-3 text-[18px] font-bold leading-snug md:mb-5 md:text-[24px]">
        {title}
      </h6>
      <p className="text-[15px] font-medium leading-snug md:text-[18px]">
        {children}
      </p>
    </div>
  );
}

FeaturesItem.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Features() {
  return (
    <div className="relative px-5 pt-[12%] md:pt-[3.5%]">
      <span className="z-1 absolute inset-0 rounded-t-[37vw] bg-[#E8F3FE]"></span>
      <div className="relative mx-auto w-full max-w-[1440px]">
        <h4 className="mb-[4%] text-center text-[36px] font-bold leading-snug tracking-tight md:text-[64px]">
          Features
        </h4>
        <div className="mx-auto grid w-full max-w-[1272px] gap-5 md:grid-cols-2 md:gap-x-[126px] md:gap-y-[34px]">
          <FeaturesItem title="Make a great first impression">
            With their unique and interactive designs, NFT business cards are
            more memorable than traditional paper cards. This makes them ideal
            for making a lasting impression at networking events or conferences.
          </FeaturesItem>
          <FeaturesItem title="Mobile Utilization">
            Make phone calls, send e-mails, and search for maps with a single
            touch.
            <br />
            Contact customers quickly! Improve your sales efficiency.
          </FeaturesItem>
          <FeaturesItem title="Superior Searchability">
            Easily search for the business card information you need.
            <br />
            You can easily search for business card information whenever and
            wherever you need it by keywords such as name, company name,
            department, job title, etc.
          </FeaturesItem>
          <FeaturesItem title="Robust Security with Blockchain">
            NFT business cards are verified on the blockchain network, making
            them nearly impossible to duplicate or forge. This ensures that the
            information on NFT business cards is safe and secure.
          </FeaturesItem>
          <FeaturesItem title="sustainable and environmentally friendly">
            Digital business cards are also extremely sustainable, reducing the
            reliance on paper and saving millions of trees a year…
          </FeaturesItem>
          <FeaturesItem title="Name display on incoming calls">
            Even if a person does not have their contact information registered
            on their smartphone, their business card information will be
            displayed on incoming calls.
          </FeaturesItem>
        </div>
        <div className="mt-[8%] flex justify-center pl-[3%] md:mt-2">
          <img src="/img-features.png" alt="" />
        </div>
      </div>
    </div>
  );
}
