// This is the configuration file for Webpack.
// To build the application, Node.js executes the Webpack script.
// Webpack then loads and executes this config file to determine how to bundle your assets.
// By default, Webpack looks for a file named webpack.config.js in the project root.
// You can rename this file, but if you do, you must specify the new name using the --config flag.
// Example: "npx webpack --config custom-config.js"

// Node.js wraps each module in a function to isolate scope and inject helpers:
// (function (exports, require, module, __filename, __dirname) { ... })
//
// - exports: a shortcut to module.exports, used to expose functionality.
// - require: function to import other modules.
// - module: object representing the current module (includes exports).
// - __filename: absolute path to the current file.
// - __dirname: absolute path to the directory containing the current file.
//
// These are passed in automatically and scoped per file.
// __dirname is especially useful for resolving paths (e.g., output directory in Webpack). 
const path = require('path');// Imports Node.js's built-in 'path' module to safely resolve and manipulate file system paths.
const HtmlWebpackPlugin = require('html-webpack-plugin');// (3rd Party plugin)Imports the HtmlWebpackPlugin, which generates an HTML file and automatically injects bundled JS and CSS assets.

module.exports = {
  entry: './src/entry/index.js', // main entry point. Builds dependency graph following import and require statements
  output: {
    filename: '[name].[contenthash].js', // Names each output file using its entry name and a content-based hash for cache busting.
    path: path.resolve(__dirname, 'dist'), // Resolves the absolute path to the 'dist' folder for writing output files.
    clean: true,// Clears the output directory before each build to remove outdated files.
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html', // Omitting this defaults to index.html. Determines the name of the output file.
        template: './src/pages/index.html', // Specifies which html file to inject into
        chunks: ['index'] // Controls which bundles get injected into the html.
    }),
  ],
  devServer: {
    static: './dist',// Tells webpack server to serve from specified directory
    hot: true, // HMR
    open: true, // Saves you from manually typing http://localhost:5173 or similar.
  },
  mode: 'development',
};