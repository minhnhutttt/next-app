import PropTypes from "prop-types";
export default function DetailPanelCell({ title, children }) {
  return (
    <div className="flex min-h-[48px] items-center justify-between space-x-2 px-4 py-2 max-md:flex-wrap md:min-h-[64px] md:px-[30px]">
      <div className="break-keep text-[12px] font-bold md:text-[16px]">
        {title}
      </div>
      <div className="flex flex-1 justify-end truncate text-[11px] font-medium md:text-[14px]">
        {children}
      </div>
    </div>
  );
}
DetailPanelCell.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
