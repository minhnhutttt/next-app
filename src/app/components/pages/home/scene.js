import Link from "next/link";
import PropTypes from "prop-types";
import Title from "../../common/title";

function SceneItem({image, title, link}) {
    return(
        <Link href={link} className="relative rounded-[10px] overflow-hidden">
            <figure>
                <img src={image} alt={title} />
            </figure>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full md:h-[80px] h-[60px] flex items-center justify-center bg-black/50 text-white lg:text-[24px] text-[16px] font-bold text-center">
                {title}
            </div>
        </Link>
    )
}

SceneItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default function Scene() {
  return (
    <div className="flex bg-[#1AFF53]/[0.1] py-10 md:pt-[74px] md:pb-[102px]" id="scene">
        <div className="w-full md:max-w-[1400px] max-w-[440px] px-5 mx-auto">
            <Title head="SCENE">ご利用シーン</Title>
            <div className="mt-10 space-y-5">
                <div className="flex gap-5 max-md:flex-col md:pr-10">
                    <SceneItem title="NFTクーポンとして" image="/images/scene-01.png" link="/" />
                    <SceneItem title="NFT推しトレカとして" image="/images/scene-02.png" link="/" />
                    <SceneItem title="NFTチケットとして" image="/images/scene-03.png" link="/" />
                </div>
                <div className="flex justify-end gap-5 max-md:flex-col md:pl-10">
                    <SceneItem title="NFT証明書として" image="/images/scene-04.png" link="/" />
                    <SceneItem title="NFTデジタルアートとして" image="/images/scene-05.png" link="/" />
                    <SceneItem title="NFTコレクションとして" image="/images/scene-06.png" link="/" />
                </div>
            </div>
        </div>
    </div>
  );
}