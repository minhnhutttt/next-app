import QA from "./components/pages/home/qa/qa";
import Contact from "./components/pages/home/contact";
import Experience from "./components/pages/home/experience";
import FAQ from "./components/pages/home/faq/faq";
import FV from "./components/pages/home/fv";
import Guide from "./components/pages/home/guide/guide";
import About from "./components/pages/home/about";
import Plan from "./components/pages/home/plan";

export default function Home() {
  return (
    <main>
      <FV />
      <About />
      <QA />
      <Experience />
      <Plan />
      <Guide />
      <FAQ />
      <Contact />
    </main>
  );
}
