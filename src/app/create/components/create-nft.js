import FormBlock from "@/app/components/form/form-block";
import FormButton from "@/app/components/form/form-button";
import FormDate from "@/app/components/form/form-date";
import FormImage from "@/app/components/form/form-image";
import FormInput from "@/app/components/form/form-input";
import FormLabel from "@/app/components/form/form-label";
import FormRadio from "@/app/components/form/form-radio";
import FormSelect from "@/app/components/form/form-select";
import FormTextarea from "@/app/components/form/form-textarea";
import { useState } from "react";

export default function CreateNFT() {
  const options = [
    { label: "1TT", value: "1TT" },
    { label: "NFT", value: "NFT" },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const optionsCollection = [
    { label: "コレクションを選択", value: "コレクションを選択" },
    { label: "コレクションを選択2", value: "コレクションを選択2" },
    { label: "コレクションを選択3", value: "コレクションを選択3" },
  ];
  const [selectedOptionCollection, setSelectedOptionCollection] = useState("");

  const handleChangeCollection = (event) => {
    setSelectedOptionCollection(event.target.value);
  };

  return (
    <>
      <div className="border-b border-[#333333] pb-10">
        <h2 className="text-[28px] font-medium md:text-[70px] tracking-[0.06em]">
        NFTをMINTする
        </h2>
        <p className="text-[16px] font-medium text-[#ee3f3f] md:text-[24px]">
          *印は入力必須項目です。
        </p>
      </div>
      <FormBlock>
        <FormLabel
          label="NFT用画像"
          text="この画像はナビゲーションにも使用されます。●●●×●●●px以上推奨"
          isRequired
        />
        <FormImage />
      </FormBlock>
      <FormBlock>
        <FormLabel label="NFTタイトル" isRequired />
        <FormInput name="NFTタイトル" placeholder="NFT名" />
      </FormBlock>

      <FormBlock>
        <FormLabel label="NFT説明" isRequired />
        <FormTextarea
          name="NFT説明"
          placeholder="説明文を1000文字以内で記入してください。"
        />
      </FormBlock>
      <FormBlock>
        <div className="py-5">
          <FormLabel label="1TT or NFTを選択してください。" isRequired />
          <p className="px-3 text-xs font-medium md:text-base">
          1TTは、One Transfer Tokenの略称です。ミント（NFT発行）後、一度だけ転送できるNFTの規格です。<br />
          通常のNFTでは対応できない状況に適しています。
          </p>
          <div className="mt-6">
            <FormRadio
              options={options}
              selectedOption={selectedOption}
              onChange={handleOptionChange}
            />
          </div>
        </div>
      </FormBlock>
      <FormBlock>
        <FormLabel label="NFTの数(生成上限数)" isRequired />
        <FormInput name="NFTの数(生成上限数)" placeholder="100" />
      </FormBlock>
      <FormBlock>
        <FormLabel label="TEL" />
        <FormInput name="tel" placeholder="0312345678" />
      </FormBlock>
      <FormBlock>
        <FormLabel label="Mobile" />
        <FormInput name="mobile" placeholder="09012345678" />
      </FormBlock>
      <FormBlock>
        <FormLabel label="Web" />
        <FormInput name="web" placeholder="example.com" />
      </FormBlock>
      <FormBlock>
        <FormLabel label="SNS" />
        <FormInput name="sns" placeholder="example.com" />
      </FormBlock>
      <FormBlock>
        <FormLabel label="コレクション" isRequired />
        <FormSelect
          options={optionsCollection}
          selectedOption={selectedOptionCollection}
          onChange={handleChangeCollection}
        />
      </FormBlock>
      <FormBlock>
        <FormLabel label="割引率(クーポンとしての割引率を設定できます。)" />
        <FormInput name="discount" placeholder="20%" />
      </FormBlock>
      <div className="pt-14 md:pb-16 md:pt-24">
        <FormButton>確認する</FormButton>
      </div>
    </>
  );
}
