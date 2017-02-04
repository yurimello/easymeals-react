var util = require('util');
const Base = require('./base')

function Recipes(config){
  this.config = config;
  this.path = '/recipes'
}

util.inherits(Recipes, Base)

module.exports = Recipes
