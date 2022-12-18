let button_pressed = false
let start = 0
let end = 0
let beep = 0

function new_round() {
    beep = randint(500, 5000)
    music.playTone(Note.C, beep)
    button_pressed = true
    console.log (beep)
}
while (button_pressed = true)
    if (input.buttonIsPressed(Button.A)) {
        start = control.millis()
    }
if (!input.buttonIsPressed(Button.A)) {
    end = control.millis()
}
let time = Math.abs(end - start)
let score = Math.abs (time - beep)
if (score < 500) {
    basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
}
else {
    basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
}
new_round()