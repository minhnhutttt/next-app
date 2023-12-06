
import NextPage from "../components/common/nextPage";
import PageHead from "../components/common/pageHead";
import Section from "../components/common/section";


export default function Solution() {
  return (
    <main className="relative overflow-hidden pb-[80px] md:pb-[110px]">
      <PageHead page="SOLUTION">
      What is "Mist" Computing & IPDC?
      </PageHead>
      <div className="flex justify-center px-5 md:my-[100px] my-[50px]">
        <p className="md:text-[16px] text-[14px] text-white max-w-[690px] leading-loose tracking-[0.15em]">
        To ensure a sustainable future for Earth, fundamental changes in data management are essential, with mist computing being a key technology in this transformation. Replacing centralized servers, it uses a globally dispersed network (IPDC: Interplanetary Data Center) to improve data access efficiency while reducing energy consumption and enhancing data security, thereby building sustainable digital infrastructure.
        </p>
      </div>
      <div className="md:space-y-[112px] space-y-[60px] md:mb-[160px] mb-[90px]">
        <Section no="1" image="/images/solution-01.png" title={<>Reducing Energy Use with Mist Computing</>}>
        Mist computing achieves substantial energy savings by distributing data across global nodes, reducing the energy and cooling demands of traditional centralized data centers. This approach lessens CO2 emissions from data processing, aiding in the fight against climate change.
        </Section>
        <Section no="2" image="/images/solution-02.png" title={<>Individuals as Guardians in Mist Computing and IPDC</>}>
        In the world of dispersed node networks, the pivotal role of individuals, rather than organizations, as node managers is fundamental. This individual-centric approach is key to truly overcoming the constraints of traditional, centralized data centers. When individuals manage nodes, mist computing steps in to address the security risks associated with personal data storage, offering encryption and data integrity. This ensures not only enhanced trust and security across the network but also empowers each individual to contribute directly to this innovative system of data management.
        </Section>
        <Section no="3" image="/images/solution-03.png" title={<>Enhancing Resilience through Redundancy</>}>
        Mist computing significantly boosts system resilience by leveraging data stored across multiple independent nodes. This setup reduces the risk of system-wide downtime if some nodes fail and ensures the system's integrity, as data can be recovered from other nodes. This approach not only enhances data security but also the overall efficiency and sustainability of the system.
        </Section>
        <Section no="4" image="/images/solution-04.png" title={<>The Future Standard in Data Management: Mist Computing</>}>
        Mist computing is key for hyper-distributed computing, going beyond cloud and edge computing's limits. In an era where balancing environmental protection with economic progress is crucial, mist computing emerges as a sustainable choice, enabling technological growth without environmental compromise. Its efficiency and sustainability are setting it up to be the next standard in data management.
        </Section>
      </div>
      <NextPage image="/images/next-action.png" link="/action" name="ACTION" />
    </main>
  );
}
