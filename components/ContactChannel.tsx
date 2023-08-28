import Image from "next/image";
import LightLogo from "public/logo/light.png";
import H from "./H";
import P from "./P";

interface ContactChannelProps {
  isLoading: boolean;
  childrens: {
    form: React.ReactNode;
    loading: React.ReactNode;
  };
}

const ContactChannel: React.ComponentType<ContactChannelProps> = ({
  isLoading,
  childrens,
}) => {
  return (
    <div id="contact" className="w-full h-auto bg-zinc-900 text-white">
      <section className="px-8 py-20 lg:py-28 2xl:px-0 max-w-cutoff mx-auto w-full grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <article className="flex flex-col gap-y-2.5 lg:gap-y-4 mb-8 lg:mb-12">
          <picture className="block pb-4">
            <Image src={LightLogo} alt="Ask Marketing - Logo" width={60} />
          </picture>
          <H
            variant={3}
            lato
            className="uppercase font-semibold tracking-[0.25rem] text-2xl lg:text-3xl 2xl:text-4xl"
          >
            Contact Us
          </H>
          <P
            lato
            className="text-lg lg:text-xl max-w-xl lg:leading-[1.67] font-light"
          >
            If you have any questions or would like to send an inquiry, please
            send it directly from the from below. Our priority is our current
            and future clients, we will respond to your email as soon as we can.
          </P>
        </article>
        <article className="max-w-sm w-full">
          {isLoading ? childrens.loading : childrens.form}
        </article>
      </section>
    </div>
  );
};

export default ContactChannel;
