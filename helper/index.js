var moment = require('moment');

module.exports = function(hexo) {
  return {

    calendarDate: function(date) {
      date = Date.parse(date.toString());
      return moment(date).calendar();
    },

  };
};