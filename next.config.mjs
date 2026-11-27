/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // the portfolio moved to ahmadthahir.com; /katering and /cv stay here because offer links were already shared
  async redirects() {
    return [{ source: "/", destination: "https://ahmadthahir.com/", permanent: true }];
  },
};

export default nextConfig;
