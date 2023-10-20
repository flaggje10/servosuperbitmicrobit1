basic.forever(function () {
    SuperBit.Servo(SuperBit.enServo.S1, 0)
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    0,
    SuperBit.enMotors.M1,
    0
    )
})
