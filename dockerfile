FROM koenkk/zigbee2mqtt:1.14.1

COPY devices.js ./node_modules/zigbee-herdsman-converters/devices.js
COPY homeassistant.js ./lib/extension/homeassistant.js
COPY fromZigbee.js ./node_modules/zigbee-herdsman-converters/converters/fromZigbee.js
