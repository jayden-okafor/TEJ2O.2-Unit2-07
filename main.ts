/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Jayden
 * Created on: Mar 2026
 * This program shows you more cookies when the "a" button is clicked and reset cookies when the "b" button is clicked
 */

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variable
let cookies: number = 0

// when the A button is pressed
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    cookies = (cookies + 1)
    basic.showString(cookies.toString())
})

// when the B button is pressed
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    cookies = 0
    basic.showString(cookies.toString())
})
