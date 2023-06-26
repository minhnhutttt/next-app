import PropTypes from 'prop-types';
export default function Title({ children }) {
  return (
    <div className="text-center text-[18px] md:text-[40px] lg:text-[60px] font-bold tracking-wider leading-[1.4]">
        {children}
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
