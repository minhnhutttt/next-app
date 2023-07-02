import PropTypes from "prop-types";
export default function Memo({ children }) {
  return (
    <div className="min-h-[142px] w-full max-w-[290px] rounded-[10px] bg-[#c6ecff] px-2 py-2 md:w-[290px] md:rounded-[20px] lg:mt-[46%]">
      <div className="flex items-center border-b border-dashed border-black px-5 py-2.5">
        <img src="/ic-memo.png" alt="" />
        <div className="ml-1 font-['Noto_Sans_JP'] text-base font-medium md:text-2xl">
          Memo
        </div>
      </div>
      <div className="px-5 py-2 font-['Noto_Sans_JP'] text-sm font-medium md:text-lg">
        {children}
      </div>
    </div>
  );
}

Memo.propTypes = {
  children: PropTypes.node.isRequired,
};
