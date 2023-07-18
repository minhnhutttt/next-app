import PropTypes from "prop-types";
import classNames from "classnames";
export default function Process({ step = 2 }) {
  return (
    <div className="mx-auto w-full md:w-[700px] xl:max-w-[1140px] ">
      <div className="relative mx-auto flex w-full md:w-[570px] xl:max-w-[1000px] justify-between overflow-hidden">
        <div className="absolute top-3 w-full border-t border-[#aeaeae]"></div>
        <div
          className={classNames(
            "absolute top-3 z-10 w-full border-t border-[#366bb3]",
            {
              "right-full": step === 1,
              "right-1/2": step === 2,
              "right-0": step === 3,
            }
          )}
        ></div>
        <span
          className={classNames(
            "z-10 h-6 w-6 rounded-full",
            step >= 1 ? "bg-[#366bb3]" : "bg-[#aeaeae]"
          )}
        ></span>
        <span
          className={classNames(
            "z-10 h-6 w-6 rounded-full",
            step >= 2 ? "bg-[#366bb3]" : "bg-[#aeaeae]"
          )}
        ></span>
        <span
          className={classNames(
            "z-10 h-6 w-6 rounded-full",
            step >= 3 ? "bg-[#366bb3]" : "bg-[#aeaeae]"
          )}
        ></span>
      </div>
      <div className="mt-4 flex justify-between">
        <div className="w-[80px] md:w-[160px]">
          <p className="text-left text-xs md:text-sm">QRに位置情報を登録する</p>
        </div>
        <div className="w-[80px] md:w-[160px]">
          <p className="text-center text-xs md:text-sm">QRにNFTをセットする</p>
        </div>
        <div className="w-[80px] md:w-[160px]">
          <p className="text-right md:text-center text-xs md:text-sm">確認</p>
        </div>
      </div>
    </div>
  );
}
Process.propTypes = {
  step: PropTypes.number.isRequired,
};
