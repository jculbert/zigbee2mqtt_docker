const {battery, identify, occupancy} = require('zigbee-herdsman-converters/lib/modernExtend');

const definition = {
    zigbeeModel: ['ExcelOccupancy'],
    model: 'ExcelOccupancy',
    vendor: 'Shoreacres Automation',
    description: 'Automatically generated definition',
    extend: [battery(), identify(), occupancy()],
    meta: {},
};

module.exports = definition;

