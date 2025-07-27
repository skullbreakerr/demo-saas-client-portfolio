import React from "react";
import  {FeatureSection}  from "../components/sections/FeatureSection";
import  {LargeFeatureSection}  from "../components/sections/LargeFeatureSection";
import { HeroSection, CtaSection } from "@/components/sections";
import { features } from "@/data";

const Features = () => {
    return (
        <>
        <HeroSection 
        id="feature-section"
        badge={{
          href: "#",
          icon: "tabler:arrow-left",
          label: "Note taking Features!!",
        }}
        title={'Testing the Hero Section'}
        buttons={[
            {
                label:"btn1",
                color:'transparent',
            },
            {
                label:"btn2",
                color:"dark",
            },
            {
                label:"btn3",
                color:"primary",
            },
        ]}
        />
            <FeatureSection
                    id="features"
                    title="Discover Our Amazing Features"
                    description="Explore the wide range of powerful features that our product offers. From advanced analytics to seamless integrations, we have everything you need to succeed."
                    features={features}
                />
                <LargeFeatureSection
                    title="Stay on top of your business"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique"
                    list={features.slice(0, 3)}
                    image={{
                        src: "./phone-mockup.png",
                        alt: "Image",
                        className:
                            "w-full aspect-square object-contain rotate-6 hover:rotate-0 duration-300 ease-in-out",
                    }}
                />
                <LargeFeatureSection
                    reverse={true}
                    title="Stay on top of your business"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique"
                    list={features.slice(0, 3)}
                    image={{
                        src: "./phone-mockup.png",
                        alt: "Image",
                        className:
                            "w-full aspect-square object-contain -rotate-6 hover:rotate-0 duration-300 ease-in-out",
                    }}
                />

                
            <CtaSection
                title="Ready to get started?"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique"
                buttons={[{ label: "Start for Free", href: "#", color: "dark" },{label:"Learn More",href:"/pricing",color:"primary"}]}
            />
        </>
    )
};

export default Features;