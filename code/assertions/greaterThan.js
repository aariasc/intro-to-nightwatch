var util = require('util');
exports.assertion = function(val1, val2, msg) {

  var defaultMessage  = 'Testing if <%s> is greater than <%s>';
  var errorMessage  = 'Error executing command';
  this.message = msg || util.format(defaultMessage, val1, val2);

  this.expected = function () {
    return val1 + ' should be greater than ' + val2;
  };

  this.pass = function(value) {
    return (value && true );
  };

  this.failure = function (result) {
    var failed = (result === false || (result && result.status === -1));
    if (failed) {
      this.message = msg || errorMessage;
    }
    return failed;
  };

  this.value = function (result) {
    return result.value;
  };

  this.command = function (callback) {
    return this.api.execute(function(val1, val2){
      return (val1 > val2);
    },[val1,val2], function(result){
      callback.call(this,result);
    });
  };

};
