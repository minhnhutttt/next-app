import Header from './components/header'
import Link from "next/link";
import FV from './components/pages/home/fv'
import Scene from './components/pages/home/scene';
import About from './components/pages/home/about';
import Enjoy from './components/pages/home/enjoy';
import HowTo from './components/pages/home/howTo';
import Faq from './components/pages/home/faq';
import Shop from './components/pages/home/shop';

export default function Home() {
  return (
    <main className="">
      <FV />
      <Header />
      <div className="overflow-hidden bg-[url('/images/bg.png')] bg-top bg-no-repeat">
        <About />
        <Enjoy />
        <Scene />
        <HowTo />
      </div>
      <Faq />
      <Shop />
    </main>
  )
}
