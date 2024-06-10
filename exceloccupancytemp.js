const {battery, identify, temperature, occupancy} = require('zigbee-herdsman-converters/lib/modernExtend');

const definition = {
    zigbeeModel: ['ExcelOccupancyTemp'],
    model: 'ExcelOccupancyTemp',
    vendor: 'Shoreacres Automation',
    description: 'Automatically generated definition',
    extend: [battery(), identify(), temperature(), occupancy()],
    meta: {},
};

module.exports = definition;

