/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tfptechnologies.in",
        port: "",
        pathname: "/**",
      },
    ],
  },
  reactCompiler: true,
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
