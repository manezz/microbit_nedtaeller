input.onButtonPressed(Button.A, function () {
    Lenny2()
})
function Lenny2 () {
    music.stopAllSounds()
    basic.clearScreen()
    lenny = 10
    basic.showNumber(lenny)
}
input.onButtonPressed(Button.B, function () {
    while (true) {
        basic.pause(1000)
        lenny += -1
        if (lenny <= 0) {
            music.playMelody("C5 B A G F E D C ", 120)
            break;
        }
    }
})
let lenny = 0
pins.setAudioPin(AnalogPin.P0)
music.setVolume(64)
Lenny2()
