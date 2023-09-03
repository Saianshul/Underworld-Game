import * as Phaser from 'phaser';
import Level from './scenes/level.js';

const config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 700,
    pixelArt: true,
    roundedPixels: true,
    scene: [Level],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    }
}

const game = new Phaser.Game(config);