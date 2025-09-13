const {battery, identify, temperature, flow, humidity} = require('zigbee-herdsman-converters/lib/modernExtend');

const definition = {
    zigbeeModel: ['WeatherGust'],
    model: 'WeatherGust',
    vendor: 'Shoreacres Automation',
    description: 'Automatically generated definition',
    extend: [identify(), flow()],
    meta: {},
};

module.exports = definition;

