import PropTypes from "prop-types";
import classNames from "classnames";
export default function FormImage({ size = "sm" }) {
  return (
    <div class="flex w-full items-center px-3 pt-4">
      <label
        className={classNames(
          "flex w-full cursor-pointer flex-col items-center justify-center rounded-[3px] border border-[#999999] bg-[#f5f8fa] hover:bg-gray-100",
          {
            "h-[160px] max-w-[160px] md:h-56 md:max-w-[224px] ": size === "sm",
          },
          {
            "h-[140px] max-w-[240px] md:h-[200px] md:max-w-[300px]":
              size === "lg",
          },
          {
            "h-[180px] max-w-[480px] md:h-[216px] md:max-w-[860px]":
              size === "xl",
          }
        )}
      >
        <div class="flex flex-col items-center justify-center">
          <img className="max-md:max-w-[40px]" src="/file-image.png" alt="" />
        </div>
        <input type="file" class="hidden" />
      </label>
    </div>
  );
}
FormImage.propTypes = {
  size: PropTypes.string,
};
