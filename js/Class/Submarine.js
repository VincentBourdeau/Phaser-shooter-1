Submarine = function ( index, game ) {

    this.game = game;
    this.sprite = null;

    this.health = 1;
    this.alive = true;


};

Submarine.prototype = {

  preload: function () {

    this.game.load.spritesheet('submarine', 'assets/game/enemy.png', 32, 32);

  },

  create: function(){

    //  Add the player
    this.sprite = this.game.add.sprite(500, 750, 'submarine');
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.animations.add('fly', [0, 1, 2], 20, true);
    this.sprite.animations.add('ghost', [3, 0, 3, 1], 20, true);

    this.game.physics.enable( this.sprite, Phaser.Physics.ARCADE );
    this.sprite.speed = 300;
    this.sprite.body.collideWorldBounds = true;
    // 20 x 20 pixel hitbox, centered a little bit higher than the center
    this.sprite.body.setSize(20, 20, 0, -5);

    this.sprite.body.velocity.y = this.game.rnd.integerInRange(-30, -60);
    this.sprite.play('fly');

  },

  update: function(){

    //
    this.game.physics.arcade.overlap(
      this.player, this.sprite, this.playerCollision, null, this
    );

  },

  render: function(){

  },

  playerCollision: function(player, me){
    me.destroy();
  },

  damage: function(){
    this.health -= 1;

    if (this.health <= 0)
    {
        this.alive = false;

        return true;
    }

    return false;
  }

}
