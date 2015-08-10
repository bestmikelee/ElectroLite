var Sequelize = require('sequelize');
var sequelize = new Sequelize('ElectroLite', 'admin', 'password', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: 'file:data.db'
});

var User = sequelize.define('User', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

User.sync({force: true}).then(function () {
  // Table created
  return;
});