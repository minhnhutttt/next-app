export default function FV() {
    return (
      <div className="bg-[url('/images/background-fv-sp.jpg')] md:bg-[url('/images/background-fv.jpg')] bg-cover max-md:h-screen flex items-end relative">
        <div className="absolute top-5 px-5 md:top-[10%] flex justify-center md:inset-x-0 md:px-10 max-md:z-30">
            <div className="w-full max-w-[246px] md:max-w-[1321px] mx-auto">
                <img className="max-md:hidden" src="/images/logo.png" alt="ギガ二刀流Wi-Fi" />
                <img className="md:hidden" src="/images/logo-sp.png" alt="ギガ二刀流Wi-Fi" />
            </div>
        </div>
        <div className="pt-[16.5%] w-full relative justify-center flex mx-auto max-md:z-10 overflow-hidden">
            <figure>
                <img className="max-md:w-[122vw] max-md:mx-auto max-md:max-w-[600px] max-md:max-h-[50vh] object-contain relative max-md:bottom-[-4vw] max-md:left-[-2.5vw] max-[600px]:left-[-5vw]" src="/images/fv-character.png" alt="ギガ二刀流Wi-Fi" />
            </figure>
        </div>
        <div className="absolute inset-x-0 md:px-10 px-8 bottom-12 md:bottom-10 max-md:z-20">
            <div className="w-full md:max-w-[1280px] max-w-[540px] mx-auto max-md:flex max-md:justify-end">
                <img className="max-md:hidden max-[1440px]:w-[21.736vw]" src="/images/fv-wifi.png" alt="Wifi" />
                <img className="md:hidden max-md:max-w-[27.733vw] max-md:max-h-[23vh]" src="/images/fv-wifi-sp.png" alt="Wifi" />
            </div>
        </div>
        <div className="absolute inset-x-0 px-4 md:px-10 max-md:top-[18vh] md:bottom-4 max-md:z-0">
            <div className="w-full max-w-[1280px] mx-auto flex justify-center md:justify-end">
                <img className="max-md:max-w-[81.333vw] max-md:max-h-[54vh] max-[1440px]:max-w-[29.653vw]" src="/images/fv-freebot.png" alt="Freebot" />
            </div>
        </div>
      </div>
    )
  }
  