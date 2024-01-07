import PropTypes from "prop-types";
export default function FormInput({ label, value, placeholder }) {
  return (
    <div className="">
      <div className="text-[16px] font-bold md:text-[20px]">{label}</div>
      <div className="mt-2">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          className="block h-[50px] w-full rounded-xl bg-[#EFF2F6] px-[30px] text-[16px] font-bold md:h-[76px] md:rounded-3xl md:text-[20px]"
        />
      </div>
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.node.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};
