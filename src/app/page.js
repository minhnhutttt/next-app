import Diver from "./components/diver";
import MV from "./components/mv";
import Slider from "./components/slider";

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
      <button className="absolute right-0 top-0 flex h-[100px] w-[145px] flex-col items-center justify-center gap-2.5">
        <span className="h-[3px] w-[65px] bg-white"></span>
        <span className="h-[3px] w-[65px] bg-white"></span>
      </button>
      <div className="relative z-10">
        <MV />
        <Slider />
        <Diver />
      </div>
    </main>
  );
}
