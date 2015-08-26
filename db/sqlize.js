var Sequelize = require('sequelize');
//var sequelize = new Sequelize('sqlite://' + __dirname + '/data.sqlite');
var sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: __dirname + '/database.sqlite'
});



var User = sequelize.define('User', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
},{
  tableName: 'Users'
});

User.sync().then(function () {
  // Table created
  return;
});