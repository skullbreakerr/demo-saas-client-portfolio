import React from 'react';
import { TestimonialSection, HeroSection,CtaSection } from '@/components/sections';
import { testimonials,clients } from '@/data';
import { useRouter } from 'next/router';

const Testimonials = () => {
    const route = useRouter();
    const handleRouteChange = ()=>{
        route.push('/pricing')
    }
    return (
        <>
            <HeroSection
                id="testimonial-section"
                badge={{
                    href: "#",
                    icon: "tabler:",
                    label: "Surprising Prices!!",
                }}
                title={'Testing the Pricing Section'}
                buttons={[
                    {
                        label: "btn3",
                        color: "dark",
                    },
                ]}
                clientsLabel="Trusted by 1000+ Clients"
                clients={clients}
            />
            <TestimonialSection
                id="testimonials"
                title="Love from our customers"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique
                    veritatis"
                badge={{
                    leading: true,
                    icon: "tabler:heart",
                    label: "TESTIMONIALS",
                }}
                testimonials={testimonials}
                button={{
                    icon: "tabler:brand-x",
                    label: "Share Your Feedback on",
                    href: "#",
                    color: "white",
                }}
            />
            <CtaSection
                title="Learn More About Features?"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique"
                buttons={[
                    { label: "What's New", href:"/features", color: "primary" }
                ]}
            />
        </>
    )
}
export default Testimonials;