import Business from "./components/pages/home/business";
import Create from "./components/pages/home/create";
import Features from "./components/pages/home/features";
import FV from "./components/pages/home/fv";

export default function Home() {
  return (
    <main>
      <FV />
      <Business />
      <Features />
      <Create />
    </main>
  )
}
