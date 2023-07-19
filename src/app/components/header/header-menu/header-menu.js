import HeaderMenuItem from "./header-menu-item";

export default function HeaderMenu() {
  return (
    <ul className="flex items-center max-md:flex-col">
      <HeaderMenuItem link="/account">アカウント</HeaderMenuItem>
      <HeaderMenuItem link="/collection">コレクション</HeaderMenuItem>
      <HeaderMenuItem link="/create">PINを生成する</HeaderMenuItem>
      <HeaderMenuItem link="/">使い方</HeaderMenuItem>
    </ul>
  );
}
