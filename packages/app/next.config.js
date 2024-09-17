const os = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: process.env.NODE_ENV !== 'production' ? true : false,
  },
  webpack: (config, { isServer,  }) => {
    if (isServer) {
      config.module.rules.push({
        test: /.node$/,
        use: [
          {
            loader: "nextjs-node-loader",
            options: {
              flags: os.constants.dlopen.RTLD_NOW,
              outputPath: config.output.path
            }
          },
        ],
      });
    }
    return config;
  },
};

module.exports = nextConfig;
