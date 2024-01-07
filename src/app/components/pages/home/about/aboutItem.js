import PropTypes from "prop-types";
export default function AboutItem({ question, answer, imageSrc }) {
  return (
    <div className="group">
        <div className="flex items-center gap-2 md:gap-4 px-2 md:px-5 lg:px-[34px] group-[:nth-of-type(even)]:flex-row-reverse">
            <figure className="max-md:w-[60px]">
                <img src={imageSrc} alt={question} />
            </figure>
            <div className="flex flex-1 group-[:nth-of-type(even)]:flex-row-reverse">
                <svg className="group-[:nth-of-type(even)]:rotate-180 mt-3 md:mt-5" xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16" fill="none">
                    <path d="M0.672147 9.49482C-0.224048 8.69924 -0.224048 7.30076 0.672146 6.50518L8 -4.4509e-07L8 16L0.672147 9.49482Z" fill="#22ABF3"/>
                </svg>
                <div className="bg-[#22ABF3] rounded-xl md:min-h-[74px] min-h-[50px] flex items-center text-white text-[13px] md:text-[18px] font-bold md:px-8 p-4 md:py-6 flex-1">
                    {question}
                </div>
            </div>
        </div>
        <div className="bg-white rounded-[10px] md:min-h-[112px] min-h-[80px] flex items-center justify-center border border-[#00B5EE]/[0.8] mt-2 md:mt-4 px-4">
            <p className="w-full max-w-[510px] md:text-[18px] text-[13px] font-bold">
                {answer}
            </p>
        </div>
    </div>
  );
}

AboutItem.propTypes = {
  question: PropTypes.node.isRequired,
  answer: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,

};
