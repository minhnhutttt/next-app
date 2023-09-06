import ButtonLink from '@/app/components/common/button'

export default function Contact() {
  return (
    <div className="bg-[#e8f6ff] py-10 md:py-[2.8%] px-5">
        <div className="w-full max-w-[1640px] mx-auto flex max-md:flex-col max-md:items-center justify-center">
            <div className="md:mr-6 -mr-8 lg:mr-12 max-md:w-[160px]">
                <img src="/img-contact.png" alt="" />
            </div>
            <div className="flex flex-col items-center py-1">
                <p className="text-[26px] md:text-[48px] font-bold text-center">Ready to get started?</p>
                <p className="text-[18px] md:text-[30px] font-medium text-center mb-6 md:mb-10">let us know what you think</p>
                <ButtonLink link="/">Contact us</ButtonLink>
            </div>
        </div>
    </div>
  )
}
