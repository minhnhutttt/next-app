export default function FV() {
  return (
    <div className="h-screen bg-[url('/fv.png')] bg-cover bg-left px-5 max-md:min-h-[600px]">
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-end pb-[20%] md:pb-[4.8%]">
        <div className="w-full max-w-[550px] px-1">
          <h1 className="mb-[6%] text-[36px] font-black leading-none tracking-tighter text-white md:text-[56px]">
            Smarter Business <br />
            Card Exchange
          </h1>
          <p className="mb-[5%] text-[24px] leading-none tracking-wider text-white md:text-[30px]">
            Next-generation tools to support <br />
            business networking
          </p>
          <p className="mb-[8%] text-[14px] leading-relaxed text-white md:text-[16px]">
            Have you ever lost your business cards?
            <br />
            Do you have a large number of business cards scattered all over your
            desk?
            <br />
            Have you ever been unable to find the business card of the person
            you were looking for?
            <br />
            Have you ever missed handing out business cards because you ran out?
          </p>
          <div className="flex gap-4 md:gap-8">
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
