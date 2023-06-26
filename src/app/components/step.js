import PropTypes from 'prop-types';
import Title from './title';
export default function Step({ title, imgSrc, imgSecondSrc, children }) {
    return (
        <div className="bg-white shadow-[1px_1px_28px_rgba(70,94,125,0.3)] w-full max-w-[1400px] mx-auto md:rounded-[40px] rounded-[20px] pt-[2.5%] px-5 pb-5 md:pb-[3%]">
            <div className="md:h-[168px] max-md:py-5 flex justify-center items-center">
                <Title>{title}</Title>
            </div>
            <div className="relative w-full flex justify-center">
                <div className="flex relative justify-center gap-[10%] lg:gap-[130px] max-lg:flex-wrap max-lg:w-full">
                    <div className="relative lg:flex-1 max-lg:w-[30%] max-w-[289px]">
                        <div className="relative">
                            <div className="absolute bg-transparent shadow-[1px_1px_50px_rgba(70,94,125,0.3)] inset-0 rounded-[44px]"></div>
                            <img src={imgSrc} alt="" /></div>
                    </div>
                    {imgSecondSrc &&
                        <div className="relative lg:flex-1 max-lg:w-[30%] max-w-[289px]">
                            <div className="absolute bg-transparent shadow-[1px_1px_50px_rgba(70,94,125,0.3)] inset-0 rounded-[44px]"></div>
                            <img src={imgSecondSrc} alt="" />
                        </div>
                    }
                    
                {children &&
                    <div className="lg:absolute lg:top-0 lg:h-full max-lg:mt-6 max-lg:mx-auto lg:left-[calc(100%+40px)] max-lg:w-full max-lg:flex-col max-lg:items-center max-lg:flex max-lg:justify-center md:space-y-10 space-y-6">
                        {children}
                    </div>
                }
                </div>
            </div>
        </div>
    );
}

Step.propTypes = {
    title: PropTypes.node.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgSecondSrc: PropTypes.string,
    children: PropTypes.node,
};
