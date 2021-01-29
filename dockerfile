FROM koenkk/zigbee2mqtt:1.17.0

COPY devices.js ./node_modules/zigbee-herdsman-converters/devices.js
COPY fromZigbee.js ./node_modules/zigbee-herdsman-converters/converters/fromZigbee.js
COPY exposes.js ./node_modules/zigbee-herdsman-converters/lib/exposes.js
