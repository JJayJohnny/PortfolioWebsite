/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        webpackBuildWorker: true,
        cpus: 1
    }
}

module.exports = nextConfig
