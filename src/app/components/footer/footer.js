import Link from 'next/link';
import FooterMenu from './footer-menu/footer-menu';
import SearchBar from '../search-bar/search-bar';

export default function Footer() {
  return (
    <footer className="bg-[#366bb3] px-5 pt-[8.2%]">
        <div className="w-full max-w-[1200px] px-3 mx-auto flex xl:justify-between max-xl:items-center justify-center max-xl:flex-col pb-[9%]">
            <div className="mt-[2%]">
                <Link href="/">
                    <img className="max-md:w-[180px]" src="/logo-footer.png" alt="" />
                </Link>
            </div>
            <div className="xl:ml-20 max-xl:mt-10 flex-1">
                <FooterMenu />
                <div className="flex justify-end mt-8 md:mt-14">
                    <div className="flex gap-5 max-md:flex-col max-md:justify-center max-md:items-center">
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
        <div className="text-sm text-white text-center p-4">©2023 TRACOU</div>
    </footer>
  );
}