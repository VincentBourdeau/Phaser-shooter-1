BasicGame.Game = function(game) {

  //  When a State is added to Phaser it automatically has the following properties set on it,
  //  even if they already exist:

  // Phaser's Vars
  this.game;        //	a reference to the currently running game
  this.add;         //	used to add sprites, text, groups, etc
  this.camera;      //	a reference to the game camera
  this.cache;       //	the game cache
  this.input;       //	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
  this.load;        //	for preloading assets
  this.math;        //	lots of useful common math operations
  this.sound;       //	the sound manager - add a sound, play one, set-up markers, etc
  this.stage;       //	the game stage
  this.time;        //	the clock
  this.tweens;      //  the tween manager
  this.state;       //	the state manager
  this.world;       //	the game world
  this.particles;   //	the particle manager
  this.physics;     //	the physics manager
  this.rnd;         //	the repeatable random number generator

};

BasicGame.Game.prototype = {

  /**
   * DEFAULT PHASER'S AUTO FUNCTIONS
   *
   */
  create: function() {

    //  Initalize Game's variables
    this.initVars();



    //  Add the sea
    this.sea = this.add.tileSprite(0, 0, 1024, 768, 'sea');

    this.setupPlayer();

    this.setupItems();

    this.setupEnemies();

    this.setupBullets();

    this.setupExplosions();

    this.setupText();

    this.setupAudio();

    //  HUD
    this.HUD.create();

    //  Create KeyBoard Inputs
    this.cursors = this.input.keyboard.createCursorKeys();

  },

  update: function() {

    //	Constantly move the sea
    this.sea.tilePosition.y += 0.2;

    this.checkCollisions();

    this.spawnEnemies();

    this.enemyFire();

    this.processPlayerInput();

    this.processDelayedEffects();

    //  HUD
    this.HUD.update();

  },

  render: function() {
    //  For debug only ...
    //this.game.debug.body(this.enemy);
    //this.game.debug.body(this.player);
  },




  /**
   * SETUP FUNCTIONS
   * INIT()
   *
   */

  initVars: function(){

    //  Game
    this.stageIsEnded = false;
    this.sea = null;
    this.bombBlast = null;
    this.score = 0;
    this.stageScore = 20000;

    

    //  PowerUps
    this.powerUpPool = null;
    this.powerUp2Pool = null;
    this.powerUp2IsOn = false;
    this.powerUp2IsOnFor = 0;
    this.powerUp2Duration = 25000;

    

    //  Player
    this.player = null;
    this.playerSpeed = 300;
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

    //  Bombs
    this.nbBombs = 3;
    this.bombActive = false;
    this.bombActiveFor = 0;
    this.bombActiveTime = 2000;

    //  HUD
    this.HUD = new HUD(this.game, this.score, this.nbLives, this.nbBombs);

    //  Enemy
    this.enemyPool = null;
    this.enemyReward = 100;
    this.nextEnemyAt = 0;
    this.enemyDelay = 1000;
    this.enemyInitialHealth = 2;
    this.enemyDropRate = 0.05;

    //  Enemy #2 shooter
    this.shooterPool = null;
    this.shooterReward = 400;
    this.nextShooterAt = 0;
    this.shooterDelay = 3000;
    this.shooterShotDelay = 2000;
    this.shooterInitialHealth = 5;
    this.shooterDropRate = 0.1;
    this.enemyBulletPool = null;

    //  Boss
    this.bossPool = null;
    this.boss = null;
    this.bossReward = 10000;
    this.bossApproaching = false;
    this.bossInitialHealth = 500;
    this.nextBossShotAt = 0;
    this.bossShotDelay = 1000;

    //  Temp for testing
    this.enemyDropRate = 0.5;
    this.shooterDropRate = 0.5;
    this.stageScore = 2000;

  },

  setupPlayer: function() {

    //  Add the player
    this.player = this.add.sprite(400, 650, 'player');
    this.player.anchor.setTo(0.5, 0.5);
    this.player.animations.add('fly', [0, 1, 2], 20, true);
    this.player.animations.add('ghost', [3, 0, 3, 1], 20, true);
    this.player.play('fly');
    this.physics.enable(this.player, Phaser.Physics.ARCADE);
    this.player.speed = this.playerSpeed;
    this.player.body.collideWorldBounds = true;
    // 20 x 20 pixel hitbox, centered a little bit higher than the center
    this.player.body.setSize(20, 20, 0, -5);
    this.weaponLevel = 0;

  },

  setupItems: function() {

    // Add the power up
    this.powerUpPool = this.add.group();
    this.powerUpPool.enableBody = true;
    this.powerUpPool.physicsBodyType = Phaser.Physics.ARCADE;
    this.powerUpPool.createMultiple(5, 'powerup1');
    this.powerUpPool.setAll('anchor.x', 0.5);
    this.powerUpPool.setAll('anchor.y', 0.5);
    this.powerUpPool.setAll('outOfBoundsKill', true);
    this.powerUpPool.setAll('checkWorldBounds', true);
    this.powerUpPool.setAll('reward', 100, false, false, 0, true);

    // Add the power up #2
    this.powerUp2Pool = this.add.group();
    this.powerUp2Pool.enableBody = true;
    this.powerUp2Pool.physicsBodyType = Phaser.Physics.ARCADE;
    this.powerUp2Pool.createMultiple(5, 'powerup2');
    this.powerUp2Pool.setAll('anchor.x', 0.5);
    this.powerUp2Pool.setAll('anchor.y', 0.5);
    this.powerUp2Pool.setAll('outOfBoundsKill', true);
    this.powerUp2Pool.setAll('checkWorldBounds', true);
    this.powerUp2Pool.setAll('reward', 500, false, false, 0, true);

  },

  setupEnemies: function() {


    //  Add the enemy
    this.enemyPool = this.add.group();
    this.enemyPool.enableBody = true;
    this.enemyPool.physicsBodyType = Phaser.Physics.ARCADE;
    this.enemyPool.createMultiple(50, 'greenEnemy');
    this.enemyPool.setAll('anchor.x', 0.5);
    this.enemyPool.setAll('anchor.y', 0.5);
    this.enemyPool.setAll('outOfBoundsKill', true);
    this.enemyPool.setAll('checkWorldBounds', true);
    this.enemyPool.setAll('reward', this.enemyReward, false, false, 0, true);
    this.enemyPool.setAll('dropRate', this.enemyDropRate, false, false, 0, true);

    // Set the animation for each enemy sprite
    this.enemyPool.forEach(function(enemy) {
      enemy.animations.add('fly', [0, 1, 2], 20, true);
      enemy.animations.add('hit', [3, 1, 3, 2], 20, false);
      enemy.events.onAnimationComplete.add(function(e) {
        e.play('fly');
      }, this);
    });



    //  Add enemy2
    this.shooterPool = this.add.group();
    this.shooterPool.enableBody = true;
    this.shooterPool.physicsBodyType = Phaser.Physics.ARCADE;
    this.shooterPool.createMultiple(20, 'whiteEnemy');
    this.shooterPool.setAll('anchor.x', 0.5);
    this.shooterPool.setAll('anchor.y', 0.5);
    this.shooterPool.setAll('outOfBoundsKill', true);
    this.shooterPool.setAll('checkWorldBounds', true);
    this.shooterPool.setAll('reward', this.shooterReward, false, false, 0, true);
    this.shooterPool.setAll('dropRate', this.shooterDropRate, false, false, 0, true);

    // Set the animation for each sprite
    this.shooterPool.forEach(function(enemy2) {
      enemy2.animations.add('fly', [0, 1, 2], 20, true);
      enemy2.animations.add('hit', [3, 1, 3, 2], 20, false);
      enemy2.events.onAnimationComplete.add(function(e2) {
        e2.play('fly');
      }, this);
    });

    // start spawning 5 seconds into the game
    this.nextShooterAt = this.time.now + 5000;



    //  Add the BOSS
    this.bossPool = this.add.group();
    this.bossPool.enableBody = true;
    this.bossPool.physicsBodyType = Phaser.Physics.ARCADE;
    this.bossPool.createMultiple(1, 'boss');
    this.bossPool.setAll('anchor.x', 0.5);
    this.bossPool.setAll('anchor.y', 0.5);
    this.bossPool.setAll('outOfBoundsKill', true);
    this.bossPool.setAll('checkWorldBounds', true);
    this.bossPool.setAll('reward', this.bossReward, false, false, 0, true);
    this.bossPool.setAll('dropRate', 0, false, false, 0, true);

    //  Set the animations for the boss
    this.bossPool.forEach(function(enemy3) {
      enemy3.animations.add('fly', [0, 1, 2], 20, true);
      enemy3.animations.add('hit', [3, 1, 3, 2], 20, false);
      enemy3.events.onAnimationComplete.add(function(e3) {
        e3.play('fly');
      }, this);
    });

    this.boss = this.bossPool.getTop();

  },

  setupBullets: function() {

    //  Add the bullets
    //  Add an empty sprite group into our game
    this.bulletPool = this.add.group();
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

    //  Add the enemy bullets
    this.enemyBulletPool = this.add.group();
    this.enemyBulletPool.enableBody = true;
    this.enemyBulletPool.physicsBodyType = Phaser.Physics.ARCADE;
    this.enemyBulletPool.createMultiple(100, 'enemyBullet');
    this.enemyBulletPool.setAll('anchor.x', 0.5);
    this.enemyBulletPool.setAll('anchor.y', 0.5);
    this.enemyBulletPool.setAll('outOfBoundsKill', true);
    this.enemyBulletPool.setAll('checkWorldBounds', true);
    this.enemyBulletPool.setAll('reward', 0, false, false, 0, true);

  },

  setupExplosions: function() {

    //  Add the explosions group
    this.explosionPool = this.add.group();
    this.explosionPool.enableBody = true;
    this.explosionPool.physicsBodyType = Phaser.Physics.ARCADE;
    this.explosionPool.createMultiple(100, 'explosion');
    this.explosionPool.setAll('anchor.x', 0.5);
    this.explosionPool.setAll('anchor.y', 0.5);
    this.explosionPool.forEach(function(explosion) {
      explosion.animations.add('boom');
    });

  },

  setupText: function() {

    

  },

  setupAudio: function() {

    this.explosionSFX = this.add.audio('explosion');
    this.playerExplosionSFX = this.add.audio('playerExplosion');
    this.enemyFireSFX = this.add.audio('enemyFire');
    this.playerFireSFX = this.add.audio('playerFire');
    this.powerUpSFX = this.add.audio('powerUp');

  },




  /**
   * UPDATE FUNCTIONS
   * ENTER FRAME
   *
   */
  checkCollisions: function() {

    //  Player.bullet -> enemy.body
    this.physics.arcade.overlap(
      this.bulletPool, this.enemyPool, this.enemyHit, null, this
    );

    //  Player.bullet -> shooter.body
    this.physics.arcade.overlap(
      this.bulletPool, this.shooterPool, this.enemyHit, null, this
    );

    //  Player.body -> enemy.body
    this.physics.arcade.overlap(
      this.player, this.enemyPool, this.playerHit, null, this
    );

    //  Player.body -> shooter.body
    this.physics.arcade.overlap(
      this.player, this.shooterPool, this.playerHit, null, this
    );

    //  enemy.bullet -> player.body
    this.physics.arcade.overlap(
      this.player, this.enemyBulletPool, this.playerHit, null, this
    );

    //  Player.body -> powerUp.body
    this.physics.arcade.overlap(
      this.player, this.powerUpPool, this.playerPowerUp, null, this
    );

    //  Player.body -> powerUp2.body
    this.physics.arcade.overlap(
      this.player, this.powerUp2Pool, this.playerPowerUp2, null, this
    );

    //  Enemy.body -> BombBlast
    this.physics.arcade.overlap(
      this.enemyPool, this.bombBlast, this.enemyBlast, null, this
    );

    //  For the Boss ...
    if (this.bossApproaching === false) {

      //  Player.Bullets.body -> Boss.body
      this.physics.arcade.overlap(
        this.bulletPool, this.bossPool, this.enemyHit, null, this
      );

      //  Player.body -> Boss.body
      this.physics.arcade.overlap(
        this.player, this.bossPool, this.playerHit, null, this
      );

    }




  },

  spawnEnemies: function() {

    //  Add Random Enemy on update
    if (this.nextEnemyAt < this.time.now && this.enemyPool.countDead() > 0) {
      this.nextEnemyAt = this.time.now + this.enemyDelay;
      var enemy = this.enemyPool.getFirstExists(false);
      // spawn at a random location top of the screen
      enemy.reset(this.rnd.integerInRange(20, 1004), 0, this.enemyInitialHealth);
      // also randomize the speed
      enemy.body.velocity.y = this.rnd.integerInRange(30, 60);
      enemy.play('fly');
    }


    //  Add random enemy#2
    if (this.nextShooterAt < this.time.now && this.shooterPool.countDead() > 0) {
      this.nextShooterAt = this.time.now + this.shooterDelay;
      var shooter = this.shooterPool.getFirstExists(false);

      // spawn at a random location at the top
      shooter.reset(this.rnd.integerInRange(20, 1004), 0,
        this.shooterInitialHealth);

      // choose a random target location at the bottom
      var target = this.rnd.integerInRange(20, 1004);

      // move to target and rotate the sprite accordingly
      shooter.rotation = this.physics.arcade.moveToXY(
        shooter, target, 768, this.rnd.integerInRange(30, 80)
      ) - Math.PI / 2;

      shooter.play('fly');

      // each shooter has their own shot timer
      shooter.nextShotAt = 0;
    }

  },

  enemyFire: function() {

    //  Shooter fire...
    this.shooterPool.forEachAlive(function(enemy) {
      if (this.time.now > enemy.nextShotAt && this.enemyBulletPool.countDead() > 0) {
        var bullet = this.enemyBulletPool.getFirstExists(false);
        bullet.reset(enemy.x, enemy.y);
        this.physics.arcade.moveToObject(bullet, this.player, 150);
        enemy.nextShotAt = this.time.now + this.shooterShotDelay;
        this.enemyFireSFX.play();
      }
    }, this);

    //  Boss Fire
    if (this.bossApproaching === false && this.boss.alive &&
      this.nextBossShotAt < this.time.now &&
      this.enemyBulletPool.countDead() > 9) {

      this.nextBossShotAt = this.time.now + this.bossShotDelay;
      this.enemyFireSFX.play();

      for (var i = 0; i < 5; i++) {
        // process 2 bullets at a time
        var leftBullet = this.enemyBulletPool.getFirstExists(false);
        leftBullet.reset(this.boss.x - 10 - i * 10, this.boss.y + 20);
        var rightBullet = this.enemyBulletPool.getFirstExists(false);
        rightBullet.reset(this.boss.x + 10 + i * 10, this.boss.y + 20);

        if (this.boss.health > 250) {
          // aim directly at the player
          this.physics.arcade.moveToObject(leftBullet, this.player, 150);
          this.physics.arcade.moveToObject(rightBullet, this.player, 150);
        } else {
          // aim slightly off center of the player
          this.physics.arcade.moveToXY(
            leftBullet, this.player.x - i * 100, this.player.y, 150
          );
          this.physics.arcade.moveToXY(
            rightBullet, this.player.x + i * 100, this.player.y, 150
          );
        }
      }

    }

  },

  processPlayerInput: function() {

    //  Set Player velocity + movements controls
    this.player.body.velocity.x = 0;
    this.player.body.velocity.y = 0;

    //  With keyboard input - Left/Right
    if (this.cursors.left.isDown) {
      this.player.body.velocity.x = -this.player.speed;
    } else if (this.cursors.right.isDown) {
      this.player.body.velocity.x = this.player.speed;
    }

    //  With keyboard input - Up/Down
    if (this.cursors.up.isDown) {
      this.player.body.velocity.y = -this.player.speed;
    } else if (this.cursors.down.isDown) {
      this.player.body.velocity.y = this.player.speed;
    }

    //  With Click/Touch - goto
    if (this.input.activePointer.isDown &&
      this.physics.arcade.distanceToPointer(this.player) > 15) {
      this.physics.arcade.moveToPointer(this.player, this.player.speed);
    }

    //  Fire button
    if (this.input.keyboard.isDown(Phaser.Keyboard.Z) ||
      this.input.activePointer.isDown) {
      if (this.stageIsEnded && this.game.time.now > this.HUD.showReturn) {
        this.quitGame();
      } else {
        this.fire();
      }
    }

    //  BOMB button
    if (this.input.keyboard.isDown(Phaser.Keyboard.X)) {
      this.releaseBomb();
    }

  },

  processDelayedEffects: function() {

    //  Out of ghost mode
    if (this.ghostUntil && this.ghostUntil < this.time.now) {
      this.ghostUntil = null;
      this.player.play('fly');
    }

    //  Check if Bomb blast is activated
    if (this.bombActive && this.time.now < this.bombActiveFor) {

      var root_this = this;

      this.enemyPool.forEachAlive(function(enemy) {
        root_this.damageEnemy(enemy, 0.1);
      });

      this.shooterPool.forEachAlive(function(enemy) {
        root_this.damageEnemy(enemy, 0.1);
      });

      this.enemyBulletPool.forEachAlive(function(bullet) {
        bullet.kill();
        root_this.explode(bullet);
        root_this.explosionSFX.play();
      });


    } else {

      if (this.bombActiveFor > 0) {
        this.bombBlast.destroy();
      }

      this.bombActive = false;

    }

    //  Check if powerUp2 need to be turned off
    if (this.powerUp2IsOn && this.time.now > this.powerUp2IsOnFor) {

      this.powerUp2IsOn = false;
      this.powerUp2IsOnFor = 0;

    }

    //  Check if Boss is in INVUL state
    if (this.bossApproaching && this.boss.y > 80) {

      this.bossApproaching = false;
      this.boss.health = this.bossInitialHealth;
      this.nextBossShotAt = 0;

      this.boss.body.velocity.y = 0;
      this.boss.body.velocity.x = 200;

      // allow bouncing off world bounds
      this.boss.body.bounce.x = 1;
      this.boss.body.collideWorldBounds = true;

    }

  },




  /**
   * MISC FUNCTIONS
   * CUSTOM MADE FUNCTIONS
   *
   */
  fire: function() {

    //  If can shoot ...
    if (!this.player.alive || this.nextShotAt > this.time.now) {
      return;
    }

    this.nextShotAt = this.time.now + this.shotDelay;

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
      bullet.reset(this.player.x, this.player.y - 20);
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

  releaseBomb: function() {

    //  If can use bombs ...
    if (this.nextBombAt > this.time.now || this.bombActive) {
      return;
    }

    this.nextBombAt = this.time.now + this.useBombDelay;

    if ( this.HUD.bombsIconsPool.getFirstAlive() ) {

      this.explosionSFX.play();

      this.HUD.bombsIconsPool.getFirstAlive().kill();

      //  Add the bomb effect .png
      this.bombBlast = this.add.tileSprite(0, 0, 1024, 768, 'bombBlast');

      this.bombActive = true;
      this.bombActiveFor = this.time.now + this.bombActiveTime;


    }

  },

  playerHit: function(player, enemy) {

    // check first if this.ghostUntil is not undefined or null
    if (this.ghostUntil && this.ghostUntil > this.time.now) {
      return;
    }

    this.playerExplosionSFX.play();

    // crashing into an enemy only deals 5 damage
    this.damageEnemy(enemy, 5);

    //  Add an explosion
    /*var explosion = this.add.sprite(player.x, player.y, 'explosion');
    explosion.anchor.setTo(0.5, 0.5);
    explosion.animations.add('boom');
    explosion.play('boom', 15, false, true);*/


    if ( this.HUD.livesIcons.getFirstAlive() ) {

      this.HUD.livesIcons.getFirstAlive().kill();

      this.weaponLevel = 0;

      this.powerUp2IsOn = false;
      this.powerUp2IsOnFor = 0;

      this.ghostUntil = this.time.now + this.ghostDuration;
      this.player.play('ghost');

    } else {
      this.HUD.displayEnd(false);
      this.explode(player);
      player.kill();
      this.endStage();
    }

  },

  enemyHit: function(bullet, enemy) {
    bullet.kill();

    //  Add an explosion
    /*var explosion = this.add.sprite(enemy.x, enemy.y, 'explosion');
    explosion.anchor.setTo(0.5, 0.5);
    explosion.animations.add('boom');
    explosion.play('boom', 15, false, true);*/
    this.damageEnemy(enemy, 1);
  },

  enemyBlast: function(enemy, blast) {
    this.damageEnemy(enemy, 0.1);
  },

  damageEnemy: function(enemy, damage) {

    enemy.damage(damage);

    if (enemy.alive) {

      enemy.play('hit');

    } else {

      this.explode(enemy);
      this.explosionSFX.play();

      this.spawnPowerUp(enemy);
      this.addToScore(enemy.reward);

      if (enemy.key === 'boss') {
        this.HUD.displayEnd(true);
        this.endStage();
      }

    }

  },

  spawnPowerUp: function(enemy) {

    //  If there is still powerUp assets remaining
    if (this.powerUpPool.countDead() != 0 && this.powerUp2Pool.countDead() != 0) {

      //  Loot Drop
      if (this.rnd.frac() < enemy.dropRate) {

        //  Cancel if the player is already at Max Weapon Lvl
        if (this.weaponLevel === this.maxWeaponLevel) return;

        //  Choose the loot
        var powerUp = this.powerUpPool.getFirstExists(false); //  Default loot

        //  If double lucky...
        if (this.rnd.frac() < enemy.dropRate) powerUp = this.powerUp2Pool.getFirstExists(false); //  PowerLoot

        //  Release the loot
        powerUp.reset(enemy.x, enemy.y);
        powerUp.body.velocity.y = 100;

      } else {

        //  No Loot Drop
        //  For this time...

      }

    }

  },

  playerPowerUp: function(player, powerUp) {

    this.addToScore(powerUp.reward);
    powerUp.kill();
    this.powerUpSFX.play();

    if (this.weaponLevel < this.maxWeaponLevel) {
      this.weaponLevel++;
    }

  },

  playerPowerUp2: function(player, powerUp) {

    this.addToScore(powerUp.reward);
    powerUp.kill();
    this.powerUpSFX.play();

    this.powerUp2IsOn = true;
    this.powerUp2IsOnFor = this.time.now + this.powerUp2Duration;



  },

  addToScore: function(score) {
    this.score += score;
    this.HUD.scoreText.text = this.score;

    if (this.score >= this.stageScore && this.bossPool.countDead() == 1) {

      this.spawnBoss();


    }

  },

  spawnBoss: function() {

    this.bossApproaching = true;
    this.boss.reset(512, 0, this.bossInitialHealth);
    this.physics.enable(this.boss, Phaser.Physics.ARCADE);
    this.boss.body.velocity.y = 15;
    this.boss.play('fly');

  },

  explode: function(sprite) {
    if (this.explosionPool.countDead() === 0) {
      return;
    }

    var explosion = this.explosionPool.getFirstExists(false);
    explosion.reset(sprite.x, sprite.y);
    explosion.play('boom', 15, false, true);

    // add the original sprite's velocity to the explosion
    explosion.body.velocity.x = sprite.body.velocity.x;
    explosion.body.velocity.y = sprite.body.velocity.y;
  },

  endStage: function() {
    // you can't win and lose at the same time
    /*if (this.endText && this.endText.exists) {
      return;
    }*/

    this.stageIsEnded = true;

    this.enemyPool.destroy();
    this.shooterPool.destroy();
    this.bossPool.destroy();
    this.enemyBulletPool.destroy();

    this.bombActive = false;
    this.bombActiveFor = 0;

  },

  quitGame: function(pointer) {

    //  Here you should destroy anything you no longer need.
    //  Stop music, delete sprites, purge caches, free resources, all that good stuff.
    this.sea.destroy();
    this.player.destroy();
    this.explosionPool.destroy();

    this.HUD.quitGame();

    this.score = 0;

    //	Then let's go back to the main menu.
    this.state.start('MainMenu');

  }

};
