import HeaderMenuItem from "./header-menu-item";

export default function HeaderMenu() {
  return (
    <ul className="flex items-center max-md:flex-col">
      <HeaderMenuItem link="#">アカウント</HeaderMenuItem>
      <HeaderMenuItem link="#">コレクションを作る</HeaderMenuItem>
      <HeaderMenuItem link="#">NFTを作る</HeaderMenuItem>
    </ul>
  );
}
