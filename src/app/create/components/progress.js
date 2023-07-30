import PropTypes from "prop-types";
import classNames from "classnames";
export default function Process({ step = 2 }) {
  return (
    <div className="mx-auto w-full md:w-[700px] xl:max-w-[1140px] ">
      <div className="relative md:ml-[38px] flex w-full justify-between overflow-hidden md:w-[660px] xl:max-w-[1200px]">
        <div className="absolute top-3 w-full border-t border-[#aeaeae]"></div>
        <div
          className={classNames(
            "absolute top-3 z-10 w-full border-t border-[#366bb3]",
            {
              "right-full": step === 1,
              "right-0": step === 2,
            }
          )}
        ></div>
        <span
          className={classNames(
            "z-10 h-6 w-6 rounded-full",
            step === 1 ? "bg-[#366bb3]" : "bg-[#aeaeae]"
          )}
        ></span>
        <span
          className={classNames(
            "z-10 h-6 w-6 rounded-full",
            step === 2 ? "bg-[#366bb3]" : "bg-[#aeaeae]"
          )}
        ></span>
      </div>
      <div className="mt-4 flex justify-between">
        <div className="w-[90px] md:w-[160px]">
          <p className={classNames("text-left text-xs md:text-sm", step === 1 ? "text-[#366bb3]" : "text-[#aeaeae]")}>NFTをMINTする</p>
        </div>
        <div className="w-[90px] md:w-[160px]">
          <p className={classNames("text-right text-xs md:text-sm", step === 2 ? "text-[#366bb3]" : "text-[#aeaeae]")}>確認</p>
        </div>
      </div>
    </div>
  );
}
Process.propTypes = {
  step: PropTypes.number.isRequired,
};
