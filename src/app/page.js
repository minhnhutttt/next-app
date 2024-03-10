import ButtonPurchase from "./components/common/buttonPurchase";
import Advantages from "./components/pages/home/advantages";
import Dissatisfaction from "./components/pages/home/dissatisfaction";
import Download from "./components/pages/home/download";
import FAQ from "./components/pages/home/faq/faq";
import Features from "./components/pages/home/features";
import Flow from "./components/pages/home/flow";
import FV from "./components/pages/home/fv";
import ModernPeople from "./components/pages/home/modernPeople";
import Plan from "./components/pages/home/plan";
import Price from "./components/pages/home/price";
import Scene from "./components/pages/home/scene";
import WSP from "./components/pages/home/wsp";

export default function Home() {
  return (
    <main className="">
      <FV />
      <div className="relative bg-[url('/images/bg.jpg')] bg-[length:100%_auto]">
        <Features />
        <Dissatisfaction />
        <ButtonPurchase />
        <ModernPeople />
        <Advantages />
        <ButtonPurchase />
        <Plan />
        <Download />
        <ButtonPurchase />
        <Flow />
        <Price />
        <ButtonPurchase />
        <Scene />
        <FAQ />
      </div>
      <WSP />
    </main>
  );
}
