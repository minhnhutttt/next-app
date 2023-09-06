import ButtonLink from "@/app/components/common/button";
import PropTypes from "prop-types";

function FlowItem({ step, title, content }) {
  return (
    <div className="relative rounded-[10px] bg-white px-[6.5%] pb-[6%] pt-[10%] shadow-[0px_0px_30px_rgba(114,159,217,0.2)]">
      <div className="flex h-[55px] items-center justify-center text-center text-[16px] font-medium leading-tight md:text-[22px]">
        {title}
      </div>
      <p className="mt-5 text-[12px] font-medium leading-[1.7] md:text-[16px]">
        {content}
      </p>
      <span className="absolute bottom-0 right-0 flex justify-end text-right text-[100px] font-bold leading-[0.7] tracking-tight text-[#0045a6]/[0.2] md:text-[240px]">
        {step}
      </span>
    </div>
  );
}

FlowItem.propTypes = {
  step: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

export default function Flow() {
  return (
    <div className="bg-[#fff] px-5 pb-20 pt-12 md:pb-[170px] md:pt-[125px]">
      <div className="mx-auto w-full max-w-[1640px]">
        <h4 className="text-center text-[28px] font-bold md:text-[42px]">
          Development flow
        </h4>
        <div className="mt-12 grid grid-cols-2 gap-3 md:gap-[30px] lg:grid-cols-4">
          <FlowItem
            step="01"
            title="Blockchain Development"
            content={
              <>
                First, we plan and design any development project. This includes
                defining goals and requirements, choosing the blockchain
                platform to use, designing the network structure, creating the
                data model, etc. At this stage, the project objectives and
                business requirements are clarified, and the blockchain
                architecture and specifications are determined.
              </>
            }
          />
          <FlowItem
            step="02"
            title={
              <>
                Development and <br />
                implementation
              </>
            }
            content={
              <>
                Once the design is complete, the actual development work begins.
                This includes setting up the blockchain network, developing
                smart contracts, setting up nodes, implementing security
                features, etc. Developers implement the required components
                using their blockchain platform and programming language of
                choice. Testing and quality assurance also play an important
                role at this stage.
              </>
            }
          />
          <FlowItem
            step="03"
            title="Testing and Debugging"
            content={
              <>
                As development progresses, testing and debugging are essential.
                Create various test cases and evaluate the system to ensure the
                exact behavior of the services you build. This includes unit
                tests, integration tests, performance tests, security tests,
                etc. If any bugs or issues are found, we will fix and debug
                them.
              </>
            }
          />
          <FlowItem
            step="04"
            title="Deploy and Operate"
            content={
              <>
                Once testing is complete, deploy the service you provide to your
                users into production. This includes setting up networking,
                deploying nodes, establishing security configurations, etc. In
                addition, service operation and maintenance is also important.
                We monitor the network, manage upgrades, and strengthen security
                to ensure the stable operation of the blockchain system.
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}
