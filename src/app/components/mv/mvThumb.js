import PropTypes from 'prop-types';
export default function MVThumb({ imgSrc, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mr-1.5 flex w-1/4 items-center border-r border-[#8d8d8d] py-[5px] last:border-0 max-md:flex-col max-md:justify-center md:mr-2.5"
    >
      <div className="max-md:!w-[80%]">
        <img src={imgSrc} alt="" />
      </div>
      <div className="flex-1 text-xs max-md:mt-4 md:ml-5 md:text-left md:text-lg lg:text-2xl">
        {children}
      </div>
    </button>
  );
}

MVThumb.propTypes = {
  children: PropTypes.node.isRequired,
  imgSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
