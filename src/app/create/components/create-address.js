import PropTypes from "prop-types";
import FormBlock from "@/app/components/form/form-block";
import FormButton from "@/app/components/form/form-button";
import FormInput from "@/app/components/form/form-input";
import FormLabel from "@/app/components/form/form-label";

export default function CreateAddress({onClick}) {
  return (
    <>
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
          <p className="text-base font-medium">
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
CreateAddress.propTypes = {
    onClick: PropTypes.func
  };
  