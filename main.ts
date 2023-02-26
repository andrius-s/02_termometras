basic.forever(function () {
    if (input.temperature() > 25) {
        basic.showString("h")
    } else {
        basic.showString("c")
    }
})
