import PropTypes from "prop-types";
export default function DetailPanel({ children, title }) {
  return (
    <div className="mx-auto w-full max-w-[1000px] rounded-t-[10px] border border-[#e2e3e4]">
      <div className="flex h-[50px] items-center gap-2 bg-[#f3f3f3] px-6 text-[20px] font-medium tracking-widest">
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
