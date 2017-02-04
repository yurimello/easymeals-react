const Recipes = require('./lib/recipes');
const Users = require('./lib/users');

function EasymealsExpress(config){
  this.recipes = new Recipes(config);
  this.users = new Users(config);
  this.sessions = new Sessions(config);
}

module.exports = EasymealsExpress;
