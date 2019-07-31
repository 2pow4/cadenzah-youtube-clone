const path = require('path')

module.exports = {
  entry: ["core-js/stable", "regenerator-runtime/runtime", "./src/jsx/index.jsx"],
  output: {
    filename: "bundle.js",
    path: path.resolve(`${__dirname}/public/scripts`)
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader']
      }
    ]
  }

}
