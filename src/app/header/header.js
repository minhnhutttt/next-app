import PropTypes from 'prop-types';
export default function Header({ small, children }) {
  return (
    <div>
        <div className="bg-[url('/line.png')] h-10 md:h-[50px] bg-[length:100%_100%] flex items-center justify-center">
            <img className='max-md:w-[140px]' src="/logo.png" alt="Web3.0 QR" />
        </div>
        <div className={`font-black px-5 text-center text-[#18539e] flex items-center justify-center font-['Noto_Sans_JP'] bg-[url('/img-phone.png')] max-md:bg-[length:70px_102px] bg-no-repeat bg-center md:min-h-[192px] mt-7 mb-7 md:mt-[60px] md:mb-10 ${small ? 'text-[28px] md:text-[50px] lg:text-[80px] leading-[1.2] tracking-wide' : 'text-[32px] md:text-[60px] lg:text-[100px] tracking-[0.15em] '}`}>
            {children}
        </div>
        <div className="bg-[url('/line2.png')] h-10 md:h-[50px] bg-cover">
        </div>
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
};
