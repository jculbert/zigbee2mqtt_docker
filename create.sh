#/bin/bash

docker run -d --restart no --device=/dev/zigbee -v /home/auto/builds/zigbee2mqtt/dockervm/zigbee2mqtt/data:/app/data --network host --name zigbee2mqtt koenkk/zigbee2mqtt:1.37.1
