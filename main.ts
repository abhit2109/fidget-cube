let Magic_8_Ball = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.clearScreen()
    basic.pause(500)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.clearScreen()
    basic.pause(500)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.clearScreen()
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
    music.playMelody("E G A E F D G C ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    Magic_8_Ball = randint(1, 3)
    if (Magic_8_Ball == 1) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # # # .
            `)
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            . . # # .
            . # . . .
            . . # . .
            . . . # .
            . # # . .
            `)
        basic.clearScreen()
    } else if (Magic_8_Ball == 2) {
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            . # # . .
            . # . # .
            . # . # .
            . # . # .
            . # # . .
            `)
        basic.pause(500)
        basic.clearScreen()
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # . .
            . # . # .
            . # . . #
            `)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # . . # .
            # # # # .
            # . # # .
            # . . # .
            # . . # .
            `)
        basic.pause(500)
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . # . # .
            . # . # .
            . # . # .
            . . # . .
            `)
        basic.clearScreen()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("MONKESSSSSSSSSSSS")
})
