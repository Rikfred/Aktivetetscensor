basic.forever(function () {
    if (input.acceleration(Dimension.Y) > 180) {
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
        basic.clearScreen()
    }
})
