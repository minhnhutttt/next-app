import PropTypes from "prop-types";
export default function SectionTitle({ children }) {
  return (
    <h3 className="md:text-[48px] text-[24px] font-bold text-center tracking-widest text-[black] [text-shadow:-5px_-5px_0_#fff,_5px_-5px_0_#fff,_-5px_5px_0_#fff,_5px_5px_0_#fff]">{children}</h3>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
