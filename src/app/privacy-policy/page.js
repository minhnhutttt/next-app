import PageTitle from "../components/common/pageTitle";
import TextBlock from "../components/common/textBlock";

export default function PrivacyPolicy() {
  return (
    <main>
      <PageTitle>Privacy policy</PageTitle>
      <div className="px-5">
        <div className="font-['Work_Sans] mx-auto mb-20 mt-5 w-full max-w-[1000px] space-y-8 md:mb-[154px] md:mt-[52px] md:space-y-10">
          <div className="mb-10 md:mb-[60px]">
            <TextBlock>
              Thank you for using DIVER Tag, a service that allows you to
              associate NFTs with DIVER&apos;s proprietary NFT tags, and to
              transfer the associated NFTs to a specified address by reading the
              NFC tag.
              <br />
              <br />
              This document, our Privacy Policy, governs how DIVER Tag
              (collectively “we”, “us”, “DIVER Tag”) handles our users’ (“you,”
              “your,” etc.) data both in the DIVER Tag app itself (the “DIVER
              Tag App” or “DIVER Tag”) and on our website/servers (collectively,
              the “Services”).
              <br />
              <br />
              Our Privacy Policy is incorporated into and is subject to the
              DIVER Tag Terms of Service, so please read both documents
              carefully. Your use of the Services indicates your consent to this
              Privacy Policy and our Terms of Service. If you do not want to be
              bound by these agreements, you may not use our Services.
            </TextBlock>
          </div>
          <TextBlock title="Collection of Information">
            When you use our Services, we automatically collect information from
            your devices. For example, we may collect:
            <br />
            <br />
            <strong>Log Information:</strong> <br />
            We collect log information when you use our Services, including
            access times, pages viewed, IP address, and the web page that
            referred you to our website.
            <br />
            <br />
            <strong>Device Information:</strong>
            <br />
            We collect information about the computer or mobile device you use
            to access our Services, including the hardware model, operating
            system and version, your web browser, and device identifiers.
            <br />
            <br />
            <strong>Network Information:</strong>
            <br />
            If you use our Services, we may collect bandwidth upload and
            download speeds, and other statistics about your device and network
            connection.
            <br />
            <br />
            <strong>Usage Information:</strong>
            <br />
            If you use our Services, we may collect metadata about your usage
            and the file shards that are distributed via the Services (including
            shard size, number of shards, and frequency of access), and we may
            record instances in which you have used your private key to
            authenticate communications.
          </TextBlock>
          <TextBlock title="Use of Information">
            We may use information about you for various purposes, including to:
            <br />
            <br />
            <ol className="list-decimal pl-6">
              <li>Provide, maintain, deliver, and improve our Services;</li>
              <li>Develop new products and services;</li>
              <li>Personalize your experience;</li>
              <li>Respond to your requests for information;</li>
              <li>
                Send you technical notices as well as support and administrative
                messages;
              </li>
              <li>
                Subject to applicable legal obligations, communicate with you
                about products, services, promotions, events, and other news and
                information we think will be of interest to you;
              </li>
              <li>
                Monitor and analyze trends, usage, and activities in connection
                with our Services;
              </li>
              <li>
                Detect, investigate, and prevent suspected fraudulent
                transactions and other illegal activities, and protect the
                rights and property of Storj and others;
              </li>
              <li>
                Investigate good-faith, alleged violations of our Agreements;
              </li>
              <li>Secure our Services and Customers;</li>
              <li>Link or combine information we collect from or about you;</li>
              <li>
                Carry out any other purpose for which the information was
                collected; and,
              </li>
              <li>
                Fulfill other purposes with your consent or at your direction.
              </li>
            </ol>
            <br />
            For the purposes discussed in this Privacy Policy, we may combine
            the information that we collect through the Services with
            information that we receive from other sources, both online and
            offline, and use such combined information in accordance with this
            Privacy Policy.
          </TextBlock>
          <TextBlock title="Sharing of Information">
            We may share information about you with others as follows:
            <br />
            <br />
            <ol className="list-decimal pl-6">
              <li>
                With service providers that perform work for us so that they can
                perform such work;
              </li>
              <li>
                When you use interactive areas of our Services, like our blog or
                other online forums, certain information you choose to share may
                be displayed publicly, such as your username, actions you take,
                and any content you post;
              </li>
              <li>
                In response to a request for information if we believe
                disclosure is in accordance with, or required by, an applicable
                law, regulation, or legal process;
              </li>
              <li>
                If we believe your actions are inconsistent with our Agreements
                or policies, or to protect the rights, property, and safety of
                Storj or others;
              </li>
              <li>
                In connection with, or during negotiations of, any merger, sale
                of Company assets, financing or acquisition of all or a portion
                of our business by another company;
              </li>
              <li>
                Between and among Storj and any current and future parents,
                affiliates, subsidiaries and other companies under common
                control and ownership; or,
              </li>
              <li>With your consent or at your direction.</li>
            </ol>
          </TextBlock>
          <TextBlock title="Cookie">
            DIVER Tag does not typically use cookies. It reserves the ability to
            use them to affect the availability and functionality of our Site.
            You can deny a website the possibility to store cookies or cache
            data. In order to deny cookies or the caching of data, the User
            needs to edit the User’s browser settings. Please note that the User
            may experience less availability and functionality when using the
            Services if you chooses to turn off cookies or data cache.
          </TextBlock>
          <TextBlock title="Changes to this Privacy Policy">
            Changes to this Privacy Notice will be made when required in
            response to changing legal, technical, or business developments.
            When we update our Privacy Notice, we will take appropriate measures
            to inform you, consistent with the significance of the changes we
            make. We will obtain your consent to any material Privacy Notice
            changes if and where this is required by applicable data protection
            laws. <br />
            <br />
            You can see when this Privacy Notice was last updated by checking
            the “last updated” date displayed at the top of this Privacy Notice.
            The new Privacy Notice will apply to all current and past users of
            the website and will replace any prior notices that are inconsistent
            with it.
          </TextBlock>
          <TextBlock title="Contact">
            We welcome all questions, concerns, and feedback you might have
            about these Terms. If you have suggestions for us, please contact
            our customer success team.
          </TextBlock>
        </div>
      </div>
    </main>
  );
}
