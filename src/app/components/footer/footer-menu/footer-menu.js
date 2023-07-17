import FooterMenuItem from './footer-menu-item';

export default function FooterMenu() {
  return (
    <ul className="flex items-center max-md:flex-col gap-3 md:gap-7">
        <FooterMenuItem link="/">アカウント</FooterMenuItem>
        <FooterMenuItem link="/">コレクション</FooterMenuItem>
        <FooterMenuItem link="/">PINを生成する</FooterMenuItem>
        <FooterMenuItem link="/">使い方</FooterMenuItem>
        <FooterMenuItem link="/">プライバシーポリシー</FooterMenuItem>
        <FooterMenuItem link="/">利用規約</FooterMenuItem>
        </ul>
  );
}