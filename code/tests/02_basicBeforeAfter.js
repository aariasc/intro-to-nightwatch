module.exports = {
  before : function(browser){
    var data = browser.globals;
    browser.url(data.publicSiteUrl);
  },

  after : function(browser) {
    browser.end();
  },

  '@tags': ['basic'],
  'Step 1. Check Wordpress title bar and main title': function (browser) {
    browser
    .waitForElementVisible('.site-title', 1000)
    .assert.title("Wordpress Test Site – Just another WordPress site")
    .assert.containsText('.site-title', 'WORDPRESS');
  },

  'Step 2. Check that we have at least one post' : function (browser){
    browser.elements('css selector', 'article.post', function(result){
      var numberOfPosts = result.value.length;
      console.log("Number of posts found in homepage: " + numberOfPosts);
      browser.assert.greaterThan(numberOfPosts, 0, "Checking that there is at least one post");
    });
  }
};