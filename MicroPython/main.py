"""
Created by: Jayden Okafor
Created on: Feb 2026
This program shows you more cookies when the "a" button is clicked and reset cookies when the "b" button is clicked
"""

from microbit import *

display.clear()
display.show(Image.HAPPY)

cookies = 0

while True:
    if button_a.was_pressed():
        display.clear()
        cookies = cookies + 1

        if cookies < 10:
            display.show(str(cookies))
        else:
            display.scroll(str(cookies))

    if button_b.was_pressed():
        display.clear()
        cookies = 0
        display.show(str(cookies))
