// Learn more https://docs.expo.io/guides/customizing-metro

const { getDefaultConfig } = require("@expo/metro-config");

const config = getDefaultConfig(__dirname);

// Remove all console logs in production...
//config.transformer.minifierConfig.compress.drop_console = true;
console.log("hi");
config.server.port = 3000;

module.exports = config;


/*
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);
config.server.port = 3000

module.exports = config;
*/
