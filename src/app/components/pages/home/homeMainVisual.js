export default function HomeMainVisual() {
  return (
    <div className="mb-5 px-5 md:mb-12">
      <div className="mx-auto flex h-[440px] w-full max-w-[1440px] items-end justify-center bg-[url('/fv.png')] bg-cover max-md:px-4 md:h-[640px]">
        <div className="pb-8 md:pb-12">
          <p className="mb-4 text-center text-[20px] font-bold text-white md:mb-6 md:text-[36px]">
            Empower blockchain naming service users through a member-led DAO.
          </p>
          <p className="mx-auto text-center text-[14px] text-white md:w-[68%] md:text-[22px]">
            Meta Magic is a member-led, member-driven DAO dedicated to improving
            the technological and public policy environments for users of
            blockchain naming services.
          </p>
        </div>
      </div>
    </div>
  );
}
