module.exports = {
  devServer: {
    host: 'localhost'
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/physics-in-motion-client/'
    : '/'
};
