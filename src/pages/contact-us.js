import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { HeroSection, CtaSection } from '@/components/sections';
import ContactForm from '@/components/cards/ContactForm';
import ApiService from '@/services/ApiService';
const ContactUs = () => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            const { data } = await ApiService.post("/contact", values);
            message.success("Your message has been sent!");
            form.resetFields();
        } catch (err) {
            message.error(err.response?.data?.message || "Something went wrong.");
        }
    };

    return (
        <>
            <HeroSection
                id="contact-us"
                badge={{
                    href: "#",
                    icon: "tabler:mail",
                    label: "Get in Touch",
                }}
                buttons={[]}
                title="Contact Us"
                description="We would love to hear from you!"
            />
            <div
                className="relative min-h-screen flex items-center justify-center bg-gray-900"
                style={{
                    backgroundImage:
                        "url('https://static.vecteezy.com/system/resources/thumbnails/020/804/109/full_2x/communication-and-technology-concept-hand-putting-wooden-block-cube-symbol-telephone-email-address-website-page-contact-us-or-e-mail-marketing-contact-us-in-customer-support-concept-photo.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative  max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center justify-center p-8 rounded-xl shadow-2xl backdrop-blur-md bg-white/80">
                    <div className="hidden md:block md:w-1/2 pr-8">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Have Questions?</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Our team is here to help you. Fill out the form and we’ll get back to you as soon as possible.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li><strong>Email:</strong> support@example.com</li>
                            <li><strong>Phone:</strong> +1 234 567 890</li>
                            <li><strong>Address:</strong> 123 Main St, City, Country</li>
                        </ul>
                    </div>
                    {/* <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6"> */}
                    <ContactForm form={form} onFinish={onFinish} />
                    {/* </div> */}
                </div>
            </div>

            <CtaSection
                title="Learn More About Features?"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique"
                buttons={[{ label: "Features", href: "/features", color: "transparent" }, { label: "Pricing", href: "/pricing", color: "dark" }]}
            />

        </>
    );
};

export default ContactUs;