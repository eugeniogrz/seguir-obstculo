let Distancia = 0
basic.forever(function () {
    Distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (Distancia > 0 && Distancia <= 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    } else if (Distancia > 10 && Distancia <= 30) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 60)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
})
