import PropTypes from "prop-types";
import { Children } from "react";
export default function DetailPanelCell({ title, children }) {
  return (
    <div className="flex h-12 items-center justify-between gap-5 px-4 md:h-[64px] md:px-[30px]">
      <div className="text-[13px] font-bold md:text-[16px]">{title}</div>
      <div className="text-[12px] font-medium md:text-[14px]">{children}</div>
    </div>
  );
}
DetailPanelCell.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
