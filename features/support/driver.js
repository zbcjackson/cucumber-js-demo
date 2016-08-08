import webdriver from 'selenium-webdriver'
var platform = process.env.PLATFORM || "CHROME";

var buildAndroidDriver = function() {
  return new webdriver.Builder().
    usingServer('http://localhost:4723/wd/hub').
    withCapabilities({
      platformName: 'Android',
      platformVersion: '5.0',
      deviceName: 'Android Emulator',
      browserName: 'android',
      appPackage: 'com.streamingapp',
      appActivity: '.MainActivity'
    }).
    build();
};

var buildChromeDriver = function() {
  return new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
};

var buildFirefoxDriver = function() {
  return new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox()).
    build();
};

var buildPhantomDriver = function() {
  return new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.phantomjs())
    .build();
}

switch(platform) {
  case 'ANDROID':
    var driver = buildAndroidDriver();
    break;
  case 'FIREFOX':
    var driver = buildFirefoxDriver();
    break;
  case 'CHROME':
    var driver = buildChromeDriver();
    break;
  case 'PHANTOM':
    var driver = buildPhantomDriver();
    break;
  default:
    var driver = buildChromeDriver();
}
var getDriver = function() {
  return driver;
};

module.exports = driver;