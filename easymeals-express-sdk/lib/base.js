var http = require('http');
var querystring = require('querystring');

function Base(){};


Base.prototype.index = function(params, callback) {
  this.get(this.path, params, callback);
};

Base.prototype.create = function(params, callback){
  this.post(this.path, params, callback);
};

Base.prototype.details = function(objectId, params, callback){
  var path = this.path + '/' + objectId;
  this.get(path, params, callback);
};

Base.prototype.update = function(objectId, params, callback){
  var path = this.path + '/' + objectId;
  this.post(path, params, callback);
};

Base.prototype.destroy = function(objectId, params, callback){
  var path = this.path + '/' + objectId;
  this.delete(path, params, callback);
};

Base.prototype.get = function(path, params, callback) {
  this.makeRequest(path, 'GET', params, callback)
};

Base.prototype.post = function(path, params, callback) {
  this.makeRequest(path, 'POST', params, callback)
};

Base.prototype.put = function(path, params, callback) {
  this.makeRequest(path, 'PUT', params, callback)
};

Base.prototype.delete = function(path, params, callback) {
  this.makeRequest(path, 'DELETE', params, callback)
};

Base.prototype.makeRequest = function(path, method, params, callback){
  var options = this.buildOptions(path, method, params);

  var req = this.request(options, callback);
  req.write(data);
  req.end();
}

Base.prototype.buildOptions = function(path, method, params){
  data = querystring.stringify(params);
  dataHeader = Buffer.byteLength(data)

  return {
    host: this.config.host,
    port: this.config.port,
    path: path,
    method: method,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': dataHeader
    }
  }
};

Base.prototype.request = function(options, callback){
  return http.request(options, function(response){
    var body = '';

    response.on('data', function(d) {
        body += d;
    });

    response.on('end', function() {
      callback(body);
    });

    response.on('error', function(){
      callback('error')
    })
  });
}

module.exports = Base;
