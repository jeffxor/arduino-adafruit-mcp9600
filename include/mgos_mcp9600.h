#include "mgos.h"
#include "SparkFun_MCP9600.h"

#ifdef __cplusplus
extern "C"
{
#endif


MCP9600 *mgos_MCP9600_create();

/*
 * Sets device I2C address to a user-specified address, over whatever port the user specifies. 
 */
bool mgos_MCP9600_begin(MCP9600 *mcp, int address);

/*
 * Returns true if the thermocouple (hot) junction temperature has been updated since we last checked. Also referred to as the data ready bit.
 */
bool mgos_MCP9600_available(MCP9600 *mcp);

/*
 * Returns true if the thermocouple will acknowledge over I2C, and false otherwise
 */
bool mgos_MCP9600_isConnected(MCP9600 *mcp);

/*
 * Returns the contents of the device ID register. The upper 8 bits are constant, but the lower contain revision data.
 */
int mgos_MCP9600_deviceID(MCP9600 *mcp);

/*
 * Returns true if the constant upper 8 bits in the device ID register are what they should be according to the datasheet.
 */
double mgos_MCP9600_checkDeviceID(MCP9600 *mcp);

/*
 * Returns the thermocouple temperature, and clears the data ready bit. Set units to true for Celcius, or false for freedom units (Fahrenheit)
 */
double mgos_MCP9600_getThermocoupleTemp(MCP9600 *mcp);

/*
 * Returns the ambient (IC die) temperature. Set units to true for Celcius, or false for freedom units (Fahrenheit)
 */
double mgos_MCP9600_getAmbientTemp(MCP9600 *mcp);

/*
 * Returns the difference in temperature between the thermocouple and ambient junctions. Set units to true for Celcius, or false for freedom units (Fahrenheit)
 */
double mgos_MCP9600_getTempDelta(MCP9600 *mcp);                            

#ifdef __cplusplus
}
#endif  /* __cplusplus */