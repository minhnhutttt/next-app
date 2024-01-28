import SectionTitle from "../../../common/sectionTitle";
import StepItem from "./stepItem";

export default function Steps() {
    return (
        <section className="px-5 md:pt-[100px] pt-[60px] md:pb-[57px] pb-8">
            <div className="w-full lg:max-w-[1200px] max-w-[600px] mx-auto">
                <SectionTitle>簡単3ステップ！</SectionTitle>
                <div className="grid lg:grid-cols-3 gap-[30px] mt-10 md:mt-[70px]">
                    <StepItem step="/images/img-step-01.png">アドレスを入力する</StepItem>
                    <StepItem step="/images/img-step-02.png">検索ボタン押す</StepItem>
                    <StepItem step="/images/img-step-03.png">履歴に簡単アクセス！</StepItem>
                </div>
            </div>
        </section>
    )
  }
  