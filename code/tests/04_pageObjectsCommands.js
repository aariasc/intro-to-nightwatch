module.exports = {
  before : function(browser){
    var data = browser.globals;
    browser.url(data.publicSiteUrl);
  },

  after : function(browser) {
    browser.end();
  },

  '@tags': ['pageobjects'],
  'Test search in Wordpress with a page object command': function (browser) {
    var wordToSearch = 'hello';
    browser
    .assert.title("Wordpress Test Site – Just another WordPress site");

    var publicHome = browser.page.publicHome();
    publicHome.expect.element('@title').to.be.visible.after(5000);
    publicHome.expect.element('@title').text.to.contain('WORDPRESS');

    var searchBox = browser.page.searchBox();
    searchBox.performSearch(wordToSearch);

    var searchResults = browser.page.searchResults();
    searchResults.validateSearchResults(wordToSearch);
  }
};