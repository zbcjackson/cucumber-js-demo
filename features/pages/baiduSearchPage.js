import driver from '../support/driver'
import webdriver from 'selenium-webdriver'
import { expect } from 'chai'

export default class BaiduSearchPage {
  constructor() {
    this.defaultTimeout = 20000
  }
  open(){
    return driver.get("http://www.baidu.com")
  }
  search(keyword){
    driver.findElement({id:'kw'}).sendKeys(keyword)
    return driver.findElement({id:'kw'}).sendKeys(webdriver.Key.ENTER)
  }
  shouldHaveLink(text){
    this.waitFor('div.nums');
    return driver.findElements({partialLinkText: text})
      .then(function(elements) {
        expect(elements.length).to.not.equal(0);
      });
  }
  waitFor(cssLocator, timeout) {
    var waitTimeout = timeout || this.defaultTimeout;
    return driver.wait(function() {
      return driver.isElementPresent({ css: cssLocator });
    }, waitTimeout);
  }
}