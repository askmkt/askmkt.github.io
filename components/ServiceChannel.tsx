import H from "./H";
import P from "./P";

interface ServiceChannelProps {
  children: React.ReactNode;
}

const ServiceChannel: React.ComponentType<ServiceChannelProps> = ({
  children,
}) => {
  return (
    <div id="services" className="w-full h-auto bg-zinc-50 text-zinc-500">
      <section className="px-8 py-20 lg:py-28 2xl:px-0 max-w-cutoff mx-auto w-full">
        <article className="flex flex-col gap-y-2.5 lg:gap-y-4 mb-8 lg:mb-12">
          <H
            variant={3}
            lato
            className="uppercase font-semibold tracking-[0.25rem] text-2xl lg:text-3xl 2xl:text-4xl"
          >
            Our Services
          </H>
          <P
            lato
            className="text-lg lg:text-xl max-w-xl lg:leading-[1.67] font-light"
          >
            We provide various marketing solutions for small-to-large scale
            businesses. The following is the list of common marketing scopes we
            work with our clients.
          </P>
        </article>
        <ul className="gap-6 grid grid-cols-1 lg:grid-cols-3 w-max max-w-full">
          {children}
        </ul>
      </section>
    </div>
  );
};

export default ServiceChannel;
