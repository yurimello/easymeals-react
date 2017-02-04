var util = require('util');
const Base = require('./base')

function Sessions(config){
  this.config = config;
  this.path = '/sessions'
}

util.inherits(Sessions, Base)

module.exports = Sessions
