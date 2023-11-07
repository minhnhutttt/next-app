import PropTypes from "prop-types";

function FormInput({ label, name, placeholder, required = false, area }) {
  return (
    <div className="">
      <label className="block text-center md:text-[24px] text-[18px] font-bold">{label}{required ? <span className="md:text-[28px] text-[#EA4335] text-[20px] font-bold ">*</span> : ''}</label>
      <div className="mt-4">
        {area ? 
        <textarea name={name} className="w-full md:text-[20px] text-[18px] py-2 md:h-[175px] h-[120px] bg-[#F4F8FB] px-4 md:px-[30px]">
        </textarea>
      :
      <input type="text" placeholder={placeholder} name={name}  className="w-full py-2 md:text-[20px] text-[18px] md:h-[100px] h-[60px] bg-[#F4F8FB] px-4 md:px-[30px]"/>}
      </div>
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  area: PropTypes.bool,
};

export default function Contact() {
  return (
    <main className="px-5 md:pb-[269px] pb-[150px]">
      <div className="w-full max-w-[900px] mx-auto">
        <div className="py-[60px]">
          <h3 className="text-center md:text-[62px] font-bold text-[32px]">お問い合わせフォーム</h3>
          <p className="text-center text-[#EA4335] md:text-[24px] text-[18px] md:mt-5 mt-2">*印は入力必須項目です。</p>
        </div>
        <div className="md:space-y-10 space-y-7">
          <FormInput label="会社名" name="会社名" placeholder="株式会社アイウエオ" />
          <FormInput label="お名前" name="お名前" placeholder="山本　太郎" required />
          <FormInput label="ふりがな" name="ふりがな" placeholder="やまもとたろう" required />
          <FormInput label="メール" name="メール" placeholder="oshikatsu@gmail.com" required />
          <FormInput label="電話番号" name="電話番号" placeholder="090-1234-5678" required />
          <FormInput label="お問い合わせ内容" name="お問い合わせ内容" area />
        </div>
        <div className="mt-6 md:mt-11">
          <a href="#" className="w-full md:max-w-[500px] max-w-[300px] mx-auto flex items-center justify-center bg-black rounded-xl text-white text-[20px] md:text-[32px] font-bold md:h-[100px] h-[70px]">
          入力内容確認
          </a>
        </div>
      </div>
    </main>
  );
}
