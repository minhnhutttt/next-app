import PropTypes from "prop-types";
export default function PageTitle({ children }) {
  return (
    <div className="flex h-[200px] items-center justify-center bg-[url('/pagetitle.png')] bg-[length:100%_100%] px-5 md:h-[280px]">
      <div className="w-full max-w-[1440px]">
        <p className="text-[32px] font-bold tracking-widest text-white md:text-[60px]">
          {children}
        </p>
      </div>
    </div>
  );
}
PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
