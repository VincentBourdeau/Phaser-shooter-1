
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		this.background = this.add.sprite(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);






		//	Here we load the rest of the assets our game needs.
		//	As this is just a Project Template I've not provided these assets, swap them for your own.
		this.load.image('titlepage', 'assets/interface/title.jpg');
		this.load.image('playButton', 'assets/interface/play_button.png');

		this.load.image('sea', 'assets/game/sea.png');
    this.load.image('bullet', 'assets/game/bullet.png');
    this.load.image('enemyBullet', 'assets/game/enemy-bullet.png');
    this.load.image('powerup1', 'assets/game/powerup1.png');
		this.load.image('powerup2', 'assets/game/powerup2.png');
    this.load.spritesheet('greenEnemy', 'assets/game/enemy.png', 32, 32);
    this.load.spritesheet('whiteEnemy', 'assets/game/shooting-enemy.png', 32, 32);
    this.load.spritesheet('boss', 'assets/game/boss.png', 93, 75);
    this.load.spritesheet('explosion', 'assets/game/explosion.png', 32, 32);

    this.load.spritesheet('player', 'assets/game/player.png', 64, 64);

    this.load.spritesheet('bomb', 'assets/game/bomb.png', 32, 32);
		this.load.image('bombBlast', 'assets/game/bomb-blast.png');

		this.load.audio('explosion', ['assets/game/explosion.wav']);
		this.load.audio('playerExplosion', ['assets/game/player-explosion.wav']);
		this.load.audio('enemyFire', ['assets/game/enemy-fire.wav']);
		this.load.audio('playerFire', ['assets/game/player-fire.wav']);
		this.load.audio('powerUp', ['assets/game/powerup.wav']);

		this.load.spritesheet('destroyer', 'assets/game/destroyer.png', 32, 174);
		
		this.load.spritesheet('submarine', 'assets/game/sub.png', 32, 98);

		//this.load.atlas('playButton', 'assets/interface/play_button.png', 'images/play_button.json');
		/*this.load.audio('titleMusic', ['audio/main_menu.mp3']);
		this.load.bitmapFont('caslon', 'fonts/caslon.png', 'fonts/caslon.xml');*/
		//	+ lots of other required assets here

	},

	create: function () {

		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		this.preloadBar.cropEnabled = false;
		this.ready = true;
		this.state.start('MainMenu');

	},

	update: function () {

		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.

		//	If you don't have any music in your game then put the game.state.start line into the create function and delete
		//	the update function completely.

		/*if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		{
			this.ready = true;
			this.state.start('MainMenu');
		}*/

	}

};
