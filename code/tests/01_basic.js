module.exports = {
  '@tags': ['basic'],
  'Basic Test to check Wordpress home page': function (browser) {
    var data = browser.globals;
    browser
      .url(data.publicSiteUrl)
      .assert.title("Wordpress Test Site – Just another WordPress site")
      .assert.containsText('.site-title', 'WORDPRESS')
      .pause(1000)
      .end();
  }
};