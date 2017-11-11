module.exports = {
  before : function(browser){
    var data = browser.globals;
    browser.url(data.adminSiteUrl);
  },

  after : function(browser) {
    browser.end();
  },

  '@tags': ['pageobjects'],
  'Log into Wordpress Admin Section': function (browser) {
    var username = 'admin';
    var password = 'admin123';
    browser.performAdminLogin(username, password);

    var adminDashboard = browser.page.adminDashboard();
    adminDashboard.expect.element('@dashboardTitle').to.be.visible.after(5000);
    adminDashboard.expect.element('@dashboardTitle').text.to.equal('Dashboard');
    adminDashboard.expect.element('@loggedInUsername').text.to.equal(username);
  }
};