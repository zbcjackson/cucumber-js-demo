import BaiduSearchPage from '../pages/baiduSearchPage'

module.exports = function() {
  this.When(/^search "([^"]*)"$/, function (keyword) {
    // this.driver.get("http://www.baidu.com");
    // this.driver.findElement({id:'kw'}).sendKeys(keyword);
    // return this.driver.findElement({id:'kw'}).sendKeys(this.webdriver.Key.ENTER);
    var page = new BaiduSearchPage();
    page.open();
    return page.search(keyword);
  });

  this.Then(/^I can see "([^"]*)"$/, function (text) {
    var page = new BaiduSearchPage();
    page.shouldHaveLink(text);
  });
}