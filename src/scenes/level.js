import * as Phaser from 'phaser';

export default class Level extends Phaser.Scene {
    constructor() {
        super('playLevel');
    }

    preload() {
        this.load.spritesheet('player', '/assets/visuals/player/adventurer/spritesheet.png', {
            frameWidth: 50,
            frameHeight: 37
        });
    }
    
    create() {
        this.player = this.physics.add.sprite(750, 500, 'player');

        this.anims.create({
            key: 'playerIdleNoSword',
            frames: this.anims.generateFrameNumbers('player', {start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerCrouch',
            frames: this.anims.generateFrameNumbers('player', {start: 4, end: 7}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerRun',
            frames: this.anims.generateFrameNumbers('player', {start: 8, end: 13}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerJump',
            frames: this.anims.generateFrameNumbers('player', {start: 14, end: 17}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerSomersault',
            frames: this.anims.generateFrameNumbers('player', {start: 18, end: 21}),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.create({
            key: 'playerFall',
            frames: this.anims.generateFrameNumbers('player', {start: 22, end: 23}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerSlide',
            frames: this.anims.generateFrameNumbers('player', {start: 24, end: 25}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerStandUp',
            frames: this.anims.generateFrameNumbers('player', {start: 26, end: 28}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerCornerGrab',
            frames: this.anims.generateFrameNumbers('player', {start: 29, end: 32}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerCornerClimb',
            frames: this.anims.generateFrameNumbers('player', {start: 33, end: 37}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerIdleSword',
            frames: this.anims.generateFrameNumbers('player', {start: 38, end: 41}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerUpSlash',
            frames: this.anims.generateFrameNumbers('player', {start: 42, end: 46}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerDownSlash',
            frames: this.anims.generateFrameNumbers('player', {start: 47, end: 52}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerForwardSlash',
            frames: this.anims.generateFrameNumbers('player', {start: 53, end: 58}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerHurt',
            frames: this.anims.generateFrameNumbers('player', {start: 59, end: 61}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerDie',
            frames: this.anims.generateFrameNumbers('player', {start: 62, end: 68}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerSwordDraw',
            frames: this.anims.generateFrameNumbers('player', {start: 69, end: 72}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerSwordSheath',
            frames: this.anims.generateFrameNumbers('player', {start: 73, end: 76}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerCornerJump',
            frames: this.anims.generateFrameNumbers('player', {start: 77, end: 78}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerWallSlide',
            frames: this.anims.generateFrameNumbers('player', {start: 79, end: 80}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerLadderClimb',
            frames: this.anims.generateFrameNumbers('player', {start: 81, end: 84}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerSpellCast',
            frames: this.anims.generateFrameNumbers('player', {start: 85, end: 92}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerItemCollect',
            frames: this.anims.generateFrameNumbers('player', {start: 93, end: 95}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerForwardAirSlash',
            frames: this.anims.generateFrameNumbers('player', {start: 96, end: 99}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerUpAirSlash',
            frames: this.anims.generateFrameNumbers('player', {start: 100, end: 102}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerDownAirSlash',
            frames: this.anims.generateFrameNumbers('player', {start: 103, end: 105}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerPogo',
            frames: this.anims.generateFrameNumbers('player', {start: 106, end: 108}),
            frameRate: 10,
            repeat: -1
        });

        this.player.anims.play('playerUpSlash');        
        this.player.setScale(2);
    }
}
