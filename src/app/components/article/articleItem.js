import Link from 'next/link';
import PropTypes from 'prop-types';
export default function ArticleItem({
  imgSrc,
  head,
  title,
  content,
  link,
  smallTitle,
}) {
  return (
    <div className="px-5 py-10 md:py-20 odd:bg-black">
      <div className="mx-auto max-md:flex-col flex w-full max-w-[440px] md:max-w-[1740px] justify-between">
        <div className="md:w-[51%] max-w-[880px]">
          <img src={imgSrc} alt="" />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <div className="md:-ml-[10%] mt-5 md:-mt-4">
              <div className="text-[clamp(16px,1.875vw,36px)] font-black">{head}</div>
              <div
                className={`font-black leading-[1.2] -tracking-[0.07em] ${
                  smallTitle ? 'text-[clamp(32px,5.208vw,100px)]' : 'text-[clamp(36px,5.729vw,110px)]'
                }`}
              >
                {title}
              </div>
            </div>
            <div className="mt-5 px-4 md:px-9">
              <p className="text-[14px] lg:text-[18px] leading-[1.8]">{content}</p>
            </div>
          </div>
          <div className="md:-mb-9 md:pl-[48%] max-md:flex max-md:justify-end max-md:pr-6">
            <Link
              href={link}
              className="flex w-20 h-20 md:w-[160px] md:h-[160px] xl:h-[276px] xl:w-[276px] lg:h-[180px] lg:w-[180px] items-center justify-center rounded-full border border-white"
            >
                <img className='max-md:w-4' src="/arr.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

ArticleItem.propTypes = {
  head: PropTypes.node.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  link: PropTypes.string,
  smallTitle: PropTypes.bool,
};
