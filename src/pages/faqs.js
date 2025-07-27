import React from "react";
import { FaqSection, HeroSection, CtaSection, LargeFeatureSection } from "@/components/sections";
import { faqs,features } from "@/data";

const Faqs = () => {
    return (
        <>
            <HeroSection
                id="faqs-section"
                badge={{
                    href: "#",
                    icon: "tabler:arrow-right",
                    label: "Interesting Questions!!",
                }}
                title={'Testing the FAQ Section'}
                buttons={[
                    {
                        label: "btn",
                        color: "primary",
                        block: true,
                    },
                    {
                        label: "btn2",
                        color: "blue",
                        block: true,
                    },
                    {
                        label: "btn3",
                        color: "orange",
                        block: true,
                    },
                    {
                        label: "btn4",
                        color: "dark",
                        block: true,
                    },
                ]}
            />
            <FaqSection
                id="faqs"
                title="Frequently Asked Questions"
                description="Here are some of our most frequently asked questions. If you have a question that isn't answered here, please feel free to contact us."
                buttons={[
                    {
                        label: "Contact Support",
                        href: "#",
                        color: "primary",
                        variant: "link",
                        icon: "tabler:arrow-right",
                    },
                ]}
                faqs={faqs}
            />
            <LargeFeatureSection
                title="Great Service Provided To Clients"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique"
                list={features.slice(0, 3)}
                image={{
                    src: "./phone-mockup.png",
                    alt: "Image",
                    className:
                        "w-full aspect-square object-contain rotate-6 hover:rotate-0 duration-300 ease-in-out",
                }}
            />

            <CtaSection
                title="Ready to get started?"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique"
                buttons={[{ label: "Start for Free", href: "#", color: "transparent" }, { label: "Pricing", href: "/pricing", color: "dark" }]}
            />
        </>
    )
}
export default Faqs;