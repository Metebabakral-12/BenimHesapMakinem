input.onButtonPressed(Button.A, function () {
    Sayı1 += 1
    basic.showNumber(Sayı1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Sayı + Sayı1)
})
input.onButtonPressed(Button.B, function () {
    Sayı += 1
    basic.showNumber(Sayı)
})
let Sayı = 0
let Sayı1 = 0
Sayı1 = 0
Sayı = 0
