def on_button_pressed_a():
    music.stop_all_sounds()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

music.play_melody("C5 B A G F E D C ", 120)
pins.set_audio_pin(AnalogPin.P0)
music.set_volume(64)

def on_forever():
    pass
basic.forever(on_forever)
