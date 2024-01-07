import About from "./components/pages/home/about/about";
import Experience from "./components/pages/home/experience";
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
    </main>
  );
}
