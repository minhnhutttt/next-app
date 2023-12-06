import Diver from "./components/pages/home/diver";
import MV from "./components/pages/home/mv";
import Slider from "./components/pages/home/slider";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute h-full w-full overflow-hidden">
        <video
          className="absolute left-0 top-0 min-w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/videos/video-top.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <div className="relative z-10">
        <MV />
        <Slider />
        <Diver />
      </div>
    </main>
  );
}
