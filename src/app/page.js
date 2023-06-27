import MV from './components/mv/mv';
import Intro from './components/intro';
import Article from './components/article/article';
import Contact from './components/contact';

export default function Home() {
  return (
    <main>
      <MV />
      <Intro />
      <Article />
      <Contact />
    </main>
  );
}
