let Distancia = 0
basic.forever(function () {
    Distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (Distancia > 0 && Distancia <= 5) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 30)
    } else if (Distancia > 5 && Distancia <= 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
})
