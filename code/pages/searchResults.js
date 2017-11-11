module.exports = {
  elements : {
    title : {
      selector: '.page-title'
    }
  },
  commands: [
    {
      validateSearchResults: function(wordToSearch){
        this
          .waitForElementVisible('@title', 5000)
          .assert.containsText('@title', wordToSearch.toUpperCase());
        return this;
      }
    }
  ]
};