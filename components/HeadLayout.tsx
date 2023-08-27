import Image from "next/image";
import H from "./H";
import Link from "./Link";
import LogoLight from "public/logo/light.png";

const HeadLayout = () => {
  return (
    <header className="w-full top-0 left-0 fixed z-40 bg-transparent text-zinc-900">
      <section className="w-full px-8 2xl:px-0 max-w-cutoff mx-auto">
        <H
          variant={1}
          lato
          className="uppercase font-bold tracking-[0.125rem] bg-zinc-800 p-4 w-max text-white rounded-b-lg shadow-2xl border-b border-x border-zinc-300/30"
        >
          <Link href={"/"} className="text-xl">
            <Image src={LogoLight} alt="Ask Marketing Logo - Dark" width={40} />
          </Link>
        </H>
      </section>
    </header>
  );
};

export default HeadLayout;
