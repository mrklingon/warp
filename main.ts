basic.forever(function () {
	
})
control.inBackground(function () {
    while (true) {
        images.createImage(`
            . . . . .
            . . . # .
            . # . . .
            . . . # .
            . . . . .
            `).showImage(0)
        images.createImage(`
            . . . . #
            . . . . .
            . . # . .
            # . . . .
            . . . . #
            `).showImage(0)
        images.createImage(`
            . . . . .
            . . . # .
            . . # . .
            . . . . .
            . . . . .
            `).showImage(0)
        images.createImage(`
            . . . . .
            . . . # .
            . . . . .
            . # . # .
            . . . . .
            `).showImage(0)
    }
})
