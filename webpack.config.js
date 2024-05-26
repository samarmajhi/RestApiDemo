import path from "path";
import { fileURLToPath } from "url";

// Correctly derive __filename and __dirname from import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Manually specify the fallback paths if necessary, using util
import util from "util";

// Webpack configuration
export default {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    fallback: {
      util: path.resolve(__dirname, "node_modules/util/"),
    },
  },
  target: "node",
};
