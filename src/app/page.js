import Button from "./components/common/button";
import Title from "./components/common/title";
import Benefits from "./components/pages/home/benefits/benefits";
import Download from "./components/pages/home/download";
import MV from "./components/pages/home/mv";
import Steps from "./components/pages/home/steps/steps";
import Stores from "./components/pages/home/stores/stores";

export default function Home() {
  return (
    <main className="bg-[url('/mv-deco.png')] bg-[length:34.0625%_auto] bg-no-repeat">
      <MV />
      <div className="max-md:mt-10 mb-[8.5%]">
        <Benefits />
        <Stores />
        <Steps />
        <Download />
      </div>
    </main>
  )
}
