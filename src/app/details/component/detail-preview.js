export default function DetailPreview() {
  return (
    <div className="w-full max-w-[1300px] mx-auto border border-[#dcdddf] rounded-[20px] p-6 flex">
        <div>
            <p className="mb-8"><img src="/img-details.jpg" alt="" /></p>
            <button className="flex mx-auto items-center justify-center w-[280px] h-[60px] bg-[#366bb3] rounded-[5px] gap-3 text-xl text-white font-medium"><img src="/ic-preview.png" alt="" /><span>Preview</span></button>
        </div>
        <div className="ml-8 mt-4">
            <p className="text-white inline-block font-bold uppercase text-base h-[34px] bg-black rounded-[3px] px-8 md:text-2xl">0TT</p>
            <div className="flex gap-[22px] mt-5">
                <div className="flex items-center gap-2">
                    <img src="/tag-image.png" alt="" />
                    <span className="text-base md:text-2xl tracking-wider">IMAGE</span>
                </div>
                <div className="flex items-center gap-2">
                    <img src="/tag-music.png" alt="" />
                    <span className="text-base md:text-2xl tracking-wider">MUSIC</span>
                </div>
                <div className="flex items-center gap-2">
                    <img src="/tag-movie.png" alt="" />
                    <span className="text-base md:text-2xl tracking-wider">MOVIE</span>
                </div>
                <div className="flex items-center gap-2">
                    <img src="/tag-3d.png" alt="" />
                    <span className="text-base md:text-2xl tracking-wider">3D</span>
                </div>
                <div className="flex items-center gap-2">
                    <img src="/tag-doc.png" alt="" />
                    <span className="text-base md:text-2xl tracking-wider">DOC</span>
                </div>
            </div>
            <div className="mt-1">
                <a href="#" className="text-[28px] text-[#0013c7] border-b border-[#0013c7]">コレクションコレクションコレクション名</a>
            </div>
        </div>
    </div>
  );
}