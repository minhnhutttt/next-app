import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="px-5">
        <div className="w-full max-w-[1440px] mx-auto bg-[url('/fv.png')] bg-cover h-[640px] flex justify-center items-end">
          <div className="pb-12">
            <p className="text-[36px] font-bold text-center text-white mb-6">Empower blockchain naming service users through a member-led DAO.</p>
            <p className="text-[22px] text-center w-[68%] mx-auto">
            Meta Magic is a member-led, member-driven DAO dedicated to improving the technological and public policy environments for users of blockchain naming services. 
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
