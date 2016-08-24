import webdriver from 'selenium-webdriver'
import { Options as ChromeOptions} from 'selenium-webdriver/chrome'
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

var buildiOSDriver = function() {
  return new webdriver.Builder().
    usingServer('http://localhost:4723/wd/hub').
    withCapabilities({
      platformName: 'iOS',
      platformVersion: '9.3',
      deviceName: 'iPhone Simulator',
      browserName: 'iOS',
      app: '/Users/zbcjackson/src/cordova-demo/platforms/ios/build/emulator/HelloWorld.app'
    }).
    build();
};

var buildChromeDriver = function() {
  var options = new ChromeOptions().setChromeBinaryPath("/usr/local/Caskroom/google-chrome/latest/Google Chrome.app/Contents/MacOS/Google Chrome")
  return new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    setChromeOptions(options).
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
  case 'IOS':
    var driver = buildiOSDriver();
    break;
  default:
    var driver = buildChromeDriver();
}
var getDriver = function() {
  return driver;
};

module.exports = driver;