module.exports = {
  mode: 'production',
  output: {
    filename: 'bundle.js',
  },
  watch: false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/preset-env'],
        },
      },
    ],
  },
};