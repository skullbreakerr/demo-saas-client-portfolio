import React from 'react';
import { PricingSection,HeroSection,CtaSection } from '@/components/sections';
import { pricing } from '@/data';

const Pricing = () => {
    return (
        <>
            <HeroSection
                id="pricing-section"
                badge={{
                    href: "#",
                    icon: "tabler:arrow-right",
                    label: "Surprising Prices!!",
                }}
                title={'Testing the Pricing Section'}
                buttons={[
                    {
                        label: "btn3",
                        color: "primary",
                        block: true,
                    },
                ]}
                image={{
                    src: "./pricing.png",
                    alt: "Product Screenshot on Tablet",
                    className: "w-full h-auto",
                }}
            />

            <PricingSection
                id="pricing"
                title="Pricing for Everyone"
                description="Choose a plan that works for you. All plans include a 7-day free trial."
                badge={{
                    leading: true,
                    icon: "tabler:credit-card",
                    label: "Plans",
                }}
                pricing={pricing}
            />
            
                  <CtaSection
                    title="Want More Details About Pricing ?"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique"
                    buttons={[{ label: "Contact Sales", href: "#", color: "dark" }]}
                  />
        </>
    )
}
export default Pricing;