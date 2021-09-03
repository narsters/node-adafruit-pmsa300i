var PythonShell = require('python-shell');

var AirQualitySensor = function () {

}

AirQualitySensor.prototype.read = function (cb) {
    PythonShell.run('read.py', { scriptPath: __dirname + '/python' }, function (err, results) {
        if (err) {
            throw err;
        }

        try {
            if (Array.isArray(results) && results.length > 0) {
                results = [results[0].replace(/'/g, '"')];
                const aqVals = JSON.parse(results);
                const airQualValsObj = {};

                airQualValsObj.pm10Standard = aqVals['pm10 standard'];
                airQualValsObj.pm25Standard = aqVals['pm25 standard'];
                airQualValsObj.pm100Standard = aqVals['pm100 standard'];
                airQualValsObj.pm10Env = aqVals['pm10 env'];
                airQualValsObj.pm25Env = aqVals['pm25 env'];
                airQualValsObj.pm100Env = aqVals['pm100 env'];
                airQualValsObj.particles03um = aqVals['particles 03um'];
                airQualValsObj.particles05um = aqVals['particles 05um'];
                airQualValsObj.particles10um = aqVals['particles 10um'];
                airQualValsObj.particles25um = aqVals['particles 25um'];
                airQualValsObj.particles50um = aqVals['particles 50um'];
                airQualValsObj.particles100um = aqVals['particles 100um'];

                cb.call(this, airQualValsObj);
            }
        } catch (err) {
            console.error(err);
            cb.call(this, null);
        }
    });
};

module.exports = new AirQualitySensor();