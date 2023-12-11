basic.showIcon(IconNames.Heart)
basic.showString("I")
basic.showIcon(IconNames.Heart)
basic.showString("Berlin")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showNumber(3, 200)
    basic.showNumber(2, 200)
    basic.showNumber(1, 200)
    basic.showNumber(0, 200)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        # . # . #
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        # # # # #
        # . # . #
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        # . # . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
