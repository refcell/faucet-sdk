const path = require('path');

module.exports = {
  entry: './src/index.ts',
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.tsx', '.ts', '.js', '.json']
    },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};