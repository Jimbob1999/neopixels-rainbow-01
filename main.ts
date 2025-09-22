/**
 * Program that use the NeoPixel Extension to display a rainbow of colours over 12 LEDs
 * 
 * NeoPixel hardware required
 */
// Initialise the NeoPixel strip with 12 LEDs
let strip = neopixel.create(DigitalPin.P1, 16, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(50)
})
