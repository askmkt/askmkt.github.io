import { Service } from "@/db/db_types";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import H from "./H";
import P from "./P";
import Link from "./Link";

interface ServiceCardProps extends Service {}

const ServiceCard: React.ComponentType<ServiceCardProps> = ({
  name,
  description: _,
  image,
  slug,
  href,
}) => {
  return (
    <div className="relative rounded-lg bg-zinc-900 lg:hover:bg-zinc-800 text-white group overflow-hidden cursor-pointer transition-all">
      <article className="absolute w-full items-center z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-1.5">
        <H
          variant={4}
          lato
          className="font-medium uppercase tracking-[0.075rem] text-xl lg:text-2xl 2xl:text-3xl lg:group-hover:scale-110 transition-all duration-[0.55s] ease-in-out lg:mt-6 lg:group-hover:mt-0"
        >
          {name}
        </H>
        <Link
          href={href as string}
          className="font-nunito font-light text-zinc-300 lg:group-hover:hover:text-blue-400 lg:scale-0 lg:group-hover:scale-100 flex items-center gap-x-1.5 transition-all duration-[0.55s] ease-in-out"
        >
          <span>{slug}</span>
          <IoIosArrowForward />
        </Link>
      </article>
      <picture className="relative z-0 block overflow-hidden grayscale">
        <Image
          src={image}
          alt={`Ask Marketing Service - ${name}`}
          className="opacity-25 lg:opacity-75 transition-all duration-[0.55s] ease-in-out lg:group-hover:opacity-25"
        />
      </picture>
    </div>
  );
};

export default ServiceCard;
