
/**
 *
 *  Class Submarines
 *
 *  Submarines enemie Class
 *
 */

Submarines = function ( game ) {

    //  Game's vars
    this.game = game;

    //  Submarine
    this.SubmarinesPool = null;
    this.reward = 1000;
    this.dropRate = 0.5;
    this.nextSubmarineAt = 0;
    this.SubmarinesSpawnAt = 25000;
    this.SubmarinesSpawnRate = 30000;
    this.submarineInitialHealth = 100;

};

Submarines.prototype = {

  /**
   *
   *  FUNCTION create();
   *
   *  Constructor, init, add default + intro text
   *
   */
  create: function(){

    //  Setup Submarines
    this.SubmarinesPool = this.game.add.group();
    this.SubmarinesPool.enableBody = true;
    this.SubmarinesPool.physicsBodyType = Phaser.Physics.ARCADE;
    this.SubmarinesPool.createMultiple(20, 'submarine');
    this.SubmarinesPool.setAll('anchor.x', 0.5);
    this.SubmarinesPool.setAll('anchor.y', 0.5);
    this.SubmarinesPool.setAll('scale.x', 0.85);
    this.SubmarinesPool.setAll('scale.y', 0.85);
    this.SubmarinesPool.setAll('outOfBoundsKill', true);
    this.SubmarinesPool.setAll('checkWorldBounds', true);
    this.SubmarinesPool.setAll('reward', this.reward, false, false, 0, true);
    this.SubmarinesPool.setAll('dropRate', this.dropRate, false, false, 0, true);

    // Set the animation for each sprite
    this.SubmarinesPool.forEach(function(sub) {
      sub.animations.add('move', [0,5,4,3,2,1,1,1,1,1,2,3,4,5,0], 5, true);
      sub.animations.add('hit', [0, 6, 0, 6], 20, false);
      sub.events.onAnimationComplete.add(function(s) {
        s.play('move');
      }, this);
    });

    // Start spawning at ...
    this.nextSubmarineAt = this.game.time.now + this.SubmarinesSpawnAt;

  },

  /**
   *
   *  FUNCTION update();
   *
   *  EnterFrame, process timed events
   *
   */
  update: function(){

    //  Add Submarine
    if (this.nextSubmarineAt < this.game.time.now && this.SubmarinesPool.countDead() > 0) {

      this.nextSubmarineAt = this.game.time.now + this.SubmarinesSpawnRate;

      var submarine = this.SubmarinesPool.getFirstExists(false);

      // spawn at a random location at the top
      submarine.reset(this.game.rnd.integerInRange(20, 1004), 0,
        this.submarineInitialHealth);

      // choose a random target location at the bottom
      var target = this.game.rnd.integerInRange(20, 1004);

      // move to target and rotate the sprite accordingly
      submarine.rotation = this.game.physics.arcade.moveToXY(
        submarine, target, 768, 10
      ) - Math.PI / 2;

      submarine.play('move');

      // each submarine has their own shot timer
      //submarine.nextShotAt = 0;

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
   *  FUNCTION endStage();
   *
   *
   *
   */
  endStage: function(pointer) {

    //  Destroyz
    this.SubmarinesPool.destroy();

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
