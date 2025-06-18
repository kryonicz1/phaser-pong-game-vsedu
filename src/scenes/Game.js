const WIDTH = 1024;
const HEIGHT = 768;

class Game extends Phaser.Scene {
    constructor() {
        super('Game');
        // Initialise necessary variables
        this.ball = null;
        this.leftPaddle = null;
        this.rightPaddle = null;
    }

    preload() {
        // Load necessary assets from the assets directory
        this.load.image('background', 'public/assets/background.png');
        this.load.image('ball', 'public/assets/ball.png');
        this.load.image('paddle', 'public/assets/paddle.png');
    }

    create() {
        // Add background, ball, and paddles to the scene
        this.add.image(WIDTH/2, HEIGHT/2, 'background').setScale(0.8, 0.8);
        this.ball = this.add.image(WIDTH/2, HEIGHT/2, 'ball').setScale(0.05, 0.05);
        this.leftPaddle = this.add.image(50, 384, "paddle");
        this.rightPaddle = this.add.image(974, 384, "paddle");
    }

    update() {
    }

}