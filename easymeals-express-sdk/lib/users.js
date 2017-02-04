var util = require('util');
const Base = require('./base')

function Users(config){
  this.config = config;
  this.path = '/users'
}

util.inherits(Users, Base)

User.prototype.bookmarks = function(userId, recipeId, callback){
  var path = this.path + '/' + userId + '/bookmarks/' + recipeId;
  this.put(path, {}, callback);
};

module.exports = Users
