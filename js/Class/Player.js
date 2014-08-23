
/**
 *
 *  Class Player
 *
 *  Player enemie Class
 *
 */

Player = function ( game, enemyPool, shooterPool, bossPool, enemyBulletPool, powerUpPool, powerUp2Pool ) {

    //  Game's vars
    this.game = game;
    this.cursors = this.game.input.keyboard.createCursorKeys();;
    this.enemyPool = enemyPool;
    this.shooterPool = shooterPool;
    this.bossPool = bossPool;
    this.enemyBulletPool = enemyBulletPool;
    this.powerUpPool = powerUpPool;
    this.powerUp2Pool = powerUp2Pool;

    //  Player
    this.sprite = null;
    this.alive = true;
    this.speed = 300;
    this.nbLives = 3;
    this.bulletPool = null;
    this.nextShotAt = 0;
    this.shotDelay = 100;
    this.nextBombAt = 0;
    this.useBombDelay = 2000;
    this.weaponLevel = 0;
    this.maxWeaponLevel = 7;
    this.ghostUntil = null;
    this.ghostDuration = 3000;

};

Player.prototype = {

  /**
   *
   *  FUNCTION create();
   *
   *  Constructor, init, add default + intro text
   *
   */
  create: function(){

    //  Add the player
    this.sprite = this.game.add.sprite(400, 650, 'player');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.animations.add('fly', [0, 1, 2], 20, true);
    this.sprite.animations.add('ghost', [3, 0, 3, 1], 20, true);
    this.sprite.play('fly');
    this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.setSize(20, 20, 0, -5);
    this.weaponLevel = 0;

    //  Add the bullets
    //  Add an empty sprite group into our game
    this.bulletPool = this.game.add.group();
    //  Enable physics to the whole sprite group
    this.bulletPool.enableBody = true;
    this.bulletPool.physicsBodyType = Phaser.Physics.ARCADE;
    //  Add 100 'bullet' sprites in the group.
    //  By default this uses the first frame of the sprite sheet and
    //  sets the initial state as non-existing (i.e. killed/dead)
    this.bulletPool.createMultiple(100, 'bullet');
    //  Sets anchors of all sprites
    this.bulletPool.setAll('anchor.x', 0.5);
    this.bulletPool.setAll('anchor.y', 0.5);
    //  Automatically kill the bullet sprites when they go out of bounds
    this.bulletPool.setAll('outOfBoundsKill', true);
    this.bulletPool.setAll('checkWorldBounds', true);

    //  Add the playerFireSFX
    this.playerFireSFX = this.game.add.audio('playerFire');

  },

  /**
   *
   *  FUNCTION update();
   *
   *  EnterFrame, process timed events
   *
   */
  update: function(){

    //  Set Player velocity + movements controls
    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;

    //  With keyboard input - Left/Right
    if (this.cursors.left.isDown) {
      this.sprite.body.velocity.x = -this.speed;
    } else if (this.cursors.right.isDown) {
      this.sprite.body.velocity.x = this.speed;
    }

    //  With keyboard input - Up/Down
    if (this.cursors.up.isDown) {
      this.sprite.body.velocity.y = -this.speed;
    } else if (this.cursors.down.isDown) {
      this.sprite.body.velocity.y = this.speed;
    }

    //  With Click/Touch - goto
    if (this.game.input.activePointer.isDown &&
      this.game.physics.arcade.distanceToPointer(this.sprite) > 15) {
      this.game.physics.arcade.moveToPointer(this.sprite, this.speed);
    }

    //  Fire button
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.Z) ||
      this.game.input.activePointer.isDown) {
      if (this.game.stageIsEnded && this.game.time.now > this.game.HUD.showReturn) {
        this.quitGame();
      } else {
        this.fire();
      }
    }

    //  BOMB button
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.X)) {
      this.releaseBomb();
    }

  },

  //  Debug function
  render: function(){},
  
  




  /**
   *==================================
   * MISC FUNCTIONS
   * Custom made function
   *==================================
   */

   /**
   *
   *  FUNCTION fire();
   *
   *  Player firing
   *
   */
  fire: function() {

    //  fire
    //  If can shoot ...
    if (!this.alive || this.nextShotAt > this.game.time.now) {
      return;
    }

    this.nextShotAt = this.game.time.now + this.shotDelay;

    this.playerFireSFX.play();



    var bullet;

    if (this.powerUp2IsOn) {

      if (this.bulletPool.countDead() < 10) {
        return;
      }

      for (var i = 0; i < 2; i++) {

        bullet = this.bulletPool.getFirstExists(false);
        // spawn left bullet slightly left off center
        bullet.reset(this.player.x - 20, this.player.y - 10 + (i * 10));
        // the left bullets spread from -95 degrees to -135 degrees
        bullet.body.velocity.y = -700;


        bullet = this.bulletPool.getFirstExists(false);
        // spawn right bullet slightly right off center
        bullet.reset(this.player.x - 10, this.player.y - 10 + (i * 10));
        // the right bullets spread from -85 degrees to -45
        bullet.body.velocity.y = -700;


        bullet = this.bulletPool.getFirstExists(false);
        // spawn right bullet slightly right off center
        bullet.reset(this.player.x, this.player.y - 10 + (i * 10));
        // the right bullets spread from -85 degrees to -45
        bullet.body.velocity.y = -700;


        bullet = this.bulletPool.getFirstExists(false);
        // spawn right bullet slightly right off center
        bullet.reset(this.player.x + 10, this.player.y - 10 + (i * 10));
        // the right bullets spread from -85 degrees to -45
        bullet.body.velocity.y = -700;


        bullet = this.bulletPool.getFirstExists(false);
        // spawn right bullet slightly right off center
        bullet.reset(this.player.x + 20, this.player.y - 10 + (i * 10));
        // the right bullets spread from -85 degrees to -45
        bullet.body.velocity.y = -700;

      }

      //  Normal Shoot lvl 1
    } else if (this.weaponLevel === 0) {

      bullet = this.bulletPool.getFirstExists(false);
      bullet.reset(this.sprite.x, this.sprite.y - 20);
      bullet.body.velocity.y = -500;

      //  Upgraded shoot via powerUps
    } else {

      if (this.bulletPool.countDead() < this.weaponLevel * 2) {
        return;
      }

      for (var i = 0; i < this.weaponLevel; i++) {

        bullet = this.bulletPool.getFirstExists(false);

        // spawn left bullet slightly left off center
        bullet.reset(this.player.x - (10 + i * 6), this.player.y - 20);
        // the left bullets spread from -95 degrees to -135 degrees
        this.physics.arcade.velocityFromAngle(-95 - i * 10, 500, bullet.body.velocity);

        bullet = this.bulletPool.getFirstExists(false);

        // spawn right bullet slightly right off center
        bullet.reset(this.player.x + (10 + i * 6), this.player.y - 20);
        // the right bullets spread from -85 degrees to -45
        this.physics.arcade.velocityFromAngle(-85 + i * 10, 500, bullet.body.velocity);

      }

    }

  },

  /**
   *
   *  FUNCTION releaseBomb();
   *
   *  Player unleashing a bomb
   *
   */
  releaseBomb: function() {

    //  releaseBomb
    this.sprite.destroy();

  },

  /**
   *
   *  FUNCTION playerHit();
   *
   *  Player get hit by smthing
   *
   */
  playerHit: function(thePlayer, theEnemy) {

    //  playerHit
    this.sprite.destroy();

  },

  /**
   *
   *  FUNCTION playerPowerUp();
   *
   *  Player take a powerUp
   *
   */
  playerPowerUp: function(thePlayer, thePowerup) {

    //  playerPowerUp
    this.sprite.destroy();

  },

  /**
   *
   *  FUNCTION playerPowerUp2();
   *
   *   Player take a powerUp2
   *
   */
  playerPowerUp2: function(thePlayer, thePowerup) {

    //  playerPowerUp2
    this.sprite.destroy();

  },

  /**
   *
   *  FUNCTION endStage();
   *
   *
   *
   */
  endStage: function(pointer) {

    //  Destroyz
    

  },

  /**
   *
   *  FUNCTION quitGame();
   *
   *
   *
   */
  quitGame: function(pointer) {

    //  Destroyz

  }

}
