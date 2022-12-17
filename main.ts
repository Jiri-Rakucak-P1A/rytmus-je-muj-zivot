let beep = 0
    beep = randint(500, 5000)
    music.playTone(Note.C, beep)

let start_time = 0
let end_time = 0
let get_input = () => {
    return input.buttonIsPressed(Button.A)}

let score = (time: number) => {
    console.log(beep)
    console.log(time)
    if (Math.abs(beep - time) < 2000) {
    basic.showString ("Dobre", 100)}
    else (basic.showString ("Vedle", 100 ))}

let Button_pressed = () => {
    start_time = control.millis()}
let Button_realised = () => {
    end_time = control.millis()
    score((end_time - start_time))}
 let ButtonisPressed = false
 while (true) {
     if (input.buttonIsPressed(Button.A)){
        if (!ButtonisPressed){
        Button_pressed  }
ButtonisPressed = true}
else {
    if (ButtonisPressed){
        Button_realised()
    }
    ButtonisPressed = false}
}