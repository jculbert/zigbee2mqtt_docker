const {deviceEndpoints, battery, identify, temperature, flow, humidity} = require('zigbee-herdsman-converters/lib/modernExtend');

const definition = {
    zigbeeModel: ['Weather2'],
    model: 'Weather2',
    vendor: 'Shoreacres Automation',
    description: 'Automatically generated definition',
    extend: [battery(), identify(), temperature(), flow()],
};

module.exports = definition;
