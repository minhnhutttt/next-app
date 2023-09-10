import PageTitle from "../components/common/pageTitle";

export default function About() {
  return (
    <main>
      <PageTitle>About</PageTitle>
      <div className="bg-[url('/bg-m.png')] bg-[length:100%_100%] bg-center px-5 pb-[60px] pt-10 md:pb-[190px] md:pt-[110px]">
        <div className="mx-auto w-full max-w-[920px] bg-[url('/m-logo.png')] bg-center bg-no-repeat max-md:bg-[length:260px_auto]">
          <p className="text-[14px] leading-[1.75] tracking-[0.08em] md:text-[18px]">
            META MAGIC is a group of cryptocurrency, analytics and engineering
            experts. Our expertise and focus is on growing blockchain technology
            by improving the world of decentralized identities. From our
            experience, we have found that a core element of identity, whether
            on-chain or off-chain, is a name. That was the beginning of the
            DIVER Name Service. <br />
            <br />
            As proponents of Web3, we believe that names should be controlled by
            the owners themselves and data should be decentralized while
            preserving privacy. Brand, familiarity, or some kind of similarity
            is important to build a reputation in Web3 or Web2. For this reason,
            we are working on the development of the DIVER Name Service
            (Distributed Naming). This allows for the creation of secure
            pseudo-anonymous identities while allowing people to have influence
            on-chain.
            <br />
            <br />
            The DeFi phenomenon has been a huge success, but there is still much
            more to be achieved. In order to achieve sustainable and
            groundbreaking development, it is necessary to aim for large-scale
            diffusion. We believe this is possible by finding a comfortable
            bridge with the current web and ensuring convenience in crossing
            that bridge. Our product offers both.
          </p>
        </div>
      </div>
    </main>
  );
}
