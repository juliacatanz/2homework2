radio.onReceivedNumber(function (receivedNumber) {
    if (true) {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(number)
    number = randint(0, 10)
    basic.showNumber(0)
    number.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
    basic.showNumber(0)
    number.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(0)
})
let number = 0
number = 0
radio.setGroup(number)
