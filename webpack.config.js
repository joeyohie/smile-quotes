module.exports = {
  entry: '/Users/jo/Desktop/RPP33_Repos/smile-quotes/client/src/app.jsx',
  output: {
    path: '/Users/jo/Desktop/RPP33_Repos/smile-quotes/client/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env', '@babel/preset-react']
          // }
        }
      }
    ]
  }  
}