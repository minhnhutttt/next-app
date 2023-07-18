import PropTypes from "prop-types";

export default function FormDate({ name, placeholder, value }) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute right-4 top-1/2 z-10 block -translate-y-1/2">
        <img src="/input-date.png" alt="" />
      </span>
      <input
        type="date"
        name={name}
        placeholder={placeholder}
        value={value}
        className="h-11 w-full rounded-[5px] border border-[#999999] bg-[#f5f8fa] p-4 text-base !outline-none focus-visible:border-2 focus-visible:border-[#366bb3] md:h-[60px] md:rounded-[10px] md:text-2xl"
      />
    </div>
  );
}
FormDate.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};
