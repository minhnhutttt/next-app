
"use client"
import useScrollAnimation from '@/app/hooks/useScrollAnimation';

export default function Line() {
    const animateRefs = useScrollAnimation('fadeUp');
    return (
        <div className="md:pt-16 pt-10 pb-16 md:pb-[97px] px-5">
            <h5 ref={animateRefs} className="text-center md:text-[80px] text-[36px] font-zenkaku font-bold">まずはLINE登録</h5>
            <div ref={animateRefs} className="flex justify-center mt-10 md:mt-[85px]">
            <button alt="次世代ドメイン" className="group flex items-center bg-[#01B202] justify-center w-[320px] md:w-[548px] md:h-[156px] h-[80px] relative text-lg uppercase shadow-[0px_14px_0px_0px_#076807] overflow-hidden transition-[31ms] duration-[cubic-bezier(.5,0.7,0.4,1)] px-5 rounded-3xl md:before:pl-[92px] before:pl-[56px] before:content-[attr(alt)] before:flex before:items-center before:justify-center before:absolute md:before:text-[32px] text-[24px] before:font-bold before:text-[white] before:opacity-100 before:inset-0 active:shadow-none active:translate-y-[7px] active:transition-[35ms] active:duration-[cubic-bezier(.5,0.7,0.4,1)] hover:before:transition-all hover:before:duration-[0.0s] hover:before:translate-y-full hover:before:opacity-0">
            <img className="md:mr-[30px] mr-4 max-md:w-10" src="/images/icon-line.svg" alt="" />
            <i className="text-[white] md:text-[32px] text-[24px] font-bold not-italic transition-all duration-[2s] ease-[ease] -translate-y-5 opacity-0 group-hover:transition-all group-hover:duration-[0.2s] group-hover:ease-[ease] group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-[0.045s]">次</i>
            <i className="text-[white] md:text-[32px] text-[24px] font-bold not-italic transition-all duration-[2s] ease-[ease] -translate-y-5 opacity-0 group-hover:transition-all group-hover:duration-[0.2s] group-hover:ease-[ease] group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-[calc(0.045s*3)]">世</i>
            <i className="text-[white] md:text-[32px] text-[24px] font-bold not-italic transition-all duration-[2s] ease-[ease] -translate-y-5 opacity-0 group-hover:transition-all group-hover:duration-[0.2s] group-hover:ease-[ease] group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-[calc(0.045s*4)]">代</i>
            <i className="text-[white] md:text-[32px] text-[24px] font-bold not-italic transition-all duration-[2s] ease-[ease] -translate-y-5 opacity-0 group-hover:transition-all group-hover:duration-[0.2s] group-hover:ease-[ease] group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-[calc(0.045s*5)]">ド</i>
            <i className="text-[white] md:text-[32px] text-[24px] font-bold not-italic transition-all duration-[2s] ease-[ease] -translate-y-5 opacity-0 group-hover:transition-all group-hover:duration-[0.2s] group-hover:ease-[ease] group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-[calc(0.045s*6)]">メ</i>
            <i className="text-[white] md:text-[32px] text-[24px] font-bold not-italic transition-all duration-[2s] ease-[ease] -translate-y-5 opacity-0 group-hover:transition-all group-hover:duration-[0.2s] group-hover:ease-[ease] group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-[calc(0.045s*7)]">イ</i>
            <i className="text-[white] md:text-[32px] text-[24px] font-bold not-italic transition-all duration-[2s] ease-[ease] -translate-y-5 opacity-0 group-hover:transition-all group-hover:duration-[0.2s] group-hover:ease-[ease] group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-[calc(0.045s*8)]">ン</i>
            </button>
            </div>
        </div>
    )
}