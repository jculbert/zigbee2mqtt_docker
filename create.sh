#/bin/bash

docker run -d --restart no --device=/dev/ttyUSB0 -v /root/builds/zigbee2mqtt/dockervm/zigbee2mqtt/data:/app/data --network host --name zigbee2mqtt zigbee2mqtt
