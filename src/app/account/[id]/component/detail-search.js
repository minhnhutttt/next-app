import FormSelect from "@/app/components/form/form-select";
import { useState } from "react";

export default function DetailSearch() {
  const optionsSearch = [
    { label: "ファイル形式", value: "ファイル形式" },
    { label: "ファイル形式2", value: "ファイル形式2" },
    { label: "ファイル形式3", value: "ファイル形式3" },
  ];
  const [selectedOptionSearch, setSelectedOptionSearch] = useState("");

  const handleChangeSearch = (event) => {
    setSelectedOptionSearch(event.target.value);
  };
  return (
    <div className="mt-10 flex items-center justify-center max-md:flex-col max-md:gap-3 md:mt-16">
      <div className="w-[280px] md:w-[524px]">
        <FormSelect
          options={optionsSearch}
          selectedOption={selectedOptionSearch}
          onChange={handleChangeSearch}
        />
      </div>
      <button className="flex h-12 w-[200px] items-center justify-center gap-2 rounded-[5px] bg-[#366bb3] md:h-[60px]">
        <img src="/ic-dl2.png" alt="" />
        <span className="text-sm font-medium text-white md:text-[18px]">
          ダウンロード
        </span>
      </button>
    </div>
  );
}
