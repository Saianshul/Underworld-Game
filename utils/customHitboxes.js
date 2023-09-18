export function createCustomHitboxesForPlayerIdleNoSwordAnimation(playerIdleNoSwordHitboxData, playerIdleNoSwordAnimation) {
    playerIdleNoSwordAnimation.frames.forEach((frame, index) => {
        let frameName = `playerIdleNoSwordFrame${index + 1}`;
        let hitboxData;

        playerIdleNoSwordHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerCrouchAnimation(playerCrouchHitboxData, playerCrouchAnimation) {
    playerCrouchAnimation.frames.forEach((frame, index) => {
        let frameName = `playerCrouchFrame${index + 1}`;
        let hitboxData;

        playerCrouchHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerRunAnimation(playerRunHitboxData, playerRunAnimation) {
    playerRunAnimation.frames.forEach((frame, index) => {
        let frameName = `playerRunFrame${index + 1}`;
        let hitboxData;

        playerRunHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerJumpAnimation(playerJumpHitboxData, playerJumpAnimation) {
    playerJumpAnimation.frames.forEach((frame, index) => {
        let frameName = `playerJumpFrame${index + 1}`;
        let hitboxData;

        playerJumpHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerSomersaultAnimation(playerSomersaultHitboxData, playerSomersaultAnimation) {
    playerSomersaultAnimation.frames.forEach((frame, index) => {
        let frameName = `playerSomersaultFrame${index + 1}`;
        let hitboxData;

        playerSomersaultHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerFallAnimation(playerFallHitboxData, playerFallAnimation) {
    playerFallAnimation.frames.forEach((frame, index) => {
        let frameName = `playerFallFrame${index + 1}`;
        let hitboxData;

        playerFallHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerSlideAnimation(playerSlideHitboxData, playerSlideAnimation) {
    playerSlideAnimation.frames.forEach((frame, index) => {
        let frameName = `playerSlideFrame${index + 1}`;
        let hitboxData;

        playerSlideHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerStandUpAnimation(playerStandUpHitboxData, playerStandUpAnimation) {
    playerStandUpAnimation.frames.forEach((frame, index) => {
        let frameName = `playerStandUpFrame${index + 1}`;
        let hitboxData;

        playerStandUpHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerCornerGrabAnimation(playerCornerGrabHitboxData, playerCornerGrabAnimation) {
    playerCornerGrabAnimation.frames.forEach((frame, index) => {
        let frameName = `playerCornerGrabFrame${index + 1}`;
        let hitboxData;

        playerCornerGrabHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerCornerClimbAnimation(playerCornerClimbHitboxData, playerCornerClimbAnimation) {
    playerCornerClimbAnimation.frames.forEach((frame, index) => {
        let frameName = `playerCornerClimbFrame${index + 1}`;
        let hitboxData;

        playerCornerClimbHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerIdleSwordAnimation(playerIdleSwordHitboxData, playerIdleSwordAnimation) {
    playerIdleSwordAnimation.frames.forEach((frame, index) => {
        let frameName = `playerIdleSwordFrame${index + 1}`;
        let hitboxData;

        playerIdleSwordHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerUpSlashAnimation(playerUpSlashHitboxData, playerUpSlashAnimation) {
    playerUpSlashAnimation.frames.forEach((frame, index) => {
        let frameName = `playerUpSlashFrame${index + 1}`;
        let hitboxData;

        playerUpSlashHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerDownSlashAnimation(playerDownSlashHitboxData, playerDownSlashAnimation) {
    playerDownSlashAnimation.frames.forEach((frame, index) => {
        let frameName = `playerDownSlashFrame${index + 1}`;
        let hitboxData;

        playerDownSlashHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerForwardSlashAnimation(playerForwardSlashHitboxData, playerForwardSlashAnimation) {
    playerForwardSlashAnimation.frames.forEach((frame, index) => {
        let frameName = `playerForwardSlashFrame${index + 1}`;
        let hitboxData;

        playerForwardSlashHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerHurtAnimation(playerHurtHitboxData, playerHurtAnimation) {
    playerHurtAnimation.frames.forEach((frame, index) => {
        let frameName = `playerHurtFrame${index + 1}`;
        let hitboxData;

        playerHurtHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerDieAnimation(playerDieHitboxData, playerDieAnimation) {
    playerDieAnimation.frames.forEach((frame, index) => {
        let frameName = `playerDieFrame${index + 1}`;
        let hitboxData;

        playerDieHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerSwordDrawAnimation(playerSwordDrawHitboxData, playerSwordDrawAnimation) {
    playerSwordDrawAnimation.frames.forEach((frame, index) => {
        let frameName = `playerSwordDrawFrame${index + 1}`;
        let hitboxData;

        playerSwordDrawHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerSwordSheathAnimation(playerSwordSheathHitboxData, playerSwordSheathAnimation) {
    playerSwordSheathAnimation.frames.forEach((frame, index) => {
        let frameName = `playerSwordSheathFrame${index + 1}`;
        let hitboxData;

        playerSwordSheathHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerCornerJumpAnimation(playerCornerJumpHitboxData, playerCornerJumpAnimation) {
    playerCornerJumpAnimation.frames.forEach((frame, index) => {
        let frameName = `playerCornerJumpFrame${index + 1}`;
        let hitboxData;

        playerCornerJumpHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerWallSlideAnimation(playerWallSlideHitboxData, playerWallSlideAnimation) {
    playerWallSlideAnimation.frames.forEach((frame, index) => {
        let frameName = `playerWallSlideFrame${index + 1}`;
        let hitboxData;

        playerWallSlideHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerLadderClimbAnimation(playerLadderClimbHitboxData, playerLadderClimbAnimation) {
    playerLadderClimbAnimation.frames.forEach((frame, index) => {
        let frameName = `playerLadderClimbFrame${index + 1}`;
        let hitboxData;

        playerLadderClimbHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerSpellCastAnimation(playerSpellCastHitboxData, playerSpellCastAnimation) {
    playerSpellCastAnimation.frames.forEach((frame, index) => {
        let frameName = `playerSpellCastFrame${index + 1}`;
        let hitboxData;

        playerSpellCastHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerItemCollectAnimation(playerItemCollectHitboxData, playerItemCollectAnimation) {
    playerItemCollectAnimation.frames.forEach((frame, index) => {
        let frameName = `playerItemCollectFrame${index + 1}`;
        let hitboxData;

        playerItemCollectHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerForwardAirSlashAnimation(playerForwardAirSlashHitboxData, playerForwardAirSlashAnimation) {
    playerForwardAirSlashAnimation.frames.forEach((frame, index) => {
        let frameName = `playerForwardAirSlashFrame${index + 1}`;
        let hitboxData;

        playerForwardAirSlashHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerUpAirSlashAnimation(playerUpAirSlashHitboxData, playerUpAirSlashAnimation) {
    playerUpAirSlashAnimation.frames.forEach((frame, index) => {
        let frameName = `playerUpAirSlashFrame${index + 1}`;
        let hitboxData;

        playerUpAirSlashHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}

export function createCustomHitboxesForPlayerPogoAnimation(playerPogoHitboxData, playerPogoAnimation) {
    playerPogoAnimation.frames.forEach((frame, index) => {
        let frameName = `playerPogoFrame${index + 1}`;
        let hitboxData;

        playerPogoHitboxData.rigidBodies.forEach(body => {
            if (body.name === frameName) {
                hitboxData = body;
            }
        });

        if (hitboxData) {
            let hitbox = new Phaser.Geom.Polygon(hitboxData.shapes[0].vertices);
            frame.customHitbox = hitbox;
        }
    });
}