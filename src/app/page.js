import Domain from "./components/pages/home/domain/domain";
import Faq from "./components/pages/home/faq/faq";
import FV from "./components/pages/home/fv/fv";
import Line from "./components/pages/home/line";
import Movie from "./components/pages/home/movie";
import Services from "./components/pages/home/services";

export default function Home() {
  return (
    <main>
      <FV />
      <Services />
      <Movie />
      <Domain />
      <Faq />
      <Line />
    </main>
  )
}
