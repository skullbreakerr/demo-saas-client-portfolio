/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  transpilePackages:[
    "rc-util",
    "rc-picker",
    "antd",
    "@ant-design/icons",
    "@ant-design/icons-svg",
  ],
  output: "export",
};

export default nextConfig;
