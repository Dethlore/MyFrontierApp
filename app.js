/**
 * Module dependencies
 */
var woodruff = require("woodruff"),
  themeEngage = require("theme-engage");

var experiments = [
  { "featureOne" : false },
  { "name" : "exPhotonExp",
    "description": "shows laser info",
    "default": false
  }
];

/**
 * Expose the app
 */
var app = module.exports = woodruff(__dirname, themeEngage, { experiments: experiments });
