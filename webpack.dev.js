import { merge } from "webpack-merge";
import common from './webpack.common.js'

export default merge(common, {
  mode: "development",
  entry: "./src/index.js",
  devtool: "eval-source-map",
  devServer: {
    watchFiles: [
      "./src/template.ejs",
      "./src/content.html"
    ],
  },
});
