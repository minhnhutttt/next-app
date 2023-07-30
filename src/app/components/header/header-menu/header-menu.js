import HeaderMenuItem from "./header-menu-item";

export default function HeaderMenu() {
  return (
    <ul className="flex items-center max-md:gap-4 max-md:flex-col">
      <HeaderMenuItem link="/account">アカウント</HeaderMenuItem>
      <HeaderMenuItem link="/collection">コレクション</HeaderMenuItem>
      <HeaderMenuItem link="/create">NFTを作る</HeaderMenuItem>
      <HeaderMenuItem link="/">使い方</HeaderMenuItem>
    </ul>
  );
}
