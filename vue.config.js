module.exports = {
  transpileDependencies: [ '@gtm-support/core' ],
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
