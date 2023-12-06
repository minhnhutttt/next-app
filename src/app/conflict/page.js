import NextPage from "../components/common/nextPage";
import PageHead from "../components/common/pageHead";
import Section from "../components/common/section";

export default function Conflict() {
  return (
    <main className="relative overflow-hidden pb-[80px] md:pb-[110px]">
      <PageHead page="CONFLICT">
        Negative Environmental Impact of Current{" "}
        <br className="max-md:hidden" />
        Computing Models.
      </PageHead>
      <div className="my-[50px] flex justify-center px-5 md:my-[100px]">
        <p className="max-w-[690px] text-[14px] leading-loose tracking-[0.15em] text-white md:text-[16px]">
          Amid rapid technological advances, there's growing concern over the
          negative impacts of centralized computing and AI models. These
          technologies, while enhancing our lives and businesses, pose
          significant sustainability and environmental challenges, including
          increased energy consumption, higher CO2 emissions, and resource
          overuse, alongside data security and privacy issues. This discussion
          seeks to understand the potential adverse effects of these models'
          current trajectory and to envision a path toward a sustainable future.
        </p>
      </div>
      <div className="mb-[90px] space-y-[60px] md:mb-[160px] md:space-y-[112px]">
        <Section
          no="1"
          image="/images/conflict-01.png"
          title={
            <>
              “Blocking the Path to Sustainability” <br />
              The Impact of Current Computing Models
            </>
          }
        >
          The current centralized computing and AI models are significantly
          hindering our progress towards a sustainable future due to their high
          energy and water consumption. These systems not only exacerbate
          climate change and resource depletion but also place a substantial
          burden on our planet. This situation underlines the urgent need for
          transformative changes in our approach to technology and
          sustainability.
        </Section>
        <Section
          no="2"
          image="/images/conflict-02.png"
          title={<>Significant Environmental Costs of Data Centers and AI</>}
        >
          Large data centers consume billions of kilowatt-hours of electricity
          yearly, mainly from fossil fuels, leading to substantial CO2 emissions
          and worsening climate change. Their extensive water use for cooling
          also impacts local water resources and the environment. Similarly, AI
          training demands vast energy, with emissions comparable to hundreds of
          cars annually. These operations contribute to increasing electronic
          waste, posing further environmental risks if not properly managed.
        </Section>
        <Section
          no="3"
          image="/images/conflict-03.png"
          title={<>Increased Data Management Risks</>}
        >
          There are also issues in data management. These systems heighten
          security risks and privacy concerns due to centralized data storage.
          The increased risk of cyber-attacks and data breaches jeopardizes the
          safety of personal information. <br />
          Consequently, the environmental burden, security issues, and privacy
          concerns associated with these systems represent significant
          challenges faced by modern technology. <br />
          Addressing these issues and transitioning to more sustainable and
          secure technologies is an urgent necessity.
        </Section>
      </div>
      <NextPage
        image="/images/next-solution.png"
        link="/solution"
        name="SOLUTION"
      />
    </main>
  );
}
