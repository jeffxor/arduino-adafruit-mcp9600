# Arduino Adafruit mcp9600

## Overview

This is a port of the [SparkFun MCP9600 Arduino Library](https://github.com/sparkfun/SparkFun_MCP9600_Arduino_Library).

### Limitations

Currently only implements the getting of temperatures from the MCP9600 Thermocouple Amplifier. Feel free to submit PR for additional functionality.

- getThermocoupleTemp - Temperature at the Thermocouple
- getAmbientTemp - Temperature at the Thermocouple Sensor

## Example Usage

### Requires

```
config_schema:
  - ["i2c.enable", true]
libs:
  - location: https://github.com/mongoose-os-libs/i2c
  - location: https://github.com/jeffxor/arduino-adafruit-mcp9600
```

### Code

```
let mcp = Adafruit_MCP9600.create();
mcp.begin(101);

Timer.set(5000, Timer.REPEAT, function () {  
  let temp = mcp.getThermocoupleTemp();
  let ambientTemp = mcp.getAmbientTemp();
  print('temp: ', temp, 'ambientTemp: ', ambientTemp);
}, null);
```
