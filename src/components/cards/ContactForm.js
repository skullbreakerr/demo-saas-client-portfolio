import React from "react";
import { Form, Input, Button, message } from "antd";

const { TextArea } = Input;

const ContactForm =({ form, onFinish })=>{
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Send us a Message</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        requiredMark={false}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Your Name" size="large" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="Your Email" size="large" />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please enter your message" }]}
        >
          <TextArea rows={4} placeholder="Your Message" size="large" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="w-full"
          >
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ContactForm;