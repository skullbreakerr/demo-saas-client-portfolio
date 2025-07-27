/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  transpilePackages:[
    "rc-util",
    "antd",
  ],
  output: "export",
};

export default nextConfig;
