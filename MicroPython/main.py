"""
Created by: Michael B
Created on: Sep 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *

# our variable for temperature
temperature = 0

display.clear
display.show(Image.Happy)

while True:
    if button_a.is_pressed():
        temperature = input.temperature()
        display.show("The Temperature is")
        display.show(str(temperature))

