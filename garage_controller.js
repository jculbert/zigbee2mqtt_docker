const {identify, windowCovering, temperature} = require('zigbee-herdsman-converters/lib/modernExtend');

const definition = {
    zigbeeModel: ['GarageController'],
    model: 'GarageController',
    vendor: 'Shoreacres Automation',
    description: 'Automatically generated definition',
    extend: [identify(), windowCovering({"controls":["lift","tilt"]}), temperature()],
    meta: {},
};

module.exports = definition;
