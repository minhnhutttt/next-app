import PropTypes from "prop-types";

export default function FormInput({ name, placeholder, value }) {
  return (
    <div className="px-3">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        className="h-11 w-full rounded-[5px] border border-[#999999] bg-[#f5f8fa] p-4 !outline-none focus-visible:border-2 focus-visible:border-[#366bb3] md:h-[60px] md:rounded-[10px]"
      />
    </div>
  );
}
FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};
