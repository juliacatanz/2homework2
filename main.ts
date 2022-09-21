radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == number) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(number)
})
let number = 0
number = 0
radio.setGroup(1)
