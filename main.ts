/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael B
 * Created on: Sep 2023
 * This program displays temperature on micro bit
*/

// our variable for temperature
let temperature: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

input.onButtonPressed(Button.A, function () {
  temperature = input.temperature()
  basic.showString('The temperature is:')
  basic.showNumber(temperature)
})
