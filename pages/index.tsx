import H from "@/components/H";
import Link from "@/components/Link";
import P from "@/components/P";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div className="relative w-full">
        <div
          id="hero"
          className="h-screen w-full bg-white flex flex-col justify-center items-center"
        >
          <section className="px-8 py-20 lg:py-28 2xl:px-0 max-w-cutoff mx-auto w-full">
            <article className="flex flex-col items-center gap-y-4">
              <H
                variant={1}
                lato
                className="uppercase font-medium text-xl md:text-2xl lg:text-4xl tracking-[0.35rem]"
              >
                ASK MARKETING
              </H>
              <H
                variant={2}
                lato
                className="tracking-[0.075rem] text-base md:text-lg lg:text-xl font-light text-center"
              >
                Brand&apos;s Potential To Innovative Marketing Solutions
              </H>
              <Link
                href={"/services"}
                className="tracking-[0.075rem] flex items-center gap-x-2.5 uppercase lg:hover:bg-zinc-700 lg:hover:text-white lg:text-lg"
              >
                <span>Our Services</span>
                <IoIosArrowForward className="text-lg lg:text-xl" />
              </Link>
            </article>
          </section>
        </div>
        <div id="about" className="h-auto w-full bg-transparent">
          <section className="grid grid-cols-1 lg:grid-cols-2 max-w-cutoff mx-auto">
            <article className="text-white flex flex-col bg-zinc-100">
              <H
                variant={3}
                lato
                className="text-xl lg:text-2xl font-medium uppercase tracking-[0.125rem] bg-white text-zinc-900 w-max p-8"
              >
                About ASK MARKETING
              </H>
              <P
                lato
                className="p-8 lg:p-16 self-center lg:text-lg text-zinc-500"
              >
                We aims to help local and global businesses to boost their
                potential by providing deeply researched and developed marketing
                solutions.
                <br />
                <br />
                We are passionate about what we do because when we grow, it
                means that our clients are growing too.
              </P>
            </article>
            <article className="bg-white text-zinc-900 p-8 flex flex-col justify-center gap-y-4">
              <div className="rounded-xl p-6 bg-zinc-700 text-white">
                <div className="flex flex-col gap-y-1.5">
                  <H
                    variant={4}
                    lato
                    className="capitalize text-base lg:text-lg tracking-[0.075rem]"
                  >
                    How We Work
                  </H>
                  <P
                    nunito
                    className="font-light text-sm lg:text-base opacity-75"
                  >
                    Our priority to is to communicate with our client to make
                    sure that we fully understand what the client demands.
                  </P>
                </div>
              </div>
              <div className="rounded-xl p-6 bg-zinc-700 text-white">
                <div className="flex flex-col gap-y-1.5">
                  <H
                    variant={4}
                    lato
                    className="capitalize text-base lg:text-lg tracking-[0.075rem]"
                  >
                    Our Team
                  </H>
                  <P
                    nunito
                    className="font-light text-sm lg:text-base opacity-75"
                  >
                    Our team consists of experts in marketing, design and
                    engineering. All of us come together to build our client
                    products.
                  </P>
                </div>
              </div>
            </article>
          </section>
        </div>
        <div id="services" className="w-full h-auto bg-zinc-700 text-white">
          <section className="px-8 py-20 lg:py-28 2xl:px-0 max-w-cutoff mx-auto w-full">
            <article className="flex flex-col gap-y-2.5 lg:gap-y-4 mb-5 lg:mb-8">
              <H
                variant={3}
                lato
                className="uppercase font-semibold tracking-[0.25rem] text-2xl lg:text-3xl 2xl:text-4xl"
              >
                Marketing Services
              </H>
              <P
                lato
                className="capitalize text-lg lg:text-xl max-w-xl lg:leading-[1.67] font-light"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
                veritatis laborum mollitia dolor molestias minima quas delectus
                eos, velit obcaecati? Similique aliquid omnis adipisci dicta
                aperiam veniam a? Veritatis, laborum.
              </P>
            </article>
            <ul className="gap-6 grid grid-cols-1 md:grid-cols-2">
              <div className="rounded-lg bg-zinc-900 text-white p-6"></div>
              <div className="rounded-lg bg-zinc-900 text-white p-6"></div>
              <div className="rounded-lg bg-zinc-900 text-white p-6"></div>
              <div className="rounded-lg bg-zinc-900 text-white p-6"></div>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
