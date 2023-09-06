import ButtonLink from '@/app/components/common/button'
import PropTypes from "prop-types";

function FlowItem({step, title, content}) {
    return (
        <div className="bg-white rounded-[10px] shadow-[0px_0px_30px_rgba(114,159,217,0.2)] pt-[10%] pb-[6%] px-[6.5%] relative">
            <div className="text-center justify-center text-[16px] md:text-[22px] font-medium h-[55px] flex items-center leading-tight">{title}</div>
            <p className="text-[12px] md:text-[16px] font-medium mt-5 leading-[1.7]">
                {content}
            </p>
            <span className="text-[100px] md:text-[240px] font-bold text-[#0045a6]/[0.2] absolute right-0 bottom-0 leading-[0.7] text-right flex justify-end tracking-tight">{step}</span>
        </div>
    )
}

FlowItem.propTypes = {
    step: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
  };

export default function Flow() {
  return (
    <div className="bg-[#fff] pt-12 md:pt-[125px] pb-20 md:pb-[170px] px-5">
        <div className="w-full max-w-[1640px] mx-auto">
            <h4 className="text-[28px] md:text-[42px] font-bold text-center">Development flow</h4>
            <div className="grid gap-3 md:gap-[30px] lg:grid-cols-4 grid-cols-2 mt-12">
                <FlowItem step="01" title="Blockchain Development" content={<>First, we plan and design any development project. This includes defining goals and requirements, choosing the blockchain platform to use, designing the network structure, creating the data model, etc. At this stage, the project objectives and business requirements are clarified, and the blockchain architecture and specifications are determined.</>} />
                <FlowItem step="02" title={<>Development and <br />implementation</>} content={<>Once the design is complete, the actual development work begins. This includes setting up the blockchain network, developing smart contracts, setting up nodes, implementing security features, etc. Developers implement the required components using their blockchain platform and programming language of choice. Testing and quality assurance also play an important role at this stage.</>} />
                <FlowItem step="03" title="Testing and Debugging" content={<>As development progresses, testing and debugging are essential. Create various test cases and evaluate the system to ensure the exact behavior of the services you build. This includes unit tests, integration tests, performance tests, security tests, etc. If any bugs or issues are found, we will fix and debug them.</>} />
                <FlowItem step="04" title="Deploy and Operate" content={<>Once testing is complete, deploy the service you provide to your users into production. This includes setting up networking, deploying nodes, establishing security configurations, etc. In addition, service operation and maintenance is also important. We monitor the network, manage upgrades, and strengthen security to ensure the stable operation of the blockchain system.</>} />
            </div>
        </div>
    </div>
  )
}
