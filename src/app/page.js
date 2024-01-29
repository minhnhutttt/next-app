import Features from "./components/pages/home/features";
import FV from "./components/pages/home/fv";
import Introduction from "./components/pages/home/introduction";
import Steps from "./components/pages/home/steps/steps";
import Generation from "./components/pages/home/generation/generation";
import Note from "./components/pages/home/note";
import FAQ from "./components/pages/home/faq/faq";

export default function Home() {
  return (
    <main>
      <FV />
      <div className="bg-[url('/images/bg.png')] bg-[length:100%_auto]">
        <Steps />
        <Introduction />
        <Features />
        <Generation />
        <Note />
        <FAQ />
      </div>
    </main>
  )
}
