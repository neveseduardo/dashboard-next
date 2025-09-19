import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: false,
	images: {
		domains: ['images.unsplash.com', 'upload.wikimedia.org'],
	},
	env: {
		API_URL: process.env.API_URL,
	},
};

export default nextConfig;
