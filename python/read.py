# pylint: disable=unused-import
import time
import board
import busio
import serial

from digitalio import DigitalInOut, Direction, Pull
from adafruit_pm25.i2c import PM25_I2C

reset_pin = None
uart = serial.Serial("/dev/ttyS0", baudrate=9600, timeout=0.25)

# Create library object, use 'slow' 100KHz frequency!
i2c = busio.I2C(board.SCL, board.SDA, frequency=100000)
# Connect to a PM2.5 sensor over I2C
pm25 = PM25_I2C(i2c, reset_pin)

try:
    aqdata = pm25.read()
    print(aqdata)
except RuntimeError:
    print("Unable to read from sensor, retrying...")

