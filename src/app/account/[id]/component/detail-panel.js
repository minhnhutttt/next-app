import PropTypes from "prop-types";
export default function DetailPanel({ children, title }) {
  return (
    <div className="mx-auto w-full max-w-[480px] rounded-t-[10px] border border-[#e2e3e4] md:max-w-[1000px]">
      <div className="flex h-12 items-center gap-2 bg-[#f3f3f3] px-4 text-[16px] font-medium tracking-widest md:h-[50px] md:px-6 md:text-[20px]">
        {title}
      </div>
      <div className="divide-y divide-[#e2e3e4]">{children}</div>
    </div>
  );
}
DetailPanel.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
