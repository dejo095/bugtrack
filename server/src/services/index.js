const users = require('./users/users.service.js');
const products = require('./products/products.service.js');
const boards = require('./boards/boards.service.js');
const issues = require('./issues/issues.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(products);
  app.configure(boards);
  app.configure(issues);
};
