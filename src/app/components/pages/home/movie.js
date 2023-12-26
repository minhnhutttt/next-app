"use client"
import useScrollAnimation from '@/app/hooks/useScrollAnimation';

export default function Movie() {
    const animateRefs = useScrollAnimation('fadeUp');
    return (
        <div className="bg-[#0C0C0C] md:py-[140px] py-[100px] px-5 flex items-center justify-center">
            <div ref={animateRefs}>
                <img src="/images/movie-dummy.png" alt="" />
            </div>
        </div>
    )
}