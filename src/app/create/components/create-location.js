import PropTypes from "prop-types";
import FormBlock from "@/app/components/form/form-block";
import FormButton from "@/app/components/form/form-button";
import FormInput from "@/app/components/form/form-input";
import FormLabel from "@/app/components/form/form-label";

export default function CreateLocation({ onClick }) {
  return (
    <>
      <div className="border-b border-[#333333] pb-10">
        <h2 className="text-[28px] font-medium md:text-[70px]">
          QRに位置情報を登録する
        </h2>
        <p className="text-[16px] font-medium text-[#ee3f3f] md:text-[24px]">
          *印は入力必須項目です。
        </p>
      </div>
      <FormBlock>
        <FormLabel label="Address(位置情報)" isRequired />
        <div className="mt-6">
          <FormInput name="address" placeholder="東京都港区芝公園４丁目２−８" />
        </div>
        <div className="mb-4 mt-7 flex items-center justify-center">
          <img src="/map.jpg" alt="" />
        </div>
      </FormBlock>
      <FormBlock>
        <div className="py-5">
          <FormLabel label="Range(NFTを受信できる半径距離/m)" />
          <p className="text-xs md:text-base font-medium px-3">
            範囲を制限しない場合は0を入力してください。
          </p>
          <div className="mt-6">
            <FormInput name="address" placeholder="10m" />
          </div>
        </div>
      </FormBlock>
      <div className="pt-14 md:pb-16 md:pt-24">
        <FormButton onClick={onClick}>次へ</FormButton>
      </div>
    </>
  );
}
CreateLocation.propTypes = {
  onClick: PropTypes.func,
};
