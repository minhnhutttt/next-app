import FormSelect from "@/app/components/form/form-select";
import { useState } from "react";

export default function DetailSearch() {
  const optionsSearch = [
    { label: "ファイル形式", value: "ファイル形式" },
    { label: "ファイル形式", value: "ファイル形式" },
    { label: "ファイル形式", value: "ファイル形式" },
  ];
  const [selectedOptionSearch, setSelectedOptionSearch] = useState("");

  const handleChangeSearch = (event) => {
    setSelectedOptionSearch(event.target.value);
  };
  return (
    <div className="mt-16 flex items-center justify-center">
      <div className="w-[524px]">
        <FormSelect
          options={optionsSearch}
          selectedOption={selectedOptionSearch}
          onChange={handleChangeSearch}
        />
      </div>
      <button className="flex h-[60px] w-[200px] items-center justify-center gap-2 rounded-[5px] bg-[#366bb3]">
        <img src="/ic-dl2.png" alt="" />
        <span className="text-[18px] font-medium text-white">ダウンロード</span>
      </button>
    </div>
  );
}
