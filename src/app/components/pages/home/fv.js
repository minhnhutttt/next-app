export default function FV() {
  return (
    <div className="h-screen bg-[url('/fv.png')] bg-cover bg-left px-5">
      <div className="w-full max-w-[1440px] mx-auto h-full flex items-end pb-[4.8%]">
        <div className="w-full max-w-[550px] px-1">
          <h1 className="text-[56px] text-white font-black leading-none tracking-tighter mb-[6%]">
            Smarter Business <br />Card Exchange
          </h1>
          <p className="text-[30px] text-white leading-none mb-[5%] tracking-wider">
            Next-generation tools to support <br />business networking
          </p>
          <p className="text-[16px] text-white leading-relaxed mb-[8%]">
          Have you ever lost your business cards?<br />Do you have a large number of business cards scattered all over your desk?<br />Have you ever been unable to find the business card of the person you were looking for?<br />Have you ever missed handing out business cards because you ran out?
          </p>
          <div className="flex gap-8">
            <a href="/">
              <img src="/btn-apple.png" alt="" />
            </a>
            <a href="/">
              <img src="/btn-google.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
