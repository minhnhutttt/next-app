import Image from 'next/image'
import Slider from './components/slider'

export default function Home() {


  return (
    <main className="relative overflow-hidden">
      <div className="absolute w-full h-full overflow-hidden">
        <video
          className="absolute top-0 left-0 min-w-full min-h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/videos/video-top.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <button className='right-0 top-0 flex flex-col absolute h-[100px] w-[145px] items-center justify-center gap-2.5'>
        <span className='w-[65px] h-[3px] bg-white'></span>
        <span className='w-[65px] h-[3px] bg-white'></span>
      </button>
      <div className="relative">
        <div className="px-5 w-full pt-[21%]">
          <div className="w-full max-w-[1040px] mx-auto flex flex-col justify-center h-full">
            <div className="px-4">
              <h1 className="text-white text-[130px] font-bold capitalize leading-[82px] tracking-[39px] mb-16">Mist</h1>
              <p className="text-white text-xl font-['Noto_Sans_JP'] leading-[1.3]">Be a pilot of the earth.<br/><br/>Empower the Earth's Regeneration with “Mist” Computing.<br/><br/>Every Individual Action Shapes Our World and Planet.</p>
            </div>
            <div className="flex items-center justify-center mt-[90px]">
              <img src="/images/movie.png" alt="" />
            </div>
          </div>
        </div>
        <Slider />
      </div>
    </main>
  )
}
