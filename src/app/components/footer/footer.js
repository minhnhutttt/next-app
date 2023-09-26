import Link from "next/link";
import FooterMenu from "./footer-menu/footer-menu";
import SearchBar from "../search-bar/search-bar";

export default function Footer() {
  return (
    <footer className="bg-[#366bb3] px-5 pt-[7.2%]">
      <div className="mx-auto flex w-full max-w-[1200px] justify-center px-3 pb-[12%] md:pb-[3.6%] max-xl:flex-col max-xl:items-center xl:justify-between">
        <div>
          <Link href="/">
            <img className="max-md:w-[180px]" src="/logo-footer.png" alt="" />
          </Link>
        </div>
        <div className="flex-1 max-xl:mt-10 xl:ml-20">
          <FooterMenu />
          <div className="mt-8 flex justify-end md:mt-6">
            <div className="flex gap-5 max-md:flex-col max-md:items-center max-md:justify-center">
              <Link href="/">
                <img src="/btn-install.png" alt="" />
              </Link>
              <Link href="/">
                <img src="/btn-connect-footer.png" alt="" />
              </Link>
              <div className="w-[280px] md:w-[350px]">
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mx-auto w-full max-w-[1340px] items-center justify-center border-t boder-white py-[10%] md:py-[2%]">
          <Link href="/">
            <img className="max-md:w-[160px]" src="/wsplogo.png" alt="" />
          </Link>
        </div>
      <div className="p-6 text-center text-sm text-white">©2023 TRACOU</div>
    </footer>
  );
}
