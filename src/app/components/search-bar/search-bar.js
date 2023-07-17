export default function SearchBar() {
  return (
    <div className="relative">
        <span className="absolute top-1/2 -translate-y-1/2 left-5"><img src="/ic-search.png" alt="" /></span>
        <input type="text" className="w-full h-10 md:text-base text-xs md:h-[50px] border border-[#333333] rounded-[5px] pl-10" placeholder='コレクション、アイテムを探す' />
    </div>
  );
}