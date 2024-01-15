const tajne = 133
let hafo = -1650614892;
let gemo = -978678300;

radio.setTransmitSerialNumber(true)
radio.setTransmitPower(7) // 0 .. 7
//radio.setFrequencyBand(0) //toto nechat na pokoji 0 .. 83
radio.setGroup(tajne) // 0 .. 255

input.onButtonPressed(Button.A, function() {
    radio.sendNumber(randint(10, 40))
})

radio.onReceivedNumber(function(receivedNumber: number) {
    let serial = radio.receivedPacket(RadioPacketProperty.SerialNumber)
    if (serial === hafo)
        basic.showNumber(receivedNumber)
})

input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    //basic.showNumber(control.deviceSerialNumber())

    console.log(control.deviceSerialNumber())
})