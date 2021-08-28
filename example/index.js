const AirQualitySensor = require('../index.js');

AirQualitySensor.read(function(results) {
  console.log(results);
});