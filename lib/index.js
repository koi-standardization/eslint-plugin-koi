/**
 * @fileoverview code specification under koi ecology
 * @author @koi-standard/eslint-plugin-koi
 */
// "use strict";

// //------------------------------------------------------------------------------
// // Requirements
// //------------------------------------------------------------------------------

// const requireIndex = require("requireindex");

// //------------------------------------------------------------------------------
// // Plugin Definition
// //------------------------------------------------------------------------------

// // import all rules in lib/rules
// module.exports.rules = requireIndex(__dirname + "/rules");

const plugin = {
  rules: {
    "request-name": require("./rules/request-name"),
  },
};

module.exports = plugin;
