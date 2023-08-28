import Branding from "public/services/branding.png";
import Marketing from "public/services/marketing.png";
import Engineering from "public/services/engineering.png";
import { Service } from "@/db/db_types";
import dynamic from "next/dynamic";
import { useState } from "react";
const HeroChannel = dynamic(() => import("@/components/HeroChannel"));
const AboutChannel = dynamic(() => import("@/components/AboutChannel"));
const ServiceChannel = dynamic(() => import("@/components/ServiceChannel"));
const ServiceCard = dynamic(() => import("@/components/ServiceCard"));
const WorkChannel = dynamic(() => import("@/components/WorkChannel"));
const ContactChannel = dynamic(() => import("@/components/ContactChannel"));
const ContactForm = dynamic(() => import("@/components/ContactForm"));
const ContactLoading = dynamic(() => import("@/components/ContactLoading"));

export default function Home() {
  const services: Service[] = [
    {
      name: "Branding",
      description: "From 0 to 100",
      slug: "Plan from 0 to 100",
      image: Branding,
      href: "/services/branding",
    },
    {
      name: "Marketing",
      description: "",
      slug: "Increase awareness & sales",
      image: Marketing,
      href: "/services/marketing",
    },
    {
      name: "Engineering",
      description: "",
      slug: "Site & platform development",
      image: Engineering,
      href: "/services/engineering",
    },
  ];

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>("");

  async function onSubmit(
    e: React.FormEvent,
    sendEmail: () => Promise<boolean>
  ): Promise<void> {
    e.preventDefault();

    setIsLoading(true);
    setLoadingMessage("Sending email now...");
    const result = await sendEmail();
    if (result) {
      setLoadingMessage("Successfully sent email.");
    } else {
      setLoadingMessage("Failed to sent the email.");
    }
    setIsLoading(false);
  }

  return (
    <>
      <HeroChannel />
      <AboutChannel />
      <ServiceChannel>
        {services.map((service, idx) => (
          <ServiceCard {...service} key={idx} />
        ))}
      </ServiceChannel>
      <WorkChannel />
      <ContactChannel
        isLoading={isLoading}
        childrens={{
          form: <ContactForm onSubmit={onSubmit} />,
          loading: <ContactLoading message={loadingMessage} />,
        }}
      />
    </>
  );
}
