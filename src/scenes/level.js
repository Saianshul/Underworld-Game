import * as Phaser from 'phaser';
import { collisionDetected } from '../../utils/collisions.js';
import {
    createCustomHitboxesForPlayerIdleNoSwordAnimation,
    createCustomHitboxesForPlayerCrouchAnimation,
    createCustomHitboxesForPlayerRunAnimation,
    createCustomHitboxesForPlayerJumpAnimation,
    createCustomHitboxesForPlayerSomersaultAnimation,
    createCustomHitboxesForPlayerFallAnimation,
    createCustomHitboxesForPlayerSlideAnimation,
    createCustomHitboxesForPlayerStandUpAnimation,
    createCustomHitboxesForPlayerCornerGrabAnimation,
    createCustomHitboxesForPlayerCornerClimbAnimation,
    createCustomHitboxesForPlayerIdleSwordAnimation,
    createCustomHitboxesForPlayerUpSlashAnimation,
    createCustomHitboxesForPlayerDownSlashAnimation,
    createCustomHitboxesForPlayerForwardSlashAnimation,
    createCustomHitboxesForPlayerHurtAnimation,
    createCustomHitboxesForPlayerDieAnimation,
    createCustomHitboxesForPlayerSwordDrawAnimation,
    createCustomHitboxesForPlayerSwordSheathAnimation,
    createCustomHitboxesForPlayerCornerJumpAnimation,
    createCustomHitboxesForPlayerWallSlideAnimation,
    createCustomHitboxesForPlayerLadderClimbAnimation,
    createCustomHitboxesForPlayerSpellCastAnimation,
    createCustomHitboxesForPlayerItemCollectAnimation,
    createCustomHitboxesForPlayerForwardAirSlashAnimation,
    createCustomHitboxesForPlayerUpAirSlashAnimation,
    createCustomHitboxesForPlayerPogoAnimation
} from '../../utils/customHitboxes.js';

export default class Level extends Phaser.Scene {
    constructor() {
        super('playLevel');
    }

    preload() {
        this.load.spritesheet('player', '../../assets/visuals/player/spritesheet.png', {
            frameWidth: 50,
            frameHeight: 37
        });

        this.load.json('playerIdleNoSwordHitboxData', '../../assets/json/playerHitboxData/idle-no-sword.json');
        this.load.json('playerCrouchHitboxData', '../../assets/json/playerHitboxData/crouch.json');
        this.load.json('playerRunHitboxData', '../../assets/json/playerHitboxData/run.json');
        this.load.json('playerJumpHitboxData', '../../assets/json/playerHitboxData/jump.json');
        this.load.json('playerSomersaultHitboxData', '../../assets/json/playerHitboxData/somersault.json');
        this.load.json('playerFallHitboxData', '../../assets/json/playerHitboxData/fall.json');
        this.load.json('playerSlideHitboxData', '../../assets/json/playerHitboxData/slide.json');
        this.load.json('playerStandUpHitboxData', '../../assets/json/playerHitboxData/stand-up.json');
        this.load.json('playerCornerGrabHitboxData', '../../assets/json/playerHitboxData/corner-grab.json');
        this.load.json('playerCornerClimbHitboxData', '../../assets/json/playerHitboxData/corner-climb.json');
        this.load.json('playerIdleSwordHitboxData', '../../assets/json/playerHitboxData/idle-sword.json');
        this.load.json('playerUpSlashHitboxData', '../../assets/json/playerHitboxData/up-slash.json');
        this.load.json('playerDownSlashHitboxData', '../../assets/json/playerHitboxData/down-slash.json');
        this.load.json('playerForwardSlashHitboxData', '../../assets/json/playerHitboxData/forward-slash.json');
        this.load.json('playerHurtHitboxData', '../../assets/json/playerHitboxData/hurt.json');
        this.load.json('playerDieHitboxData', '../../assets/json/playerHitboxData/die.json');
        this.load.json('playerSwordDrawHitboxData', '../../assets/json/playerHitboxData/sword-draw.json');
        this.load.json('playerSwordSheathHitboxData', '../../assets/json/playerHitboxData/sword-sheath.json');
        this.load.json('playerCornerJumpHitboxData', '../../assets/json/playerHitboxData/corner-jump.json');
        this.load.json('playerWallSlideHitboxData', '../../assets/json/playerHitboxData/wall-slide.json');
        this.load.json('playerLadderClimbHitboxData', '../../assets/json/playerHitboxData/ladder-climb.json');
        this.load.json('playerSpellCastHitboxData', '../../assets/json/playerHitboxData/spell-cast.json');
        this.load.json('playerItemCollectHitboxData', '../../assets/json/playerHitboxData/item-collect.json');
        this.load.json('playerForwardAirSlashHitboxData', '../../assets/json/playerHitboxData/forward-air-slash.json');
        this.load.json('playerUpAirSlashHitboxData', '../../assets/json/playerHitboxData/up-air-slash.json');
        this.load.json('playerPogoHitboxData', '../../assets/json/playerHitboxData/pogo.json');
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
            key: 'playerPogo',
            frames: this.anims.generateFrameNumbers('player', { start: 106, end: 108 }),
            frameRate: 10,
            repeat: -1
        });

        const playerIdleNoSwordHitboxData = this.cache.json.get('playerIdleNoSwordHitboxData');
        const playerIdleNoSwordAnimation = this.anims.get('playerIdleNoSword');
        createCustomHitboxesForPlayerIdleNoSwordAnimation(playerIdleNoSwordHitboxData, playerIdleNoSwordAnimation);

        const playerCrouchHitboxData = this.cache.json.get('playerCrouchHitboxData');
        const playerCrouchAnimation = this.anims.get('playerCrouch');
        createCustomHitboxesForPlayerCrouchAnimation(playerCrouchHitboxData, playerCrouchAnimation);

        const playerRunHitboxData = this.cache.json.get('playerRunHitboxData');
        const playerRunAnimation = this.anims.get('playerRun');
        createCustomHitboxesForPlayerRunAnimation(playerRunHitboxData, playerRunAnimation);

        const playerJumpHitboxData = this.cache.json.get('playerJumpHitboxData');
        const playerJumpAnimation = this.anims.get('playerJump');
        createCustomHitboxesForPlayerJumpAnimation(playerJumpHitboxData, playerJumpAnimation);

        const playerSomersaultHitboxData = this.cache.json.get('playerSomersaultHitboxData');
        const playerSomersaultAnimation = this.anims.get('playerSomersault');
        createCustomHitboxesForPlayerSomersaultAnimation(playerSomersaultHitboxData, playerSomersaultAnimation);

        const playerFallHitboxData = this.cache.json.get('playerFallHitboxData');
        const playerFallAnimation = this.anims.get('playerFall');
        createCustomHitboxesForPlayerFallAnimation(playerFallHitboxData, playerFallAnimation);

        const playerSlideHitboxData = this.cache.json.get('playerSlideHitboxData');
        const playerSlideAnimation = this.anims.get('playerSlide');
        createCustomHitboxesForPlayerSlideAnimation(playerSlideHitboxData, playerSlideAnimation);

        const playerStandUpHitboxData = this.cache.json.get('playerStandUpHitboxData');
        const playerStandUpAnimation = this.anims.get('playerStandUp');
        createCustomHitboxesForPlayerStandUpAnimation(playerStandUpHitboxData, playerStandUpAnimation);

        const playerCornerGrabHitboxData = this.cache.json.get('playerCornerGrabHitboxData');
        const playerCornerGrabAnimation = this.anims.get('playerCornerGrab');
        createCustomHitboxesForPlayerCornerGrabAnimation(playerCornerGrabHitboxData, playerCornerGrabAnimation);

        const playerCornerClimbHitboxData = this.cache.json.get('playerCornerClimbHitboxData');
        const playerCornerClimbAnimation = this.anims.get('playerCornerClimb');
        createCustomHitboxesForPlayerCornerClimbAnimation(playerCornerClimbHitboxData, playerCornerClimbAnimation);

        const playerIdleSwordHitboxData = this.cache.json.get('playerIdleSwordHitboxData');
        const playerIdleSwordAnimation = this.anims.get('playerIdleSword');
        createCustomHitboxesForPlayerIdleSwordAnimation(playerIdleSwordHitboxData, playerIdleSwordAnimation);

        const playerUpSlashHitboxData = this.cache.json.get('playerUpSlashHitboxData');
        const playerUpSlashAnimation = this.anims.get('playerUpSlash');
        createCustomHitboxesForPlayerUpSlashAnimation(playerUpSlashHitboxData, playerUpSlashAnimation);

        const playerDownSlashHitboxData = this.cache.json.get('playerDownSlashHitboxData');
        const playerDownSlashAnimation = this.anims.get('playerDownSlash');
        createCustomHitboxesForPlayerDownSlashAnimation(playerDownSlashHitboxData, playerDownSlashAnimation);

        const playerForwardSlashHitboxData = this.cache.json.get('playerForwardSlashHitboxData');
        const playerForwardSlashAnimation = this.anims.get('playerForwardSlash');
        createCustomHitboxesForPlayerForwardSlashAnimation(playerForwardSlashHitboxData, playerForwardSlashAnimation);

        const playerHurtHitboxData = this.cache.json.get('playerHurtHitboxData');
        const playerHurtAnimation = this.anims.get('playerHurt');
        createCustomHitboxesForPlayerHurtAnimation(playerHurtHitboxData, playerHurtAnimation);

        const playerDieHitboxData = this.cache.json.get('playerDieHitboxData');
        const playerDieAnimation = this.anims.get('playerDie');
        createCustomHitboxesForPlayerDieAnimation(playerDieHitboxData, playerDieAnimation);

        const playerSwordDrawHitboxData = this.cache.json.get('playerSwordDrawHitboxData');
        const playerSwordDrawAnimation = this.anims.get('playerSwordDraw');
        createCustomHitboxesForPlayerSwordDrawAnimation(playerSwordDrawHitboxData, playerSwordDrawAnimation);

        const playerSwordSheathHitboxData = this.cache.json.get('playerSwordSheathHitboxData');
        const playerSwordSheathAnimation = this.anims.get('playerSwordSheath');
        createCustomHitboxesForPlayerSwordSheathAnimation(playerSwordSheathHitboxData, playerSwordSheathAnimation);

        const playerCornerJumpHitboxData = this.cache.json.get('playerCornerJumpHitboxData');
        const playerCornerJumpAnimation = this.anims.get('playerCornerJump');
        createCustomHitboxesForPlayerCornerJumpAnimation(playerCornerJumpHitboxData, playerCornerJumpAnimation);

        const playerWallSlideHitboxData = this.cache.json.get('playerWallSlideHitboxData');
        const playerWallSlideAnimation = this.anims.get('playerWallSlide');
        createCustomHitboxesForPlayerWallSlideAnimation(playerWallSlideHitboxData, playerWallSlideAnimation);

        const playerLadderClimbHitboxData = this.cache.json.get('playerLadderClimbHitboxData');
        const playerLadderClimbAnimation = this.anims.get('playerLadderClimb');
        createCustomHitboxesForPlayerLadderClimbAnimation(playerLadderClimbHitboxData, playerLadderClimbAnimation);

        const playerSpellCastHitboxData = this.cache.json.get('playerSpellCastHitboxData');
        const playerSpellCastAnimation = this.anims.get('playerSpellCast');
        createCustomHitboxesForPlayerSpellCastAnimation(playerSpellCastHitboxData, playerSpellCastAnimation);

        const playerItemCollectHitboxData = this.cache.json.get('playerItemCollectHitboxData');
        const playerItemCollectAnimation = this.anims.get('playerItemCollect');
        createCustomHitboxesForPlayerItemCollectAnimation(playerItemCollectHitboxData, playerItemCollectAnimation);

        const playerForwardAirSlashHitboxData = this.cache.json.get('playerForwardAirSlashHitboxData');
        const playerForwardAirSlashAnimation = this.anims.get('playerForwardAirSlash');
        createCustomHitboxesForPlayerForwardAirSlashAnimation(playerForwardAirSlashHitboxData, playerForwardAirSlashAnimation);

        const playerUpAirSlashHitboxData = this.cache.json.get('playerUpAirSlashHitboxData');
        const playerUpAirSlashAnimation = this.anims.get('playerUpAirSlash');
        createCustomHitboxesForPlayerUpAirSlashAnimation(playerUpAirSlashHitboxData, playerUpAirSlashAnimation);

        const playerPogoHitboxData = this.cache.json.get('playerPogoHitboxData');
        const playerPogoAnimation = this.anims.get('playerPogo');
        createCustomHitboxesForPlayerPogoAnimation(playerPogoHitboxData, playerPogoAnimation);

        this.player.anims.play('playerPogo');
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