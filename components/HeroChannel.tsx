import { IoIosArrowForward } from "react-icons/io";
import H from "./H";
import Link from "./Link";

const HeroChannel = () => {
  return (
    <div
      id="hero"
      className="h-screen w-full bg-zinc-50 text-zinc-900 flex flex-col justify-center items-center"
    >
      <section className="px-8 py-20 lg:py-28 2xl:px-0 max-w-cutoff mx-auto w-full">
        <article className="flex flex-col items-center relative w-max mx-auto">
          <H
            variant={1}
            lato
            className="uppercase font-medium text-xl md:text-2xl lg:text-4xl 2xl:text-5xl tracking-[0.35rem] mb-1 lg:mb-2 2xl:mb-3"
          >
            ASK MARKETING
          </H>
          <H
            variant={2}
            lato
            className="tracking-[0.075rem] text-base md:text-lg lg:text-xl 2xl:text-2xl font-light text-center mb-4 lg:mb-6 2xl:mb-8"
          >
            Rennovate Your Brand&apos;s Potential
          </H>
          <Link
            href={"/services"}
            className="flex items-center gap-x-2.5 font-medium font-lato uppercase tracking-[0.075rem] w-max mx-auto px-8 py-3 rounded-lg bg-zinc-900 text-white lg:hover:bg-zinc-600"
          >
            <span>Our Services</span>
            <IoIosArrowForward className="text-lg lg:text-xl" />
          </Link>
        </article>
      </section>
    </div>
  );
};

export default HeroChannel;
