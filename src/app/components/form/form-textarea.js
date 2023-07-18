import PropTypes from "prop-types";

export default function FormTextarea({ name, placeholder, value }) {
  return (
    <div className="px-3">
      <textarea
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        className="h-[178px] w-full rounded-[10px] border border-[#999999] bg-[#f5f8fa] p-4 text-base !outline-none focus-visible:border-2 focus-visible:border-[#366bb3] md:text-2xl"
      ></textarea>
    </div>
  );
}
FormTextarea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};
