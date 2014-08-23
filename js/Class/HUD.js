
/**
 *
 *  Class HUD
 *
 *  Handles Text rendering for UI
 *
 */

HUD = function ( game, score, Player, nbBombs ) {

    //  Game's vars
    this.game = game;
    this.score = score;
    this.nbLifes = Player.nbLives;
    this.nbBombs = nbBombs;

    //  HUD.instructions
    this.instructions = null;
    this.instExpire = 0;
    this.instTxt = 'Use Arrow Keys to Move, Press Z to Fire\n' + 'Tapping/clicking does both';
    this.instStyle = {
      font: '20px monospace',
      fill: '#fff',
      align: 'center'
    };

    //  HUD.scoreText
    this.scoreText = null;
    this.scoreTxtStyle = {
      font: '20px monospace',
      fill: '#fff',
      align: 'center'
    };

    //  HUD.returnText
    this.returnText = null;
    this.showReturn = false;
    this.showReturnDuration = 2000;
    this.showReturnTxt = 'Press Z or Tap Game to go back to Main Menu';
    this.showReturnStyle = {
      font: '16px sans-serif',
      fill: '#fff'
    };

    //  HUD.endText
    this.endText = null;
    this.endTxtStyle = {
      font: '72px serif',
      fill: '#fff'
    };

    //  Lives Icons
    this.livesIcons = null;

    //  Bombs Icons
    this.bombsIconsPool = null;

};

HUD.prototype = {

  /**
   *
   *  FUNCTION create();
   *
   *  Constructor, init, add default + intro text
   *
   */
  create: function(){

    //  Add HUD.insctructions
    this.instructions = this.game.add.text(510, 600, this.instTxt, this.instStyle);
    this.instructions.anchor.setTo(0.5, 0.5);
    this.instExpire = this.game.time.now + 10000;

    //  Add HUD.scoreText
    this.scoreText = this.game.add.text(510, 30, '' + this.score, this.scoreTxtStyle);
    this.scoreText.anchor.setTo(0.5, 0.5);

    //  Add Lifes icons
    this.livesIcons = this.game.add.group();
    for (var i = 0; i < this.nbLifes; i++) {
      var life = this.livesIcons.create(924 + (30 * i), 30, 'player');
      life.scale.setTo(0.5, 0.5);
      life.anchor.setTo(0.5, 0.5);
    }

    //  Add Bombs icons
    this.bombsIconsPool = this.game.add.group();
    for (var i = 0; i < this.nbBombs; i++) {
      var bomb = this.bombsIconsPool.create(30 + (30 * i), 30, 'bomb');
      bomb.anchor.setTo(0.5, 0.5);
    }

  },

  /**
   *
   *  FUNCTION update();
   *
   *  EnterFrame, process timed events
   *
   */
  update: function(){

    //  Fade the intro instructions out after a set period of time
    if (this.instructions.exists && this.game.time.now > this.instExpire) {

      this.instructions.destroy();

    }

    //  Add a “back to main menu” after a set period of time
    if (this.showReturn && this.game.time.now > this.showReturn) {

      this.returnText = this.game.add.text(512, 400, this.showReturnTxt, this.showReturnStyle);
      this.returnText.anchor.setTo(0.5, 0.5);
      this.showReturn = false;

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
   *  FUNCTION displayEnd();
   *
   *
   *
   */
  displayEnd: function(win){

    //  Display end Msg
    var msg = win ? 'You Win!!!' : 'Game Over!';
    this.endText = this.game.add.text(510, 320, msg, this.endTxtStyle);
    this.endText.anchor.setTo(0.5, 0);

    //  Show “back to main menu” in [x] seconds
    this.showReturn = this.game.time.now + this.showReturnDuration;

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
    this.instructions.destroy();
    this.scoreText.destroy();
    this.returnText.destroy();

  }

}
