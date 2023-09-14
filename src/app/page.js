import HomeFV from "./components/pages/home/homeFV";
import HomeIntro from "./components/pages/home/homeIntro";
import HomeFeatures from "./components/pages/home/homeFeatures/homeFeatures";
import HomeReason from "./components/pages/home/homeReason";
import HomeUseCases from "./components/pages/home/homeUseCases/homeUseCases";
import HomeCart from "./components/pages/home/homeCart";
import HomeWorks from "./components/pages/home/homeWorks/homeWorks";
import HomeFaq from "./components/pages/home/homeFaq/homeFaq";

export default function Home() {
  return (
    <main>
      <HomeFV />
      <HomeIntro />
      <HomeFeatures />
      <HomeReason />
      <HomeUseCases />
      <HomeCart />
      <HomeWorks />
      <HomeFaq />
    </main>
  );
}
