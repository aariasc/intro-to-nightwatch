module.exports = {
  before : function(browser){
    var data = browser.globals;
    browser.url(data.publicSiteUrl);
  },

  after : function(browser) {
    browser.end();
  },

  '@tags': ['pageobjects'],
  'Test search in Wordpress': function (browser) {
    var wordToSearch = 'hello';
    browser
    .assert.title("Wordpress Test Site – Just another WordPress site");

    var publicHome = browser.page.publicHome();
    publicHome.expect.element('@title').to.be.visible.after(5000);
    publicHome.expect.element('@title').text.to.contain('WORDPRESS');

    var searchBox = browser.page.searchBox();
    searchBox.expect.element('@searchInput').to.be.visible;
    searchBox.expect.element('@searchInput').to.be.enabled;
    searchBox.expect.element('@searchButton').to.be.visible;
    searchBox.expect.element('@searchButton').to.be.enabled;
    searchBox.setValue('@searchInput', wordToSearch);
    searchBox.click('@searchButton');

    var searchResults = browser.page.searchResults();
    searchResults.expect.element('@title').to.be.visible.after(5000);
    searchResults.expect.element('@title').text.to.contain(wordToSearch.toUpperCase());
  }
};