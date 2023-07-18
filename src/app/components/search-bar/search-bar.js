export default function SearchBar() {
  return (
    <div className="relative">
      <span className="absolute left-5 top-1/2 -translate-y-1/2">
        <img src="/ic-search.png" alt="" />
      </span>
      <input
        type="text"
        className="h-10 w-full rounded-[5px] border border-[#333333] pl-10 text-xs md:h-[50px] md:text-base"
        placeholder="コレクション、アイテムを探す"
      />
    </div>
  );
}
