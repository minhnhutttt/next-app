import PropTypes from "prop-types";

export default function Title({ children }) {
  return (
    <div className="flex justify-center">
        <h3 className="text-[8vw] lg:text-[80px] font-bold bg-[url('/bg-ttl.png')] bg-bottom bg-no-repeat tracking-wider px-4 leading-tight">
            {children}
        </h3>
    </div>
  );
}
Title.propTypes = {
    children: PropTypes.node.isRequired,
};
