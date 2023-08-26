import P from "./P";

const FootLayout = () => {
  return (
    <footer className="w-full bg-zinc-100/50 text-zinc-900 border-t border-zinc-400/25">
      <section className="w-full px-6 py-16 lg:py-20 2xl:px-0 max-w-cutoff mx-auto">
        <P lato className="text-sm text-center text-zinc-500">
          ASK MARKETING &copy; 2023. All Rights Reserved.
        </P>
      </section>
    </footer>
  );
};

export default FootLayout;
