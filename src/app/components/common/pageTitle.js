import PropTypes from "prop-types";
export default function PageTitle({children}) {
  return (
    <div className="bg-[url('/pagetitle.png')] bg-[length:100%_100%] h-[200px] md:h-[280px] flex justify-center items-center px-5">
      <div className="w-full max-w-[1440px]">
        <p className="text-[32px] md:text-[60px] font-bold text-white tracking-widest">{children}</p>
      </div>
    </div>
  );
}
PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
