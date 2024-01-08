import Download from "./components/pages/home/download";
import FAQ from "./components/pages/home/faq/faq";
import FV from "./components/pages/home/fv";
import Knock from "./components/pages/home/knock/knock";
import Security from "./components/pages/home/security/security";

export default function Home() {
  return (
    <main>
      <FV />
      <Download />
      <Knock />
      <Security />
      <FAQ />
    </main>
  )
}
