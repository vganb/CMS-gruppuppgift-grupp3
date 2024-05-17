/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'http',
                hostname:'firebasestorage.googleapis.com',
            }

        ]
    }
};

export default nextConfig;
