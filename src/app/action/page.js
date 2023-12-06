
import NextPage from "../components/common/nextPage";
import PageHead from "../components/common/pageHead";
import Section from "../components/common/section";


export default function Action() {
  return (
    <main className="relative overflow-hidden pb-[80px] md:pb-[110px]">
      <PageHead page="ACTION">
      Actions Individuals Should Take to Amplify Their Impact
      </PageHead>
      <div className="flex justify-center px-5 md:my-[100px] my-[50px]">
        <p className="md:text-[16px] text-[14px] text-white max-w-[690px] leading-loose tracking-[0.15em]">
        Every person has a crucial role in guiding our planet towards a sustainable future. The impact of individual actions on the Earth's environment is immense, especially when it comes to choosing technologies. Mist computing is a noteworthy technology in this regard. This innovative approach provides a sustainable and efficient alternative to traditional centralized computing and AI models, emphasizing the significant impact of personal technology choices on environmental sustainability.
        </p>
      </div>
      <div className="md:space-y-[112px] space-y-[60px] md:mb-[160px] mb-[90px]">
        <Section no="1" image="/images/action-01.png" title={<>Advantages of Mist Computing-Based Services</>}>
        Mist computing enables data processing and storage at a local level, rather than relying on centralized data centers. This approach leads to reduced energy consumption and lower CO2 emissions, making it an environmentally friendly option. Specifically, mist computing improves energy efficiency by reducing data transfer distances, saves bandwidth through local data processing with offline responses, and enhances data security and privacy due to its distributed architecture.
        </Section>
        <Section no="2" image="/images/action-02.png" title={<>Choosing Services Based on Mist Computing</>}>
        For individuals, selecting services and products based on mist computing is crucial for environmentally responsible behavior. For instance, distributed cloud storage services and edge computing devices efficiently manage personal data while reducing energy consumption.
        </Section>
        <Section no="3" image="/images/action-03.png" title={<>Practical Service Example: Diver Storage</>}>
        Diver Storage is an example of an innovative cloud storage service based on mist computing. It utilizes a distributed network to enhance data security while also reducing energy consumption. Diver Storage enables individual devices to function as part of the network, locally storing and processing data fragments, making it more efficient and eco-friendlier than traditional cloud storage. Additionally, it offers fundamental cloud storage capabilities, including data preview,
upload, download, folder management, and sharing, providing a comprehensive storage service comparable to conventional cloud storage options.
        </Section>
        <Section no="4" image="/images/action-04.png" title={<>Promoting Eco-Friendly Technology</>}>
        Individuals choosing services based on mist computing contribute to the spread of eco-friendly technology. Active use and advocacy of these services by individuals encourage more people to adopt environmentally friendly technologies. Consumer choices influence the market, fostering the development of sustainable products and services. Regularly reviewing and seeking alternatives for everyday services, including storage solutions, is a right we all possess. As pilots of our planet, let’s reclaim the sovereignty of our actions and steer towards eco-conscious decisions!
        </Section>
      </div>
      <NextPage image="/images/next-diver.png" link="/diver" name="DIVER Storage" />
    </main>
  );
}
