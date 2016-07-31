var expect = require('chai').expect;

module.exports = function() {
  this.When(/^search "([^"]*)"$/, function (keyword) {
    this.driver.get("http://www.baidu.com");
    this.driver.findElement({id:'kw'}).sendKeys(keyword);
    return this.driver.findElement({id:'kw'}).sendKeys(this.webdriver.Key.ENTER);
  });

  this.Then(/^I can see "([^"]*)"$/, function (text) {
    this.waitFor('div.nums');
    return this.driver.findElements({partialLinkText: text})
      .then(function(elements) {
        expect(elements.length).to.not.equal(0);
      });
  });
}