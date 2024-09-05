const path = require('path');

module.exports = {
  target: 'node',
  mode: "development",
  context: path.resolve(__dirname, 'dist'),
  entry: {
    main: "./main.js",
  },
  output: {
    path: path.join(__dirname, "out"),
    filename: "bundle.js"
  },
};