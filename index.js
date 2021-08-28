var PythonShell = require('python-shell');

var AirQualitySensor = function() {

}

AirQualitySensor.prototype.read = function(cb) {
  PythonShell.run('read.py', { scriptPath: __dirname+'/python' }, function (err, results) {
    if (err) throw err;
    cb.apply(this, results);
  });
};

module.exports = new AirQualitySensor();