#/bin/bash

docker run -d --restart unless-stopped --device=/dev/ttyUSB0 -v /root/builds/zigbee2mqtt/dockervm/zigbee2mqtt/data:/app/data --network host --name zigbee2mqtt koenkk/zigbee2mqtt:1.14.1
