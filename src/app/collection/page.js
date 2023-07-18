import FormBlock from "../components/form/form-block";
import FormLabel from "../components/form/form-label";
import FormImage from "../components/form/form-image";
import FormInput from "../components/form/form-input";
import FormTextarea from "../components/form/form-textarea";
import FormButton from "../components/form/form-button";

export default function Collection() {
  return (
    <main className="px-5 py-10 md:py-[74px]">
      <div className="mx-auto w-full max-w-[480px] md:max-w-[1000px]">
        <div className="border-b border-[#333333] pb-10">
          <h2 className="text-[32px] font-medium md:text-[70px]">
            コレクションを作る
          </h2>
          <p className="text-[16px] font-medium text-[#ee3f3f] md:text-[24px]">
            *印は入力必須項目です。
          </p>
        </div>
        <div>
          <FormBlock>
            <FormLabel
              label="ロゴイメージ"
              text="この画像はナビゲーションにも使用されます。●●●×●●●px以上推奨"
              isRequired
            />
            <FormImage />
          </FormBlock>
          <FormBlock>
            <FormLabel
              label="フィーチャー画像"
              text="この画像は、カテゴリページでコレクションを紹介するために使用されます。●●●×●●●px推奨"
              isRequired
            />
            <FormImage size="lg" />
          </FormBlock>
          <FormBlock>
            <FormLabel
              label="バナー画像"
              text="この画像は、コレクションページの上部に表示されます。デバイスによって寸法が変わるため、このバナー画像に
テキストを入れすぎないようにしてください。●●●×●●●px推奨"
              isRequired
            />
            <FormImage size="xl" />
          </FormBlock>
          <FormBlock>
            <FormLabel label="コレクション名" isRequired />
            <FormInput name="コレクション名" />
          </FormBlock>

          <FormBlock>
            <FormLabel label="コレクション説明" isRequired />
            <FormTextarea
              name="コレクション説明"
              placeholder="コレクションに必要な説明文を1000文字以内で記入してください。"
            />
          </FormBlock>

          <div className="py-14 md:py-20">
            <FormButton>コレクショを作成する</FormButton>
          </div>
        </div>
      </div>
    </main>
  );
}
