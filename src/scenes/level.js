import * as Phaser from 'phaser';
import { collisionDetected } from '../../utils/collisionDetection.js';

export default class Level extends Phaser.Scene {
    constructor() {
        super('playLevel');
    }

    preload() {
        this.load.spritesheet('player', '/assets/visuals/player/spritesheet.png', {
            frameWidth: 50,
            frameHeight: 37
        });

        this.load.json('playerUpSlashHitboxData', '/assets/json/playerHitboxData/playerUpSlash.json');
    }
    
    create() {
        this.player = this.physics.add.sprite(750, 500, 'player');
        this.testPlayer = this.physics.add.sprite(1050, 500, 'player');

        this.anims.create({
            key: 'playerIdleNoSword',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerCrouch',
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerRun',
            frames: this.anims.generateFrameNumbers('player', { start: 8, end: 13 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerJump',
            frames: this.anims.generateFrameNumbers('player', { start: 14, end: 17 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerSomersault',
            frames: this.anims.generateFrameNumbers('player', { start: 18, end: 21 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.create({
            key: 'playerFall',
            frames: this.anims.generateFrameNumbers('player', { start: 22, end: 23 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerSlide',
            frames: this.anims.generateFrameNumbers('player', { start: 24, end: 25 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerStandUp',
            frames: this.anims.generateFrameNumbers('player', { start: 26, end: 28 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerCornerGrab',
            frames: this.anims.generateFrameNumbers('player', { start: 29, end: 32 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerCornerClimb',
            frames: this.anims.generateFrameNumbers('player', { start: 33, end: 37 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerIdleSword',
            frames: this.anims.generateFrameNumbers('player', { start: 38, end: 41 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerUpSlash',
            frames: this.anims.generateFrameNumbers('player', { start: 42, end: 46 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerDownSlash',
            frames: this.anims.generateFrameNumbers('player', { start: 47, end: 52 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerForwardSlash',
            frames: this.anims.generateFrameNumbers('player', { start: 53, end: 58 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerHurt',
            frames: this.anims.generateFrameNumbers('player', { start: 59, end: 61 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerDie',
            frames: this.anims.generateFrameNumbers('player', { start: 62, end: 68 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerSwordDraw',
            frames: this.anims.generateFrameNumbers('player', { start: 69, end: 72 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerSwordSheath',
            frames: this.anims.generateFrameNumbers('player', { start: 73, end: 76 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerCornerJump',
            frames: this.anims.generateFrameNumbers('player', { start: 77, end: 78 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerWallSlide',
            frames: this.anims.generateFrameNumbers('player', { start: 79, end: 80 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerLadderClimb',
            frames: this.anims.generateFrameNumbers('player', { start: 81, end: 84 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerSpellCast',
            frames: this.anims.generateFrameNumbers('player', { start: 85, end: 92 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerItemCollect',
            frames: this.anims.generateFrameNumbers('player', { start: 93, end: 95 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerForwardAirSlash',
            frames: this.anims.generateFrameNumbers('player', { start: 96, end: 99 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerUpAirSlash',
            frames: this.anims.generateFrameNumbers('player', { start: 100, end: 102 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerDownAirSlash',
            frames: this.anims.generateFrameNumbers('player', { start: 103, end: 105 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'playerPogo',
            frames: this.anims.generateFrameNumbers('player', { start: 106, end: 108 }),
            frameRate: 10,
            repeat: -1
        });

        this.playerUpSlashHitboxData = this.cache.json.get('playerUpSlashHitboxData');
        this.playerUpSlashAnimation = this.anims.get('playerUpSlash');

        this.playerUpSlashAnimation.frames.forEach((frame, index) => {
            let frameName = `playerUpSlashFrame${index + 1}`;
            let hitboxData;

            this.playerUpSlashHitboxData.rigidBodies.forEach(body => {
                if (body.name === frameName) {
                    hitboxData = body;
                }
            });

            if (hitboxData) {
                let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
                frame.customHitbox = hitbox;
            }
        });

        this.player.anims.play('playerUpSlash');        
        this.player.setScale(2);

        this.testPlayer.anims.play('playerUpSlash');
        this.testPlayer.setScale(2);
        this.testPlayer.setVelocityX(-100);
        this.testPlayer.setCollideWorldBounds(true);

        this.playerHitboxGraphics = this.add.graphics();
        this.testPlayerHitboxGraphics = this.add.graphics();
    }

    update() {
        let playerFrame = this.player.anims.currentFrame;
        let testPlayerFrame = this.testPlayer.anims.currentFrame;

        if (playerFrame && playerFrame.customHitbox && testPlayerFrame && testPlayerFrame.customHitbox) {
            const playerHitboxClone = Phaser.Geom.Polygon.Clone(playerFrame.customHitbox);
            const testPlayerHitboxClone = Phaser.Geom.Polygon.Clone(testPlayerFrame.customHitbox);

            playerHitboxClone.points.forEach(point => {
                point.x *= 100;
                point.y *= 100;
                point.y = this.game.config.height - point.y;
            });

            testPlayerHitboxClone.points.forEach(point => {
                point.x *= 100;
                point.y *= 100;
                point.y = this.game.config.height - point.y;
            });
            
            Phaser.Geom.Polygon.Translate(playerHitboxClone, this.player.x - 50, this.player.y - 664);
            Phaser.Geom.Polygon.Translate(testPlayerHitboxClone, this.testPlayer.x - 50, this.testPlayer.y - 664);

            this.playerHitboxGraphics.clear();
            this.playerHitboxGraphics.lineStyle(2, 0xFF0000);
            this.playerHitboxGraphics.strokePoints(playerHitboxClone.points, true);

            this.testPlayerHitboxGraphics.clear();
            this.testPlayerHitboxGraphics.lineStyle(2, 0x0000FF);
            this.testPlayerHitboxGraphics.strokePoints(testPlayerHitboxClone.points, true);
            
            if (collisionDetected(playerHitboxClone, testPlayerHitboxClone)) {
                console.log('success');
            }
        }
    }
}
