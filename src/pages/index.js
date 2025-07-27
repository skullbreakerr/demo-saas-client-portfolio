import {
  HeroSection,
  TestimonialSection,
  FaqSection,
  PricingSection,
  LargeFeatureSection,
  CtaSection,
} from "#/sections";

import {
  faqs,
  testimonials,
  features,
  pricing,
  clients,
} from "@/data";

export default function Home() {

  return (
    <>
      <HeroSection
        id="home"
        badge={{
          href: "#",
          icon: "tabler:arrow-right",
          label: "😻 Learn What's New",
        }}
        title="Your Mailbox is simplified"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            expedita, ipsam nobis blanditiis provident ducimus aut, velit
            facere fugit praesentium"
        buttons={[
          {
            href: "#",
            label: "Start Free Trail",
            color: "dark",
          },
          {
            href: "#",
            label: "Learn More",
            color: "transparent",
            variant: "link",
            icon: "tabler:arrow-right",
          },
        ]}
        image={{
          src: "./tablet-mockup.png",
          alt: "Product Screenshot on Tablet",
          className: "w-full h-auto",
        }}
        clientsLabel="Trusted by 100+ Brands"
        clients={clients}
      />

      <CtaSection
        title="Ready to get started?"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique"
        buttons={[{ label: "Start for Free", href: "#", color: "dark" }]}
      />
    </>
  );
}
