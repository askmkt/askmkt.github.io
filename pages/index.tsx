import H from "@/components/H";
import Link from "@/components/Link";
import P from "@/components/P";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import SnsMarketing from "public/services/sns_marketing.png";
import EcommerceDevelopment from "public/services/ecommerce_development.png";
import WebsiteDevelopment from "public/services/website_development.png";

export default function Home() {
  return (
    <>
      <div className="relative w-full">
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
                className="flex items-center gap-x-2.5 font-medium font-lato uppercase tracking-[0.075rem] w-max mx-auto bg-blue-500 text-white lg:bg-transparent lg:text-zinc-500 lg:hover:bg-blue-500 lg:hover:text-white"
              >
                <span>Our Services</span>
                <IoIosArrowForward className="text-lg lg:text-xl" />
              </Link>
            </article>
          </section>
        </div>
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
                We aims to help local and global businesses to boost their
                potential by providing deeply researched and developed marketing
                solutions.
                <br />
                <br />
                We are passionate about what we do because when we grow, it
                means that our clients are growing too.
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
                  <P
                    nunito
                    className="font-light text-sm lg:text-base opacity-50"
                  >
                    Our priority to is to communicate with our client to make
                    sure that we fully understand what the client demands.
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
                  <P
                    nunito
                    className="font-light text-sm lg:text-base opacity-50"
                  >
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
                className="flex items-center gap-x-2.5 font-medium font-lato uppercase tracking-[0.075rem] w-max mx-auto bg-blue-500 text-white lg:bg-transparent lg:text-zinc-500 lg:hover:bg-blue-500 lg:hover:text-white"
              >
                <span>Here&apos;s Our Company</span>
                <IoIosArrowForward />
              </Link>
            </article>
          </section>
        </div>
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
                businesses. The following is the list of common marketing scopes
                we work with our clients.
              </P>
            </article>
            <ul className="gap-6 grid grid-cols-1 lg:grid-cols-3 w-max max-w-full">
              <div className="relative rounded-lg bg-zinc-900 lg:hover:bg-zinc-800 text-white group overflow-hidden cursor-pointer transition-all">
                <article className="absolute w-full items-center z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-1.5">
                  <H
                    variant={4}
                    lato
                    className="font-medium uppercase tracking-[0.075rem] text-xl lg:text-2xl 2xl:text-3xl lg:group-hover:scale-110 transition-all duration-[0.55s] ease-in-out lg:mt-6 lg:group-hover:mt-0"
                  >
                    SNS Marketing
                  </H>
                  <P
                    nunito
                    className="font-light text-blue-400 lg:scale-0 lg:group-hover:scale-100 lg:text-zinc-400 flex items-center gap-x-1.5 transition-all duration-[0.55s] ease-in-out lg:group-hover:text-zinc-50 lg:group-hover:hover:bg-blue-500"
                  >
                    <span>Spread on SNS platforms</span>
                    <IoIosArrowForward />
                  </P>
                </article>
                <picture className="relative z-0 block overflow-hidden grayscale">
                  <Image
                    src={SnsMarketing}
                    alt="Ask Marketing - SNS Marketing"
                    className="opacity-25 lg:opacity-75 transition-all duration-[0.55s] ease-in-out lg:group-hover:opacity-25"
                  />
                </picture>
              </div>
              <div className="relative rounded-lg bg-zinc-900 lg:hover:bg-zinc-800 text-white group overflow-hidden cursor-pointer transition-all">
                <article className="absolute w-full items-center z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-1.5">
                  <H
                    variant={4}
                    lato
                    className="font-medium uppercase tracking-[0.075rem] text-xl lg:text-2xl 2xl:text-3xl lg:group-hover:scale-110 transition-all duration-[0.55s] ease-in-out lg:mt-6 lg:group-hover:mt-0"
                  >
                    Run Ecommerce
                  </H>
                  <P
                    nunito
                    className="font-light text-blue-400 lg:scale-0 lg:group-hover:scale-100 lg:text-zinc-400 flex items-center gap-x-1.5 transition-all duration-[0.55s] ease-in-out lg:group-hover:text-zinc-50 lg:group-hover:hover:bg-blue-500"
                  >
                    <span>Create and run your ecommerce</span>
                    <IoIosArrowForward />
                  </P>
                </article>
                <picture className="relative z-0 block overflow-hidden grayscale">
                  <Image
                    src={EcommerceDevelopment}
                    alt="Ask Marketing - Ecommerce Development"
                    className="opacity-25 lg:opacity-75 transition-all duration-[0.55s] ease-in-out lg:group-hover:opacity-25"
                  />
                </picture>
              </div>
              <div className="relative rounded-lg bg-zinc-900 lg:hover:bg-zinc-800 text-white group overflow-hidden cursor-pointer transition-all">
                <article className="absolute w-full items-center z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-1.5">
                  <H
                    variant={4}
                    lato
                    className="font-medium uppercase tracking-[0.075rem] text-xl lg:text-2xl 2xl:text-3xl lg:group-hover:scale-110 transition-all duration-[0.55s] ease-in-out lg:mt-6 lg:group-hover:mt-0"
                  >
                    Build A Website
                  </H>
                  <P
                    nunito
                    className="font-light text-blue-400 lg:scale-0 lg:group-hover:scale-100 lg:text-zinc-400 flex items-center gap-x-1.5 transition-all duration-[0.55s] ease-in-out lg:group-hover:text-zinc-50 lg:group-hover:hover:bg-blue-500"
                  >
                    <span>Build a website for your business</span>
                    <IoIosArrowForward />
                  </P>
                </article>
                <picture className="relative z-0 block overflow-hidden grayscale">
                  <Image
                    src={WebsiteDevelopment}
                    alt="Ask Marketing - Website Development"
                    className="opacity-25 lg:opacity-75 transition-all duration-[0.55s] ease-in-out lg:group-hover:opacity-25"
                  />
                </picture>
              </div>
            </ul>
          </section>
        </div>
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
            <ul className="gap-6 grid grid-cols-1 lg:grid-cols-3 w-max max-w-full">
              <div className="relative rounded-lg bg-zinc-900 lg:hover:bg-zinc-800 text-white group overflow-hidden cursor-pointer transition-all">
                <article className="absolute w-full items-center z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-1.5">
                  <H
                    variant={4}
                    lato
                    className="font-medium uppercase tracking-[0.075rem] text-xl lg:text-2xl 2xl:text-3xl lg:group-hover:scale-110 transition-all duration-[0.55s] ease-in-out lg:mt-6 lg:group-hover:mt-0"
                  >
                    K-BBQ
                  </H>
                  <P
                    nunito
                    className="font-light text-pink-400 lg:scale-0 lg:group-hover:scale-100 lg:text-zinc-400 flex items-center gap-x-1.5 transition-all duration-[0.55s] ease-in-out lg:group-hover:text-zinc-50 lg:group-hover:hover:bg-pink-500"
                  >
                    <span>92 AYCE KBBQ, Torrance</span>
                    <IoIosArrowForward />
                  </P>
                </article>
                <picture className="relative z-0 block overflow-hidden grayscale">
                  <Image
                    src={SnsMarketing}
                    alt="Ask Marketing - SNS Marketing"
                    className="opacity-25 lg:opacity-75 transition-all duration-[0.55s] ease-in-out lg:group-hover:opacity-25"
                  />
                </picture>
              </div>
              <div className="relative rounded-lg bg-zinc-900 lg:hover:bg-zinc-800 text-white group overflow-hidden cursor-pointer transition-all">
                <article className="absolute w-full items-center z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-1.5">
                  <H
                    variant={4}
                    lato
                    className="font-medium uppercase tracking-[0.075rem] text-xl lg:text-2xl 2xl:text-3xl lg:group-hover:scale-110 transition-all duration-[0.55s] ease-in-out lg:mt-6 lg:group-hover:mt-0"
                  >
                    Dental Office
                  </H>
                  <P
                    nunito
                    className="font-light text-pink-400 lg:scale-0 lg:group-hover:scale-100 lg:text-zinc-400 flex items-center gap-x-1.5 transition-all duration-[0.55s] ease-in-out lg:group-hover:text-zinc-50 lg:group-hover:hover:bg-pink-500"
                  >
                    <span>Hana Dental, Torrance</span>
                    <IoIosArrowForward />
                  </P>
                </article>
                <picture className="relative z-0 block overflow-hidden grayscale">
                  <Image
                    src={EcommerceDevelopment}
                    alt="Ask Marketing - Ecommerce Development"
                    className="opacity-25 lg:opacity-75 transition-all duration-[0.55s] ease-in-out lg:group-hover:opacity-25"
                  />
                </picture>
              </div>
              <div className="relative rounded-lg bg-zinc-900 lg:hover:bg-zinc-800 text-white group overflow-hidden cursor-pointer transition-all">
                <article className="absolute w-full items-center z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-1.5">
                  <H
                    variant={4}
                    lato
                    className="font-medium uppercase tracking-[0.075rem] text-xl lg:text-2xl 2xl:text-3xl lg:group-hover:scale-110 transition-all duration-[0.55s] ease-in-out lg:mt-6 lg:group-hover:mt-0"
                  >
                    Boba & Coffee
                  </H>
                  <P
                    nunito
                    className="font-light text-pink-400 lg:scale-0 lg:group-hover:scale-100 lg:text-zinc-400 flex items-center gap-x-1.5 transition-all duration-[0.55s] ease-in-out lg:group-hover:text-zinc-50 lg:group-hover:hover:bg-pink-500"
                  >
                    <span>Almond Haus, Westminster</span>
                    <IoIosArrowForward />
                  </P>
                </article>
                <picture className="relative z-0 block overflow-hidden grayscale">
                  <Image
                    src={WebsiteDevelopment}
                    alt="Ask Marketing - Website Development"
                    className="opacity-25 lg:opacity-75 transition-all duration-[0.55s] ease-in-out lg:group-hover:opacity-25"
                  />
                </picture>
              </div>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
