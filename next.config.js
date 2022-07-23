module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
      });
  
      return config;
    },
    images: {
        domains: ['avatars.githubusercontent.com', 'images.unsplash.com'],
    },
};
  