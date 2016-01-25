const R = require('ramda');

module.exports = {
  sortByNameCaseInsensitive: R.sortBy(R.compose(R.toLower, R.prop('name')))
};

