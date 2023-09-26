import PropTypes from "prop-types";

export default function Title({ children }) {
  return (
    <div className="flex justify-center">
        <h3 className="text-[6vw] xl:text-[80px] font-bold bg-[url('/bg-ttl.png')] max-md:bg-[length:auto_20px] bg-bottom bg-repeat-x tracking-wider px-4 leading-tight max-md:pb-1.5">
            {children}
        </h3>
    </div>
  );
}
Title.propTypes = {
    children: PropTypes.node.isRequired,
};
