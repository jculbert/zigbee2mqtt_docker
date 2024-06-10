const {deviceEndpoints, identify, onOff, light} = require('zigbee-herdsman-converters/lib/modernExtend');

const definition = {
    zigbeeModel: ['TestLight'],
    model: 'TestLight',
    vendor: 'Shoreacres Automation',
    description: 'Automatically generated definition',
    extend: [deviceEndpoints({"endpoints":{"1":1,"2":2}}), identify(), onOff({"powerOnBehavior":false,"endpointNames":["1","2"]}), light()],
    meta: {"multiEndpoint":true},
};

module.exports = definition;
