let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    x = 0
    y = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(x, y)
            basic.pause(200)
            x += 1
        }
        y += 1
        x = 0
    }
})
