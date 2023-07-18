import HeaderMenuItem from "./header-menu-item";

export default function HeaderMenu() {
  return (
    <ul className="flex items-center max-md:flex-col">
      <HeaderMenuItem link="/">アカウント</HeaderMenuItem>
      <HeaderMenuItem link="/">コレクション</HeaderMenuItem>
      <HeaderMenuItem link="/">PINを生成する</HeaderMenuItem>
      <HeaderMenuItem link="/">使い方</HeaderMenuItem>
    </ul>
  );
}
