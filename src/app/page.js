import Account from "./components/pages/home/account";
import DiverWallet from "./components/pages/home/diverWallet";
import Download from "./components/pages/home/download";
import Example from "./components/pages/home/example";
import FAQ from "./components/pages/home/faq";
import FV from "./components/pages/home/fv";
import Introduction from "./components/pages/home/introduction";
import NFT from "./components/pages/home/nft";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <Account />
      <Example />
      <Download />
      <NFT />
      <FAQ />
      <DiverWallet />
    </main>
  );
}
