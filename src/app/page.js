import ButtonPurchase from "./components/common/buttonPurchase";
import Advantages from "./components/pages/home/advantages";
import Dissatisfaction from "./components/pages/home/dissatisfaction";
import Download from "./components/pages/home/download";
import Features from "./components/pages/home/features";
import Flow from "./components/pages/home/flow";
import FV from "./components/pages/home/fv";
import ModernPeople from "./components/pages/home/modernPeople";
import Plan from "./components/pages/home/plan";
import Product from "./components/pages/home/product";

export default function Home() {
  return (
    <main className="">
      <FV />
      <div className="bg-[url('/images/bg.jpg')] bg-[length:100%_auto] relative before:bg-[#F5F5F7] before:absolute before:w-full before:h-screen before:inset-x-0 before:bottom-0">
        <Features />
        <Dissatisfaction />
        <ButtonPurchase />
        <ModernPeople />
        <Advantages />
      </div>
      <ButtonPurchase />
      <Product />
      <Plan />
      <Download />
      <ButtonPurchase />
      <Flow />
    </main>
  )
}
