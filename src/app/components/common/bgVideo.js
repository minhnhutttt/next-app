export default function BgVideo() {
    return (
        <div className="absolute bottom-0 w-full h-screen overflow-hidden z-2">
            <video
            className="absolute bottom-0 left-0 right-0 object-cover w-full h-full"
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
  