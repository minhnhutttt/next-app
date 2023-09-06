import ButtonLink from "@/app/components/common/button";

export default function Contact() {
  return (
    <div className="bg-[#e8f6ff] px-5 py-10 md:py-[2.8%]">
      <div className="mx-auto flex w-full max-w-[1640px] justify-center max-md:flex-col max-md:items-center">
        <div className="-mr-8 max-md:w-[160px] md:mr-6 lg:mr-12">
          <img src="/img-contact.png" alt="" />
        </div>
        <div className="flex flex-col items-center py-1">
          <p className="text-center text-[26px] font-bold md:text-[48px]">
            Ready to get started?
          </p>
          <p className="mb-6 text-center text-[18px] font-medium md:mb-10 md:text-[30px]">
            let us know what you think
          </p>
          <ButtonLink link="/">Contact us</ButtonLink>
        </div>
      </div>
    </div>
  );
}
