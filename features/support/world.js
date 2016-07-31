'use strict';

var fs = require('fs');
var webdriver = require('selenium-webdriver');
var driver = require('./driver');

function World() {

  var defaultTimeout = 20000;
  var screenshotPath = "screenshots";

  this.webdriver = webdriver;
  this.driver = driver;

  if(!fs.existsSync(screenshotPath)) {
    fs.mkdirSync(screenshotPath);
  }
  
  this.waitFor = function(cssLocator, timeout) {
    var waitTimeout = timeout || defaultTimeout;
    return driver.wait(function() {
      return driver.isElementPresent({ css: cssLocator });
    }, waitTimeout);
  };
};

module.exports = function() {
  this.World = World;
}
