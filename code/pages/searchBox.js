module.exports = {
  elements : {
    searchInput : {
      selector: '.search-field'
    },
    searchButton : {
      selector : '.search-submit'
    }
  },
  commands: [
    {
      performSearch: function(wordToSearch){
        this
          .waitForElementVisible('@searchInput', 3000)
          .setValue('@searchInput', wordToSearch)
          .click('@searchButton')
          .api.pause(1000);
        return this;
      }
    }
  ]
};