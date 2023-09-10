import HomeMainVisual from "./components/pages/home/homeMainVisual";
import HomeMisson from "./components/pages/home/homeMisson";
import HomeEcosystem from "./components/pages/home/homeEcosystem";
import HomeMetaMagic from "./components/pages/home/homeMetaMagic";
import HomeFaq from "./components/pages/home/homeFaq/homeFaq";

export default function Home() {
  return (
    <main>
      <HomeMainVisual />
      <HomeMisson />
      <HomeEcosystem />
      <HomeMetaMagic />
      <HomeFaq />
    </main>
  );
}
