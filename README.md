# Node Adafruit PMSA300I Sensor Driver
This node module allows to read data from Adafruit PMSA300I Air Quality sensor (https://learn.adafruit.com/pmsa003i). It was tested on Raspberry Pi 3 and a Raspberry Pi Zero W with sensor connected to I2C protocol.
This module uses CircuitPython libraries and python-shell node.js bridge to connect to a PMSA300I sensor and read its data.

## Prerequisites
- Adafruit Blink is required for this to run: https://github.com/adafruit/Adafruit_Blinka.
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

results is an object with the following signature:
{
    pm10Standard: number,
    pm25Standard: number,
    pm100Standard: number,
    pm10Env: number,
    pm25Env: number,
    pm100Env: number,
    particles03um: number,
    particles05um: number,
    particles10um: number,
    particles25um: number,
    particles50um: number,
    particles100um: number
}


```
