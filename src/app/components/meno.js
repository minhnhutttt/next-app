import PropTypes from 'prop-types';
export default function Memo({ children }) {
  return (
    <div className="bg-[#c6ecff] lg:mt-[46%] md:rounded-[20px] rounded-[10px] w-full md:w-[290px] max-w-[290px] py-2 px-2 min-h-[142px]">
    <div className="flex items-center px-5 py-2.5 border-b border-dashed border-black">
        <img src="/ic-memo.png" alt="" />
        <div className="text-base md:text-2xl font-medium font-['Noto_Sans_JP'] ml-1">Memo</div>
    </div>
    <div className="px-5 py-2 text-sm md:text-lg font-medium font-['Noto_Sans_JP']">
     {children}
    </div>
    </div>
  );
}

Memo.propTypes = {
  children: PropTypes.node.isRequired,
};
