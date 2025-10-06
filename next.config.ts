import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'leptonstoragepro.blob.core.windows.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
    output: 'standalone',
};

export default nextConfig;
