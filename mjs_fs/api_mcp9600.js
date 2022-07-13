// Arduino Adafruit_ADS1015 library API. Source C API is defined at:
// [mgos_mcp9600.h]

let Adafruit_MCP9600 = {
  _create: ffi('void *mgos_MCP9600_create()'),
  _begin: ffi('void mgos_MCP9600_begin(void *, int)'),  
  _available: ffi('void mgos_MCP9600_available(void *)'),
  _isConnected: ffi('void mgos_MCP9600_isConnected(void *)'),
  _deviceID: ffi('void mgos_MCP9600_deviceID(void *)'),
  _checkDeviceID: ffi('void mgos_MCP9600_checkDeviceID(void *)'),
  _getThermocoupleTemp: ffi('double mgos_MCP9600_getThermocoupleTemp(void *)'),
  _getAmbientTemp: ffi('double mgos_MCP9600_getAmbientTemp(void *)'),   
  _getTempDelta: ffi('double mgos_MCP9600_getTempDelta(void *)'),   

  create: function() {
    let obj = Object.create(Adafruit_MCP9600._proto);
    obj.mds = Adafruit_MCP9600._create();
    return obj;
  },

  _proto: {
    begin: function(i2cAddress) {
      return Adafruit_MCP9600._begin(this.mds, i2cAddress);
    },

    available: function() {
      return Adafruit_MCP9600._available(this.mds);
    },

    isConnected: function() {
      return Adafruit_MCP9600._isConnected(this.mds);
    },

    deviceID: function() {
      return Adafruit_MCP9600._deviceID(this.mds);
    },
    
    checkDeviceID: function() {
      return Adafruit_MCP9600._checkDeviceID(this.mds);
    },
    
    getThermocoupleTemp: function() {
      return Adafruit_MCP9600._getThermocoupleTemp(this.mds);
    },

    getAmbientTemp: function() {
      return Adafruit_MCP9600._getAmbientTemp(this.mds);
    },    

    getTempDelta: function() {
      return Adafruit_MCP9600._getTempDelta(this.mds);
    },    
  },
}
