import H from "./H";
import Link from "./Link";

const HeadLayout = () => {
  return (
    <header className="w-full top-0 left-0 fixed z-40 bg-transparent text-zinc-900 backdrop-blur-sm">
      <section className="w-full px-8 2xl:px-0 max-w-cutoff mx-auto">
        <H
          variant={1}
          lato
          className="uppercase font-bold tracking-[0.125rem] bg-zinc-800 p-6 w-max text-white"
        >
          <Link href={"/"} className="text-xl">
            ASK
          </Link>
        </H>
      </section>
    </header>
  );
};

export default HeadLayout;
