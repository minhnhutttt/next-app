import ArticleItem from "./articleItem";

export default function Article() {
  return (
    <div className="pb-[90px]">
      <ArticleItem
        imgSrc="/img-01.jpg"
        head="SKY GO KART"
        title="スカイゴーカート"
        content={
          <>
            スカイゴーカートは、文字通り空中を飛ぶことができるゴーカートのことを指します。
            <br />
            <br />
            スカイゴーカートは、一般的なゴーカートと同様に、人が乗って操作することができますが、
            <br />
            バイクと異なり、地上を走行するのではなく、空中を飛行することができます。
          </>
        }
        link="/"
      />
      <ArticleItem
        imgSrc="/img-02.jpg"
        head="MURAKUMO"
        title="天叢雲剣"
        content={
          <>
            紹介テキストが入ります。紹介テキストが入ります。紹介テキストが入ります。
            <br />
            紹介テキストが入ります。紹介テキストが入ります。紹介テキストが入ります。
            <br />
            紹介テキストが入ります。紹介テキストが入ります。
          </>
        }
        link="/"
      />
      <ArticleItem
        imgSrc="/img-03.jpg"
        head="COLD DATA CENTER"
        smallTitle
        title={
          <>
            コールド
            <br />
            データセンター
          </>
        }
        content={
          <>
            紹介テキストが入ります。紹介テキストが入ります。紹介テキストが入ります。
            <br />
            紹介テキストが入ります。紹介テキストが入ります。紹介テキストが入ります。
            <br />
            紹介テキストが入ります。紹介テキストが入ります。
          </>
        }
        link="/"
      />
      <ArticleItem
        imgSrc="/img-04.jpg"
        head="SOLAR SUNVA"
        title="ソーラーサンバ"
        content={
          <>
            紹介テキストが入ります。紹介テキストが入ります。紹介テキストが入ります。
            <br />
            紹介テキストが入ります。紹介テキストが入ります。紹介テキストが入ります。
            <br />
            紹介テキストが入ります。紹介テキストが入ります。
          </>
        }
        link="/"
      />
    </div>
  );
}
