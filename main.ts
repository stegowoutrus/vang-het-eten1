function music_def () {
	
}
// make with love
// 
// https://helloacm.com/microbit-programming-how-to-make-a-catching-apple-game-by-using-sprites-objects
input.onButtonPressed(Button.A, function () {
    px += -1
    if (px < 0) {
        px = 4
    }
    pixel.setX(px);
})
input.onButtonPressed(Button.AB, function () {
    if (apple.y() == 4) {
        // avoid mistakes
        game.setScore(0)
        score = 0
        apple.goTo(Math.randomRange(0, 4), -1);
    }
})
input.onButtonPressed(Button.B, function () {
    px += 1
    if (px > 4) {
        px = 0
    }
    pixel.setX(px);
})
let delay = 0
let score = 0
let px = 0
let apple = game.createSprite(Math.randomRange(0, 4), -1)
px = 2
let py = 4
let pixel = game.createSprite(px, py)
basic.forever(function () {
    apple.changeYBy(1);
if (pixel.isTouching(apple)) {
        score += 1
        apple.goTo(Math.randomRange(0, 4), -1);
    } else if (4 <= apple.y()) {
        basic.showNumber(score)
        game.setScore(score)
        game.gameOver()
    }
    delay = 500 - 10 * score
    delay = Math.max(50, delay)
    basic.pause(delay)
})
basic.forever(function () {
    if (true) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (4 <= apple.y()) {
        music.playMelody("E E E E E E E E ", 500)
    }
})
basic.forever(function () {
	
})
