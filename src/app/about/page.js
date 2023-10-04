import PageTitle from "../components/common/pageTitle";
import PropTypes from "prop-types";
function AboutArticle({ title, content, imgSrc, reverse }) {
  return (
    <div
      className={`flex max-md:flex-col ${
        reverse ? "flex-col-reverse md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col justify-center bg-black px-10 py-16 md:w-1/2 md:pl-[8.5%] md:pr-[5%]">
        <h6 className="text-[36px] font-semibold leading-[1.2] tracking-wider text-white md:text-[42px]">
          {title}
        </h6>
        <p className="mt-6 text-[14px] font-medium leading-[1.2] tracking-wider text-white md:text-[16px]">
          {content}
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          className="h-full w-full object-cover align-bottom"
          src={imgSrc}
          alt={title}
        />
      </div>
    </div>
  );
}
AboutArticle.propTypes = {
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  imgSrc: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

export default function About() {
  return (
    <main>
      <PageTitle>ABOUT</PageTitle>
      <div className="font-['Work_Sans] px-5">
        <div className="mx-auto w-full max-w-[600px] md:max-w-[1340px]">
          <div className="mb-[16%] mt-[4%]">
            <AboutArticle
              imgSrc="/img-about-01.jpg"
              title="Innovative networking"
              content="We help professionals network with time-saving, environmentally friendly technology."
            />
            <AboutArticle
              imgSrc="/img-about-02.jpg"
              title="Vision"
              content="We aim to help individuals and businesses improve their networking experience while increasing productivity, efficiency, and profitability. We also address climate change issues facing current and future generations by promoting environmentally responsible practices."
              reverse
            />
            <AboutArticle
              imgSrc="/img-about-03.jpg"
              title="Mission"
              content="Our mission is to redefine the way people connect by innovating with the latest technologies and combining them with sustainable solutions. We see a future where all teams and individuals are seamlessly connected using an all-in-one platform, bridging the gap between in-person and online relationships."
            />
          </div>
        </div>
      </div>
    </main>
  );
}
