/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root to this project so Next doesn't pick up the
  // stray C:\Users\mintae\package-lock.json as the inferred root.
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
