const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

const withSass = require('@zeit/next-sass');
const withFonts = require('nextjs-fonts');

module.exports = withSass(withFonts({
  webpack(config, options) {
   return config;
  },
}));