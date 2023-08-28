import H from "./H";
import Link from "./Link";
import P from "./P";

interface WorkChannelProps {
  children?: React.ReactNode;
}

const WorkChannel: React.ComponentType<WorkChannelProps> = ({
  children = null,
}) => {
  return (
    <div id="works" className="w-full h-auto bg-zinc-50 text-zinc-900">
      <section className="px-8 py-20 lg:py-28 2xl:px-0 max-w-cutoff mx-auto w-full">
        <article className="flex flex-col gap-y-2.5 lg:gap-y-4 mb-8 lg:mb-12">
          <H
            variant={3}
            lato
            className="uppercase font-semibold tracking-[0.25rem] text-2xl lg:text-3xl 2xl:text-4xl"
          >
            Our Works
          </H>
          <P
            lato
            className="text-lg lg:text-xl max-w-xl lg:leading-[1.67] font-light"
          >
            We&apos;ve worked with business like restaurants, clinics, and
            corporations to boost their brand&apos;s potentials.{" "}
            <Link
              href={"/works"}
              className="text-pink-400 underline lg:no-underline lg:hover:underline"
            >
              View more
            </Link>
          </P>
        </article>
        {children ? (
          <ul className="gap-6 grid grid-cols-1 lg:grid-cols-3 w-max max-w-full">
            {children}
          </ul>
        ) : (
          <p className="bg-pink-500/10 border border-pink-500/25 text-pink-500 rounded-lg text-center p-8">
            Currently not available.
          </p>
        )}
      </section>
    </div>
  );
};

export default WorkChannel;
