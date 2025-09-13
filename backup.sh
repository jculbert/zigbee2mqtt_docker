#!/usr/bin/python3
from datetime import datetime
import subprocess

fn = 'zigbee2mqtt' + datetime.today().strftime('%Y-%m-%d') + '.tz'
subprocess.call(["tar", "cvzf", fn, "dockervm/zigbee2mqtt/data"])
subprocess.call(["encrypt_aes.sh", fn])
subprocess.call(["rm", fn])
