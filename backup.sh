#!/usr/bin/python
from datetime import datetime
import subprocess

fn = 'zigbee2mqtt' + datetime.today().strftime('%Y-%m-%d') + '.tz'
subprocess.call(["tar", "cvzf", fn, "/mnt/dockervm/zigbee2mqtt/data"])
subprocess.call(["encrypt.sh", fn])
subprocess.call(["mv", fn + ".des", "/mnt/backup"])
subprocess.call(["rm", fn])
