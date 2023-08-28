import type { StaticImageData } from "next/image";

export type Service = {
  name: string;
  description: string;
  slug: string;
  image: StaticImageData;

  href?: string;
};
