import MintText from "./mintText";

export default function MV() {
  return (
    <div className="w-full px-5 pt-[21%]">
      <div className="mx-auto flex h-full w-full max-w-[1040px] flex-col justify-center">
        <div className="px-4">
          <div class="mb-10 w-[220px] md:mb-16 md:w-[377px]">
            <MintText />
          </div>
          <p className="font-['Noto_Sans_JP'] text-[20px] leading-[1.3] text-white md:text-xl">
            Be a pilot of the earth.
            <br />
            <br />
            Empower the Earth's Regeneration with “Mist” Computing.
            <br />
            <br />
            Every Individual Action Shapes Our World and Planet.
          </p>
        </div>
        <div className="mt-[50px] flex items-center justify-center md:mt-[90px]">
          <img src="/images/movie.png" alt="" />
        </div>
      </div>
    </div>
  );
}
