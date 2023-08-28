import { IoIosArrowForward } from "react-icons/io";
import H from "./H";
import Link from "./Link";
import P from "./P";

const AboutChannel = () => {
  return (
    <div id="about" className="h-auto w-full bg-zinc-100 text-zinc-800">
      <section className="grid grid-cols-1 max-w-xl mx-auto px-8 2xl:px-0 py-20 gap-8 md:gap-12">
        <article className="flex flex-col text-center">
          <H
            variant={3}
            lato
            className="text-xl lg:text-2xl 2xl:text-3xl font-medium uppercase tracking-[0.125rem]"
          >
            About ASK MARKETING
          </H>
          <article className="flex items-center gap-x-2.5 my-6 md:my-8 lg:my-10 w-max mx-auto">
            <span className="w-2 h-2 bg-zinc-800 block" />
            <span className="w-2 h-2 bg-zinc-800 block" />
            <span className="w-2 h-2 bg-zinc-800 block" />
          </article>
          <P lato className="self-center lg:text-lg text-zinc-400">
            We aims to help local and global businesses to boost their potential
            by providing deeply researched and developed marketing solutions.
            <br />
            <br />
            We are passionate about what we do because when we grow, it means
            that our clients are growing too.
          </P>
        </article>
        <article className="bg-transparent text-zinc-900 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6  border-l-2 border-zinc-300/30">
            <div className="flex flex-col gap-y-1.5">
              <H
                variant={4}
                lato
                className="capitalize text-base lg:text-lg tracking-[0.075rem] text-zinc-700"
              >
                How We Work
              </H>
              <P nunito className="font-light text-sm lg:text-base opacity-50">
                Our priority to is to communicate with our client to make sure
                that we fully understand what the client demands.
              </P>
            </div>
          </div>
          <div className="p-6  border-l-2 border-zinc-300/30">
            <div className="flex flex-col gap-y-1.5">
              <H
                variant={4}
                lato
                className="capitalize text-base lg:text-lg tracking-[0.075rem] text-zinc-700"
              >
                Our Team
              </H>
              <P nunito className="font-light text-sm lg:text-base opacity-50">
                Our team consists of experts in marketing, design and
                engineering. All of us come together to build our client
                products.
              </P>
            </div>
          </div>
        </article>
        <article>
          <Link
            href={"/about"}
            className="flex items-center gap-x-2.5 font-medium font-lato uppercase tracking-[0.075rem] w-max mx-auto px-8 py-3 rounded-lg bg-zinc-900 text-white lg:hover:bg-zinc-600"
          >
            <span>Here&apos;s Our Company</span>
            <IoIosArrowForward />
          </Link>
        </article>
      </section>
    </div>
  );
};

export default AboutChannel;
