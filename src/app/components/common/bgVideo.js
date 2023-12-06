export default function BgVideo() {
  return (
    <div className="z-2 absolute bottom-0 h-screen w-full overflow-hidden">
      <video
        className="absolute bottom-0 left-0 right-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/video-bottom.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
