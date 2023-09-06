import MainVisual from "./home/mainVisual";
import ButtonLink from "./components/common/button";
import Services from "./home/services";
import Flow from "./home/flow";
import Diver from "./home/diver";
import Product from "./home/product";
import Contact from "./home/contact";
import About from "./home/about";

export default function Home() {
  return (
    <main>
      <MainVisual />
      <Diver />
      <Product />
      <Services />
      <Flow />
      <Contact />
      <About />
    </main>
  );
}
