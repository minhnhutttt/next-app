import FV from "./components/pages/home/fv";
import Introduction from "./components/pages/home/introduction";
import Steps from "./components/pages/home/steps/steps";

export default function Home() {
  return (
    <main>
      <FV />
      <div className="bg-[url('/images/bg.png')] bg-[length:100%_auto]">
        <Steps />
        <Introduction />
      </div>
    </main>
  )
}
