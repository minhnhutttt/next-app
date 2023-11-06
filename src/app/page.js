import FV from './components/pages/home/fv'
import About from './components/pages/home/about'
import Features from './components/pages/home/features'
import Guide from './components/pages/home/guide'
import Flow from './components/pages/home/flow'

export default function Home() {
  return (
    <main className="">
      <FV />
      <About />
      <Features />
      <Guide />
      <Flow />
    </main>
  )
}
