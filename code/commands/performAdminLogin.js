exports.command = function (username, password, callback) {

    var adminLogin = this.page.adminLogin();
    adminLogin.expect.element('@usernameInput').to.be.visible.after(5000);
    adminLogin.expect.element('@usernameInput').to.be.enabled;
    adminLogin.expect.element('@passwordInput').to.be.visible;
    adminLogin.expect.element('@passwordInput').to.be.enabled;
    adminLogin.expect.element('@logInButton').to.be.visible;
    adminLogin.expect.element('@logInButton').to.be.enabled;

    adminLogin.setValue('@usernameInput', username);
    adminLogin.setValue('@passwordInput', password);
    adminLogin.click('@logInButton');

    if(typeof callback === "function"){
        callback.call(this);
    }

    return this;
  };
