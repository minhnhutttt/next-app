import Link from "next/link";

export default function Diver() {
  return (
    <div className="relative pt-[90px] md:pt-[180px]">
      <div className="z-2 absolute bottom-0 h-full w-full overflow-hidden">
        <video
          className="absolute bottom-0 left-0 right-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/videos/video-top.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <div className="relative px-5 pb-[225px]">
        <div className="mx-auto w-full max-w-[1200px]">
          <h3 className="relative flex items-center justify-center">
            <figure>
              <img src="/images/diver-ttl-line.png" alt="" />
            </figure>
            <span className="absolute inset-0 flex items-center justify-center">
              <img src="/images/diver-ttl.png" alt="" />
            </span>
          </h3>
          <p className="text-center text-[18px] font-extrabold tracking-widest text-white">
            Connect as a Pilot of the Earth
          </p>
          <div className="mt-20 flex items-center justify-center">
            <figure className="drop-shadow-[0_4px_80px_rgba(215,245,251,0.6)]">
              <img src="/images/diver-logo.png" alt="" />
            </figure>
          </div>
          <div className="mb-[60px] mt-8 flex justify-center">
            <p className="w-full max-w-[685px] text-[16px] leading-[1.8] text-white">
              Make a choice now to protect Earth's future. DIVER Storage leads
              in eco-friendly and secure data management with its
              ultra-distributed system. Begin with an affordable investment, and
              benefit from regular enhancements that increase the service's
              value. With prices set to rise, acting now is the smartest
              decision. Ideal for those forward-thinking, DIVER Storage offers a
              chance to step towards an environmentally responsible future.
              Don't miss this opportunity.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href="#"
              className="flex h-[80px] w-[330px] items-center justify-center gap-2 border border-[#9541FF] text-[18px] text-white"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8.5"
                  cy="8.5"
                  r="7.5"
                  stroke="#EBEBEB"
                  strokeWidth="2"
                />
              </svg>
              <span>VIEW MORE</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
