const path = require('path');

module.exports = (env, argv) => {
  process.env.NODE_ENV  = argv.mode;

  const isDevelopment = argv.mode === 'development';
  const isProduction = argv.mode === 'production';

  return {
    mode: argv.mode,
    context: path.resolve(__dirname, 'src'),
    entry: {
      main: ['./index.js']
    },
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'build')
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    resolve: {
      extensions: ['.js']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader'
            },
            {
              loader: 'eslint-loader'
            }
          ]
        }
      ]
    }
  }
}
