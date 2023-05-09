const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./base.config");
module.exports = merge(baseConfig, {
  target: "web",
  entry: "./src/client/index.js",
  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "../build/client"),
  },
});
