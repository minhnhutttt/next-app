import About from "./components/pages/home/about/about";
import Contact from "./components/pages/home/contact";
import Experience from "./components/pages/home/experience";
import FAQ from "./components/pages/home/faq/faq";
import FV from "./components/pages/home/fv";
import Guide from "./components/pages/home/guide/guide";
import Introduction from "./components/pages/home/introduction";
import Plan from "./components/pages/home/plan";

export default function Home() {
  return (
    <main>
      <FV />
      <Introduction />
      <About />
      <Experience />
      <Plan />
      <Guide />
      <FAQ />
      <Contact />
    </main>
  );
}
