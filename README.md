# Currently Testing this package, once testing is complete this line will be removed!!!!!!!!!!!
# Node Adafruit PMSA300I Sensor Driver
This node module allows to read data from Adafruit PMSA300I Air Quality sensor (https://learn.adafruit.com/pmsa003i). It was tested on Raspberry Pi 3 and a Raspberry Pi Zero W with sensor connected to I2C protocol.
This module uses CircuitPython libraries and python-shell node.js bridge to connect to a PMSA300I sensor and read its data.

## Prerequisites
- It uses https://github.com/adafruit/Adafruit_Blinka.
- Instructions for Installing on a Raspberry Pi - https://learn.adafruit.com/circuitpython-on-raspberrypi-linux

## Installation
```
npm --save install node-adafruit-pmsa300i
```

## Usage
```
const AirQualitySensor = require('node-adafruit-pmsa300i');

AirQualitySensor.read(function(results) {
  console.log(results);
});

```
