/*! TheWizard v1.0.4 build 19-08-2014 | (c) 2014 Hypnotic Owl UG (haftungsbeschraenkt) */
function AudioPlayer(t, r) {
  var g = t,
    a = this,
    d = 1,
    f = 1,
    h = 1,
    i = 1,
    q = .8,
    l = .3,
    n = 1,
    o = 1;
  r && (d = 0);
  var m = [],
    b = {},
    p = [],
    c = new Audio,
    j = new Audio,
    s = new Audio,
    e = new Audio,
    k = (document.createElement("div"), document.createElement("div"), -1);
  this.getSave = function() {
    return {
      volMaster: d,
      volMusic: f,
      volAmbient: h,
      volSound: i
    }
  }, this.Load = function(b) {
    return null == b || (d = b.volMaster, f = b.volMusic, h = b.volAmbient, i = b.volSound), a.updateVolume(), !0
  }, this.getMasterVolume = function() {
    return d
  }, this.setMasterVolume = function(b) {
    return null == b ? !1 : (b > q ? b = q : 0 > b && (b = 0), d = b, a.updateVolume(), b)
  }, this.toggleMute = function() {
    return d = d > 0 ? 0 : q, d > 0
  }, this.getMusicVolume = function() {
    return Math.round(f / l * 10)
  }, this.setMusicVolume = function(b) {
    return null == b ? !1 : (b = b * l / 10, b > l ? b = l : 0 > b && (b = 0), f = b, a.updateVolume(), b)
  }, this.toggleMusic = function() {
    return f = f > 0 ? 0 : l, f > 0
  }, this.getSoundVolume = function() {
    return Math.round(i / o * 10)
  }, this.setSoundVolume = function(b) {
    return null == b ? !1 : (b /= 10, b > o ? b = o : 0 > b && (b = 0), i = b, a.updateVolume(), b)
  }, this.toggleSound = function() {
    return i = f > 0 ? 0 : o, i > 0
  }, this.getAmbientVolume = function() {
    return Math.round(h / n * 10)
  }, this.setAmbientVolume = function(b) {
    return null == b ? !1 : (b /= 10, b > n ? b = n : 0 > b && (b = 0), h = b, a.updateVolume(), b)
  }, this.toggleAmbient = function() {
    return h = h > 0 ? 0 : n, h > 0
  }, this.updateVolume = function() {
    return c.volume = f * d, j.volume = f * d, e.volume = h * d, s.volume = i * d, !0
  }, this.addBGM = function(a, b) {
    m[a] = b
  }, this.addSound = function(a, c) {
    try {
      b[a] = new Audio(c)
    } catch (d) {}
  }, this.addAmbient = function(a, b) {
    p[a] = b
  }, this.loadAudio = function() {
    var b, c = new Audio;
    b = null != c.canPlayType && c.canPlayType("audio/ogg") ? "ogg" : "mp3", a.addSound("confirm", "assets/sound/confirm." + b), a.addSound("spellbook", "assets/sound/spellbook." + b), a.addSound("upgrade1", "assets/sound/upgrade1." + b), a.addSound("upgrade2", "assets/sound/upgrade2." + b), a.addSound("upgrade3", "assets/sound/upgrade3." + b), a.addSound("button3", "assets/sound/button3." + b), a.addSound("closeTome1", "assets/sound/closetome1." + b), a.addSound("closeTome2", "assets/sound/closetome2." + b), a.addSound("closeTome3", "assets/sound/closetome3." + b), a.addSound("pageTurn1", "assets/sound/pageturn1." + b), a.addBGM("menu", "assets/sound/bgm/menu." + b), a.addBGM("sewer", "assets/sound/bgm/sewer." + b), a.addBGM("sewer2", "assets/sound/bgm/sewer2." + b), a.addBGM("crypt", "assets/sound/bgm/crypt." + b), a.addBGM("graveyard", "assets/sound/bgm/graveyard." + b), a.addBGM("mountains", "assets/sound/bgm/mountains." + b), a.addBGM("mountains2", "assets/sound/bgm/mountains2." + b), a.addBGM("outro", "assets/sound/bgm/outro." + b), a.addBGM("credits", "assets/sound/bgm/credits." + b), a.addAmbient("sewer", "assets/sound/amb/amb_sewers01." + b), a.addAmbient("crypt", "assets/sound/amb/amb_crypt." + b), a.addAmbient("graveyard", "assets/sound/amb/amb_graveyard02." + b), a.addAmbient("mountains", "assets/sound/amb/amb_mountains03." + b), a.addAmbient("drow", "assets/sound/amb/amb_drow01." + b), a.addAmbient("academy", "assets/sound/amb/amb_academy." + b), a.addAmbient("fireplace", "assets/sound/amb/fireplace." + b), a.addSound("left1", "assets/sound/left1." + b), a.addSound("left2", "assets/sound/left2." + b), a.addSound("right1", "assets/sound/right1." + b), a.addSound("right2", "assets/sound/right2." + b), a.addSound("xp1", "assets/sound/xp." + b), a.addSound("xp2", "assets/sound/xp2." + b), a.addSound("xp3", "assets/sound/xp3." + b), a.addSound("xp4", "assets/sound/xp4." + b), a.addSound("xp5", "assets/sound/xp5." + b), a.addSound("health", "assets/sound/health." + b), a.addSound("life", "assets/sound/life." + b), a.addSound("levelup", "assets/sound/levelup." + b), a.addSound("victory", "assets/sound/victory_01." + b), a.addSound("poof1", "assets/sound/poof1." + b), a.addSound("poof2", "assets/sound/poof2." + b), a.addSound("barrelBreak1", "assets/sound/barrelbreak1." + b), a.addSound("barrelBreak2", "assets/sound/barrelbreak2." + b), a.addSound("barrelBreak3", "assets/sound/barrelbreak3." + b), a.addSound("vaseBreak1", "assets/sound/breakingvase1." + b), a.addSound("vaseBreak2", "assets/sound/breakingvase2." + b), a.addSound("vaseBreak3", "assets/sound/breakingvase3." + b), a.addSound("bowImpact1", "assets/sound/bowImpact1." + b), a.addSound("bowImpact2", "assets/sound/bowImpact2." + b), a.addSound("bowImpact3", "assets/sound/bowImpact3." + b), a.addSound("bowRelease1", "assets/sound/bowRelease1." + b), a.addSound("bowRelease2", "assets/sound/bowRelease2." + b), a.addSound("footsteps1", "assets/sound/footstep1." + b), a.addSound("footsteps2", "assets/sound/footstep2." + b), a.addSound("footsteps3", "assets/sound/footstep3." + b), a.addSound("footsteps4", "assets/sound/footstep4." + b), a.addSound("footsteps5", "assets/sound/footstep5." + b), a.addSound("casting", "assets/sound/casting1." + b), a.addSound("castingfail", "assets/sound/castfail." + b), a.addSound("tile1", "assets/sound/tile1." + b), a.addSound("tile2", "assets/sound/tile2." + b), a.addSound("tile3", "assets/sound/tile3." + b), a.addSound("tile4", "assets/sound/tile4." + b), a.addSound("bloodmagic", "assets/sound/bloodtile." + b), a.addSound("burning", "assets/sound/burning0.1." + b), a.addSound("energy", "assets/sound/energy0.5." + b), a.addSound("magic", "assets/sound/magic." + b), a.addSound("icecast", "assets/sound/freezecast." + b), a.addSound("electricity", "assets/sound/spark12." + b), a.addSound("explosion", "assets/sound/blast." + b), a.addSound("fire", "assets/sound/Flamebreath05." + b), a.addSound("hurt", "assets/sound/hit." + b), a.addSound("ice", "assets/sound/freeze04." + b), a.addSound("invisibility", "assets/sound/invisibilty." + b), a.addSound("acceleration", "assets/sound/acceleration." + b), a.addSound("magicShield", "assets/sound/magicshield." + b), a.addSound("superCharge", "assets/sound/bloodboost." + b), a.addSound("skeletonwalkL1", "assets/sound/skeleton_L1." + b), a.addSound("skeletonwalkL2", "assets/sound/skeleton_L2." + b), a.addSound("skeletonwalkR1", "assets/sound/skeleton_R1." + b), a.addSound("skeletonwalkR2", "assets/sound/skeleton_R2." + b), a.addSound("ratwalkR2", "assets/sound/ratwalkR2." + b), a.addSound("ratwalkR1", "assets/sound/ratwalkR1." + b), a.addSound("ratwalkL1", "assets/sound/ratwalkL1." + b), a.addSound("ratwalkL2", "assets/sound/ratwalkL2." + b), a.addSound("goblinwalkR2", "assets/sound/goblinR2." + b), a.addSound("goblinwalkR1", "assets/sound/goblinR1." + b), a.addSound("goblinwalkL1", "assets/sound/goblinL1." + b), a.addSound("goblinwalkL2", "assets/sound/goblinL2." + b), a.addSound("djin1", "assets/sound/djin1." + b), a.addSound("djin2", "assets/sound/djin2." + b), a.addSound("djin3", "assets/sound/djin3." + b), a.addSound("djin4", "assets/sound/djin4." + b), a.addSound("slime1", "assets/sound/slime1." + b), a.addSound("slime2", "assets/sound/slime2." + b), a.addSound("slime3", "assets/sound/slime3." + b), a.addSound("slime4", "assets/sound/slime4." + b), a.addSound("golem1", "assets/sound/golem1." + b), a.addSound("golem2", "assets/sound/golem2." + b), a.addSound("golem3", "assets/sound/golem3." + b), a.addSound("golem4", "assets/sound/golem4." + b), a.addSound("devil1", "assets/sound/devil1." + b), a.addSound("devil2", "assets/sound/devil2." + b), a.addSound("devil3", "assets/sound/devil3." + b), a.addSound("devil4", "assets/sound/devil4." + b), a.addSound("scorpion1", "assets/sound/scorpion1." + b), a.addSound("scorpion2", "assets/sound/scorpion2." + b), a.addSound("scorpion3", "assets/sound/scorpion3." + b), a.addSound("scorpion4", "assets/sound/scorpion4." + b), a.addSound("ratAttack1", "assets/sound/ratAttack1." + b), a.addSound("ratAttack2", "assets/sound/ratAttack2." + b), a.addSound("ratAlert1", "assets/sound/ratAlert1." + b), a.addSound("ratAlert2", "assets/sound/ratAlert2." + b), a.addSound("ratDies1", "assets/sound/ratDies1." + b), a.addSound("ratDies2", "assets/sound/ratDies2." + b), a.addSound("spiderAlert1", "assets/sound/spiderAlert1." + b), a.addSound("spiderAlert2", "assets/sound/spiderAlert2." + b), a.addSound("spiderAttack1", "assets/sound/spiderAttack1." + b), a.addSound("spiderAttack2", "assets/sound/spiderAttack2." + b), a.addSound("spiderAttack3", "assets/sound/spiderAttack3." + b), a.addSound("spiderDies1", "assets/sound/spiderDies1." + b), a.addSound("spiderDies2", "assets/sound/spiderDies2." + b), a.addSound("skellyAttack1", "assets/sound/skellyAttack1." + b), a.addSound("skellyAttack2", "assets/sound/skellyAttack2." + b), a.addSound("skellyAttack3", "assets/sound/skellyAttack3." + b), a.addSound("skellyDie1", "assets/sound/skellyDie1." + b), a.addSound("skellyDie2", "assets/sound/skellyDie2." + b), a.addSound("skellyDie2", "assets/sound/skellyDie2." + b), a.addSound("skellyAlert2", "assets/sound/skellyAlert2." + b), a.addSound("skellyAlert1", "assets/sound/skellyAlert1." + b), a.addSound("drowAttack1", "assets/sound/drowAttack1." + b), a.addSound("drowAttack2", "assets/sound/drowAttack2." + b), a.addSound("drowAttack3", "assets/sound/drowAttack3." + b), a.addSound("drowDies1", "assets/sound/drowDies1." + b), a.addSound("drowDies2", "assets/sound/drowDies2." + b), a.addSound("drowDies3", "assets/sound/drowDies3." + b), a.addSound("drowAlert1", "assets/sound/drowAlert1." + b), a.addSound("drowAlert2", "assets/sound/drowAlert2." + b), a.addSound("mummyAlert1", "assets/sound/mummyAlert1." + b), a.addSound("mummyAlert2", "assets/sound/mummyAlert2." + b), a.addSound("mummyAttack1", "assets/sound/mummyAttack1." + b), a.addSound("mummyAttack2", "assets/sound/mummyAttack2." + b), a.addSound("mummyAttack3", "assets/sound/mummyAttack3." + b), a.addSound("mummyDies1", "assets/sound/mummyDies1." + b), a.addSound("mummyDies2", "assets/sound/mummyDies2." + b), a.addSound("mummyDies3", "assets/sound/mummyDies3." + b), a.addSound("mummybossDies1", "assets/sound/mummybossDies1." + b), a.addSound("skellyWarriorAttack1", "assets/sound/skeletonswordAttack1." + b), a.addSound("skellyWarriorAttack2", "assets/sound/skeletonswordAttack2." + b), a.addSound("skellyWarriorAttack3", "assets/sound/skeletonswordAttack3." + b), a.addSound("necromancerAttack1", "assets/sound/skellymageAttack1." + b), a.addSound("necromancerAttack2", "assets/sound/skellymageAttack2." + b), a.addSound("necromancerAttack3", "assets/sound/skellymageAttack3." + b), a.addSound("mummyQueenAttack1", "assets/sound/mummymageAttack1." + b), a.addSound("mummyQueenAttack2", "assets/sound/mummymageAttack2." + b), a.addSound("mummyQueenAttack3", "assets/sound/mummymageAttack3." + b), a.addSound("djinAlert1", "assets/sound/djinniAlert1." + b), a.addSound("djinAttack1", "assets/sound/djinniAttack1." + b), a.addSound("djinAttack2", "assets/sound/djinniAttack2." + b), a.addSound("djinAttack3", "assets/sound/djinniAttack3." + b), a.addSound("djinAttack4", "assets/sound/djinniAttack4." + b), a.addSound("djinDies1", "assets/sound/djinniDies1." + b), a.addSound("drowMageAttack1", "assets/sound/drowmageAttack1." + b), a.addSound("drowMageAttack2", "assets/sound/drowmageAttack2." + b), a.addSound("drowMageAttack3", "assets/sound/drowmageAttack3." + b), a.addSound("drowMageAttack4", "assets/sound/drowmageAttack4." + b), a.addSound("drowMageAttack5", "assets/sound/drowmageAttack5." + b), a.addSound("drowqueenAlert1", "assets/sound/drowqueenAlert1." + b), a.addSound("drowqueenAttack1", "assets/sound/drowqueenAttack1." + b), a.addSound("drowqueenAttack2", "assets/sound/drowqueenAttack2." + b), a.addSound("drowqueenAttack3", "assets/sound/drowqueenAttack3." + b), a.addSound("drowqueenDies1", "assets/sound/drowqueenDies1." + b), a.addSound("demonAlert1", "assets/sound/demonAlert1." + b), a.addSound("demonAttack1", "assets/sound/demonAttack1." + b), a.addSound("demonAttack2", "assets/sound/demonAttack2." + b), a.addSound("demonAttack3", "assets/sound/demonAttack3." + b), a.addSound("demonAttack3", "assets/sound/demonAttack4." + b), a.addSound("demonDies1", "assets/sound/demonDies1." + b), a.addSound("goblinAlert1", "assets/sound/goblinAlert1." + b), a.addSound("goblinAlert2", "assets/sound/goblinAlert2." + b), a.addSound("goblinAlert3", "assets/sound/goblinAlert3." + b), a.addSound("goblinAttack1", "assets/sound/goblinAttack1." + b), a.addSound("goblinAttack2", "assets/sound/goblinAttack2." + b), a.addSound("goblinAttack3", "assets/sound/goblinAttack3." + b), a.addSound("goblinMageAttack1", "assets/sound/goblinmageAttack1." + b), a.addSound("goblinMageAttack2", "assets/sound/goblinmageAttack2." + b), a.addSound("goblinMageAttack3", "assets/sound/goblinmageAttack3." + b), a.addSound("goblinDies1", "assets/sound/goblinDies1." + b), a.addSound("goblinDies2", "assets/sound/goblinDies2." + b), a.addSound("goblinDies3", "assets/sound/goblinDies3." + b), a.addSound("golemAlert1", "assets/sound/golemAlert1." + b), a.addSound("golemAlert2", "assets/sound/golemAlert2." + b), a.addSound("golemAttack1", "assets/sound/golemAttack1." + b), a.addSound("golemAttack2", "assets/sound/golemAttack2." + b), a.addSound("golemAttack3", "assets/sound/golemAttack3." + b), a.addSound("golemDies1", "assets/sound/golemDies1." + b), a.addSound("golemDies2", "assets/sound/golemDies2." + b), a.addSound("vampireAlert1", "assets/sound/vampireAlert1." + b), a.addSound("vampireAlert2", "assets/sound/vampireAlert2." + b), a.addSound("vampireAttack1", "assets/sound/vampireAttack1." + b), a.addSound("vampireAttack2", "assets/sound/vampireAttack2." + b), a.addSound("vampireAttack3", "assets/sound/vampireAttack3." + b), a.addSound("vampireDies1", "assets/sound/vampireDies1." + b), a.addSound("vampireDies2", "assets/sound/vampireDies2." + b), a.addSound("windlingAlert1", "assets/sound/windlingAlert1." + b), a.addSound("windlingAlert2", "assets/sound/windlingAlert2." + b), a.addSound("windlingAttack1", "assets/sound/windlingAttack1." + b), a.addSound("windlingAttack2", "assets/sound/windlingAttack2." + b), a.addSound("windlingAttack3", "assets/sound/windlingAttack3." + b), a.addSound("windlingDies1", "assets/sound/windlingDies1." + b), a.addSound("windlingDies2", "assets/sound/windlingDies2." + b), a.addSound("windlingDies3", "assets/sound/windlingDies3." + b), a.addSound("slimeAlert1", "assets/sound/slimeAlert1." + b), a.addSound("slimeAlert2", "assets/sound/slimeAlert2." + b), a.addSound("slimeAttack1", "assets/sound/slimeAttack1." + b), a.addSound("slimeAttack2", "assets/sound/slimeAttack2." + b), a.addSound("slimeAttack3", "assets/sound/slimeAttack3." + b), a.addSound("slimeDies1", "assets/sound/slimeDies1." + b), a.addSound("slimeDies2", "assets/sound/slimeDies2." + b), a.addSound("slimeDies3", "assets/sound/slimeDies3." + b)
  }, this.playBGM = function(b, a) {
    try {
      if (null == a && (a = !0), c.getAttribute("src") != m[b])
        if (c.paused || 0 >= f * d) c.setAttribute("src", m[b]), c.load(), c.volume = f * d, c.loop = a, c.play();
        else {
          var e = g.add.tween(c);
          e.onComplete.addOnce(function() {
            window.setTimeout(function() {
              c.setAttribute("src", m[b]), c.load(), c.volume = f * d, c.loop = a, c.play()
            }, 500)
          }, this), e.to({
            volume: 0
          }, 2e3, Phaser.Easing.Cubic.InOut, !0)
        } else if (c.paused) {
        c.play();
        var e = g.add.tween(c);
        e.to({
          volume: f * d
        }, 2e3, Phaser.Easing.Cubic.InOut, !0)
      }
    } catch (h) {}
  }, this.stopBGM = function() {
    try {
      if (!c.paused) {
        var a = g.add.tween(c);
        a.onComplete.addOnce(function() {
          window.setTimeout(function() {
            c.currentTime = 0, c.pause()
          }, 500)
        }, this), a.to({
          volume: 0
        }, 500, Phaser.Easing.Cubic.InOut, !0)
      }
      if (!j.paused) {
        var a = g.add.tween(j);
        a.onComplete.addOnce(function() {
          window.setTimeout(function() {
            j.currentTime = 0, j.pause()
          }, 500)
        }, this), a.to({
          volume: 0
        }, 500, Phaser.Easing.Cubic.InOut, !0)
      }
      return !0
    } catch (b) {}
  }, this.pauseBGM = function() {
    try {
      if (!c.paused) {
        var a = g.add.tween(c);
        a.onComplete.addOnce(function() {
          window.setTimeout(function() {
            c.pause()
          }, 500)
        }, this), a.to({
          volume: 0
        }, 500, Phaser.Easing.Cubic.InOut, !0)
      }
      if (!j.paused) {
        var a = g.add.tween(j);
        a.onComplete.addOnce(function() {
          window.setTimeout(function() {
            j.pause()
          }, 500)
        }, this), a.to({
          volume: 0
        }, 500, Phaser.Easing.Cubic.InOut, !0)
      }
      return !0
    } catch (b) {}
  }, this.getSounds = function() {
    return b
  }, this.playSound = function(a, c) {
    try {
      return null == b[a] ? !1 : (b[a].fadeOut && b[a].fadeOut.isRunning ? (b[a].fadeOut.stop(), b[a].fadeIn = g.add.tween(b[a]), b[a].fadeIn.to({
        volume: i * d
      }, 500, Phaser.Easing.Cubic.InOut, !0)) : (b[a].currentTime = 0, b[a].volume = i * d), b[a].loop = null != c ? c : !1, b[a].play(), !0)
    } catch (e) {}
  }, this.stopSound = function(a, c) {
    try {
      return null == b[a] || b[a].readyState < 4 ? !1 : (c ? (b[a].fadeOut = g.add.tween(b[a]), b[a].fadeOut.onComplete.addOnce(function() {
        b[a].fadeOut = g.add.tween(b[a]), b[a].fadeOut.onComplete.addOnce(function() {
          b[a].currentTime = 0, b[a].pause()
        }, this), b[a].fadeOut.to({
          volume: 0
        }, 200, Phaser.Easing.Linear.None, !0)
      }, this), b[a].fadeOut.to({
        volume: 0
      }, c, Phaser.Easing.Cubic.InOut, !0)) : (b[a].currentTime = 0, b[a].pause()), !0)
    } catch (d) {}
  }, this.playAmbient = function(a, b) {
    try {
      if (e.paused || 0 >= i * d) e.setAttribute("src", p[a]), e.load(), e.volume = h * d, e.loop = !0, e.play();
      else {
        var c = g.add.tween(e);
        c.onComplete.addOnce(function() {
          window.setTimeout(function() {
            e.setAttribute("src", p[a]), e.load(), e.volume = h * d, e.loop = !0, e.play()
          }, 500)
        }, this), c.to({
          volume: 0
        }, 1e3, Phaser.Easing.Quadratic.InOut, !0)
      }
      null != b && (e.loop = b)
    } catch (f) {}
  }, this.stopAmbient = function() {
    try {
      if (null == e || e.paused) return;
      var a = g.add.tween(e);
      a.onComplete.addOnce(function() {
        window.setTimeout(function() {
          e.pause()
        }, 500)
      }, this), a.to({
        volume: 0
      }, 500, Phaser.Easing.Quadratic.InOut, !0)
    } catch (b) {}
  }, this.playCasting = function() {
    a.playSound("casting", !0)
  }, this.stopCasting = function(b) {
    a.stopSound("casting", b || 1500)
  }, this.playMagictile = function() {
    a.playSound("magic", !0)
  }, this.stopMagictile = function(b) {
    a.stopSound("magic", b || 1500)
  }, this.playBloodtile = function() {
    a.playSound("bloodmagic", !0)
  }, this.stopBloodtile = function(b) {
    a.stopSound("bloodmagic", b || 1500)
  }, this.playIcetile = function() {
    a.playSound("icecast", !0)
  }, this.stopIcetile = function(b) {
    a.stopSound("icecast", b || 1500)
  }, this.playEnergytile = function() {
    a.playSound("energy", !0)
  }, this.stopEnergytile = function(b) {
    a.stopSound("energy", b || 1500)
  }, this.playBurningtile = function() {
    a.playSound("burning", !0)
  }, this.stopBurningtile = function(b) {
    a.stopSound("burning", b || 1500)
  }, this.playBlast = function() {
    a.playSound("explosion", !1)
  }, this.playSpotted = function() {
    a.playSound("spotted", !1)
  }, this.playXp = function() {
    a.playSound("xp" + Math.floor(5 * Math.random() + 1), !1)
  }, this.playTile = function() {
    a.playSound("tile" + Math.floor(4 * Math.random() + 1), !1)
  }, this.playUpgrade = function() {
    a.playSound("upgrade" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playAcceleration = function() {
    a.playSound("acceleration", !1)
  }, this.playMagicshield = function() {
    a.playSound("magicShield", !1)
  }, this.playShock = function() {
    a.playSound("electricity", !1)
  }, this.playFail = function() {
    a.playSound("castingfail", !1)
  }, this.playFootsteps = function() {
    a.playSound("footsteps" + Math.floor(5 * Math.random() + 1), !1)
  }, this.playDrowAlert = function() {
    a.playSound("drowAlert" + Math.floor(2 * Math.random() + 1), !1)
  }, this.playDrowAttack = function() {
    a.playSound("drowAttack" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playDrowMageAttack = function() {
    a.playSound("drowMageAttack" + Math.floor(5 * Math.random() + 1), !1)
  }, this.playDrowDies = function() {
    a.playSound("drowDies" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playDrowQueenAlert = function() {
    a.playSound("drowqueenAlert1", !1)
  }, this.playDrowQueenAttack = function() {
    a.playSound("drowqueenAttack" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playDrowQueenDies = function() {
    a.playSound("drowqueenDies1", !1)
  }, this.playSkeletonWalk = function() {
    k *= -1, k > 0 ? a.playSound("skeletonwalkL" + Math.floor(2 * Math.random() + 1), !1) : a.playSound("skeletonwalkR" + Math.floor(2 * Math.random() + 1), !1)
  }, this.playSkeletonAlert = function() {
    a.playSound("skellyAlert" + Math.floor(2 * Math.random() + 1), !1)
  }, this.playSkeletonAttack = function() {
    a.playSound("skellyAttack" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playSkeletonWarriorAttack = function() {
    a.playSound("skellyWarriorAttack" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playNecromancerAttack = function() {
    a.playSound("necromancerAttack" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playSkeletonDies = function() {
    a.playSound("skellyDie" + Math.floor(2 * Math.random() + 1), !1)
  }, this.playRatWalk = function() {
    k *= -1, k > 0 ? a.playSound("ratwalkL" + Math.floor(2 * Math.random() + 1), !1) : a.playSound("ratwalkR" + Math.floor(2 * Math.random() + 1), !1)
  }, this.playSpiderAlert = function() {
    a.playSound("spiderAlert" + Math.floor(2 * Math.random() + 1), !1)
  }, this.playSpiderAttack = function() {
    a.playSound("spiderAttack" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playSpiderDies = function() {
    a.playSound("spiderDies" + Math.floor(2 * Math.random() + 1), !1)
  }, this.playRatAttack = function() {
    a.playSound("ratAttack" + Math.floor(2 * Math.random() + 1), !1)
  }, this.playRatDies = function() {
    a.playSound("ratDies" + Math.floor(2 * Math.random() + 1), !1)
  }, this.playScorpionWalk = function() {
    a.playSound("scorpion" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playGoblinWalk = function() {
    k *= -1, k > 0 ? a.playSound("goblinwalkL" + Math.floor(2 * Math.random() + 1), !1) : a.playSound("goblinwalkR" + Math.floor(2 * Math.random() + 1), !1)
  }, this.playGoblinAlert = function() {
    a.playSound("goblinAlert" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playGoblinAttack = function() {
    a.playSound("goblinAttack" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playGoblinMageAttack = function() {
    a.playSound("goblinMageAttack" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playGoblinDies = function() {
    a.playSound("goblinDies" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playDjinWalk = function() {
    a.playSound("djin" + Math.floor(4 * Math.random() + 1), !1)
  }, this.playDjinAlert = function() {
    a.playSound("djinAlert1", !1)
  }, this.playDjinAttack = function() {
    a.playSound("djinAttack" + Math.floor(4 * Math.random() + 1), !1)
  }, this.playDjinDies = function() {
    a.playSound("djinDies1", !1)
  }, this.playMummyAlert = function() {
    a.playSound("mummyAlert" + Math.floor(2 * Math.random() + 1), !1)
  }, this.playMummyWalk = function() {
    k *= -1, k > 0 ? (a.playSound("left1", !1), a.playSound("slime" + Math.floor(3 * Math.random() + 1), !1)) : (a.playSound("right1", !1), a.playSound("slime" + Math.floor(3 * Math.random() + 1), !1))
  }, this.playMummyAttack = function() {
    a.playSound("mummyAttack" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playMummyDies = function() {
    a.playSound("mummyDies" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playMummyQueenAttack = function() {
    a.playSound("mummyQueenAttack" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playMummyQueenDies = function() {
    a.playSound("mummybossDies1", !1)
  }, this.playSlimeWalk = function() {
    a.playSound("slime" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playSlimeAlert = function() {
    a.playSound("slimeAlert" + Math.floor(2 * Math.random() + 1), !1)
  }, this.playSlimeAttack = function() {
    a.playSound("slimeAttack" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playSlimeDies = function() {
    a.playSound("slimeDies" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playGolemAlert = function() {
    a.playSound("golemAlert" + Math.floor(2 * Math.random() + 1), !1)
  }, this.playGolemWalk = function() {
    a.playSound("golem" + Math.floor(4 * Math.random() + 1), !1)
  }, this.playGolemAttack = function() {
    a.playSound("golemAttack" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playGolemDies = function() {
    a.playSound("golemDies" + Math.floor(2 * Math.random() + 1), !1)
  }, this.playDemonWalk = function() {
    a.playSound("devil" + Math.floor(4 * Math.random() + 1), !1)
  }, this.playDemonAlert = function() {
    a.playSound("demonAlert1", !1)
  }, this.playDemonAttack = function() {
    a.playSound("demonAttack" + Math.floor(4 * Math.random() + 1), !1)
  }, this.playDemonDies = function() {
    a.playSound("demonDies1", !1)
  }, this.playVampireAlert = function() {
    a.playSound("vampireAlert" + Math.floor(2 * Math.random() + 1), !1)
  }, this.playVampireAttack = function() {
    a.playSound("vampireAttack" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playVampireDies = function() {
    a.playSound("vampireDies" + Math.floor(2 * Math.random() + 1), !1)
  }, this.playWindlingAlert = function() {
    a.playSound("windlingAlert" + Math.floor(2 * Math.random() + 1), !1)
  }, this.playWindlingAttack = function() {
    a.playSound("windlingAttack" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playWindlingDies = function() {
    a.playSound("windlingDies" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playBowRelease = function() {
    a.playSound("bowRelease" + Math.floor(2 * Math.random() + 1), !1)
  }, this.playBowImpact = function() {
    a.playSound("bowImpact" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playBarrelBreak = function() {
    a.playSound("barrelBreak" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playVaseBreak = function() {
    a.playSound("vaseBreak" + Math.floor(3 * Math.random() + 1), !1)
  }, this.playPoof = function(b) {
    a.playSound("poof" + (b || Math.floor(2 * Math.random() + 1)), !1)
  }, this.playPageTurn = function() {
    a.playSound("pageTurn1", !1)
  }, this.playCloseSpellbook = function() {
    a.playSound("closeTome3", !1)
  }, this.playButtonOver = function() {
    a.playSound("button3", !1)
  }, this.playButtonDown = function() {
    a.playSound("confirm", !1)
  }, this.playFire = function() {
    a.playSound("fire", !1)
  }, this.playIce = function() {
    a.playSound("ice", !1)
  }, this.playHurt = function() {
    a.playSound("hurt", !1)
  }, this.playHealthPotion = function() {
    a.playSound("health", !1)
  }, this.playLifePotion = function() {
    a.playSound("life", !1)
  }, this.playVictory = function() {
    a.playSound("victory", !1)
  }, this.playLevelUp = function() {
    a.playSound("levelup", !1)
  }, this.playInvisibility = function() {
    a.playSound("invisibility", !1)
  }, this.playPickUpTome = function() {
    a.playSound("spellbook", !1)
  }, this.playBloodboost = function() {
    a.playSound("superCharge", !1)
  }
}
var Ads = {
    active: !0,
    mobile: !1,
    place: function(c) {
      if (!Ads.active) {
        var b = new Phaser.Device;
        Ads.mobile = b.windows || b.linux || b.macOS;
        var a = document.createElement("iframe");
        a.id = "adframe", a.src = "adview.html", a.style.border = "none", a.style.position = "absolute", a.style.left = "50%", document.body.appendChild(a), Ads.active = !0, Ads.update.call(c)
      }
    },
    update: function(c, d) {
      if (Ads.active) {
        var a = this,
          b = document.getElementById("adframe");
        if (Ads.mobile);
        else {
          var d = a.thumb.height * a.thumb.scale.x * a.scale.scaleFactorInversed.y + 4,
            c = a.thumb.width * a.thumb.scale.x * a.scale.scaleFactorInversed.x + 4,
            e = a.thumb.y * a.scale.scaleFactorInversed.y - 2;
          b.style.marginLeft = -c / 2 + "px", b.style.height = d + "px", b.style.width = c + "px", b.style.top = e + "px"
        }
      }
    },
    remove: function() {
      if (Ads.active) {
        var a = document.getElementById("adframe");
        a && a.remove(), Ads.active = !1
      }
    }
  },
  Main = {};
Main.Boot = function(a) {
  this.game = a, this.run = !1, this.game.font = "alagardmedium", this.game.smallfont = "mono", this.game.fontsize = this.game.mobile ? 16 : 32, this.game.audioplayer = new AudioPlayer(this.game), this.game.log = new Main.Log(this.game), this.game.savegame = new Main.Save(this.game), this.game.drag = 0
}, Main.Boot.prototype = {
  preload: function() {
    this.game.load.image("loaderFull", "assets/interface/loader_full.png"), this.game.load.image("loaderEmpty", "assets/interface/loader_empty.png"), this.game.load.spritesheet("loading", "assets/sprites/loading.png", 48, 48), this.game.add.text(0, 0, ".", {
      font: this.game.fontsize + "px " + this.game.font,
      fill: "white",
      align: "center"
    }), this.game.add.text(0, 0, ".", {
      font: this.game.fontsize + "px " + this.game.smallfont,
      fill: "white",
      align: "center"
    })
  },
  create: function() {
    null !== this.game.context && Phaser.Canvas.setSmoothingEnabled(this.game.context, !1), Phaser.Canvas.setImageRenderingCrisp(this.game.canvas), this.game.stage.smoothed = !1, this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL, this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL, this.game.stage.disableVisibilityChange = !0, this.game.scale.pageAlignHorizontally = !0, this.game.scale.pageAlignVertically = !0, this.game.device.android && this.game.device.chrome === !1 && (this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT, this.game.scale.maxIterations = 1), this.game.scale.refresh(), this.game.scale.setScreenSize(), this.game.buttonHandler = new Main.buttonHandler(this.game), this.game.debugging = 0, this.game.logging = !0, this.game.executable = !1, this.game.showSponsor = !1, this.game.state.start("preloader", Main.Preloader)
  }
}, window.onload = function() {
  this.w = this, this.d = atob;
  var b = !1,
    c = new Phaser.Device,
    d = c.windows || c.linux || c.macOS;
  (window.innerHeight < 450 || window.innerWidth < 600 || !d) && (b = !0);
  var a = new Phaser.Game(b ? 480 : 960, b ? 360 : 720, Phaser.CANVAS, null, null, !1, !1);
  a.mobile = b, a.state.add("boot", Main.Boot, !0), a.state.add("preloader", Main.Preloader), a.state.add("splash", Main.Splash), a.state.add("mainMenu", Main.MainMenu), a.state.add("saveSlots", Main.SaveSlots), a.state.add("stats", Main.Stats), a.state.add("animationTest", Main.AnimationTest), a.state.add("cutscene", Main.Cutscene), a.state.add("game", Main.Game), a.state.add("credits", Main.Credits), document.addEventListener("tizenhwkey", function(b) {
    if ("back" === b.keyName && tizen.application.getCurrentApplication().exit(), "menu" === b.keyName) switch (a.state.current) {
      case "game":
        a.state.states.game.hud.openMenu();
        break;
      case "stats":
        a.state.states.stats.exit();
        break;
      case "credits":
        a.state.states.credits.exit();
        break;
      case "cutscene":
        a.state.states.cutscene.nextPage();
        break;
      case "saveSlots":
        a.state.states.saveSlots.exit();
        break;
      case "splash":
        a.state.states.splash.exit()
    }
  })
}, Main.buttonHandler = function(b) {
  this.game = b, this.game.input.gamepad.start(), this.gamepad = this.game.input.gamepad.pad1, this.keyboard = this.game.input.keyboard, this.lastTimeOut = 0, this.buttons = {
    activate: !1,
    wait: !1,
    spellcasting: !1,
    back: !1,
    dragging: !1,
    up: !1,
    down: !1,
    left: !1,
    right: !1,
    pageLeft: !1,
    pageRight: !1,
    spellbook: !1,
    menu: !1,
    help: !1,
    helpX: !1
  }, this.sticks = {
    leftXaxis: 0,
    leftYaxis: 0,
    rightXaxis: 0,
    rightYaxis: 0
  }, this.buttonHelper = {
    space: this.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
    enter: this.keyboard.addKey(Phaser.Keyboard.ENTER),
    numpadEnter: this.keyboard.addKey(Phaser.Keyboard.NUMPAD_ENTER),
    x: this.keyboard.addKey(Phaser.Keyboard.X)
  };
  var a = this;
  this.gamepad.addCallbacks(a, {
    onConnect: function() {
      a.initGamepad.call(a)
    }
  })
}, Main.buttonHandler.prototype = {
  initGamepad: function() {
    this.gamepadButtons = this.game.device.firefox ? {
      A: Phaser.Gamepad.BUTTON_0,
      B: Phaser.Gamepad.BUTTON_1,
      X: Phaser.Gamepad.BUTTON_2,
      Y: Phaser.Gamepad.BUTTON_3,
      LB: Phaser.Gamepad.BUTTON_4,
      RB: Phaser.Gamepad.BUTTON_5,
      LT: Phaser.Gamepad.BUTTON_4,
      RT: Phaser.Gamepad.BUTTON_5,
      BACK: Phaser.Gamepad.BUTTON_6,
      START: Phaser.Gamepad.BUTTON_7,
      DLEFT: void 0,
      DRIGHT: void 0,
      DUP: void 0,
      DDOWN: void 0,
      SLEFTX: Phaser.Gamepad.AXIS_5,
      SLEFTY: Phaser.Gamepad.AXIS_0,
      SRIGHTX: Phaser.Gamepad.AXIS_3,
      SRIGHTY: Phaser.Gamepad.AXIS_2
    } : {
      A: Phaser.Gamepad.XBOX360_A,
      B: Phaser.Gamepad.XBOX360_B,
      X: Phaser.Gamepad.XBOX360_X,
      Y: Phaser.Gamepad.XBOX360_Y,
      LB: Phaser.Gamepad.XBOX360_LEFT_BUMPER,
      RB: Phaser.Gamepad.XBOX360_RIGHT_BUMPER,
      LT: Phaser.Gamepad.XBOX360_LEFT_TRIGGER,
      RT: Phaser.Gamepad.XBOX360_RIGHT_TRIGGER,
      BACK: Phaser.Gamepad.XBOX360_BACK,
      START: Phaser.Gamepad.XBOX360_START,
      DLEFT: Phaser.Gamepad.XBOX360_DPAD_LEFT,
      DRIGHT: Phaser.Gamepad.XBOX360_DPAD_RIGHT,
      DUP: Phaser.Gamepad.XBOX360_DPAD_UP,
      DDOWN: Phaser.Gamepad.XBOX360_DPAD_DOWN,
      SLEFTX: Phaser.Gamepad.XBOX360_STICK_LEFT_X,
      SLEFTY: Phaser.Gamepad.XBOX360_STICK_LEFT_Y,
      SRIGHTX: Phaser.Gamepad.XBOX360_STICK_RIGHT_X,
      SRIGHTY: Phaser.Gamepad.XBOX360_STICK_RIGHT_Y
    }, this.buttonHelper.a = this.gamepad.getButton(this.gamepadButtons.A)
  },
  update: function() {
    return this.game.time.now < this.lastTimeOut ? !1 : (this.reset(), this.handleKeyboard(), this.handleGamepad(), !0)
  },
  timeOut: function(a) {
    this.lastTimeOut = this.game.time.now + (a || 200), this.reset()
  },
  reset: function() {
    for (var a in this.buttons) this.buttons[a] = !1;
    for (var b in this.sticks) this.sticks[b] = 0
  },
  handleKeyboard: function() {
    (this.keyboard.isDown(Phaser.Keyboard.UP) || this.keyboard.isDown(Phaser.Keyboard.W) || this.keyboard.isDown(Phaser.Keyboard.NUMPAD_8)) && (this.buttons.up = !0), (this.keyboard.isDown(Phaser.Keyboard.DOWN) || this.keyboard.isDown(Phaser.Keyboard.S) || this.keyboard.isDown(Phaser.Keyboard.NUMPAD_5)) && (this.buttons.down = !0), (this.keyboard.isDown(Phaser.Keyboard.LEFT) || this.keyboard.isDown(Phaser.Keyboard.A) || this.keyboard.isDown(Phaser.Keyboard.NUMPAD_4)) && (this.buttons.left = !0), (this.keyboard.isDown(Phaser.Keyboard.RIGHT) || this.keyboard.isDown(Phaser.Keyboard.D) || this.keyboard.isDown(Phaser.Keyboard.NUMPAD_6)) && (this.buttons.right = !0), (this.keyboard.isDown(Phaser.Keyboard.SPACEBAR) || this.keyboard.isDown(Phaser.Keyboard.ENTER) || this.keyboard.isDown(Phaser.Keyboard.X) || this.keyboard.isDown(Phaser.Keyboard.NUMPAD_ENTER)) && (this.buttons.activate = !0, this.buttonHelper.space.duration > this.game.input.holdRate || this.buttonHelper.enter.duration > this.game.input.holdRate || this.buttonHelper.x.duration > this.game.input.holdRate || this.buttonHelper.numpadEnter.duration > this.game.input.holdRate ? this.buttons.spellcasting = !0 : (this.buttonHelper.space.timeDown - this.buttonHelper.space.timeUp > 0 && this.buttonHelper.space.timeDown - this.buttonHelper.space.timeUp < this.game.input.doubleTapRate || this.buttonHelper.enter.timeDown - this.buttonHelper.enter.timeUp > 0 && this.buttonHelper.enter.timeDown - this.buttonHelper.enter.timeUp < this.game.input.doubleTapRate || this.buttonHelper.x.timeDown - this.buttonHelper.x.timeUp > 0 && this.buttonHelper.x.timeDown - this.buttonHelper.x.timeUp < this.game.input.doubleTapRate || this.buttonHelper.numpadEnter.timeDown - this.buttonHelper.numpadEnter.timeUp > 0 && this.buttonHelper.numpadEnter.timeDown - this.buttonHelper.numpadEnter.timeUp < this.game.input.doubleTapRate) && (this.buttons.wait = !0)), (this.keyboard.isDown(Phaser.Keyboard.Y) || this.keyboard.isDown(Phaser.Keyboard.Z) || this.keyboard.isDown(Phaser.Keyboard.R) || this.keyboard.isDown(Phaser.Keyboard.NUMPAD_ADD)) && (this.buttons.back = !0), (this.keyboard.isDown(Phaser.Keyboard.SHIFT) || this.keyboard.isDown(Phaser.Keyboard.NUMPAD_SUBTRACT)) && (this.buttons.dragging = !0), this.keyboard.isDown(Phaser.Keyboard.Q) || this.keyboard.isDown(Phaser.Keyboard.B) || this.keyboard.isDown(Phaser.Keyboard.NUMPAD_7) ? this.buttons.pageLeft = !0 : (this.keyboard.isDown(Phaser.Keyboard.E) || this.keyboard.isDown(Phaser.Keyboard.V) || this.keyboard.isDown(Phaser.Keyboard.NUMPAD_9)) && (this.buttons.pageRight = !0), (this.keyboard.isDown(Phaser.Keyboard.ESC) || this.keyboard.isDown(Phaser.Keyboard.NUMPAD_DIVIDE)) && (this.buttons.menu = !0), this.keyboard.isDown(Phaser.Keyboard.H) && (this.buttons.help = !0), (this.keyboard.justPressed(Phaser.Keyboard.CAPS_LOCK) || this.keyboard.isDown(Phaser.Keyboard.C) || this.keyboard.isDown(Phaser.Keyboard.NUMPAD_MULTIPLY)) && (this.buttons.spellbook = !0)
  },
  handleGamepad: function() {
    this.game.input.gamepad.supported && this.game.input.gamepad.active && this.gamepad.connected && (void 0 !== this.gamepadButtons.DUP && this.gamepad.isDown(this.gamepadButtons.DUP) || this.gamepad.axis(this.gamepadButtons.SLEFTY) < -.5 ? this.buttons.up = !0 : (void 0 !== this.gamepadButtons.DOWN && this.gamepad.isDown(this.gamepadButtons.DDOWN) || this.gamepad.axis(this.gamepadButtons.SLEFTY) > .5) && (this.buttons.down = !0), void 0 !== this.gamepadButtons.DLEFT && this.gamepad.isDown(this.gamepadButtons.DLEFT) || this.gamepad.axis(this.gamepadButtons.SLEFTX) < -.5 ? this.buttons.left = !0 : (void 0 !== this.gamepadButtons.DRIGHT && this.gamepad.isDown(this.gamepadButtons.DRIGHT) || this.gamepad.axis(this.gamepadButtons.SLEFTX) > .5) && (this.buttons.right = !0), this.gamepad.justPressed(this.gamepadButtons.A) && (this.buttons.activate = !0, this.game.time.now - this.buttonHelper.a.timeDown > this.game.input.holdRate && (this.buttons.spellcasting = !0), this.buttonHelper.a.timeDown - this.buttonHelper.a.timeUp < this.game.input.doubleTapRate / 4 && (this.buttons.wait = !0)), this.gamepad.justPressed(this.gamepadButtons.B) && (this.buttons.back = !0), this.gamepad.justPressed(this.gamepadButtons.X) && (this.buttons.dragging = !0), this.gamepad.justPressed(this.gamepadButtons.Y) && (this.buttons.spellbook = !0), Math.abs(this.gamepad.axis(this.gamepadButtons.SRIGHTX)) > .4 && (this.buttons.dragging = !0, this.sticks.rightXaxis = this.gamepad.axis(this.gamepadButtons.SRIGHTX)), Math.abs(this.gamepad.axis(this.gamepadButtons.SRIGHTY)) > .4 && (this.buttons.dragging = !0, this.sticks.rightYaxis = this.gamepad.axis(this.gamepadButtons.SRIGHTY)), Math.abs(this.gamepad.axis(this.gamepadButtonsSLEFTX)) > .4 && (this.sticks.leftXaxis = this.gamepad.axis(this.gamepadButtonsSLEFTX)), Math.abs(this.gamepad.axis(this.gamepadButtons.SLEFTY)) > .4 && (this.sticks.leftYaxis = this.gamepad.axis(this.gamepadButtons.SLEFTY)), this.gamepad.justPressed(this.gamepadButtons.LT) || this.gamepad.justReleased(this.gamepadButtons.LB) ? this.buttons.pageLeft = !0 : (this.gamepad.justPressed(this.gamepadButtons.RT) || this.gamepad.justPressed(this.gamepadButtons.RB)) && (this.buttons.pageRight = !0), this.gamepad.justPressed(this.gamepadButtons.BACK) && (this.buttons.help = !0, this.buttons.helpX = !0), this.gamepad.justPressed(this.gamepadButtons.START) && (this.buttons.menu = !0))
  }
}, window.localStorage || Object.defineProperty(window, "localStorage", new function() {
  var b = [],
    a = {};
  Object.defineProperty(a, "getItem", {
    value: function(a) {
      return a ? this[a] : null
    },
    writable: !1,
    configurable: !1,
    enumerable: !1
  }), Object.defineProperty(a, "key", {
    value: function(a) {
      return b[a]
    },
    writable: !1,
    configurable: !1,
    enumerable: !1
  }), Object.defineProperty(a, "setItem", {
    value: function(a, b) {
      a && (document.cookie = escape(a) + "=" + escape(b) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")
    },
    writable: !1,
    configurable: !1,
    enumerable: !1
  }), Object.defineProperty(a, "length", {
    get: function() {
      return b.length
    },
    configurable: !1,
    enumerable: !1
  }), Object.defineProperty(a, "removeItem", {
    value: function(a) {
      a && (document.cookie = escape(a) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")
    },
    writable: !1,
    configurable: !1,
    enumerable: !1
  }), this.get = function() {
    var e;
    for (var c in a) e = b.indexOf(c), -1 === e ? a.setItem(c, a[c]) : b.splice(e, 1), delete a[c];
    for (b; b.length > 0; b.splice(0, 1)) a.removeItem(b[0]);
    for (var d, g, f = 0, h = document.cookie.split(/\s*;\s*/); f < h.length; f++) d = h[f].split(/\s*=\s*/), d.length > 1 && (a[g = unescape(d[0])] = unescape(d[1]), b.push(g));
    return a
  }, this.configurable = !1, this.enumerable = !0
}), Main.Save = function(b) {
  if (this.game = b, this.createInitial(), this.saveslot = 1, null != window.localStorage.getItem("wzSave_SaveSlot") && (this.saveslot = parseInt(window.localStorage.getItem("wzSave_SaveSlot"))), null != window.localStorage.getItem("wzSave_Audio")) {
    this.audio = JSON.parse(window.localStorage.getItem("wzSave_Audio"));
    for (var a in this.audio) this.audio[a] === !0 ? this.audio[a] = 10 : this.audio[a] === !1 && (this.audio[a] = 0)
  } else this.audio = {
    music: 10,
    sound: 10,
    ambient: 10
  };
  this.refreshAudio()
}, Main.Save.prototype = {
  createInitial: function() {
    var b = Main.Game.prototype.difficulty;
    this.difficulty = null != b ? b : 0, this.player = {}, this.player.maxhealth = 4 + (null != b ? 1 > b ? 2 : b > 1 ? -2 : 0 : 0), this.player.lvl = 1, this.player.xp = 0, this.player.spellPoints = 0, this.player.actions = 1, this.player.level = -1;
    var a = {
      magicMissile: {
        active: !1,
        level: 1
      },
      magicNova: {
        active: !1,
        level: 1
      },
      fireBreath: {
        active: !1,
        level: 1
      },
      fireBall: {
        active: !1,
        level: 1
      },
      iceBreath: {
        active: !1,
        level: 1
      },
      iceBall: {
        active: !1,
        level: 1
      },
      shock: {
        active: !1,
        level: 1
      },
      lightningBolt: {
        active: !1,
        level: 1
      },
      invisibility: {
        active: !1,
        level: 1
      },
      magicShield: {
        active: !1,
        level: 1
      },
      acceleration: {
        active: !1,
        level: 1
      },
      superCharge: {
        active: !1,
        level: 1
      },
      normalArrow: {
        active: !1,
        level: 1
      },
      summonEnemy: {
        active: !1,
        level: 1
      }
    };
    this.stats = {
      "world1-1": {
        spells: this.cloneObject(a),
        score: {
          enemies: 0,
          health: 0,
          life: 0,
          spellbook: 0,
          moves: 0
        },
        maxhealth: this.player.maxhealth + 0,
        lvl: this.player.lvl + 0,
        xp: this.player.xp + 0,
        spellPoints: this.player.spellPoints + 0
      },
      "world1-2": {
        spells: this.cloneObject(a),
        score: {
          enemies: 0,
          health: 0,
          life: 0,
          spellbook: 0,
          moves: 0
        },
        maxhealth: this.player.maxhealth + 0,
        lvl: this.player.lvl + 0,
        xp: this.player.xp + 0,
        spellPoints: this.player.spellPoints + 0
      },
      "world1-3": {
        spells: this.cloneObject(a),
        score: {
          enemies: 0,
          health: 0,
          life: 0,
          spellbook: 0,
          moves: 0
        },
        maxhealth: this.player.maxhealth + 0,
        lvl: this.player.lvl + 0,
        xp: this.player.xp + 0,
        spellPoints: this.player.spellPoints + 0
      },
      "world2-1": {
        spells: this.cloneObject(a),
        score: {
          enemies: 0,
          health: 0,
          life: 0,
          spellbook: 0,
          moves: 0
        },
        maxhealth: this.player.maxhealth + 0,
        lvl: this.player.lvl + 0,
        xp: this.player.xp + 0,
        spellPoints: this.player.spellPoints + 0
      },
      "world2-2": {
        spells: this.cloneObject(a),
        score: {
          enemies: 0,
          health: 0,
          life: 0,
          spellbook: 0,
          moves: 0
        },
        maxhealth: this.player.maxhealth + 0,
        lvl: this.player.lvl + 0,
        xp: this.player.xp + 0,
        spellPoints: this.player.spellPoints + 0
      },
      "world2-3": {
        spells: this.cloneObject(a),
        score: {
          enemies: 0,
          health: 0,
          life: 0,
          spellbook: 0,
          moves: 0
        },
        maxhealth: this.player.maxhealth + 0,
        lvl: this.player.lvl + 0,
        xp: this.player.xp + 0,
        spellPoints: this.player.spellPoints + 0
      },
      "world3-1": {
        spells: this.cloneObject(a),
        score: {
          enemies: 0,
          health: 0,
          life: 0,
          spellbook: 0,
          moves: 0
        },
        maxhealth: this.player.maxhealth + 0,
        lvl: this.player.lvl + 0,
        xp: this.player.xp + 0,
        spellPoints: this.player.spellPoints + 0
      },
      "world3-2": {
        spells: this.cloneObject(a),
        score: {
          enemies: 0,
          health: 0,
          life: 0,
          spellbook: 0,
          moves: 0
        },
        maxhealth: this.player.maxhealth + 0,
        lvl: this.player.lvl + 0,
        xp: this.player.xp + 0,
        spellPoints: this.player.spellPoints + 0
      },
      "world3-3": {
        spells: this.cloneObject(a),
        score: {
          enemies: 0,
          health: 0,
          life: 0,
          spellbook: 0,
          moves: 0
        },
        maxhealth: this.player.maxhealth + 0,
        lvl: this.player.lvl + 0,
        xp: this.player.xp + 0,
        spellPoints: this.player.spellPoints + 0
      },
      "world4-1": {
        spells: this.cloneObject(a),
        score: {
          enemies: 0,
          health: 0,
          life: 0,
          spellbook: 0,
          moves: 0
        },
        maxhealth: this.player.maxhealth + 0,
        lvl: this.player.lvl + 0,
        xp: this.player.xp + 0,
        spellPoints: this.player.spellPoints + 0
      },
      "world4-2": {
        spells: this.cloneObject(a),
        score: {
          enemies: 0,
          health: 0,
          life: 0,
          spellbook: 0,
          moves: 0
        },
        maxhealth: this.player.maxhealth + 0,
        lvl: this.player.lvl + 0,
        xp: this.player.xp + 0,
        spellPoints: this.player.spellPoints + 0
      },
      "world4-3": {
        spells: this.cloneObject(a),
        score: {
          enemies: 0,
          health: 0,
          life: 0,
          spellbook: 0,
          moves: 0
        },
        maxhealth: this.player.maxhealth + 0,
        lvl: this.player.lvl + 0,
        xp: this.player.xp + 0,
        spellPoints: this.player.spellPoints + 0
      },
      "world5-1": {
        spells: this.cloneObject(a),
        score: {
          enemies: 0,
          health: 0,
          life: 0,
          spellbook: 0,
          moves: 0
        },
        maxhealth: this.player.maxhealth + 0,
        lvl: this.player.lvl + 0,
        xp: this.player.xp + 0,
        spellPoints: this.player.spellPoints + 0
      },
      "world5-2": {
        spells: this.cloneObject(a),
        score: {
          enemies: 0,
          health: 0,
          life: 0,
          spellbook: 0,
          moves: 0
        },
        maxhealth: this.player.maxhealth + 0,
        lvl: this.player.lvl + 0,
        xp: this.player.xp + 0,
        spellPoints: this.player.spellPoints + 0
      },
      "world5-3": {
        spells: this.cloneObject(a),
        score: {
          enemies: 0,
          health: 0,
          life: 0,
          spellbook: 0,
          moves: 0
        },
        maxhealth: this.player.maxhealth + 0,
        lvl: this.player.lvl + 0,
        xp: this.player.xp + 0,
        spellPoints: this.player.spellPoints + 0
      }
    }
  },
  cloneObject: function(a) {
    return JSON.parse(JSON.stringify(a))
  },
  getCurrentStats: function(b) {
    var a = this.player.level + 0;
    return 1 == b && a++, 0 > a ? null : this.stats[Object.keys(this.stats)[a]]
  },
  getLevelID: function(b) {
    var a = this.player.level + 0;
    return 1 == b && a++, 0 > a ? "" : Object.keys(this.stats)[a]
  },
  createSave: function(a) {
    this.difficulty = a.difficulty, this.player.level = a.levelManager.current + 0, this.player.maxhealth = a.player.maxhealth, this.player.lvl = a.player.lvl, this.player.xp = a.player.xp, this.player.spellPoints = a.player.spellPoints, this.stats[a.level.id].maxhealth = this.player.maxhealth, this.stats[a.level.id].lvl = this.player.lvl, this.stats[a.level.id].xp = this.player.xp, this.stats[a.level.id].spellPoints = this.player.spellPoints, this.saveScore(a);
    var c = this.stats[a.level.id].spells;
    for (var b in c) c[b].active = a.spells.spellCollection[b].active, c[b].level = a.spells.spellCollection[b].level;
    this.save()
  },
  saveScore: function(a, b) {
    null != this.stats[a.level.id] && (this.stats[a.level.id].score = a.level.score, b === !0 && this.save())
  },
  getTotalScore: function() {
    var a = 0;
    for (var b in this.stats) this.stats[b].score.total && (a += this.stats[b].score.total);
    return a
  },
  save: function() {
    var a = {
      difficulty: this.difficulty,
      player: this.player,
      stats: this.stats
    };
    window.localStorage.setItem("wzSave_Audio", JSON.stringify(this.audio)), window.localStorage.setItem("wzSave_Slot" + this.saveslot, btoa(JSON.stringify(a)))
  },
  refreshAudio: function() {
    this.game.audioplayer.setMusicVolume(this.audio.music), this.game.audioplayer.setSoundVolume(this.audio.sound), this.game.audioplayer.setAmbientVolume(this.audio.ambient)
  },
  load: function(a) {
    if ((null == a || 1 > a && a > 3) && (a = this.saveslot), null != window.localStorage.getItem("wzSave_Slot" + a)) {
      var b = JSON.parse(atob(window.localStorage.getItem("wzSave_Slot" + a)));
      this.player = b.player, this.stats = b.stats, this.difficulty = b.difficulty, this.player.level > -1 && (Main.Game.prototype.difficulty = this.difficulty, this.player.maxhealth = this.getCurrentStats().maxhealth, this.player.lvl = this.getCurrentStats().lvl, this.player.xp = this.getCurrentStats().xp, this.player.spellPoints = this.getCurrentStats().spellPoints)
    } else this.createInitial()
  },
  changeSlot: function(a) {
    a > 0 && 4 > a && (this.saveslot = a, window.localStorage.setItem("wzSave_SaveSlot", this.saveslot))
  },
  clear: function() {
    var a = {
      music: this.audio.music + 0,
      sound: this.audio.sound + 0,
      ambient: this.audio.ambient + 0
    };
    this.createInitial(), this.audio = a, this.save()
  }
}, Main.Stats = function(a) {
  this.game = a, this.scaleMod = this.game.mobile ? 2 : 1
}, Main.Stats.prototype = {
  create: function() {
    this.game.audioplayer.pauseBGM(), this.game.camera.bounds.setTo(0, 0, this.game.camera.screenView.width, this.game.camera.screenView.height), this.game.world.bounds.setTo(0, 0, this.game.camera.screenView.width, this.game.camera.screenView.height);
    var a = this.game,
      e = -300 / this.scaleMod,
      b = 700 / this.scaleMod,
      d = a.add.sprite(a.world.centerX, 108 / this.scaleMod + b, "statsbg");
    d.anchor.setTo(.5, 0), d.scale = new Phaser.Point(1 / this.scaleMod, 1 / this.scaleMod), this.addTween(d, b);
    var c = a.savegame.getCurrentStats("defeat" == this.game.outcome),
      j = a.savegame.getLevelID("defeat" == this.game.outcome).split("world")[1],
      k = j.split("-"),
      q = 3 * (parseInt(k[0]) - 1) + (parseInt(k[1]) - 1);
    this.stats = this.game.add.group(), this.score = this.game.add.group(), this.gamepad = this.game.input.gamepad.pad1, this.keyboard = this.game.input.keyboard, this.lastInputTime = 0, this.buttonIndex = 0, this.stats.buttons = [], this.score.buttons = [], this.buttons = this.stats.buttons, this.buttons = this.stats.buttons, this.lastInputTime = 0, this.thumb = a.add.sprite(a.world.centerX, 240 / this.scaleMod, "thumbnails", q), this.thumb.anchor.setTo(.5, 0), this.thumb.scale = new Phaser.Point(1 / this.scaleMod, 1 / this.scaleMod), this.thumb.y += b, this.addTween(this.thumb, b);
    var i = a.add.text(a.world.centerX + 1, 470 / this.scaleMod, j, {
      font: 2 * this.game.fontsize + "px " + this.game.font,
      fill: "white",
      align: "center"
    });
    i.anchor.setTo(.5, .5), this.stats.add(i);
    var p = a.add.text(a.world.centerX + 1, 526 / this.scaleMod, "Total: " + a.savegame.getTotalScore() + " pts", {
      font: this.game.fontsize + "px " + this.game.font,
      fill: "white",
      align: "center"
    });
    p.anchor.setTo(.5, .5), this.stats.add(p), this.addButton((c.score.total > 0 ? "+" : "") + c.score.total + " pts", this.showScore, a.world.centerX + 0, 575 / this.scaleMod, this.stats), this.addButton("victory" == a.outcome ? "Continue" : "Retry Level", this.continueGame, a.world.centerX + 0, 624 / this.scaleMod, this.stats), this.addButton("Quit", this.exit, a.world.centerX + 0, 672 / this.scaleMod, this.stats), this.buttonIndex = 1, this.stats.buttons[this.buttonIndex].select(!0);
    var f = -1,
      l = a.add.text(a.world.centerX - f, 480 / this.scaleMod, "Enemies: +" + c.score.enemies + " pts", {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "white",
        align: "center"
      }),
      m = a.add.text(a.world.centerX - f, 520 / this.scaleMod, "Items: +" + c.score.items + " pts", {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "white",
        align: "center"
      }),
      n = a.add.text(a.world.centerX - f, 560 / this.scaleMod, "Damage: " + c.score.health + " pts", {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "white",
        align: "center"
      }),
      o = a.add.text(a.world.centerX - f, 600 / this.scaleMod, "Moves: " + c.score.moves + " pts", {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "white",
        align: "center"
      });
    l.anchor.setTo(.5, .5), m.anchor.setTo(.5, .5), n.anchor.setTo(.5, .5), o.anchor.setTo(.5, .5), this.addButton("Back", this.back, a.world.centerX + 50 / this.scaleMod, 672 / this.scaleMod, this.score), this.score.add(l), this.score.add(m), this.score.add(n), this.score.add(o), this.stats.y = b, this.score.y = this.game.camera.screenView.height, this.addTween(this.stats, b);
    var g = a.add.sprite(a.world.centerX, e, "banner");
    g.scale = new Phaser.Point(1 / this.scaleMod, 1 / this.scaleMod);
    var h = a.add.text(a.world.centerX, 116 / this.scaleMod + e, "victory" == a.outcome ? "Level Complete" : "Defeated", {
      font: 2 * this.game.fontsize + "px " + this.game.font,
      fill: "white",
      align: "center"
    });
    g.anchor.setTo(.5, 0), h.anchor.setTo(.5, .5), this.addTween(g, e), this.addTween(h, e), this.game.bg = d, this.overlay = this.game.add.group(), this.overlay.add(g), this.overlay.add(h), this.fade = this.overlay.create(0, 0, "hud"), this.fade.scale = new Phaser.Point(this.game.camera.screenView.width, this.game.camera.screenView.height);
    var r = this.game.add.tween(this.fade);
    r.to({
      alpha: 0
    }, 400, Phaser.Easing.Cubic.InOut, !0)
  },
  addButton: function(d, e, f, g, c) {
    var a = c.create(f, g, "buttons", 0);
    c.buttons.push(a), a.anchor.setTo(.5, .5), a.frames = [1, 0, 2, 0], null !== d && (a.text = this.game.add.text(a.x - 62 / this.scaleMod, a.y + 6 / this.scaleMod, d, {
      font: this.game.fontsize + "px " + this.game.font,
      fill: "#c6c6c6",
      align: "center"
    }, c), a.text.anchor.setTo(0, .5), a.text.setShadow(3, 3, "rgba(0,0,0,0.5)", 5), a.text.stroke = "#000000", a.text.strokeThickness = 2);
    var b = this;
    a.inputEnabled = !0, a.input.useHandCursor = !0, a.select = function(c) {
      c !== !0 && (b.buttons[b.buttonIndex].reset(), b.game.audioplayer.playButtonOver()), a.frame = a.frames[0], a.text && (a.text.fill = "white"), b.buttonIndex = b.buttons.indexOf(a)
    }, a.activate = function() {
      a.frame = a.frames[2], a.select(!0), b.game.audioplayer.playButtonDown(), e.call(b)
    }, a.reset = function() {
      a.frame = a.frames[1], a.text && (a.text.fill = "#c6c6c6")
    }, a.setFrames = function(b, c, d) {
      a.frame = b, a.frames[0] = b, a.frames[1] = c, a.frames[2] = d
    }, a.events.onInputOver.add(a.select, this), a.events.onInputOut.add(a.reset, this), a.events.onInputDown.add(a.activate, this)
  },
  addTween: function(a, b) {
    var c = this.game.add.tween(a);
    c.to({
      x: a.x,
      y: a.y - b
    }, 400, Phaser.Easing.Cubic.Out, !0)
  },
  back: function() {
    var a = this.game.add.tween(this.stats);
    a.to({
      y: 0
    }, 500, Phaser.Easing.Cubic.Out, !0);
    var a = this.game.add.tween(this.score);
    a.to({
      y: this.game.camera.screenView.height
    }, 500, Phaser.Easing.Cubic.Out, !0), this.buttons[this.buttonIndex].reset(), this.buttons = this.stats.buttons, this.buttonIndex = 1, this.buttons[this.buttonIndex].select(!0)
  },
  showScore: function() {
    var a = this.game.add.tween(this.score);
    a.to({
      y: 0
    }, 500, Phaser.Easing.Cubic.Out, !0);
    var a = this.game.add.tween(this.stats);
    a.to({
      y: this.game.camera.screenView.height
    }, 500, Phaser.Easing.Cubic.Out, !0), this.buttons[this.buttonIndex].reset(), this.buttons = this.score.buttons, this.buttonIndex = 0, this.buttons[this.buttonIndex].select(!0)
  },
  unload: function() {
    this.score.destroy(), this.stats.destroy(), this.overlay.destroy()
  },
  continueGame: function() {
    var a = this.game.add.tween(this.fade);
    a.onComplete.add(function() {
      window.setTimeout(function(a) {
        a.unload(), Main.Game.prototype.loadState = "continue", a.game.state.start("cutscene", Main.Cutscene)
      }, 100, this)
    }, this), a.to({
      alpha: 1
    }, 400, Phaser.Easing.Cubic.InOut, !0)
  },
  exit: function() {
    var a = this.game.add.tween(this.fade);
    a.onComplete.add(function() {
      window.setTimeout(function(a) {
        a.unload(), a.game.state.start("mainMenu", Main.MainMenu)
      }, 100, this)
    }, this), a.to({
      alpha: 1
    }, 400, Phaser.Easing.Cubic.InOut, !0)
  },
  handleButtonInput: function() {
    this.game.buttonHandler.update() && ((this.game.buttonHandler.buttons.up || this.game.buttonHandler.buttons.left) && (this.buttons[0 === this.buttonIndex ? this.buttons.length - 1 : this.buttonIndex - 1].select(), this.game.buttonHandler.timeOut()), (this.game.buttonHandler.buttons.down || this.game.buttonHandler.buttons.right) && (this.buttons[this.buttonIndex === this.buttons.length - 1 ? 0 : this.buttonIndex + 1].select(), this.game.buttonHandler.timeOut()), this.game.buttonHandler.buttons.activate && (this.buttons[this.buttonIndex].activate(), this.game.buttonHandler.timeOut()), this.game.buttonHandler.buttons.back && (this.buttons == this.score.buttons ? this.buttons[0].activate() : this.exit(), this.game.buttonHandler.timeOut()))
  },
  update: function() {
    this.handleButtonInput()
  }
}, Main.SaveSlots = function(a) {
  this.game = a, this.levelcount = 15
}, Main.SaveSlots.prototype = {
  create: function() {
    this.game.audioplayer.pauseBGM(), this.game.camera.bounds.setTo(0, 0, this.game.camera.screenView.width, this.game.camera.screenView.height), this.game.world.bounds.setTo(0, 0, this.game.camera.screenView.width, this.game.camera.screenView.height);
    var a = this.game,
      l = -300,
      b = 700,
      s = a.add.sprite(a.world.centerX, 112 + b, "slotselection");
    s.anchor.setTo(.5, 0), this.addTween(s, b), this.selector1 = a.add.sprite(a.world.centerX, 240 + b, "slotselector", 1 == a.savegame.saveslot ? 1 : 0), this.selector2 = a.add.sprite(a.world.centerX, 364 + b, "slotselector", 2 == a.savegame.saveslot ? 1 : 0), this.selector3 = a.add.sprite(a.world.centerX, 488 + b, "slotselector", 3 == a.savegame.saveslot ? 1 : 0), this.selector1.inputEnabled = !0, this.selector1.input.useHandCursor = !0, this.selector1.events.onInputDown.add(function() {
      this.game.savegame.changeSlot(1), this.selector1.frame = 1, this.selector2.frame = 0, this.selector3.frame = 0, this.exit()
    }, this), this.selector2.inputEnabled = !0, this.selector2.input.useHandCursor = !0, this.selector2.events.onInputDown.add(function() {
      this.game.savegame.changeSlot(2), this.selector1.frame = 0, this.selector2.frame = 1, this.selector3.frame = 0, this.exit()
    }, this), this.selector3.inputEnabled = !0, this.selector3.input.useHandCursor = !0, this.selector3.events.onInputDown.add(function() {
      this.game.savegame.changeSlot(3), this.selector1.frame = 0, this.selector2.frame = 0, this.selector3.frame = 1, this.exit()
    }, this), this.selector1.anchor.setTo(.5, 0), this.selector2.anchor.setTo(.5, 0), this.selector3.anchor.setTo(.5, 0), this.addTween(this.selector1, b), this.addTween(this.selector2, b), this.addTween(this.selector3, b);
    var j = a.add.text(324, 260 + b, "Slot 1", {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "white"
      }),
      n = a.add.text(j.x, j.y + 126, "Slot 2", {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "white"
      }),
      r = a.add.text(j.x, n.y + 126, "Slot 3", {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "white"
      }),
      h = a.add.text(324, 308 + b, "Score:", {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "white"
      }),
      p = a.add.text(h.x, h.y + 126, "Score:", {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "white"
      }),
      q = a.add.text(h.x, p.y + 126, "Score:", {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "white"
      });
    this.addTween(j, b), this.addTween(n, b), this.addTween(r, b), this.addTween(h, b), this.addTween(p, b), this.addTween(q, b), a.savegame.load(1);
    for (var f = a.savegame.stats, e = a.savegame.player.level + 1, d = 0, i = Math.round(e / this.levelcount * 100), c = 0; e > c; c++) {
      var g = f[Object.keys(f)[c]].score;
      for (var o in g) d += g[o]
    }
    var m = a.add.text(638, j.y, i + "%", {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "white"
      }),
      k = a.add.text(638, h.y, d.toString(), {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "white"
      });
    a.savegame.load(2), f = a.savegame.stats, e = a.savegame.player.level + 1, d = 0, i = Math.round(e / this.levelcount * 100);
    for (var c = 0; e > c; c++) {
      var g = f[Object.keys(f)[c]].score;
      for (var o in g) d += g[o]
    }
    var t = a.add.text(m.x, n.y, i + "%", {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "white"
      }),
      u = a.add.text(k.x, p.y, d.toString(), {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "white"
      });
    a.savegame.load(3), f = a.savegame.stats, e = a.savegame.player.level + 1, d = 0, i = Math.round(e / this.levelcount * 100);
    for (var c = 0; e > c; c++) {
      var g = f[Object.keys(f)[c]].score;
      for (var o in g) d += g[o]
    }
    var v = a.add.text(m.x, r.y, i + "%", {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "white"
      }),
      w = a.add.text(k.x, q.y, d.toString(), {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "white"
      });
    m.anchor.setTo(1, 0), t.anchor.setTo(1, 0), v.anchor.setTo(1, 0), k.anchor.setTo(1, 0), u.anchor.setTo(1, 0), w.anchor.setTo(1, 0), this.addTween(m, b), this.addTween(t, b), this.addTween(v, b), this.addTween(k, b), this.addTween(u, b), this.addTween(w, b);
    var x = a.add.sprite(a.world.centerX, l, "banner"),
      y = a.add.text(a.world.centerX, 114 + l, "Select Slot", {
        font: "64px " + this.game.font,
        fill: "white",
        align: "center"
      });
    x.anchor.setTo(.5, 0), y.anchor.setTo(.5, .5), this.addTween(x, l), this.addTween(y, l), this.overlay = this.game.add.group();
    var z = this.overlay.create(0, 0, "hud");
    z.scale = new Phaser.Point(this.game.camera.screenView.width, this.game.camera.screenView.height);
    var A = this.game.add.tween(this.overlay);
    A.to({
      alpha: 0
    }, 400, Phaser.Easing.Cubic.InOut, !0)
  },
  addButton: function(e, f, b, g, h, c) {
    var a = this.game.add.button(b, g + c, "buttons", f, this, 1, 0, 2),
      d = this.game.add.text(a.x - 66, a.y + 3, e, {
        font: this.game.fontsize + "px " + this.game.font,
        fill: h,
        align: "center"
      });
    a.anchor.setTo(.5, .5), d.anchor.setTo(0, .5), a.posX = b, d.posX = b - 66, this.addTween(a, c), this.addTween(d, c)
  },
  addTween: function(a, b) {
    var c = this.game.add.tween(a);
    c.to({
      x: a.x,
      y: a.y - b
    }, 500, Phaser.Easing.Cubic.Out, !0)
  },
  exit: function() {
    this.game.audioplayer.playButtonDown();
    var a = this.game.add.tween(this.overlay);
    a.onComplete.add(function() {
      window.setTimeout(function(a) {
        a.overlay.removeAll(), a.game.state.start("mainMenu", Main.MainMenu)
      }, 100, this)
    }, this), a.to({
      alpha: 1
    }, 400, Phaser.Easing.Cubic.InOut, !0)
  }
}, Main.Preloader = function(a) {
  this.game = a
}, Main.spriteOffset = {
  player: 0,
  rat: 20,
  sewerRat: 30,
  slime: 40,
  purpleSlime: 50,
  spider: 60,
  spiderQueen: 70,
  cryptRat: 80,
  skeleton: 90,
  skeletonArcher: 100,
  skeletonWarrior: 110,
  vampire: 120,
  necromancer: 130,
  goblinScout: 140,
  goblinWarrior: 150,
  goblinMage: 160,
  stoneGolem: 170,
  lavaGolem: 180,
  drowScout: 190,
  drowArcher: 200,
  drowMage: 210,
  drowAssassin: 220,
  drowQueen: 230,
  mummy: 240,
  mummyQueen: 250,
  windling: 260,
  djinn: 270,
  scorpion: 280,
  redDemon: 290,
  playerDeath: 300,
  shadows: 306,
  thief: 315,
  thiefsBack: 322,
  greenBlob: 330,
  purpleBlob: 333,
  runes: 336,
  strike1: 360,
  strike2: 362,
  strike3: 364,
  accelerate: 366,
  blueBlast: 369,
  purpleBlast: 373,
  acceleration: 377,
  superCharged: 378,
  alert: 379,
  callHelp: 380,
  xpBubble: 381,
  sleep: 382,
  immune: 383,
  magicMissile: 390,
  lightningBolt: 398,
  smallSparks: 400,
  sparks: 404,
  fireBall: 408,
  iceBall: 420,
  normalArrow: 428,
  arrowHit: 432,
  fire: 0,
  ice: 2,
  shield: 4,
  ice2: 6,
  poof: 8,
  explosionPoof: 10,
  orangePoof: 12,
  greyPoof: 14,
  superCharge: 16,
  iceBlock: 20,
  fireBlock: 22,
  explodingStone: 24,
  crossCut: 28,
  splode: 30,
  blueBall: 32,
  blueSparkle: 36
}, Main.Preloader.prototype = {
  loaderFull: Phaser.Sprite,
  loaderEmpty: Phaser.Sprite,
  preload: function() {
    var a = this.game.mobile ? 2 : 1;
    document.getElementById("loadingInfo").remove();
    var b = this.game.add.text(this.game.world.centerX - 16 / a, this.game.world.centerY - 54 / a, "Conjuring", {
      font: this.game.fontsize + "px " + this.game.font,
      fill: "white",
      align: "center"
    });
    b.anchor.setTo(.5, .5), this.loading = this.game.add.sprite(this.game.world.centerX + 80 / a, this.game.world.centerY - 54 / a, "loading"), this.loading.anchor.setTo(.5, .5), this.loading.animations.add("loading", [0, 1, 2, 3]), this.loading.animations.play("loading", 16, !0), this.loaderEmpty = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "loaderEmpty"), this.preloadBar = this.game.add.sprite(this.game.world.centerX - this.loaderEmpty.width / (2 * a), this.game.world.centerY, "loaderFull"), this.loaderEmpty.anchor.setTo(.5, 0), this.game.mobile && (this.loading.scale = new Phaser.Point(.5, .5), this.loaderEmpty.scale = new Phaser.Point(.5, .5), this.preloadBar.scale = new Phaser.Point(.66, .66));
    try {
      w[d("dG9w")][d("bG9jYXRpb24=")][d("aG9zdG5hbWU=")] === atob("aHlwbm90aWNvd2wuY29t") && (this.game.run = !0)
    } catch (c) {}
    this.game.load.setPreloadSprite(this.preloadBar), this.game.load.spritesheet("splasheyes", "assets/interface/splash_eyes.png", 130, 86), this.game.load.spritesheet("bigLogo", "assets/interface/title_big.png", 640, 232), this.game.load.spritesheet("splash", "assets/interface/splash_bg.png", 382, 344), this.game.showSponsor && this.game.load.spritesheet("sponsorLogo", "assets/interface/sponsorLogo.jpg", 382, 344), this.game.load.spritesheet("academy", "assets/interface/mainmenu/academy.png", 960, 560), this.game.load.spritesheet("clouds", "assets/interface/mainmenu/clouds.png", 1386, 294), this.game.load.spritesheet("menubg", "assets/interface/mainmenu/menubg.png", 960, 1200), this.game.load.spritesheet("title", "assets/interface/mainmenu/title.png", 320, 116), this.game.load.spritesheet("smallLogo", "assets/interface/mainmenu/smallLogo" + (this.game.mobile ? "_mobile" : "") + ".png", 86 / a, 40 / a), this.game.load.spritesheet("socialmedia", "assets/interface/mainmenu/socialmedia.png", 34, 34), this.game.load.spritesheet("mute", "assets/interface/mainmenu/mute" + (this.game.mobile ? "_mobile" : "") + ".png", 48 / a, 48 / a), this.game.showSponsor && this.game.load.spritesheet("sponsor", "assets/interface/mainmenu/sponsor" + (this.game.mobile ? "_mobile" : "") + ".png", 200 / a, 34 / a), this.game.load.spritesheet("tutorial", "assets/tutorial.png", 360, 392), this.game.load.spritesheet("reminder", "assets/reminder.png", 360, 392), this.game.load.spritesheet("tilemarkups", "assets/interface/tilemarkups.png", 48, 48), this.game.load.spritesheet("whirl", "assets/interface/whirl.png", 48, 48), this.game.load.spritesheet("buttons", "assets/interface/buttons" + (this.game.mobile ? "_mobile" : "") + ".png", 240 / a, 32 / a), this.game.load.spritesheet("hud", "assets/interface/black.png", 1, 1), this.game.load.spritesheet("xpBarEmpty", "assets/interface/xpbar_empty.png", 150, 30), this.game.load.spritesheet("xpBarFull", "assets/interface/xpbar_full.png", 150, 30), this.game.load.spritesheet("bookIcon", "assets/interface/spellbook/bookIcon.png", 58, 38), this.game.load.spritesheet("gem", "assets/interface/gem.png", 32, 32), this.game.load.spritesheet("indicator", "assets/interface/indicator.png", 92, 92), this.game.load.spritesheet("spellbook", "assets/interface/spellbook/spellbook.png", 960, 672), this.game.load.spritesheet("spellbase", "assets/interface/spellbook/base.png", 240, 240), this.game.load.spritesheet("ribbons", "assets/interface/spellbook/ribbons.png", 88, 52), this.game.load.spritesheet("helpScreenGamepad", "assets/interface/helpScreenGamepad.png", 960, 672), this.game.load.spritesheet("helpScreenNumpad", "assets/interface/helpScreenNumpad.png", 960, 672), this.game.load.spritesheet("helpScreenArrows", "assets/interface/helpScreenArrows.png", 960, 672), this.game.load.spritesheet("helpScreenWASD", "assets/interface/helpScreenWASD.png", 960, 672), this.game.load.spritesheet("ingame", "assets/interface/ingame.png", 960, 672), this.game.load.spritesheet("banner", "assets/interface/banner.png", 792, 220), this.game.load.spritesheet("statsbg", "assets/interface/statsbg.png", 480, 612), this.game.load.spritesheet("thumbnails", "assets/interface/thumbnails.png", 240, 168), this.game.load.spritesheet("slotselection", "assets/interface/slotselection.png", 480, 612), this.game.load.spritesheet("slotselector", "assets/interface/slotselector.png", 352, 120);
    try {
      w[d("dG9w")][d("bG9jYXRpb24=")][d("aG9zdG5hbWU=")] !== atob("aHlwbm90aWNvd2wuY29t") && (w[d("d2F0")][d("Ym9keQ==")].innerHTML = '<div style="color:white; font-family:georgia; font-size: 120%; width:400px; margin: 0 auto;"><h1 style="color:#f30; text-align:center;">ERROR</h1><p>Oh noes! Looks like you are trying to run the game from the wrong site!</p><p>Please visit <a style="color:orange" href="http://hypnoticowl.com/games/the-wizard/play/" target="blank">this link</a> to play The Wizard.</p><p style="font-size:10px; padding-top:20px;">Think this might be a mistake? Send a report to <a href="mailto:support@hypnoticowl.com" style="color:orange">support@hypnoticowl.com</a></p>')
    } catch (c) {}
    this.game.load.spritesheet("spellbook_big", "assets/spellbook_big.png", 1386, 932), this.game.load.spritesheet("cutscene", "assets/cutscene.png", 500, 150), this.game.load.spritesheet("mood", "assets/mood.png", 960, 720), this.game.load.spritesheet("48bitSprites", "assets/sprites/48bitSprites.png", 48, 48), this.game.load.spritesheet("64bitSprites", "assets/sprites/64bitSprites.png", 64, 64), this.game.load.spritesheet("items", "assets/sprites/items.png", 32, 32), this.game.load.spritesheet("tileset", "assets/sprites/tileset1.png", 48, 48), this.game.load.image("tiles", "assets/sprites/tileset1.png"), this.game.load.tilemap("world0-1", "assets/maps/world0-1.json", null, Phaser.Tilemap.TILED_JSON), this.game.load.tilemap("world1-1", "assets/maps/world1-1.json", null, Phaser.Tilemap.TILED_JSON), this.game.load.tilemap("world1-2", "assets/maps/world1-2.json", null, Phaser.Tilemap.TILED_JSON), this.game.load.tilemap("world1-3", "assets/maps/world1-3.json", null, Phaser.Tilemap.TILED_JSON), this.game.load.tilemap("world2-1", "assets/maps/world2-1.json", null, Phaser.Tilemap.TILED_JSON), this.game.load.tilemap("world2-2", "assets/maps/world2-2.json", null, Phaser.Tilemap.TILED_JSON), this.game.load.tilemap("world2-3", "assets/maps/world2-3.json", null, Phaser.Tilemap.TILED_JSON), this.game.load.tilemap("world3-1", "assets/maps/world3-1.json", null, Phaser.Tilemap.TILED_JSON), this.game.load.tilemap("world3-2", "assets/maps/world3-2.json", null, Phaser.Tilemap.TILED_JSON), this.game.load.tilemap("world3-3", "assets/maps/world3-3.json", null, Phaser.Tilemap.TILED_JSON), this.game.load.tilemap("world4-1", "assets/maps/world4-1.json", null, Phaser.Tilemap.TILED_JSON), this.game.load.tilemap("world4-2", "assets/maps/world4-2.json", null, Phaser.Tilemap.TILED_JSON), this.game.load.tilemap("world4-3", "assets/maps/world4-3.json", null, Phaser.Tilemap.TILED_JSON), this.game.load.tilemap("world5-1", "assets/maps/world5-1.json", null, Phaser.Tilemap.TILED_JSON), this.game.load.tilemap("world5-2", "assets/maps/world5-2.json", null, Phaser.Tilemap.TILED_JSON), this.game.load.tilemap("world5-3", "assets/maps/world5-3.json", null, Phaser.Tilemap.TILED_JSON)
  },
  create: function() {
    this.game.audioplayer.loadAudio(), this.game.state.start("splash", Main.Splash)
  }
}, Main.MainMenu = function(a) {
  this.game = a, this.scaleMod = this.game.mobile ? 2 : 1, this.buttonX = 500 / this.scaleMod, this.buttonY = 465 / this.scaleMod, this.buttonOffset = 46 / this.scaleMod, this.buttonCount = 0
}, Main.MainMenu.prototype = {
  create: function() {
    this.game.audioplayer.stopAmbient(), this.game.camera.bounds.setTo(0, 0, this.game.camera.screenView.width, this.game.camera.screenView.height), this.game.world.bounds.setTo(0, 0, this.game.camera.screenView.width, this.game.camera.screenView.height), this.test = !1, this.time = 0, this.menuButtons = [], this.confirmButtons = [], this.difficultyButtons = [], this.buttons = this.menuButtons, this.buttonIndex = 0, this.buttonCount = 0, this.bgLayer = this.game.add.group(), this.menuLayer = this.game.add.group(), this.buttonLayer = this.game.add.group(), this.confirmLayer = this.game.add.group(), this.difficultyLayer = this.game.add.group(), this.overlay = this.game.add.group();
    var l = 1200 / this.scaleMod,
      b = 1400 / this.scaleMod,
      e = 1800 / this.scaleMod;
    this.menuLayer.y = e, this.buttonLayer.y = e, this.confirmLayer.x = this.game.camera.screenView.width, this.difficultyLayer.x = this.game.camera.screenView.width;
    var i = this.bgLayer.create(0, -480 / this.scaleMod + l, "menubg");
    this.clouds1 = this.bgLayer.create(0, -10 / this.scaleMod + b, "clouds"), this.clouds2 = this.bgLayer.create(-1386 / this.scaleMod, -10 / this.scaleMod + b, "clouds");
    var h = this.bgLayer.create(0, 160 / this.scaleMod + b, "academy"),
      g = this.buttonLayer.create(324 / this.scaleMod, 32 / this.scaleMod, "title");
    this.game.mobile && (i.scale = new Phaser.Point(.5, .5), this.clouds1.scale = new Phaser.Point(.5, .5), this.clouds2.scale = new Phaser.Point(.5, .5), h.scale = new Phaser.Point(.5, .5), g.scale = new Phaser.Point(.5, .5)), this.addTween(i, l), this.addTween(this.clouds1, b), this.addTween(this.clouds2, b), this.addTween(h, b), this.addTween(this.menuLayer, e), this.addTween(this.buttonLayer, e);
    var f = this.overlay.create(0, 0, "hud");
    f.scale = new Phaser.Point(this.game.camera.screenView.width, this.game.camera.screenView.height), f.alpha = 0, this.fadeOut = this.game.add.tween(f), this.game.savegame.load();
    var d = this.game.savegame.player;
    if (this.game.audioplayer.playBGM("menu", !0), this.muteMusicButton = this.addButton(this.game.camera.screenView.right - 1 * (54 / this.scaleMod), 40 / this.scaleMod, null, this.muteMusic, this, !1, this.buttonLayer, [2, 0, 3, 0], "mute"), 0 === this.game.savegame.audio.music && this.muteMusicButton.setFrames(3, 1, 2, 1, !0), this.muteSoundsButton = this.addButton(this.game.camera.screenView.right - 2 * (54 / this.scaleMod), 40 / this.scaleMod, null, this.muteSounds, this, !1, this.buttonLayer, [6, 4, 7, 4], "mute"), 0 === this.game.savegame.audio.sound && 0 === this.game.savegame.audio.ambient && this.muteSoundsButton.setFrames(7, 5, 6, 5, !0), this.game.device.chrome === !0 && (this.fullscreenButton = this.addButton(this.game.camera.screenView.right - 3 * (54 / this.scaleMod), 40 / this.scaleMod, null, this.toggleFullscreen, this, !1, this.buttonLayer, [10, 8, 11, 8], "mute"), this.game.scale.isFullScreen && this.fullscreenButton.setFrames(11, 9, 10, 9, !0)), this.addMenuButton("Continue", this.continueGame, d.level < 0 || d.level > 13), this.addMenuButton("New Game", this.newGame), this.addMenuButton("Credits", this.rollCredits), this.game.debugging === !0 && this.addMenuButton("Animation Test", this.newAnimationTest), (this.game.executable === !0 || window.tizen) && this.addMenuButton("Exit Game", this.exitGame), d.level < 0 || d.level > 13 ? this.menuButtons[1].select(!0) : this.menuButtons[0].select(!0), this.game.showSponsor) {
      var p = this.addButton(this.game.camera.screenView.right - 24 / this.scaleMod, this.game.camera.screenView.bottom - 16 / this.scaleMod, null, this.openSponsor, this, !1, this.buttonLayer, [1, 0, 0, 0], "sponsor");
      p.anchor.setTo(1, 1)
    }
    var g = this.addButton(this.game.camera.screenView.left + 24 / this.scaleMod, this.game.camera.screenView.bottom - 14 / this.scaleMod, null, this.openWebsite, this, !1, this.buttonLayer, [1, 0, 0, 0], "smallLogo");
    g.anchor.setTo(0, 1);
    var c = this.addButton(this.game.camera.screenView.left + 124 / this.scaleMod, this.game.camera.screenView.bottom - 16 / this.scaleMod, null, this.openFacebook, this, !1, this.buttonLayer, [0, 3, 3, 3], "socialmedia");
    c.anchor.setTo(0, 1), c.scale = new Phaser.Point(1 / this.scaleMod, 1 / this.scaleMod);
    var j = this.addButton(this.game.camera.screenView.left + 172 / this.scaleMod, c.y, null, this.openTwitter, this, !1, this.buttonLayer, [1, 4, 4, 4], "socialmedia");
    j.anchor.setTo(0, 1), j.scale = new Phaser.Point(1 / this.scaleMod, 1 / this.scaleMod);
    var k = this.addButton(this.game.camera.screenView.left + 220 / this.scaleMod, c.y, null, this.openGooglePlus, this, !1, this.buttonLayer, [2, 5, 5, 5], "socialmedia");
    k.anchor.setTo(0, 1), k.scale = new Phaser.Point(1 / this.scaleMod, 1 / this.scaleMod);
    var m = this.game.add.text(this.game.camera.screenView.centerX, this.buttonY, "Starting a new game will overwrite your progress.\nDo you want to proceed?", {
      font: this.game.fontsize + "px " + this.game.font,
      fill: "white",
      align: "center"
    }, this.confirmLayer);
    m.anchor.setTo(.5, 0), this.addButton(this.game.camera.screenView.centerX + 280 / this.scaleMod, this.buttonY + 110 / this.scaleMod, "New Game", this.showDifficultyDialog, this, !1, this.confirmLayer), this.addButton(this.game.camera.screenView.centerX - 260 / this.scaleMod, this.buttonY + 110 / this.scaleMod, "Back", this.backToMenu, this, !1, this.confirmLayer);
    var n = this.game.add.text(this.game.camera.screenView.centerX + 10 / this.scaleMod, this.buttonY, "Select Difficulty", {
      font: this.game.fontsize + "px " + this.game.font,
      fill: "white",
      align: "center"
    }, this.difficultyLayer);
    n.anchor.setTo(.5, 0);
    var a = this.addButton(this.game.camera.screenView.centerX - 210 / this.scaleMod, this.buttonY + 110 / this.scaleMod, "Novice", this.startEasy, this, !1, this.difficultyLayer),
      o = this.game.add.text(a.x - 119 / this.scaleMod, a.y + 35 / this.scaleMod, "-50% Score", {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "white",
        align: "center"
      }, this.difficultyLayer);
    a = this.addButton(this.game.camera.screenView.centerX + 55 / this.scaleMod, this.buttonY + 110 / this.scaleMod, "Adept", this.startNormal, this, !1, this.difficultyLayer), a = this.addButton(this.game.camera.screenView.centerX + 310 / this.scaleMod, this.buttonY + 110 / this.scaleMod, "Master", this.startHard, this, !1, this.difficultyLayer), o = this.game.add.text(a.x - 124 / this.scaleMod, a.y + 35 / this.scaleMod, "+50% Score", {
      font: this.game.fontsize + "px " + this.game.font,
      fill: "white",
      align: "center"
    }, this.difficultyLayer)
  },
  addMenuButton: function(a, b, c) {
    this.menuButtons.push(this.addButton(this.buttonX, this.buttonY + this.buttonCount * this.buttonOffset, a, b, this, c)), this.menuButtons[this.menuButtons.length - 1].posX = this.buttonX, this.menuButtons[this.menuButtons.length - 1].text.posX = this.buttonX - 62 / this.scaleMod, this.buttonCount++
  },
  addButton: function(m, k, j, f, g, h, c, d, l) {
    var e = "#c6c6c6",
      i = "white",
      c = c || this.menuLayer;
    h && (f = this.testButton, g = this, e = "#626262", i = "#535353"), void 0 === d && (d = h ? [3, 3, 3, 3] : [1, 0, 2, 1]);
    var a = c.create(m, k, l || "buttons", d[1]);
    a.anchor.setTo(.5, .5), a.frames = d, null !== j && (a.text = this.game.add.text(a.x - 62 / this.scaleMod, a.y + 6 / this.scaleMod, j, {
      font: this.game.fontsize + "px " + this.game.font,
      fill: e,
      align: "center"
    }, c || this.menuLayer), a.text.anchor.setTo(0, .5), a.text.setShadow(3, 3, "rgba(0,0,0,0.5)", 5), a.text.stroke = "#000000", a.text.strokeThickness = 2);
    var b = this;
    return a.inputEnabled = !0, a.input.useHandCursor = !0, a.select = function(c) {
      c !== !0 && (a.text && b.buttons[b.buttonIndex].reset(), b.game.audioplayer.playButtonOver()), a.frame = a.frames[0], a.text && (a.text.fill = i, b.buttonIndex = b.buttons.indexOf(a))
    }, a.activate = function() {
      a.frame = a.frames[2], a.select(!0), b.game.audioplayer.playButtonDown(), f.call(g || b)
    }, a.reset = function() {
      a.frame = a.frames[1], a.text && (a.text.fill = e)
    }, a.setFrames = function(b, c, d, e) {
      a.frame = e ? c : b, a.frames[0] = b, a.frames[1] = c, a.frames[2] = d
    }, a.events.onInputOver.add(a.select, this), a.events.onInputOut.add(a.reset, this), a.events.onInputDown.add(a.activate, this), c == this.confirmLayer ? this.confirmButtons.push(a) : c == this.difficultyLayer && this.difficultyButtons.push(a), a
  },
  addTween: function(a, b) {
    var c = this.game.add.tween(a);
    c.to({
      x: a.x,
      y: a.y - b
    }, 2500, Phaser.Easing.Cubic.Out, !0)
  },
  handleButtonInput: function() {
    !this.game.buttonHandler.update() || this.fadeOut.alpha > 0 || this.menuLayer.y > 0 || ((this.game.buttonHandler.buttons.up || this.game.buttonHandler.buttons.left) && (this.buttons[0 === this.buttonIndex ? this.buttons.length - 1 : this.buttonIndex - 1].select(), this.game.buttonHandler.timeOut()), (this.game.buttonHandler.buttons.down || this.game.buttonHandler.buttons.right) && (this.buttons[this.buttonIndex === this.buttons.length - 1 ? 0 : this.buttonIndex + 1].select(), this.game.buttonHandler.timeOut()), this.game.buttonHandler.buttons.activate && (this.buttons[this.buttonIndex].activate(), this.game.buttonHandler.timeOut()), this.game.buttonHandler.buttons.b && (this.backToMenu(), this.game.buttonHandler.timeOut()))
  },
  backToMenu: function() {
    var b = 0 === this.confirmLayer.x ? this.confirmLayer : this.difficultyLayer,
      a = this.game.add.tween(b);
    a.to({
      x: this.game.camera.screenView.width,
      y: 0
    }, 500, Phaser.Easing.Cubic.Out, !0), a = this.game.add.tween(this.menuLayer), a.to({
      x: 0,
      y: 0
    }, 500, Phaser.Easing.Cubic.Out, !0), this.buttons[this.buttonIndex].reset(), this.buttons = this.menuButtons, this.game.savegame.player.level < 0 || this.game.savegame.player.level > 13 ? this.buttons[1].select(!0) : this.buttons[0].select(!0)
  },
  newGame: function() {
    this.confirmed !== !0 && this.game.savegame.player.level > -1 ? this.showConfirmationDialog() : this.showDifficultyDialog()
  },
  newAnimationTest: function() {
    this.test = !0, this.newGame()
  },
  showConfirmationDialog: function() {
    var a = this.game.add.tween(this.confirmLayer);
    a.to({
      x: 0,
      y: 0
    }, 500, Phaser.Easing.Cubic.Out, !0), a = this.game.add.tween(this.menuLayer), a.to({
      x: -this.game.camera.screenView.width,
      y: 0
    }, 500, Phaser.Easing.Cubic.Out, !0), this.buttons[this.buttonIndex].reset(), this.buttons = this.confirmButtons, this.buttons[0].select(!0)
  },
  showDifficultyDialog: function() {
    var a = this.game.add.tween(this.difficultyLayer);
    a.to({
      x: 0,
      y: 0
    }, 500, Phaser.Easing.Cubic.Out, !0), a = this.game.add.tween(0 == this.confirmLayer.x ? this.confirmLayer : this.menuLayer), a.to({
      x: -this.game.camera.screenView.width,
      y: 0
    }, 500, Phaser.Easing.Cubic.Out, !0), this.buttons[this.buttonIndex].reset(), this.buttons = this.difficultyButtons, this.buttons[1].select(!0)
  },
  startEasy: function() {
    this.game.log.logData("Difficulty", 0), Main.Game.prototype.difficulty = 0, this.test ? this.animationTest() : this.forceNewGame()
  },
  startNormal: function() {
    this.game.log.logData("Difficulty", 1), Main.Game.prototype.difficulty = 1, this.test ? this.animationTest() : this.forceNewGame()
  },
  startHard: function() {
    this.game.log.logData("Difficulty", 2), Main.Game.prototype.difficulty = 2, this.test ? this.animationTest() : this.forceNewGame()
  },
  forceNewGame: function() {
    this.fadeOut.onComplete.add(function() {
      this.unload(), Main.Game.prototype.loadState = "new", this.game.state.start("cutscene", Main.Cutscene)
    }, this), this.fadeOut.to({
      alpha: 1
    }, 500, Phaser.Easing.Cubic.InOut, !0)
  },
  continueGame: function() {
    this.fadeOut.onComplete.add(function() {
      this.unload(), Main.Game.prototype.loadState = "continue", this.game.state.start("cutscene", Main.Cutscene)
    }, this), this.fadeOut.to({
      alpha: 1
    }, 500, Phaser.Easing.Cubic.InOut, !0)
  },
  changeSlot: function() {
    this.fadeOut.onComplete.add(function() {
      this.unload(), this.game.state.start("saveSlots", Main.SaveSlots)
    }, this), this.fadeOut.to({
      alpha: 1
    }, 500, Phaser.Easing.Cubic.InOut, !0)
  },
  animationTest: function() {
    this.fadeOut.onComplete.add(function() {
      this.unload(), Main.Game.prototype.loadState = "test", this.game.state.start("game", Main.Game)
    }, this), this.fadeOut.to({
      alpha: 1
    }, 500, Phaser.Easing.Cubic.InOut, !0)
  },
  rollCredits: function() {
    this.fadeOut.onComplete.add(function() {
      this.unload(), this.game.state.start("credits", Main.Credits)
    }, this), this.fadeOut.to({
      alpha: 1
    }, 500, Phaser.Easing.Cubic.InOut, !0)
  },
  testButton: function() {},
  toggleFullscreen: function() {
    this.game.scale.isFullScreen ? (this.game.scale.stopFullScreen(), this.fullscreenButton.setFrames(10, 8, 11, 8)) : (this.game.scale.startFullScreen(), this.fullscreenButton.setFrames(11, 9, 10, 9))
  },
  muteMusic: function() {
    if (this.game.savegame.audio.music > 0) {
      this.muteMusicButton.setFrames(3, 1, 2, 1);
      var a = 0
    } else {
      this.muteMusicButton.setFrames(2, 0, 3, 0);
      var a = 10
    }
    this.game.savegame.audio.music = a, this.game.savegame.save(), this.game.savegame.refreshAudio()
  },
  muteSounds: function() {
    if (this.game.savegame.audio.sound > 0 || this.game.savegame.audio.ambient > 0) {
      this.muteSoundsButton.setFrames(7, 5, 6, 5);
      var a = 0
    } else {
      this.muteSoundsButton.setFrames(6, 4, 7, 4);
      var a = 10
    }
    this.game.savegame.audio.ambient = a, this.game.savegame.audio.sound = a, this.game.savegame.save(), this.game.savegame.refreshAudio()
  },
  openWebsite: function() {
    var a = window.open("http://HypnoticOwl.com", "_blank");
    a.focus()
  },
  openFacebook: function() {
    var a = window.open("https://facebook.com/HypnoticOwl", "_blank");
    a.focus()
  },
  openTwitter: function() {
    var a = window.open("https://twitter.com/Hypnotic0wl", "_blank");
    a.focus()
  },
  openGooglePlus: function() {
    var a = window.open("https://google.com/+HypnoticowlGames", "_blank");
    a.focus()
  },
  openSponsor: function() {
    var a = window.open("https://www.fgl.com", "_blank");
    a.focus()
  },
  exitGame: function() {
    window.tizen ? (this.fadeOut.onComplete.add(function() {
      tizen.application.getCurrentApplication().exit()
    }, this), this.fadeOut.to({
      alpha: 1
    }, 500, Phaser.Easing.Cubic.InOut, !0)) : "function" == typeof quitGame && quitGame()
  },
  unload: function() {
    this.fadeOut.stop(), this.bgLayer.removeAll(), this.menuLayer.removeAll(), this.buttonLayer.removeAll(), this.confirmLayer.removeAll(), this.difficultyLayer.removeAll(), this.overlay.removeAll()
  },
  update: function() {
    this.handleButtonInput(), this.time++, this.time > 60 && (this.time = 0, this.clouds1.x += 2 / this.scaleMod, this.clouds2.x += 2 / this.scaleMod, this.clouds1.x >= 1386 / this.scaleMod && (this.clouds1.x = 0, this.clouds2.x = -1386 / this.scaleMod))
  }
}, Main.Game = function(a) {
  this.game = a, this.audioplayer = this.game.audioplayer, this.savegame = a.savegame, this.log = this.game.log, this.scaleMod = this.game.mobile ? 2 : 1, this.mobile = this.game.mobile, this.smallfont = a.smallfont, this.font = a.font, this.fontsize = a.fontsize, this.tilesize = 48, this.layers = {}, this.isRunning = !1, main = 0
}, Main.Game.prototype = {
  create: function() {
    return this.difficulty = Main.Game.prototype.difficulty, this.layers.background = this.game.add.group(this.game.world, "background"), this.layers.shadows = this.game.add.group(this.game.world, "shadows"), this.layers.tileMarkup = this.game.add.group(this.game.world, "tileMarkup"), this.layers.pathTiles = this.game.add.group(this.game.world, "pathTiles"), this.layers.walkTiles = this.game.add.group(this.game.world, "walkTiles"), this.layers.drops = this.game.add.group(this.game.world, "drops"), this.layers.objects = this.game.add.group(this.game.world, "objects"), this.layers.enemies = this.game.add.group(this.game.world, "enemies"), this.layers.chars = this.game.add.group(this.game.world, "chars"), this.layers.spellTiles = this.game.add.group(this.game.world, "spellTiles"), this.layers.spells = this.game.add.group(this.game.world, "spells"), this.layers.effects = this.game.add.group(this.game.world, "effects"), this.layers.enemyHealth = this.game.add.group(this.game.world, "enemyHealth"), this.layers.infos = this.game.add.group(this.game.world, "infos"), this.layers.spellbook = this.game.add.group(), this.layers.tutorial = this.game.add.group(), this.layers.menu = this.game.add.group(), this.layers.help = this.game.add.group(), this.layers.hud = this.game.add.group(), this.layers.text = this.game.add.group(), this.layers.overlay = this.game.add.group(), this.layers.spellbook.fixedToCamera = !0, this.layers.tutorial.fixedToCamera = !0, this.layers.menu.fixedToCamera = !0, this.layers.hud.fixedToCamera = !0, this.layers.text.fixedToCamera = !0, this.layers.overlay.fixedToCamera = !0, this.fade = this.layers.overlay.create(0, 0, "hud"), this.fade.scale = new Phaser.Point(this.game.camera.screenView.width, this.game.camera.screenView.height), "continue" == this.loadState ? this.savegame.load() : this.savegame.clear(), this.level = new Main.Level(this), this.levelManager = new Main.LevelManager(this), "number" == typeof this.overrideLevel && (this.levelManager.current = this.overrideLevel, this.overrideLevel = null), this.levelManager.current + 1 >= Object.keys(this.savegame.stats).length ? (this.player.level = -1, this.savegame.player.level = -1, this.savegame.save(), void this.game.state.start("mainMenu", Main.MainMenu)) : ("test" == this.loadState ? this.levelManager.add("world0-1") : (this.levelManager.add("world1-1"), this.levelManager.add("world1-2"), this.levelManager.add("world1-3"), this.levelManager.add("world2-1"), this.levelManager.add("world2-2"), this.levelManager.add("world2-3"), this.levelManager.add("world3-1"), this.levelManager.add("world3-2"), this.levelManager.add("world3-3"), this.levelManager.add("world4-1"), this.levelManager.add("world4-2"), this.levelManager.add("world4-3"), this.levelManager.add("world5-1"), this.levelManager.add("world5-2"), this.levelManager.add("world5-3")), void this.run())
  },
  run: function() {
    this.buttonHandler = this.game.buttonHandler, this.charIndex = -1, this.log.logTime("Level " + this.levelManager.current + " Started"), this.effects = new Main.Effects(this), this.cinematics = new Main.Cinematics(this), this.levelObjects = new Main.LevelObjects(this), this.player = new Main.Player(this), this.enemies = new Main.Enemies(this), this.spellbook = new Main.SpellBook(this), this.helpScreen = new Main.HelpScreen(this), this.ingame = new Main.IngameMenu(this), this.levelManager.loadNext(), this.spells = new Main.Spells(this), this.pathfinder = new Main.Pathfinder(this), this.lineOfSight = new Main.LineOfSight(this), this.inputHandler = new Main.Input(this), this.hud = new Main.HUD(this), this.tutorial = this.difficulty < 2 && ("world1-1" == this.level.id || "world1-2" == this.level.id || "world1-3" == this.level.id) ? new Main.Tutorial(this) : null, this.cinematics.cinematics.length > 0 ? this.game.camera.focusOn(this.posToCoord(this.cinematics.cinematics[0][0])) : this.game.camera.follow(this.player.sprite);
    var a = this.game.add.tween(this.fade);
    a.onComplete.add(this.start, this), a.to({
      alpha: 0
    }, 1e3, Phaser.Easing.Cubic.InOut, !0)
  },
  unload: function() {
    for (var a in this.layers) this.layers[a].removeAll();
    this.world.removeAll()
  },
  isPlayersTurn: function() {
    return this.currentTurn % 2 !== 0
  },
  posToCoord: function(a, b) {
    return {
      x: (null != a.x ? a.x : a) * this.tilesize + this.tilesize / 2,
      y: (null != a.y ? a.y : b) * this.tilesize + this.tilesize / 2
    }
  },
  getPosition: function(a, b) {
    return {
      x: ((null != a.x ? a.x : a) - this.tilesize / 2) / this.tilesize,
      y: ((null != a.y ? a.y : b) - this.tilesize / 2 - (a.off || 0)) / this.tilesize
    }
  },
  setPosition: function(a, c, d) {
    var b = this.posToCoord(c, d);
    a.x = b.x, a.y = b.y + (a.off || 0), a.shadow && (a.shadow.x = b.x, a.shadow.y = b.y + (a.shadow.off || 0))
  },
  start: function() {
    this.isRunning = !0, this.currentTurn = 0, Main.Game.prototype.skipIntro = !1, this.cinematics.cinematics.length > 0 ? this.cinematics.playCinematics() : this.nextTurn(!0)
  },
  nextTurn: function(a) {
    this.isRunning && (a === !0 && null != this.tutorial && this.tutorial.start(), this.isPlayersTurn() ? (this.level.increaseScore(-10, "moves"), this.currentTurn++, this.enemies.performTurn()) : (0 === this.currentTurn && this.enemies.updateDistance(), this.currentTurn++, this.player.performTurn()))
  },
  gameOver: function(b) {
    switch (this.isRunning = !1, this.game.outcome = b, this.game.world.alpha = 1, this.log.logTime(b), this.log.sendLog(), b) {
      case "defeat":
        var a = this.game.add.tween(this.fade);
        a.onComplete.add(function() {
          this.savegame.saveScore(this, !0), this.unload(), Main.Game.prototype.skipIntro = !0, this.game.state.start("game", Main.Game)
        }, this), a.to({
          alpha: 1
        }, 1e3, Phaser.Easing.Cubic.InOut, !0);
        break;
      case "victory":
        this.unload(), this.savegame.createSave(this), this.game.state.start("stats", Main.Stats);
        break;
      case "retry":
        var a = this.game.add.tween(this.fade);
        a.onComplete.add(function() {
          this.unload(), Main.Game.prototype.skipIntro = !0, this.game.state.start("game", Main.Game)
        }, this), a.to({
          alpha: 1
        }, 1e3, Phaser.Easing.Cubic.InOut, !0)
    }
  },
  addText: function(a, b, c, d, e) {
    return e ? e.add(new Phaser.Text(this, a, b, c, d)) : this.layers.text.add(new Phaser.Text(this, a, b, c, d))
  },
  addButton: function(a, b, c, d, e, f, g, h, i) {
    return i ? i.add(new Phaser.Button(this, a, b, c, d, e, f, g, h)) : this.layers.hud.add(new Phaser.Button(this, a, b, c, d, e, f, g, h))
  },
  addGroup: function(a, b, c, d, e, f, g, h) {
    return new Phaser.Button(this, a, b, c, d, e, f, g, h)
  },
  centerCameraOnSprite: function(b, m, e, k, c, f, g, h, i, j) {
    if (this.game.camera.target == b) return void("function" == typeof c && c.call(f, g, h, i, j));
    b == this.player.sprite && this.inputHandler.hideWalkTiles(), this.game.camera.follow(null);
    var a = this.game.camera.view.clone();
    a.x = Math.round(b.x - a.halfWidth), a.y = Math.round(b.y - a.halfHeight), a.x <= this.game.camera.bounds.x && (a.x = this.game.camera.bounds.x), a.right >= this.game.camera.bounds.right && (a.x = this.game.camera.bounds.right - this.game.camera.width), a.y <= this.game.camera.bounds.top && (a.y = this.game.camera.bounds.top), a.bottom >= this.game.camera.bounds.bottom && (a.y = this.game.camera.bounds.bottom - this.game.camera.height), a.floor();
    var n = Math.ceil(this.game.physics.arcade.distanceBetween(this.game.camera.view, a) / this.tilesize),
      d = n / ((m || 4) / 1e3);
    if (e && d > e && (d = e), d > 0) {
      var l = this.game.add.tween(this.game.camera);
      l.onComplete.addOnce(function() {
        k && this.game.camera.follow(b), "function" == typeof c && c.call(f, g, h, i, j), b == this.player.sprite && this.inputHandler.showWalkTiles()
      }, this), l.to(a, d, Phaser.Easing.Linear.None, !0)
    } else k && this.game.camera.follow(b), "function" == typeof c && c.call(f, g, h, i, j)
  },
  centerNextCharacter: function() {
    this.charIndex++, this.charIndex >= this.enemies.group.total ? (this.charIndex = -1, this.player.centerOnPlayer()) : this.enemies.group.getAt(this.charIndex).visible === !1 ? this.centerNextCharacter() : this.effects.showInfos(this.enemies.group.getAt(this.charIndex), !0)
  },
  centerPrevCharacter: function() {
    this.charIndex--, this.charIndex < -1 && (this.charIndex = this.enemies.group.total - 1), -1 == this.charIndex ? this.player.centerOnPlayer() : this.enemies.group.getAt(this.charIndex).visible === !1 ? this.centerPrevCharacter() : this.effects.showInfos(this.enemies.group.getAt(this.charIndex), !0)
  },
  update: function() {
    this.inputHandler.update(), this.hud.update(), this.effects.update(), this.player.update()
  },
  render: function() {}
}, Main.IngameMenu = function(a) {
  this.game = a, this.group = this.game.layers.menu, this.scaleMod = this.game.mobile ? 2 : 1, this.isOpen = !1, this.buttonX = 332 / this.scaleMod, this.buttonY = (250 - (this.game.game.device.chrome ? 8 : 0)) / this.scaleMod, this.buttonOffset = (40 - (this.game.game.device.chrome ? 4 : 0)) / this.scaleMod, this.buttonOffset2 = 16 - (this.game.game.device.chrome ? 4 : 0), this.buttonCount = 0
}, Main.IngameMenu.prototype = {
  open: function() {
    this.game.spellbook.isOpen ? this.game.spellbook.close() : this.game.helpScreen.isOpen ? this.game.helpScreen.close() : this.game.ingame.isOpen && this.game.ingame.close(), this.game.audioplayer.playButtonDown(), this.buttonCount = 0, this.buttons = [], this.buttonIndex = 0, this.background = this.group.create(0, 48 / this.scaleMod, "ingame"), this.background.scale = new Phaser.Point(1 / this.scaleMod, 1 / this.scaleMod), this.addButton("Continue", this.close), this.addButton("Restart Level", this.retry), this.musicLabel = this.addButton("Music: " + this.game.audioplayer.getMusicVolume(), this.modMusicVolume, this.buttonOffset2).text, this.ambientLabel = this.addButton("Ambient: " + this.game.audioplayer.getAmbientVolume(), this.modAmbientVolume, this.buttonOffset2).text, this.soundLabel = this.addButton("Sounds: " + this.game.audioplayer.getSoundVolume(), this.modSoundVolume, this.buttonOffset2).text, this.game.game.device.chrome === !0 ? (this.fullscreenLabel = this.addButton("Fullscreen: " + (this.game.game.scale.isFullScreen ? "on" : "off"), this.toggleFullscreen, 2 * this.buttonOffset2).text, this.addButton("Exit to Menu", this.exit, 3 * this.buttonOffset2)) : this.addButton("Exit to Menu", this.exit, 2 * this.buttonOffset2), this.buttons[0].select(!0), this.isOpen = !0
  },
  addButton: function(d, e, c) {
    c = c / this.scaleMod || 0;
    var a = this.group.create(this.buttonX, this.buttonY + c + this.buttonCount * this.buttonOffset, "buttons", 0);
    this.buttons.push(a), a.frames = [1, 0, 2, 0], null !== d && (a.text = this.game.add.text(a.x + 62 / this.scaleMod, a.y + 4 / this.scaleMod, d, {
      font: this.game.fontsize + "px " + this.game.font,
      fill: "#c6c6c6",
      align: "center"
    }, this.group), a.text.setShadow(3, 3, "rgba(0,0,0,0.5)", 5), a.text.stroke = "#000000", a.text.strokeThickness = 2);
    var b = this;
    return a.inputEnabled = !0, a.input.useHandCursor = !0, a.select = function(c) {
      c !== !0 && (b.buttons[b.buttonIndex].reset(), b.game.audioplayer.playButtonOver()), a.frame = a.frames[0], a.text && (a.text.fill = "white"), b.buttonIndex = b.buttons.indexOf(a)
    }, a.activate = function() {
      a.frame = a.frames[2], e.call(b), b.game.audioplayer.playButtonDown(), a.select(!0)
    }, a.reset = function() {
      a.frame = a.frames[1], a.text && (a.text.fill = "#c6c6c6")
    }, a.setFrames = function(b, c, d) {
      a.frame = b, a.frames[0] = b, a.frames[1] = c, a.frames[2] = d
    }, a.events.onInputOver.add(a.select, this), a.events.onInputOut.add(a.reset, this), a.events.onInputDown.add(a.activate, this), this.buttonCount++, a
  },
  close: function() {
    this.game.audioplayer.playButtonOver(), this.group.removeAll(), this.background = null, this.isOpen = !1
  },
  toggleFullscreen: function() {
    this.game.game.scale.isFullScreen ? (this.game.game.scale.stopFullScreen(), this.fullscreenLabel.text = "Fullscreen: off") : (this.game.game.scale.startFullScreen(), this.fullscreenLabel.text = "Fullscreen: on")
  },
  retry: function() {
    this.game.gameOver("retry")
  },
  modMusicVolume: function() {
    var a = this.game.audioplayer.getMusicVolume();
    a >= 10 ? a = 0 : a += 1, this.game.savegame.audio.music = a, this.game.savegame.save(), this.game.savegame.refreshAudio(), this.musicLabel.text = "Music: " + a
  },
  modSoundVolume: function() {
    var a = this.game.audioplayer.getSoundVolume();
    a >= 10 ? a = 0 : a += 1, this.game.savegame.audio.sound = a, this.game.savegame.save(), this.game.savegame.refreshAudio(), this.soundLabel.text = "Sounds: " + a
  },
  modAmbientVolume: function() {
    var a = this.game.audioplayer.getAmbientVolume();
    a >= 10 ? a = 0 : a += 1, this.game.savegame.audio.ambient = a, this.game.savegame.save(), this.game.savegame.refreshAudio(), this.ambientLabel.text = "Ambient: " + a
  },
  exit: function() {
    var a = this.game.add.tween(this.game.layers.overlay);
    a.onComplete.add(function() {
      this.close(), this.game.unload(), this.game.game.state.start("mainMenu", Main.MainMenu)
    }, this), a.to({
      alpha: 1
    }, 500, Phaser.Easing.Cubic.InOut, !0)
  }
}, Main.Player = function(a) {
  this.game = a, this.group = this.game.layers.chars
}, Main.Player.prototype = {
  spawnPlayer: function(a, b) {
    switch (this.pathMap = this.game.levelManager.pathMap, this.charMap = this.game.levelManager.charMap, this.sprite = this.group.create(0, 0, "48bitSprites"), this.sprite.anchor.setTo(.5, .5), this.sprite.off = -8, this.sprite.shadow = this.game.layers.shadows.create(0, 0, "48bitSprites", Main.spriteOffset.shadows), this.sprite.shadow.anchor.setTo(.5, .5), this.sprite.shadow.off = -2, this.sprite.type = "char", this.sprite.id = "player", this.sprite.scale.x = -1, this.sprite.effect = null, this.sprite.handler = this, this.sprite.hurt = function(a, b) {
      this.handler.hurt(a, b)
    }, this.sprite.makeInvisible = function() {
      this.handler.makeInvisible()
    }, this.sprite.makeVisible = function() {
      this.handler.makeVisible()
    }, this.sprite.nextAction = function() {
      this.handler.nextAction()
    }, this.sprite.getPosition = function() {
      return this.handler.getPosition()
    }, this.sprite.setEffect = function(a) {
      this.handler.setEffect(a)
    }, this.sprite.killEffect = function() {
      return this.handler.killEffect()
    }, this.setPosition(a, b, !0), this.indicator = this.game.layers.hud.create(0, 0, "indicator", 1), this.indicator.alpha = 0, this.indicator.anchor.setTo(.5, .5), this.indicator.player = this.game.layers.hud.create(0, 0, "48bitSprites"), this.indicator.player.anchor.setTo(.5, .5), this.indicator.player.visible = !1, this.indicator.inputEnabled = !0, this.indicator.input.useHandCursor = !0, this.indicator.events.onInputDown.add(this.backToPlayer, this), this.showIndicator = !1, this.setAnimations(), this.sprite.burning = 0, this.sprite.frozen = -1, this.sprite.shield = 0, this.sprite.shielded = 0, this.sprite.invisible = 0, this.sprite.invisibleSpells = 0, this.sprite.accelerated = -1, this.sprite.supercharged = -1, this.sprite.freeSpells = 0, this.walking = !1, this.path = [], this.lvl = this.game.savegame.player.lvl + 0, this.xp = this.game.savegame.player.xp + 0, this.spellPoints = this.game.savegame.player.spellPoints + 0, this.actions = this.game.savegame.player.actions + 0, this.health = this.game.savegame.player.maxhealth + 0, this.maxhealth = this.game.savegame.player.maxhealth + 0, this.game.difficulty) {
      case 0:
        this.lvlTable = [0, 5, 70, 170, 250, 350, 500, 600, 700, 800, 900, 1e3];
        break;
      case 1:
        this.lvlTable = [0, 5, 70, 170, 250, 350, 500, 700, 900, 1100];
        break;
      case 2:
        this.lvlTable = [0, 5, 70, 250, 350, 500, 750, 950, 1200]
    }
  },
  setAnimations: function(b) {
    this.sprite.animations._anims = {};
    var a = Main.spriteOffset.playerDeath;
    this.sprite.animations.add("die", [0 + a, 1 + a, 2 + a, 3 + a, 4 + a, 5 + a, 5 + a, 5 + a, 5 + a, 5 + a, 5 + a, 5 + a, 5 + a]), a = Main.spriteOffset.player + (b ? 10 : 0), this.sprite.animations.add("idle", [0 + a, 1 + a]), this.sprite.animations.add("walk", [1 + a, 2 + a, 3 + a, 2 + a]), this.sprite.animations.add("walkup", [7 + a, 8 + a, 9 + a, 8 + a]), this.sprite.animations.add("attack", [4 + a, 5 + a, 6 + a, 6 + a, 5 + a, 4 + a]), this.sprite.animations.play("idle", 2, !0), this.sprite.events.onAnimationComplete.add(this.startIdle, this), this.indicator.player.animations.add("idle", [0 + a, 1 + a]), this.indicator.player.animations.play("idle", 2, !0)
  },
  startIdle: function() {
    this.path.length > 0 ? this.sprite.animations.stop() : this.sprite.frozen == this.game.spells.spellCollection.iceBreath.duration - 1 ? this.sprite.animations.stop() : this.sprite.frozen > -1 ? this.sprite.animations.play("idle", 1, !0) : this.sprite.animations.play("idle", 2, !0)
  },
  makeInvisible: function() {
    this.setAnimations(!0), this.game.enemies.pacifyAll()
  },
  makeVisible: function(a) {
    this.sprite.invisible = 0, this.setAnimations(), this.game.effects.poof(this.sprite.x, this.sprite.y), a && this.die()
  },
  sayText: function(a, b) {
    this.game.effects.sayText(this.sprite, a, "white", b || 1e4)
  },
  getPosition: function() {
    return this.game.getPosition(this.sprite)
  },
  setPosition: function(a, b, d) {
    if (!d) {
      var c = this.getPosition();
      this.game.levelManager.charMap[c.y][c.x] = null
    }
    this.game.setPosition(this.sprite, a, b), this.game.levelManager.charMap[b][a] = this.sprite
  },
  backToPlayer: function() {
    this.showIndicator = !1, this.centerOnPlayer()
  },
  centerOnPlayer: function(a, b, c, d, e, f) {
    this.game.centerCameraOnSprite(this.sprite, 6, 500, !0, a, b, c, d, e, f)
  },
  hideIndicator: function() {
    this.indicator.alpha = 0, this.indicator.player.visible = !1, this.indicator.inputEnabled = !1, this.indicator.input.useHandCursor = !1
  },
  updateIndicator: function() {
    return this.showIndicator ? (this.indicator.alpha = 1, this.indicator.player.visible = !0, this.sprite.y < this.game.camera.view.y + this.game.tilesize / this.game.hud.scale ? (this.indicator.rotation = 0, this.indicator.x = this.sprite.x - this.game.camera.view.x, this.indicator.y = this.game.tilesize / this.game.hud.scale + this.indicator.height / 2) : this.sprite.y > this.game.camera.view.y + this.game.camera.view.height ? (this.indicator.rotation = Math.PI, this.indicator.x = this.sprite.x - this.game.camera.view.x, this.indicator.y = this.game.camera.view.height - this.indicator.height / 2) : this.sprite.x < this.game.camera.view.x ? (this.indicator.rotation = Math.PI / 2 * 3, this.indicator.x = this.indicator.width / 2, this.indicator.y = this.sprite.y - this.game.camera.view.y) : this.sprite.x > this.game.camera.view.x + this.game.camera.view.width ? (this.indicator.rotation = Math.PI / 2, this.indicator.x = this.game.camera.view.width - this.indicator.width / 2, this.indicator.y = this.sprite.y - this.game.camera.view.y) : this.indicator.alpha > 0 && this.hideIndicator(), void(this.indicator.alpha > 0 && (this.indicator.x < this.indicator.width / 2 ? this.indicator.x = this.indicator.width / 2 : this.indicator.x > this.game.camera.view.width - this.indicator.width / 2 && (this.indicator.x = this.game.camera.view.width - this.indicator.width / 2), this.indicator.y < this.game.tilesize / this.game.hud.scale + this.indicator.width / 2 ? this.indicator.y = this.game.tilesize / this.game.hud.scale + this.indicator.width / 2 : this.indicator.y > this.game.camera.view.height - this.indicator.width / 2 && (this.indicator.y = this.game.camera.view.height - this.indicator.width / 2), this.indicator.player.x = this.indicator.x, this.indicator.player.y = this.indicator.y - 2, this.indicator.inputEnabled = !0, this.indicator.input.useHandCursor = !0))) : void this.hideIndicator()
  },
  performTurn: function() {
    return this.game.camera.target != this.sprite ? void this.centerOnPlayer(this.performTurn, this) : (this.actions = 1, this.sprite.shielded > 0 && (this.sprite.shielded--, 0 == this.sprite.shielded && (this.sprite.shield = 0)), this.sprite.supercharged > 0 && (this.game.effects.superCharged(this.sprite.x, this.sprite.y - 32), this.sprite.supercharged--, this.sprite.freeSpells = this.sprite.supercharged > 0 ? this.game.spells.spellCollection.superCharge.level : 0), this.sprite.accelerated > 0 && (this.sprite.accelerated--, this.sprite.accelerated > 0 && (this.actions += this.game.spells.spellCollection.acceleration.level)), this.sprite.invisible > 0 && (this.sprite.invisible--, 0 == this.sprite.invisible && this.makeVisible()), this.sprite.burning > 0 ? (this.hurt(1, "none"), this.sprite.burning--) : this.sprite.frozen > 0 && (this.game.effects.frozen(this.sprite.x, this.sprite.y), this.sprite.frozen--, this.sprite.frozen == this.game.spells.spellCollection.iceBreath.duration - 1 ? this.actions = 0 : this.sprite.frozen > -1 && (this.actions = 1, this.killEffect())), this.game.hud.updateEffects(), void(this.health < 1 ? this.die() : this.nextAction()))
  },
  nextAction: function() {
    this.game.camera.target != this.sprite ? this.centerOnPlayer(this.nextAction, this) : this.actions > 0 ? (this.game.inputHandler.action = "none", this.path.length > 0 ? (this.game.inputHandler.showPath(!0), this.continueOnPath()) : this.game.inputHandler.active && (this.game.inputHandler.hidePath(), this.game.inputHandler.showWalkTiles())) : this.game.nextTurn()
  },
  setEffect: function(b) {
    this.killEffect(), this.sprite.effect = this.game.layers.chars.create(this.sprite.x, this.sprite.y + 2, "64bitSprites"), this.sprite.effect.anchor.setTo(.5, .5);
    var a = 0;
    switch (b) {
      case "frozen":
        a = Main.spriteOffset.iceBlock;
        break;
      case "burning":
        a = Main.spriteOffset.fireBlock
    }
    this.sprite.effect.animations.add("animation", [a, a + 1]), this.sprite.effect.animations.play("animation", 4, !0)
  },
  killEffect: function() {
    null != this.sprite.effect && (this.sprite.effect.visible = !1, this.sprite.effect.kill(), this.sprite.effect = null)
  },
  walkToTile: function(b, d, c, e) {
    if (this.game.spells.spellCasting) return !1;
    if (this.game.camera.target != this.sprite) return void this.centerOnPlayer(this.walkToTile, this, b, d, c, e);
    var f = this.getPosition();
    this.game.levelManager.charMap[f.y][f.x] = null, this.game.levelManager.charMap[b.y][b.x] = this.sprite, this.sprite.target = this.game.posToCoord(b);
    var a = this.game.add.tween(this.sprite);
    a.onStart.add(function() {
      this.startWalk()
    }, this), a.onComplete.add(function() {
      this.stopWalk(d)
    }, this), "function" == typeof c && a.onComplete.add(c, e), a.to({
      x: this.sprite.target.x,
      y: this.sprite.target.y + this.sprite.off
    }, 350, Phaser.Easing.Linear.None, !0), a = this.game.add.tween(this.sprite.shadow), a.to({
      x: this.sprite.target.x,
      y: this.sprite.target.y + this.sprite.shadow.off
    }, 350, Phaser.Easing.Linear.None, !0)
  },
  startWalk: function() {
    this.walking !== !0 && this.game.audioplayer.playFootsteps(), this.walking = !0;
    var a = this.sprite.target;
    a.x > this.sprite.x && (this.sprite.scale.x = -1, this.sprite.animations.play("walk", 8, !0)), a.x < this.sprite.x && (this.sprite.scale.x = 1, this.sprite.animations.play("walk", 8, !0)), a.y > this.sprite.y && this.sprite.animations.play("walk", 8, !0), a.y < this.sprite.y && this.sprite.animations.play("walkup", 8, !0)
  },
  stopWalk: function(d, a, e) {
    this.walking = !1, this.startIdle();
    var b = this.getPosition(),
      c = this.game.levelManager.pickUpMap[b.y][b.x];
    c && this.game.levelObjects.interact(c), d || (this.actions--, this.nextAction()), "function" == typeof a && a.call(e)
  },
  continueOnPath: function() {
    var a = this.path.pop();
    this.walkToTile(a)
  },
  cancelPath: function(a) {
    this.path.length > 0 && (this.path.length = 0, this.startIdle(), a && this.game.effects.alert(this.sprite.x, this.sprite.y))
  },
  hurt: function(a, b) {
    this.cancelPath(), this.game.log.logData("Take Damage", a), a > 0 && this.sprite.shield > 0 && "bloodMagic" != b ? (this.game.effects.shield(this.sprite.x, this.sprite.y), this.sprite.shield--, 0 == this.sprite.shield && (this.sprite.shielded = 0)) : a > 0 && this.health > 0 ? (this.health -= a, this.health < 0 && (this.health = 0), this.game.effects.healthLoss(this.sprite.x, this.sprite.y, this, a), "bloodMagic" != b && this.game.level.increaseScore(50 * -a, "health")) : this.game.effects.healthLoss(this.sprite.x, this.sprite.y, this, 0)
  },
  die: function() {
    return this.sprite.invisible > 0 ? void this.makeVisible(!0) : (this.sprite.events.onAnimationComplete.remove(this.startIdle, this), this.sprite.events.onAnimationComplete.add(function() {
      this.game.gameOver("defeat")
    }, this), this.sprite.animations.play("die", 6, !1), this.game.effects.showText(this.sprite, "Defeat!"), this.game.audioplayer.playPoof(), this.game.effects.greyPoof(this.sprite.x, this.sprite.y), void this.sprite.shadow.destroy())
  },
  increaseXP: function(a) {
    this.lvl >= this.lvlTable.length || (this.xp += a, this.game.level.increaseScore(200 * a, "enemies"), this.xp < this.lvlTable[this.lvl] ? this.game.hud.updateXP(this.xp, !1) : ("function" == typeof this.onLevelUp && this.onLevelUp.call(this.onLevelUp.context), this.game.audioplayer.playLevelUp(), this.game.hud.flashGem(), this.lvl++, this.spellPoints++, this.game.hud.updateXP(this.xp, !0), this.game.effects.showText(this.sprite, "Level Up"), this.game.log.logTime("Level Up")))
  },
  update: function() {
    this.updateIndicator()
  }
}, Main.Enemies = function(a) {
  return this.game = a, this.tilesize = this.game.tilesize, this.pathMap = this.game.levelManager.pathMap, this.group = this.game.layers.enemies, this.count = 0, this.pointer = -1, this.waitingEnemies = [], this.actions = 0, this.ashPiles = {}, this.indicator = this.game.layers.hud.create(0, 0, "indicator"), this.indicator.alpha = 0, this.indicator.anchor.setTo(.5, .5), this
}, Main.Enemies.prototype = {
  addEnemy: function(d, e, c) {
    var a = this.group.create(0, 0, "48bitSprites");
    a.anchor.setTo(.5, .5), a.off = -8, a.shadow = this.game.layers.shadows.create(0, 0, "48bitSprites", Main.spriteOffset.shadows), a.shadow.anchor.setTo(.5, .5), a.shadow.off = -2, a.indicator = this.game.layers.hud.create(0, 0, "48bitSprites"), a.indicator.anchor.setTo(.5, .5), a.indicator.visible = !1;
    var b = Main.spriteOffset[c];
    return a.animations.add("walk", [1 + b, 2 + b, 3 + b, 2 + b]), a.animations.add("attack", [4 + b, 5 + b, 6 + b, 6 + b, 5 + b, 4 + b]), a.animations.add("walkup", [7 + b, 8 + b, 9 + b, 8 + b]), Math.floor(2 * Math.random()) > 0 ? a.animations.add("idle", [0 + b, 1 + b]) : a.animations.add("idle", [1 + b, 0 + b]), a.indicator.animations.add("idle", [0 + b, 1 + b]), a.indicator.animations.play("idle", 2, !0), a.animations.play("idle", 2, !0), this.setTypeAttributes(a, c), a.type = "char", a.health = a.maxhealth, a.alerted = !1, a.cooldown = 0, a.burning = 0, a.frozen = -1, a.shield = 0, a.shielded = 0, a.invisible = 0, a.accelerated = -1, a.supercharged = -1, a.freeSpells = 0, a.effect = null, a.lastActive = 0, a.name = c, a.id = c + " " + this.count, a.ai = this, a.makeInvisible = function() {
      this.ai.makeInvisible(this)
    }, a.makeVisible = function(a, b) {
      this.ai.makeVisible(this, a, b)
    }, a.hurt = function(a, b) {
      this.ai.hurt(this, a, b)
    }, a.nextAction = function() {
      this.ai.nextAction()
    }, a.walkToTile = function(a, b, c, d) {
      this.ai.walkToTile(this, a, b, c, d)
    }, a.die = function(a) {
      this.ai.kill(this, a)
    }, a.getPosition = function() {
      return this.ai.getPosition(this)
    }, a.setPosition = function(a, b) {
      return this.ai.setPosition(this, a, b)
    }, a.setEffect = function(a) {
      return this.ai.setEffect(this, a)
    }, a.killEffect = function() {
      return this.ai.killEffect(this)
    }, a.inputEnabled = !0, a.input.useHandCursor = !0, a.events.onInputDown.add(function(a) {
      this.game.effects.showInfos(a)
    }, this), a.getDataObject = function() {
      return {
        id: this.id,
        perception: this.perception,
        strength: this.strength,
        xp: this.xp,
        damageType: this.damageType,
        type: this.type,
        health: this.health,
        maxhealth: this.maxhealth,
        alerted: this.alerted,
        cooldown: this.cooldown,
        burning: this.burning,
        frozen: this.frozen,
        shield: this.shield,
        shielded: this.shielded,
        invisible: this.invisible,
        accelerated: this.accelerated,
        supercharged: this.supercharged
      }
    }, this.count++, this.setPosition(a, d, e, !0), a
  },
  setTypeAttributes: function(a, c) {
    var b = this.game.difficulty;
    switch (c) {
      case "rat":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 2, a.perception = 4 + (2 > b ? 0 : 1), a.strength = 1 + (2 > b ? 0 : 1), a.maxhealth = 1, a.xp = 1, a.damageType = "physical", a.firstAction = null, a.performAction = this.meleeAI, a.meleeAnimation = this.game.effects.scratch, a.playWalkingSound = this.game.audioplayer.playRatWalk, a.playAttackSound = this.game.audioplayer.playRatAttack, a.playDieSound = this.game.audioplayer.playRatDies, a.playSpotSound = this.game.audioplayer.playRatDies;
        break;
      case "sewerRat":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 2, a.perception = 4 + (2 > b ? 0 : 1), a.strength = 1 + (2 > b ? 0 : 1), a.maxhealth = 2, a.xp = 2, a.damageType = "physical", a.firstAction = null, a.performAction = this.meleeAI, a.meleeAnimation = this.game.effects.scratch, a.playWalkingSound = this.game.audioplayer.playRatWalk, a.playAttackSound = this.game.audioplayer.playRatAttack, a.playDieSound = this.game.audioplayer.playRatDies, a.playSpotSound = this.game.audioplayer.playRatDies;
        break;
      case "cryptRat":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 3, a.perception = 4 + (2 > b ? 0 : 1), a.strength = 2 + (2 > b ? 0 : 2), a.maxhealth = 2, a.xp = 3, a.damageType = "physical", a.firstAction = function() {
          this.callHelp(3, "cryptRat")
        }, a.performAction = this.meleeAI, a.meleeAnimation = this.game.effects.scratch, a.playWalkingSound = this.game.audioplayer.playRatWalk, a.playAttackSound = this.game.audioplayer.playRatAttack, a.playDieSound = this.game.audioplayer.playRatDies, a.playSpotSound = this.game.audioplayer.playRatDies;
        break;
      case "slime":
        a.shadow.frame += 1, a.shadow.off = -4, a.speed = 1, a.perception = 3 + (2 > b ? 0 : 1), a.strength = 1 + (2 > b ? 0 : 1), a.maxhealth = 4, a.xp = 2, a.damageType = "physical", a.firstAction = null, a.performAction = this.meleeAI, a.meleeAnimation = this.game.effects.greenBlob, a.playWalkingSound = this.game.audioplayer.playSlimeWalk, a.playAttackSound = this.game.audioplayer.playSlimeAttack, a.playDieSound = this.game.audioplayer.playSlimeDies, a.playSpotSound = this.game.audioplayer.playSlimeAlert;
        break;
      case "purpleSlime":
        a.shadow.frame += 1, a.shadow.off = -4, a.speed = 1, a.perception = 3 + (2 > b ? 0 : 1), a.strength = 1 + (2 > b ? 0 : 1), a.maxhealth = 6, a.xp = 3, a.damageType = "physical", a.firstAction = null, a.performAction = this.meleeAI, a.meleeAnimation = this.game.effects.purpleBlob, a.playWalkingSound = this.game.audioplayer.playSlimeWalk, a.playAttackSound = this.game.audioplayer.playSlimeAttack, a.playDieSound = this.game.audioplayer.playSlimeDies, a.playSpotSound = this.game.audioplayer.playSlimeAlert;
        break;
      case "spider":
        a.shadow.visible = !1, a.speed = 2, a.perception = 3 + (2 > b ? 0 : 1), a.strength = 1 + (2 > b ? 0 : 1), a.maxhealth = 4, a.xp = 2, a.damageType = "physical", a.firstAction = null, a.performAction = this.meleeAI, a.meleeAnimation = this.game.effects.scratch, a.playWalkingSound = this.game.audioplayer.playScorpionWalk, a.playAttackSound = this.game.audioplayer.playSpiderAttack, a.playDieSound = this.game.audioplayer.playSpiderDies, a.playSpotSound = this.game.audioplayer.playSpiderAlert;
        break;
      case "spiderQueen":
        a.shadow.visible = !1, a.speed = 2, a.perception = 5 + (2 > b ? 0 : 1), a.strength = 2 + (2 > b ? 0 : 2), a.maxhealth = 6, a.xp = 4, a.damageType = "physical", a.firstAction = null, a.performAction = this.meleeAI, a.meleeAnimation = this.game.effects.scratch, a.playWalkingSound = this.game.audioplayer.playScorpionWalk, a.playAttackSound = this.game.audioplayer.playSpiderAttack, a.playDieSound = this.game.audioplayer.playSpiderDies, a.playSpotSound = this.game.audioplayer.playSpiderAlert;
        break;
      case "skeleton":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 2, a.perception = 4 + (2 > b ? 0 : 1), a.strength = 2 + (2 > b ? 0 : 1), a.maxhealth = 5, a.xp = 3, a.damageType = "physical", a.firstAction = function() {
          this.callHelp(3, "skeleton")
        }, a.performAction = this.meleeAI, a.meleeAnimation = this.game.effects.scratch, a.playWalkingSound = this.game.audioplayer.playSkeletonWalk, a.playAttackSound = this.game.audioplayer.playSkeletonAttack, a.playDieSound = this.game.audioplayer.playSkeletonDies, a.playSpotSound = this.game.audioplayer.playSkeletonAlert;
        break;
      case "skeletonWarrior":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 2, a.perception = 4 + (2 > b ? 0 : 1), a.strength = 2 + (2 > b ? 0 : 2), a.maxhealth = 7 + (1 > b ? -1 : 0), a.xp = 5, a.damageType = "physical", a.firstAction = function() {
          this.callHelp(3, "skeleton")
        }, a.performAction = this.meleeAI, a.meleeAnimation = this.game.effects.strike, a.playWalkingSound = this.game.audioplayer.playSkeletonWalk, a.playAttackSound = this.game.audioplayer.playSkeletonWarriorAttack, a.playDieSound = this.game.audioplayer.playSkeletonDies, a.playSpotSound = this.game.audioplayer.playSkeletonAlert;
        break;
      case "skeletonArcher":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 2, a.perception = 4 + (2 > b ? 0 : 1), a.strength = 1 + (2 > b ? 0 : 1), a.maxhealth = 5, a.xp = 5, a.damageType = "physical", a.firstAction = function() {
          this.callHelp(3, "skeleton")
        }, a.performAction = function() {
          this.rangedAI("normalArrow")
        }, a.meleeAnimation = this.game.effects.strike, a.playWalkingSound = this.game.audioplayer.playSkeletonWalk, a.playAttackSound = this.game.audioplayer.playSkeletonAttack, a.playDieSound = this.game.audioplayer.playSkeletonDies, a.playSpotSound = this.game.audioplayer.playSkeletonAlert;
        break;
      case "vampire":
        a.shadow.visible = !1, a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 3, a.perception = 6 + (2 > b ? 0 : 1), a.strength = 1 + (2 > b ? 0 : 1), a.maxhealth = 6, a.xp = 7, a.damageType = "physical", a.buff = "invisibility", a.firstAction = null, a.performAction = function() {
          this.meleeAI(10)
        }, a.meleeAnimation = this.game.effects.scratch, a.playWalkingSound = this.game.audioplayer.playDjinWalk, a.playAttackSound = this.game.audioplayer.playVampireAttack, a.playDieSound = this.game.audioplayer.playVampireDies, a.playSpotSound = this.game.audioplayer.playVampireAlert;
        break;
      case "necromancer":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 2, a.perception = 6 + (2 > b ? 0 : 1), a.strength = 1 + (2 > b ? 0 : 1), a.maxhealth = 6 + (1 > b ? -2 : 0), a.xp = 7, a.damageType = "physical", a.firstAction = null, a.performAction = function() {
          this.summonerAI("skeleton", "magicMissile", 9 + (1 > b ? 1 : 2 > b ? 0 : -1))
        }, a.meleeAnimation = this.game.effects.scratch, a.playWalkingSound = this.game.audioplayer.playSkeletonWalk, a.playAttackSound = this.game.audioplayer.playNecromancerAttack, a.playDieSound = this.game.audioplayer.playSkeletonDies, a.playSpotSound = this.game.audioplayer.playSkeletonAlert;
        break;
      case "goblinScout":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 3, a.perception = 6 + (2 > b ? 0 : 1), a.strength = 1 + (2 > b ? 0 : 1), a.maxhealth = 3 + (2 > b ? 0 : 1), a.xp = 3, a.damageType = "physical", a.firstAction = function() {
          this.callHelp(4, "goblin")
        }, a.performAction = this.meleeAI, a.meleeAnimation = this.game.effects.strike, a.playWalkingSound = this.game.audioplayer.playGoblinWalk, a.playAttackSound = this.game.audioplayer.playGoblinAttack, a.playDieSound = this.game.audioplayer.playGoblinDies, a.playSpotSound = this.game.audioplayer.playGoblinAlert;
        break;
      case "goblinWarrior":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 3, a.perception = 5 + (2 > b ? 0 : 1), a.strength = 2 + (2 > b ? 0 : 2), a.maxhealth = 5 + (2 > b ? 0 : 1), a.xp = 4, a.damageType = "physical", a.firstAction = function() {
          this.callHelp(4, "goblin")
        }, a.performAction = this.meleeAI, a.meleeAnimation = this.game.effects.strike, a.playWalkingSound = this.game.audioplayer.playGoblinWalk, a.playAttackSound = this.game.audioplayer.playGoblinAttack, a.playDieSound = this.game.audioplayer.playGoblinDies, a.playSpotSound = this.game.audioplayer.playGoblinAlert;
        break;
      case "goblinMage":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 3, a.perception = 5 + (2 > b ? 0 : 1), a.strength = 1 + (2 > b ? 0 : 1), a.maxhealth = 3 + (2 > b ? 0 : 2), a.xp = 5, a.damageType = "physical", a.firstAction = function() {
          this.callHelp(4, "goblin")
        }, a.performAction = function() {
          this.rangedAI("magicMissile")
        }, a.meleeAnimation = this.game.effects.scratch, a.playWalkingSound = this.game.audioplayer.playGoblinWalk, a.playAttackSound = this.game.audioplayer.playGoblinMageAttack, a.playDieSound = this.game.audioplayer.playGoblinDies, a.playSpotSound = this.game.audioplayer.playGoblinAlert;
        break;
      case "stoneGolem":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 1, a.perception = 4 + (2 > b ? 0 : 1), a.strength = 2 + (2 > b ? 0 : 2), a.maxhealth = 8 + (1 > b ? -2 : 0), a.xp = 6, a.damageType = "physical", a.firstAction = function() {
          this.callHelp(4, "goblin")
        }, a.performAction = this.meleeAI, a.meleeAnimation = this.game.effects.explodingStone, a.playWalkingSound = this.game.audioplayer.playGolemWalk, a.playAttackSound = this.game.audioplayer.playGolemAttack, a.playDieSound = this.game.audioplayer.playGolemDies, a.playSpotSound = this.game.audioplayer.playGolemAlert;
        break;
      case "lavaGolem":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 1, a.perception = 5 + (2 > b ? 0 : 1), a.strength = 2 + (2 > b ? 0 : 2), a.maxhealth = 12 + (2 > b ? 1 > b ? -4 : 0 : 2), a.xp = 8, a.damageType = "physical", a.firstAction = function() {
          this.callHelp(4, "goblin")
        }, a.performAction = this.meleeAI, a.meleeAnimation = this.game.effects.explodingStone, a.playWalkingSound = this.game.audioplayer.playGolemWalk, a.playAttackSound = this.game.audioplayer.playGolemAttack, a.playDieSound = this.game.audioplayer.playGolemDies, a.playSpotSound = this.game.audioplayer.playGolemAlert;
        break;
      case "drowScout":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 2, a.perception = 5 + (2 > b ? 0 : 1), a.strength = 2 + (2 > b ? 0 : 2), a.maxhealth = 6, a.xp = 5, a.damageType = "physical", a.buff = "acceleration", a.firstAction = function() {
          this.callHelp(4, "drow")
        }, a.performAction = function() {
          this.meleeAI(7)
        }, a.meleeAnimation = this.game.effects.strike, a.playWalkingSound = this.game.audioplayer.playGoblinWalk, a.playAttackSound = this.game.audioplayer.playDrowAttack, a.playDieSound = this.game.audioplayer.playDrowDies, a.playSpotSound = this.game.audioplayer.playDrowAlert;
        break;
      case "drowArcher":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 2, a.perception = 5 + (2 > b ? 0 : 1), a.strength = 2 + (2 > b ? 0 : 2), a.maxhealth = 6, a.xp = 5, a.damageType = "physical", a.firstAction = function() {
          this.callHelp(4, "drow")
        }, a.performAction = function() {
          this.rangedAI("normalArrow")
        }, a.meleeAnimation = this.game.effects.strike, a.playWalkingSound = this.game.audioplayer.playGoblinWalk, a.playAttackSound = this.game.audioplayer.playDrowAttack, a.playDieSound = this.game.audioplayer.playDrowDies, a.playSpotSound = this.game.audioplayer.playDrowAlert;
        break;
      case "drowMage":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 2, a.perception = 5 + (2 > b ? 0 : 1), a.strength = 2 + (2 > b ? 0 : 2), a.maxhealth = 6, a.xp = 7, a.damageType = "physical", a.firstAction = function() {
          this.callHelp(4, "drow")
        }, a.performAction = function() {
          this.summonerAI("spider", "magicMissile", 8 + (1 > b ? 1 : 2 > b ? 0 : -1))
        }, a.meleeAnimation = this.game.effects.strike, a.playWalkingSound = this.game.audioplayer.playGoblinWalk, a.playAttackSound = this.game.audioplayer.playDrowMageAttack, a.playDieSound = this.game.audioplayer.playDrowDies, a.playSpotSound = this.game.audioplayer.playDrowAlert;
        break;
      case "drowAssassin":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 3, a.perception = 5 + (2 > b ? 0 : 1), a.strength = 3 + (2 > b ? 0 : 2), a.maxhealth = 8 + (2 > b ? 1 > b ? -2 : 0 : 2), a.xp = 13, a.damageType = "physical", a.firstAction = function() {
          this.callHelp(4, "drow")
        }, a.performAction = this.meleeAI, a.meleeAnimation = this.game.effects.strike, a.playWalkingSound = this.game.audioplayer.playGoblinWalk, a.playAttackSound = this.game.audioplayer.playDrowAttack, a.playDieSound = this.game.audioplayer.playDrowDies, a.playSpotSound = this.game.audioplayer.playDrowAlert;
        break;
      case "drowQueen":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 2, a.perception = 6 + (2 > b ? 0 : 1), a.strength = 2 + (2 > b ? 0 : 2), a.maxhealth = 10 + (2 > b ? 1 > b ? -2 : 0 : 2), a.xp = 13, a.damageType = "physical", a.firstAction = function() {
          this.callHelp(4, "drow")
        }, a.performAction = function() {
          this.summonerAI("spiderQueen", "magicMissile", 8 + (1 > b ? 1 : 2 > b ? 0 : -1))
        }, a.meleeAnimation = this.game.effects.strike, a.playWalkingSound = this.game.audioplayer.playGoblinWalk, a.playAttackSound = this.game.audioplayer.playDrowQueenAttack, a.playDieSound = this.game.audioplayer.playDrowQueenDies, a.playSpotSound = this.game.audioplayer.playDrowQueenAlert;
        break;
      case "mummy":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 1, a.perception = 6 + (2 > b ? 0 : 1), a.strength = 2 + (2 > b ? 0 : 2), a.maxhealth = 8 + (2 > b ? 1 > b ? -2 : 0 : 2), a.xp = 7, a.damageType = "physical", a.firstAction = null, a.performAction = this.meleeAI, a.meleeAnimation = this.game.effects.splode, a.playWalkingSound = this.game.audioplayer.playMummyWalk, a.playAttackSound = this.game.audioplayer.playMummyAttack, a.playDieSound = this.game.audioplayer.playMummyDies, a.playSpotSound = this.game.audioplayer.playMummyAlert;
        break;
      case "mummyQueen":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 2, a.perception = 6 + (2 > b ? 0 : 1), a.strength = 2 + (2 > b ? 0 : 4), a.maxhealth = 9 + (2 > b ? 1 > b ? -2 : 0 : 2), a.xp = 13, a.damageType = "physical", a.buff = "superCharge", a.firstAction = null, a.performAction = function() {
          this.rangedAI("magicMissile", 5 + (1 > b ? 1 : 2 > b ? 0 : -1))
        }, a.meleeAnimation = this.game.effects.splode, a.playWalkingSound = this.game.audioplayer.playMummyWalk, a.playAttackSound = this.game.audioplayer.playMummyQueenAttack, a.playDieSound = this.game.audioplayer.playMummyQueenDies, a.playSpotSound = this.game.audioplayer.playMummyAlert;
        break;
      case "windling":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 2, a.perception = 6 + (2 > b ? 0 : 1), a.strength = 4 + (2 > b ? 1 > b ? -2 : 0 : 2), a.maxhealth = 6 + (1 > b ? -2 : 0), a.xp = 4, a.damageType = "physical", a.firstAction = null, a.performAction = this.meleeAI, a.meleeAnimation = this.game.effects.blueBall, a.playWalkingSound = this.game.audioplayer.playDjinWalk, a.playAttackSound = this.game.audioplayer.playWindlingAttack, a.playDieSound = this.game.audioplayer.playWindlingDies, a.playSpotSound = this.game.audioplayer.playWindlingAlert;
        break;
      case "djinn":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 3, a.perception = 6 + (2 > b ? 0 : 1), a.strength = 2 + (2 > b ? 0 : 2), a.maxhealth = 10 + (2 > b ? 1 > b ? -2 : 0 : 2), a.xp = 9, a.damageType = "physical", a.firstAction = null, a.performAction = function() {
          this.summonerAI("windling", "magicMissile", 8 + (1 > b ? 1 : 2 > b ? 0 : -1))
        }, a.meleeAnimation = this.game.effects.scratch, a.playWalkingSound = this.game.audioplayer.playDjinWalk, a.playAttackSound = this.game.audioplayer.playDjinAttack, a.playDieSound = this.game.audioplayer.playDjinDies, a.playSpotSound = this.game.audioplayer.playDjinAlert;
        break;
      case "scorpion":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 2, a.perception = 5 + (2 > b ? 0 : 1), a.strength = 4 + (2 > b ? 1 > b ? -2 : 0 : 2), a.maxhealth = 8 + (1 > b ? -2 : 0), a.xp = 6, a.damageType = "physical", a.firstAction = null, a.performAction = this.meleeAI, a.meleeAnimation = this.game.effects.crossCut, a.playWalkingSound = this.game.audioplayer.playScorpionWalk, a.playAttackSound = this.game.audioplayer.playSpiderAttack, a.playDieSound = this.game.audioplayer.playSpiderDies, a.playSpotSound = this.game.audioplayer.playSpiderAlert;
        break;
      case "redDemon":
        a.scale.x *= 1 - 2 * Math.round(Math.random()), a.speed = 2, a.perception = 6 + (2 > b ? 0 : 1), a.strength = 2 + (2 > b ? 0 : 4), a.maxhealth = 14 + (2 > b ? 1 > b ? -2 : 0 : 2), a.xp = 23, a.damageType = "physical", a.firstAction = null, a.performAction = function() {
          this.summonerAI("scorpion", "fireBall", 8 + (1 > b ? 1 : 2 > b ? 0 : -1))
        }, a.meleeAnimation = this.game.effects.scratch, a.playWalkingSound = this.game.audioplayer.playDemonWalk, a.playAttackSound = this.game.audioplayer.playDemonAttack, a.playDieSound = this.game.audioplayer.playDemonDies, a.playSpotSound = this.game.audioplayer.playDemonAlert
    }
    return a
  },
  getPosition: function(a) {
    return this.game.getPosition(a || this.currentEnemy)
  },
  setPosition: function(a, b, c, e) {
    if (!e) {
      var d = this.getPosition(a);
      this.game.levelManager.charMap[d.y][d.x] = null
    }
    this.game.setPosition(a, b, c), this.game.levelManager.charMap[c][b] = a
  },
  setEffect: function(b, c) {
    this.killEffect(b), b.effect = this.game.layers.chars.create(b.x, b.y + 2, "64bitSprites"), b.effect.anchor.setTo(.5, .5);
    var a = 0;
    switch (c) {
      case "frozen":
        a = Main.spriteOffset.iceBlock;
        break;
      case "burning":
        a = Main.spriteOffset.fireBlock
    }
    b.effect.animations.add("animation", [a, a + 1, a, a + 1, a, a + 1, a, a + 1, a, a + 1]), b.effect.animations.play("animation", 4, !0), b.animations.stop()
  },
  killEffect: function(a) {
    if (a = a ? a : this.activeEnemy, null != a.effect) {
      var b = this.game.add.tween(a.effect);
      b.onComplete.add(function() {
        a.effect.kill(), a.effect = null
      }, this), b.to({
        alpha: 0
      }, 2e3, Phaser.Easing.Linear.None, !0)
    }
  },
  makeInvisible: function(a) {
    a.visible = !1, a.inputEnabled = !1, a.input.useHandCursor = !1, a.shadow && (a.shadow.visible = !1)
  },
  makeVisible: function(a, b, c) {
    a.visible = !0, a.inputEnabled = !0, a.input.useHandCursor = !0, a.invisible = 0, a.shadow && (a.shadow.visible = !0), this.game.effects.poof(a.x, a.y, b, c)
  },
  hurt: function(a, b, c) {
    this.game.log.logData("Damage Enemy", [a.getDataObject(), b]), a.alerted = !0, a.shield > 0 && "bloodMagic" != c ? (this.game.effects.shield(a.x, a.y), a.shield--, 0 == a.shield && (a.shielded = 0)) : ((b > 0 || "lifeDrain" == c) && (a.health -= b, this.game.effects.healthLoss(a.x, a.y, a, b)), a.health < 1 && this.kill(a))
  },
  kill: function(a, d) {
    d !== !0 && ("function" == typeof this.onKill && this.onKill.call(this.onKill.context, a), this.game.log.logData("Enemy Killed", a.getDataObject()), this.game.effects.particleBurst(a.x, a.y, a.xp), this.game.player.increaseXP(a.xp)), null !== a.playDieSound && a.playDieSound.call(this.game.audioplayer);
    var b = this.getPosition(a);
    if (null == this.ashPiles[b.x + "/" + b.y]) {
      var c = 1274 + Math.floor(3 * Math.random());
      this.ashPiles[b.x + "/" + b.y] = this.game.layers.background.create(a.x - this.tilesize / 2, a.y - this.tilesize / 2 - a.off / 2, "tileset", c)
    } else {
      if (1275 == this.ashPiles[b.x + "/" + b.y].frame) var c = 1274;
      else var c = 1276;
      this.ashPiles[b.x + "/" + b.y].destroy(), this.ashPiles[b.x + "/" + b.y] = this.game.layers.background.create(a.x - this.tilesize / 2, a.y - this.tilesize / 2 - a.off / 2, "tileset", c)
    }
    this.game.isPlayersTurn && this.pointer > -1 && this.pointer--, this.removeEnemy(a)
  },
  removeEnemy: function(a) {
    var b = this.getPosition(a);
    this.game.levelManager.charMap[b.y][b.x] = null, this.killEffect(a), a.destroy(), a.shadow.destroy(), a.indicator.destroy(), this.count--
  },
  removeAll: function() {
    for (; this.group.length > 0;) this.group.getAt(0).destroy();
    this.count = 0
  },
  updateDistance: function() {
    this.group.forEach(this.updateEnemyDistance, this), this.group.sort("distance")
  },
  updateEnemyDistance: function(a) {
    a.distance = this.game.pathfinder.findPath(this.getPosition(a), this.game.player.getPosition(), !0).length, 0 === a.distance && (a.distance = 100 + Math.ceil(this.game.physics.arcade.distanceBetween(a, this.game.player.sprite) / this.tilesize))
  },
  pacifyAll: function() {
    this.group.setAll("alerted", !1)
  },
  performTurn: function() {
    if (this.indicator.alpha = 0, null != this.activeEnemy && null != this.activeEnemy.indicator && (this.activeEnemy.indicator.visible = !1), -1 == this.pointer && this.updateDistance(), this.pointer++, this.pointer < this.count) {
      this.activeEnemy = this.group.getAt(this.pointer), this.updateIndicator(this.activeEnemy);
      var a = {
        shielded: !1,
        supercharged: !1,
        accelerated: !1,
        burning: !1,
        frozen: !1,
        anything: !1
      };
      if (this.activeEnemy.cooldown > 0 && this.activeEnemy.cooldown--, this.activeEnemy.shielded > 0 && (this.activeEnemy.shielded--, a.shielded = !0, a.anything = !0, 0 == this.activeEnemy.shielded && (this.activeEnemy.shield = 0)), this.activeEnemy.supercharged > 0 && (this.activeEnemy.supercharged > 0 && (a.supercharged = !0, a.anything = !0), this.activeEnemy.freeSpells = this.game.difficulty < 2 ? 1 : 2, this.activeEnemy.supercharged--, this.game.effects.superCharged(this.activeEnemy.x, this.activeEnemy.y - 16)), this.activeEnemy.accelerated > 0 && (this.activeEnemy.accelerated > 0 && (a.accelerated = !0, a.anything = !0), this.activeEnemy.accelerated--), this.activeEnemy.invisible > 0 && (this.activeEnemy.invisible--, 0 == this.activeEnemy.invisible && this.activeEnemy.makeVisible()), this.activeEnemy.burning > 0 ? (this.hurt(this.activeEnemy, 1, "none"), this.activeEnemy.burning--, a.burning = !0, a.anything = !0) : this.activeEnemy.frozen >= 0 && (this.activeEnemy.frozen--, this.activeEnemy.frozen > -1 && (a.frozen = !0, a.anything = !0)), this.game.player.sprite.invisible < 1 && this.activeEnemy.health > 0 && (this.activeEnemy.alerted || this.game.lineOfSight.isTargetVisible(this.game.player.sprite, this.activeEnemy) && this.game.physics.arcade.distanceBetween(this.activeEnemy, this.game.player.sprite) < (this.activeEnemy.perception + 1) * this.tilesize)) {
        "function" == typeof this.onAlert && this.onAlert.call(this.onAlert.context, this.activeEnemy), this.game.log.logData("Enemy Alerted", this.activeEnemy.getDataObject()), this.game.player.startIdle();
        var b = !1;
        this.activeEnemy.alerted || (this.activeEnemy.alerted = !0, this.activeEnemy.playSpotSound.call(this.game.audioplayer), b = !0), this.activeEnemy.lastActive = this.game.currentTurn, this.setActions(), a.anything ? this.game.effects.healthLoss(this.activeEnemy.x, this.activeEnemy.y, this.activeEnemy, 0, function() {
          this.game.enemies.nextAction(!0)
        }, !1, a) : b ? this.game.effects.alert(this.activeEnemy.x, this.activeEnemy.y, function() {
          this.game.enemies.nextAction(!0)
        }) : this.nextAction(!0)
      } else this.performTurn()
    } else this.waitingEnemies.length > 0 ? (this.pointer = this.count, this.activeEnemy = this.waitingEnemies.pop(), this.activeEnemy.alerted = !0, this.activeEnemy.lastActive = this.game.currentTurn, this.setActions(), this.nextAction()) : (this.pointer = -1, this.game.nextTurn())
  },
  setActions: function() {
    this.activeEnemy.frozen == this.game.spells.spellCollection.iceBreath.duration - 1 ? (this.actions = 0, this.killEffect()) : this.actions = this.activeEnemy.frozen > -1 ? 1 : this.activeEnemy.accelerated >= 0 ? this.activeEnemy.speed + (this.game.difficulty < 2 ? 1 : 2) : this.activeEnemy.speed
  },
  nextAction: function(a) {
    this.updateIndicator(this.activeEnemy), a && "function" == typeof this.activeEnemy.firstAction ? this.activeEnemy.firstAction.call(this) : this.actions > 0 ? this.activeEnemy.performAction.call(this) : (this.startIdle(), this.indicator.alpha = 0, this.performTurn())
  },
  startIdle: function(a) {
    a = this.activeEnemy || a, a.frozen == this.game.spells.spellCollection.iceBreath.duration - 1 ? a.animations.stop() : a.frozen > 0 ? a.animations.play("idle", 1, !0) : a.animations.play("idle", 2, !0)
  },
  meleeAI: function(f) {
    var d = this.getPosition(this.activeEnemy),
      c = this.game.player.getPosition();
    if (this.activeEnemy.buff && 0 == this.activeEnemy.cooldown && this.activeEnemy.health > 2) this.castBuff(f);
    else if (Math.abs(d.x - c.x) <= 1 && Math.abs(d.y - c.y) <= 1) this.hitPlayer();
    else if (null != this.activeEnemy.path && this.activeEnemy.path.length > 0) this.continueOnPath();
    else {
      var a = this.game.pathfinder.getReach(d, this.actions);
      a.push(d);
      for (var b = a.length; b--;) a[b].damage = Math.abs(a[b].x - c.x) <= 1 && Math.abs(a[b].y - c.y) <= 1 ? 1 : 0, a[b].distance = this.game.pathfinder.findPath(a[b], c, !0).length, a[b].safety = (a[b].x == c.x ? -1 : 1) + (a[b].y == c.y ? -1 : 1);
      if (a.sort(function(b, c) {
        var a = c.damage - b.damage;
        return 0 == a && (a = b.distance - c.distance), 0 == a && (a = c.safety - b.safety), a
      }), a.length < 1) this.actions = 0, this.nextAction(!1);
      else {
        var e = this.game.pathfinder.findPath(d, c).length;
        e > 0 && 2 * this.activeEnemy.speed >= e - 1 && this.game.player.cancelPath(!0), this.activeEnemy.path = this.game.pathfinder.findPath(d, a[0]), this.continueOnPath()
      }
    }
  },
  rangedAI: function(e, g) {
    var d = this.getPosition(this.activeEnemy),
      c = this.game.player.getPosition();
    if (this.activeEnemy.buff && 0 === this.activeEnemy.cooldown && this.activeEnemy.health > 2) this.castBuff(g);
    else if (!this.game.lineOfSight.isTargetVisible(this.game.player.sprite, this.activeEnemy, !0) || d.x != c.x && d.y != c.y)
      if (null != this.activeEnemy.path && this.activeEnemy.path.length > 0) this.continueOnPath();
      else {
        var a = this.game.pathfinder.getReach(d, this.actions);
        a.push(d);
        for (var b = a.length; b--;) a[b].damage = !this.game.lineOfSight.isTargetVisible(this.game.player.sprite, a[b], !0) || a[b].x != c.x && a[b].y != c.y ? 0 : 1, a[b].distance = this.game.pathfinder.findPath(a[b], c, !0).length, a[b].safety = (a[b].x == c.x ? -1 : 1) + (a[b].y == c.y ? -1 : 1);
        if (a.sort(function(b, c) {
          var a = c.damage - b.damage;
          return 0 == a && (a = b.distance - c.distance), 0 == a && (a = c.safety - b.safety), a
        }), a.length < 1) this.actions = 0, this.nextAction(!1);
        else {
          var f = this.game.pathfinder.findPath(d, c).length;
          f > 0 && 2 * this.activeEnemy.speed >= f - 1 && this.game.player.cancelPath(!0), this.activeEnemy.path = this.game.pathfinder.findPath(d, a[0]), this.continueOnPath()
        }
      } else this.castProjectile(e), "normalArrow" != e && this.activeEnemy.playAttackSound.call(this.game.audioplayer)
  },
  summonerAI: function(g, e, h) {
    var d = this.getPosition(this.activeEnemy),
      c = this.game.player.getPosition();
    if (this.activeEnemy.cooldown < 1) this.summonEnemy(g, h), this.activeEnemy.playAttackSound.call(this.game.audioplayer);
    else if (!this.game.lineOfSight.isTargetVisible(this.game.player.sprite, this.activeEnemy, !0) || d.x != c.x && d.y != c.y)
      if (null != this.activeEnemy.path && this.activeEnemy.path.length > 0) this.continueOnPath();
      else {
        var a = this.game.pathfinder.getReach(d, this.actions);
        a.push(d);
        for (var b = a.length; b--;) a[b].damage = !this.game.lineOfSight.isTargetVisible(this.game.player.sprite, a[b], !0) || a[b].x != c.x && a[b].y != c.y ? 0 : 1, a[b].distance = this.game.pathfinder.findPath(a[b], c, !0).length, a[b].safety = (a[b].x == c.x ? -1 : 1) + (a[b].y == c.y ? -1 : 1);
        if (a.sort(function(b, c) {
          var a = c.damage - b.damage;
          return 0 == a && (a = b.distance - c.distance), 0 == a && (a = c.safety - b.safety), a
        }), a.length < 1) this.actions = 0, this.nextAction(!1);
        else {
          var f = this.game.pathfinder.findPath(d, c).length;
          f > 0 && 2 * this.activeEnemy.speed >= f - 1 && this.game.player.cancelPath(!0), this.activeEnemy.path = this.game.pathfinder.findPath(d, a[0]), this.continueOnPath()
        }
      } else this.castProjectile(null != e ? e : "magicMissile"), this.activeEnemy.playAttackSound.call(this.game.audioplayer)
  },
  continueOnPath: function(a, d, b, e) {
    a = a || this.activeEnemy;
    var c = a.path.pop();
    null == c ? (a.path = null, d ? (a.animations.play("idle", 2, !0), "function" == typeof b && b.call(e)) : (this.actions = 0, this.nextAction(!1))) : this.game.level.isTileFree(c.x, c.y, !0) ? d ? this.walkToTile(a, c, !0, function() {
      this.continueOnPath(a, !0, b, e)
    }, this) : (this.actions--, this.walkToTile(a, c, !1)) : (a.path = null, d ? (a.animations.play("idle", 2, !0), "function" == typeof b && b.call(e)) : this.nextAction(!1))
  },
  walkToTile: function(a, c, g, d, h) {
    var e = this.getPosition(a);
    this.game.levelManager.charMap[e.y][e.x] = null, this.game.levelManager.charMap[c.y][c.x] = a;
    var f = 400 / a.speed * (a.frozen > -1 ? 4 : 1);
    this.target = this.game.posToCoord(c);
    var b = this.game.add.tween(a);
    b.onStart.add(function() {
      this.startWalk(a)
    }, this), g ? "function" == typeof d && b.onComplete.add(d, h) : (b.onUpdateCallback(function() {
      this.updateIndicator(a)
    }.bind(this)), b.onComplete.add(function() {
      this.nextAction(!1)
    }, this)), b.to({
      x: this.target.x,
      y: this.target.y + a.off
    }, f, Phaser.Easing.Linear.None, !0), b = this.game.add.tween(a.shadow), b.to({
      x: this.target.x,
      y: this.target.y + a.shadow.off
    }, f, Phaser.Easing.Linear.None, !0)
  },
  startWalk: function(a) {
    a.playWalkingSound.call(this.game.audioplayer);
    var b = this.target;
    b.x > a.x && (a.scale.x = -1, a.animations.play("walk", 8, !0)), b.x < a.x && (a.scale.x = 1, a.animations.play("walk", 8, !0)), b.y > a.y && a.animations.play("walk", 8, !0), b.y < a.y && a.animations.play("walkup", 8, !0), this.updateIndicator(a)
  },
  hitPlayer: function() {
    this.activeEnemy.invisible > 0 && this.activeEnemy.makeVisible(), this.activeEnemy.x < this.game.player.sprite.x ? this.activeEnemy.scale.x > 0 && (this.activeEnemy.scale.x *= -1) : this.activeEnemy.x > this.game.player.sprite.x && this.activeEnemy.scale.x < 0 && (this.activeEnemy.scale.x *= -1), this.activeEnemy.events.onAnimationComplete.addOnce(function() {
      this.activeEnemy.meleeAnimation.call(this.game.effects, this.game.player.sprite.x, this.game.player.sprite.y, function() {
        this.game.enemies.nextAction(!1)
      }), this.game.player.hurt(this.activeEnemy.strength, this.activeEnemy.damageType)
    }, this), this.activeEnemy.animations.play("attack", 16, !1), null !== this.activeEnemy.playAttackSound && this.activeEnemy.playAttackSound.call(this.game.audioplayer), 0 === this.activeEnemy.id.indexOf("vampire") && this.activeEnemy.health < this.activeEnemy.maxhealth && this.game.player.sprite.shield < 1 && (this.activeEnemy.health += this.game.difficulty, this.game.effects.healthLoss(this.activeEnemy.x, this.activeEnemy.y, this.activeEnemy, 0)), this.actions = 0
  },
  castProjectile: function(b) {
    var a = 0;
    a = Math.abs(this.activeEnemy.x - this.game.player.sprite.x) < 5 ? this.activeEnemy.y - this.game.player.sprite.y > 0 ? 0 : 4 : this.activeEnemy.x - this.game.player.sprite.x < 0 ? 2 : 6, this.game.spells.castSpell(this.activeEnemy, b, a), this.activeEnemy.freeSpells > 0 ? this.activeEnemy.freeSpells-- : this.actions = 0
  },
  castBuff: function(a) {
    this.activeEnemy.cooldown = a, this.game.spells.castSpell(this.activeEnemy, this.activeEnemy.buff, 0), "superCharge" == this.game.spells.activeSpell.id || this.activeEnemy.freeSpells > 0 ? this.activeEnemy.freeSpells-- : this.actions = "acceleration" == this.game.spells.activeSpell.id ? this.game.difficulty < 2 ? 1 : 2 : 0
  },
  callHelp: function(a, c) {
    var b = !1;
    this.group.forEach(function(d) {
      0 === d.id.indexOf(c) && d.alerted === !1 && this.game.physics.arcade.distanceBetween(d, this.activeEnemy) <= a * this.tilesize && this.game.pathfinder.findPath(this.getPosition(d), this.getPosition(this.activeEnemy), !0).length <= 2 * a && (d.alerted = !0, b = !0, this.game.enemies.group.getIndex(d) < this.game.enemies.pointer && d.lastActive != this.game.currentTurn && this.game.enemies.waitingEnemies.push(d))
    }, this), b ? this.game.effects.callHelp(this.activeEnemy.x, this.activeEnemy.y, function() {
      this.game.enemies.nextAction(!1)
    }) : this.game.enemies.nextAction(!1)
  },
  summonEnemy: function(a, b) {
    for (tiles = [], pos = this.activeEnemy.getPosition(), x = pos.x, y = pos.y, Math.abs(this.activeEnemy.x - this.game.player.sprite.x) < Math.abs(this.activeEnemy.y - this.game.player.sprite.y) ? this.activeEnemy.y - this.game.player.sprite.y > 0 ? (tiles.push({
      x: x,
      y: y - 1
    }), tiles.push({
      x: x,
      y: y - 2
    }), tiles.push({
      x: x - 1,
      y: y - 1
    }), tiles.push({
      x: x + 1,
      y: y - 1
    }), tiles.push({
      x: x - 1,
      y: y - 2
    }), tiles.push({
      x: x + 1,
      y: y - 2
    }), tiles.push({
      x: x + 1,
      y: y
    }), tiles.push({
      x: x + 2,
      y: y
    }), tiles.push({
      x: x - 1,
      y: y
    }), tiles.push({
      x: x - 2,
      y: y
    })) : (tiles.push({
      x: x,
      y: y + 1
    }), tiles.push({
      x: x,
      y: y + 2
    }), tiles.push({
      x: x - 1,
      y: y + 1
    }), tiles.push({
      x: x + 1,
      y: y + 1
    }), tiles.push({
      x: x - 1,
      y: y + 2
    }), tiles.push({
      x: x + 1,
      y: y + 2
    }), tiles.push({
      x: x + 1,
      y: y
    }), tiles.push({
      x: x + 2,
      y: y
    }), tiles.push({
      x: x - 1,
      y: y
    }), tiles.push({
      x: x - 2,
      y: y
    })) : this.activeEnemy.x - this.game.player.sprite.x < 0 ? (tiles.push({
      x: x + 1,
      y: y
    }), tiles.push({
      x: x + 2,
      y: y
    }), tiles.push({
      x: x + 1,
      y: y - 1
    }), tiles.push({
      x: x + 1,
      y: y + 1
    }), tiles.push({
      x: x + 2,
      y: y - 1
    }), tiles.push({
      x: x + 2,
      y: y + 1
    }), tiles.push({
      x: x,
      y: y + 1
    }), tiles.push({
      x: x,
      y: y + 2
    }), tiles.push({
      x: x,
      y: y - 1
    }), tiles.push({
      x: x,
      y: y - 2
    })) : (tiles.push({
      x: x - 1,
      y: y
    }), tiles.push({
      x: x - 2,
      y: y
    }), tiles.push({
      x: x - 1,
      y: y - 1
    }), tiles.push({
      x: x - 1,
      y: y + 1
    }), tiles.push({
      x: x - 2,
      y: y - 1
    }), tiles.push({
      x: x - 2,
      y: y + 1
    }), tiles.push({
      x: x,
      y: y + 1
    }), tiles.push({
      x: x,
      y: y + 2
    }), tiles.push({
      x: x,
      y: y - 1
    }), tiles.push({
      x: x,
      y: y - 2
    })), pathMap = this.game.levelManager.pathMap, charMap = this.game.levelManager.charMap, target = null, i = 0; null == target && i < tiles.length;) pathMap[tiles[i].y][tiles[i].x] && null == charMap[tiles[i].y][tiles[i].x] ? target = tiles[i] : i++;
    0 == tiles.length || null == target ? (this.activeEnemy.cooldown = 1, this.actions = 0, this.activeEnemy.nextAction()) : (this.actions = 0, this.activeEnemy.cooldown = b, this.game.spells.caster = this.activeEnemy, this.game.spells.summonEnemy(target.x, target.y, a))
  },
  updateIndicator: function(a) {
    void 0 !== a.indicator && (this.indicator.alpha = 1, a.indicator.visible = !0, a.y < this.game.camera.view.y + this.game.tilesize / this.game.hud.scale ? (this.indicator.rotation = 0, this.indicator.x = a.x - this.game.camera.view.x, this.indicator.y = this.game.tilesize / this.game.hud.scale + this.indicator.height / 2) : a.y > this.game.camera.view.y + this.game.camera.view.height ? (this.indicator.rotation = Math.PI, this.indicator.x = a.x - this.game.camera.view.x, this.indicator.y = this.game.camera.view.height - this.indicator.height / 2) : a.x < this.game.camera.view.x ? (this.indicator.rotation = Math.PI / 2 * 3, this.indicator.x = this.indicator.width / 2, this.indicator.y = a.y - this.game.camera.view.y) : a.x > this.game.camera.view.x + this.game.camera.view.width ? (this.indicator.rotation = Math.PI / 2, this.indicator.x = this.game.camera.view.width - this.indicator.width / 2, this.indicator.y = a.y - this.game.camera.view.y) : this.indicator.alpha > 0 && (this.indicator.alpha = 0, a.indicator.visible = !1), this.indicator.alpha > 0 && (this.indicator.x < this.indicator.width / 2 ? this.indicator.x = this.indicator.width / 2 : this.indicator.x > this.game.camera.view.width - this.indicator.width / 2 && (this.indicator.x = this.game.camera.view.width - this.indicator.width / 2), this.indicator.y < this.game.tilesize / this.game.hud.scale + this.indicator.width / 2 ? this.indicator.y = this.game.tilesize / this.game.hud.scale + this.indicator.width / 2 : this.indicator.y > this.game.camera.view.height - this.indicator.width / 2 && (this.indicator.y = this.game.camera.view.height - this.indicator.width / 2), a.indicator.x = this.indicator.x, a.indicator.y = this.indicator.y - 2))
  }
}, Main.Input = function(a) {
  this.game = a, this.tilesize = this.game.level.tilesize, this.pathMap = this.game.levelManager.pathMap, this.charMap = this.game.levelManager.charMap, this.scaleMod = this.game.mobile ? 2 : 1, this.create(), this.clickPosition = {
    x: 0,
    y: 0
  }, this.action = "none", this.active = !0
}, Main.Input.prototype = {
  create: function() {
    this.game.player.sprite.inputEnabled = !0, this.game.player.sprite.input.useHandCursor = !0, this.lastPosition = new Phaser.Point(0, 0), this.game.input.circle.diameter = this.tilesize + 4, this.game.input.holdRate = 150, this.game.input.onDown.add(this.handleInputDown, this), this.game.input.onUp.add(this.handleInputUp, this), this.game.input.onHold.add(this.handleInputHold, this), this.game.input.onTap.add(this.handleInputTap, this), this.buttonHandler = this.game.buttonHandler, this.buttons = this.buttonHandler.buttons, this.sticks = this.buttonHandler.sticks, this.spellTiles = this.game.layers.spellTiles, this.lastSpellTile = null, this.preparedSpell = null, this.pathTiles = this.game.layers.pathTiles, this.pathLimit = 20, this.pathTiles.createMultiple(this.pathLimit + 1, "tilemarkups", 7, !0), this.pathTiles.forEach(function(a) {
      a.anchor.setTo(.5, .5), a.visible = !1
    }, this), this.walkTiles = this.game.layers.walkTiles, this.walkTiles.createMultiple(4, "tilemarkups", 1, !0), this.walkTiles.forEach(function(a) {
      a.anchor.setTo(.5, .5), a.visible = !0, a.inputEnabled = !0, a.input.useHandCursor = !0, a.events.onInputDown.add(this.dragTile, this)
    }, this), this.walkTo = this.walkTiles.getAt(0), this.walkTo.label = this.game.addText(0, 0, "", {
      font: "32px " + this.game.font,
      fill: "white",
      align: "center"
    }, this.game.layers.infos), this.walkTo.label.setShadow(3, 3, "rgba(0,0,0,0.5)", 5), this.walkTo.label.stroke = "#000000", this.walkTo.label.strokeThickness = 2, this.walkTo.label.anchor.setTo(.5, 0), this.walkTo.label.visible = !1, this.active = !0
  },
  createDirectionTiles: function() {
    this.directionTiles = this.game.layers.spellTiles, this.directionTiles.createMultiple(4, "tilemarkups", 3, !0), this.directionTiles.forEach(function(a) {
      a.anchor.setTo(.5, .5), a.visible = !1, a.inputEnabled = !0, a.input.useHandCursor = !0, a.events.onInputUp.add(this.castSpell, this)
    }, this), this.directionTiles.create(0, 0, "tilemarkups", 2), this.directionTiles.getAt(4).anchor.setTo(.5, .5), this.directionTiles.getAt(4).visible = !1, this.directionTiles.getAt(4).inputEnabled = !0, this.directionTiles.getAt(4).input.useHandCursor = !0, this.directionTiles.getAt(4).events.onInputUp.add(this.cancelSpell, this)
  },
  stop: function() {
    this.action = "none", this.game.player.path.length = 0, this.hideWalkTiles(), this.hidePath(), this.game.spellbook.isOpen || this.game.helpScreen.isOpen || (this.active = !1)
  },
  start: function() {
    this.action = "none", this.showWalkTiles(), this.active = !0
  },
  getInputPosition: function() {
    return {
      x: Math.round(this.game.input.worldX / this.tilesize - .5),
      y: Math.round(this.game.input.worldY / this.tilesize - .5)
    }
  },
  dragTile: function() {
    this.action = "pathfinding", this.hideWalkTiles(!0), this.showPath()
  },
  inputOverPlayer: function() {
    return this.inputOverObject(this.game.player.sprite)
  },
  inputOverObject: function(a) {
    if (void 0 === a || null === a) return !1;
    var b = (a.x - a.width * (a.anchor.x - .5) - this.game.input.worldX) * (a.x - a.width * (a.anchor.x - .5) - this.game.input.worldX),
      c = (a.y - a.height * (a.anchor.y - .5) - this.game.input.worldY) * (a.y - a.height * (a.anchor.y - .5) - this.game.input.worldY);
    return b + c <= this.game.input.circle.radius * this.game.input.circle.radius
  },
  handleInputTap: function(b, a) {
    if (!("waiting" == this.action || !this.active || this.game.input.y <= this.game.hud.height || this.game.spellbook.isOpen || this.game.ingame.isOpen || this.game.helpScreen.isOpen)) {
      if (!this.game.isPlayersTurn()) return void(void 0 !== this.game.cinematics && this.game.cinematics.skip !== !0 && this.game.cinematics.cinematics.length > 0 && this.game.cinematics.skipCinematics());
      this.inputOverPlayer() && (a ? this.skipTurn() : this.game.player.centerOnPlayer()), void 0 !== this.game.cinematics && this.game.cinematics.skip !== !0 && this.game.cinematics.cinematics.length > 0 && this.game.cinematics.skipCinematics()
    }
  },
  handleInputDown: function() {
    return this.game.player.path.length > 0 ? (this.game.log.logData("Cancel walk", this.game.player.getPosition()), this.hidePath(), void(this.game.player.path.length = 0)) : void(!this.game.isPlayersTurn() || "waiting" == this.action || !this.active || this.game.input.y <= this.game.hud.height || this.game.spellbook.isOpen || this.game.ingame.isOpen || this.game.helpScreen.isOpen || !this.game.player.walking && this.inputOverPlayer() && this.startSpellcasting())
  },
  handleInputHold: function() {
    !this.game.isPlayersTurn() || "waiting" == this.action || !this.active || this.game.input.y <= this.game.hud.height || this.game.spellbook.isOpen || this.game.ingame.isOpen || this.game.helpScreen.isOpen || ("spellcasting" == this.action ? this.showSpellTiles() : "pathfinding" == this.action ? this.hideSpellTiles() : this.inputOverPlayer() || (this.startDragging(), this.lastPosition.copyFrom(this.game.input.activePointer)))
  },
  handleInputUp: function() {
    if (this.game.isPlayersTurn() && "waiting" != this.action && this.active)
      if (this.game.spellbook.isOpen && this.game.input.y > this.game.hud.height) {
        var c = 138 / this.scaleMod,
          d = 166 / this.scaleMod,
          e = 830 / this.scaleMod,
          f = 619 / this.scaleMod;
        if (this.game.input.x < c || this.game.input.y < d || this.game.input.x > e || this.game.input.y > f) {
          for (var g = this.game.input.activePointer, b = this.game.spellbook.ribbons.length, a = !1; b--;) a === !1 && this.game.spellbook.ribbons[b].input.checkPointerOver(g) && (a = !0);
          a || this.game.spellbook.close()
        }
      } else if (this.game.ingame.isOpen && this.game.input.y > this.game.hud.height) {
      var c = 283 / this.scaleMod,
        d = 202 / this.scaleMod,
        e = 673 / this.scaleMod,
        f = 567 / this.scaleMod;
      (this.game.input.x < c || this.game.input.y < d || this.game.input.x > e || this.game.input.y > f) && this.game.ingame.close()
    } else if (this.game.helpScreen.isOpen && this.game.input.y > this.game.hud.height) {
      var c = 138 / this.scaleMod,
        d = 166 / this.scaleMod,
        e = 830 / this.scaleMod,
        f = 619 / this.scaleMod;
      if (this.game.input.x < c || this.game.input.y < d || this.game.input.x > e || this.game.input.y > f) {
        for (var g = this.game.input.activePointer, b = this.game.helpScreen.ribbons.length, a = !1; b--;) a === !1 && this.game.helpScreen.ribbons[b].input.checkPointerOver(g) && (a = !0);
        a || this.game.helpScreen.close()
      }
    } else "spellcasting" == this.action ? this.stopSpellcasting() : "pathfinding" == this.action && (this.action = "none", this.inputOverPlayer() ? (this.hidePath(), this.showWalkTiles()) : this.walkTo.valid ? (this.startWalk(), this.game.player.path.length > 0 && (null == this.game.game.drag && (this.game.game.drag = 0), this.game.game.drag++)) : (this.hidePath(), this.showWalkTiles(), this.action = "none"))
  },
  handleButtonInput: function() {
    return this.buttonHandler.update() && "waiting" != this.action && this.active ? this.game.isPlayersTurn() || !this.buttons.activate && !this.buttons.back ? void(this.game.spellbook.isOpen ? this.buttons.spellbook || this.buttons.back ? (this.game.hud.openSpellbook(), this.buttonHandler.timeOut()) : this.buttons.menu ? (this.game.hud.openSpellbook(), this.game.hud.openMenu(), this.buttonHandler.timeOut()) : this.buttons.help ? (this.game.hud.openSpellbook(), this.game.helpScreen.open(this.buttons.helpX ? "helpScreenGamepad" : void 0), this.buttonHandler.timeOut()) : this.buttons.activate ? (this.game.spellbook.activateButton.call(this.game.spellbook), this.buttonHandler.timeOut()) : this.buttons.up || this.buttons.pageLeft ? (this.game.spellbook.prevPage.call(this.game.spellbook), this.buttonHandler.timeOut()) : this.buttons.down || this.buttons.pageRight ? (this.game.spellbook.nextPage.call(this.game.spellbook), this.buttonHandler.timeOut()) : this.buttons.left ? (this.game.spellbook.prevButton.call(this.game.spellbook), this.buttonHandler.timeOut()) : this.buttons.right && (this.game.spellbook.nextButton.call(this.game.spellbook), this.buttonHandler.timeOut()) : this.game.ingame.isOpen ? this.buttons.spellbook ? (this.game.hud.openMenu(), this.game.hud.openSpellbook(), this.buttonHandler.timeOut()) : this.buttons.menu || this.buttons.back ? (this.game.hud.openMenu(), this.buttonHandler.timeOut()) : this.buttons.help ? (this.game.hud.openMenu(), this.game.helpScreen.open(this.buttons.helpX ? "helpScreenGamepad" : void 0), this.buttonHandler.timeOut()) : this.buttons.activate ? (this.game.ingame.buttons[this.game.ingame.buttonIndex].activate(), this.buttonHandler.timeOut()) : this.buttons.up || this.buttons.pageLeft || this.buttons.left ? (this.game.ingame.buttons[0 === this.game.ingame.buttonIndex ? this.game.ingame.buttons.length - 1 : this.game.ingame.buttonIndex - 1].select(), this.buttonHandler.timeOut()) : (this.buttons.down || this.buttons.pageRight || this.buttons.right) && (this.game.ingame.buttons[this.game.ingame.buttonIndex === this.game.ingame.buttons.length - 1 ? 0 : this.game.ingame.buttonIndex + 1].select(), this.buttonHandler.timeOut()) : this.game.helpScreen.isOpen ? this.buttons.spellbook ? (this.game.helpScreen.close(), this.game.hud.openSpellbook(), this.buttonHandler.timeOut()) : this.buttons.menu ? (this.game.helpScreen.close(), this.game.hud.openMenu(), this.buttonHandler.timeOut()) : this.buttons.help || this.buttons.back || this.buttons.activate ? (this.game.helpScreen.close(), this.buttonHandler.timeOut()) : this.buttons.up || this.buttons.pageLeft || this.buttons.left ? (this.game.helpScreen.prevPage.call(this.game.helpScreen), this.buttonHandler.timeOut()) : (this.buttons.down || this.buttons.pageRight || this.buttons.right) && (this.game.helpScreen.nextPage.call(this.game.helpScreen), this.buttonHandler.timeOut()) : "none" == this.action ? this.buttons.spellcasting ? (this.startSpellcasting(), this.showSpellTiles()) : this.buttons.wait ? (this.skipTurn(), this.buttonHandler.timeOut()) : this.buttons.dragging ? this.startDragging() : this.buttons.up && this.walkTiles.getAt(2).visible === !0 ? (this.startWalk([{
      x: this.game.player.getPosition().x + 0,
      y: this.game.player.getPosition().y - 1
    }]), this.buttonHandler.timeOut()) : this.buttons.down && this.walkTiles.getAt(0).visible === !0 ? (this.startWalk([{
      x: this.game.player.getPosition().x + 0,
      y: this.game.player.getPosition().y + 1
    }]), this.buttonHandler.timeOut()) : this.buttons.left && this.walkTiles.getAt(3).visible === !0 ? (this.startWalk([{
      x: this.game.player.getPosition().x - 1,
      y: this.game.player.getPosition().y + 0
    }]), this.buttonHandler.timeOut()) : this.buttons.right && this.walkTiles.getAt(1).visible === !0 ? (this.startWalk([{
      x: this.game.player.getPosition().x + 1,
      y: this.game.player.getPosition().y + 0
    }]), this.buttonHandler.timeOut()) : this.buttons.pageLeft ? (this.game.centerPrevCharacter(), this.buttonHandler.timeOut()) : this.buttons.pageRight ? (this.game.centerNextCharacter(), this.buttonHandler.timeOut()) : this.buttons.back ? (this.game.charIndex = -1, this.game.player.centerOnPlayer(), this.buttonHandler.timeOut()) : this.buttons.spellbook ? (this.game.hud.openSpellbook(), this.buttonHandler.timeOut()) : this.buttons.menu ? (this.game.hud.openMenu(), this.buttonHandler.timeOut()) : this.buttons.help && (this.game.helpScreen.open(this.buttons.helpX ? "helpScreenGamepad" : void 0), this.buttonHandler.timeOut()) : "spellcasting" == this.action ? !this.buttons.activate && this.game.input.activePointer.isUp ? this.stopSpellcasting() : this.buttons.up && this.buttons.right ? this.activateSpellTile(this.spellTiles.getAt(1), 0, 0, !0) : this.buttons.up && this.buttons.left ? this.activateSpellTile(this.spellTiles.getAt(7), 0, 0, !0) : this.buttons.up ? this.activateSpellTile(this.spellTiles.getAt(0), 0, 0, !0) : this.buttons.down && this.buttons.right ? this.activateSpellTile(this.spellTiles.getAt(3), 0, 0, !0) : this.buttons.down && this.buttons.left ? this.activateSpellTile(this.spellTiles.getAt(5), 0, 0, !0) : this.buttons.down ? this.activateSpellTile(this.spellTiles.getAt(4), 0, 0, !0) : this.buttons.left ? this.activateSpellTile(this.spellTiles.getAt(6), 0, 0, !0) : this.buttons.right && this.activateSpellTile(this.spellTiles.getAt(2), 0, 0, !0) : "dragging" == this.action && (!this.buttons.dragging && this.game.input.activePointer.isUp ? this.stopDragging() : this.buttons.up ? this.game.camera.focusOnXY(this.game.camera.view.centerX, this.game.camera.view.centerY - 4) : this.buttons.down && this.game.camera.focusOnXY(this.game.camera.view.centerX, this.game.camera.view.centerY + 4), this.buttons.left ? this.game.camera.focusOnXY(this.game.camera.view.centerX - 4, this.game.camera.view.centerY) : this.buttons.right && this.game.camera.focusOnXY(this.game.camera.view.centerX + 4, this.game.camera.view.centerY), Math.abs(this.sticks.rightXaxis) > .2 && this.game.camera.focusOnXY(this.game.camera.view.centerX + 10 * this.sticks.rightXaxis, this.game.camera.view.centerY), Math.abs(this.sticks.rightYaxis) > .2 && this.game.camera.focusOnXY(this.game.camera.view.centerX, this.game.camera.view.centerY + 10 * this.sticks.rightYaxis))) : void(void 0 !== this.game.cinematics && this.game.cinematics.skip !== !0 && this.game.cinematics.cinematics.length > 0 && this.game.cinematics.skipCinematics()) : void 0
  },
  startDragging: function() {
    this.action = "dragging", this.hideWalkTiles(), this.game.camera.follow(null), this.game.player.showIndicator = !0
  },
  stopDragging: function() {
    this.showWalkTiles(), this.action = "none"
  },
  showWalkTiles: function() {
    if ("spellcasting" != this.action && this.game.isRunning && this.game.isPlayersTurn()) {
      this.hideSpellTiles();
      var a = this.game.player.getPosition();
      this.pathMap[a.y + 1] && this.pathMap[a.y + 1][a.x] && this.charMap[a.y + 1] && null == this.charMap[a.y + 1][a.x] ? (this.walkTiles.getAt(0).x = (a.x + .5) * this.tilesize, this.walkTiles.getAt(0).y = (a.y + 1.5) * this.tilesize, this.walkTiles.getAt(0).frame = 1, this.walkTiles.getAt(0).visible = !0) : this.walkTiles.getAt(0).visible = !1, this.pathMap[a.y] && this.pathMap[a.y][a.x + 1] && this.charMap[a.y] && null == this.charMap[a.y][a.x + 1] ? (this.walkTiles.getAt(1).x = (a.x + 1.5) * this.tilesize, this.walkTiles.getAt(1).y = (a.y + .5) * this.tilesize, this.walkTiles.getAt(1).frame = 1, this.walkTiles.getAt(1).visible = !0) : this.walkTiles.getAt(1).visible = !1, this.pathMap[a.y - 1] && this.pathMap[a.y - 1][a.x] && this.charMap[a.y - 1] && null == this.charMap[a.y - 1][a.x] ? (this.walkTiles.getAt(2).x = (a.x + .5) * this.tilesize, this.walkTiles.getAt(2).y = (a.y - .5) * this.tilesize, this.walkTiles.getAt(2).frame = 1, this.walkTiles.getAt(2).visible = !0) : this.walkTiles.getAt(2).visible = !1, this.pathMap[a.y] && this.pathMap[a.y][a.x - 1] && this.charMap[a.y] && null == this.charMap[a.y][a.x - 1] ? (this.walkTiles.getAt(3).x = (a.x - .5) * this.tilesize, this.walkTiles.getAt(3).y = (a.y + .5) * this.tilesize, this.walkTiles.getAt(3).frame = 1, this.walkTiles.getAt(3).visible = !0) : this.walkTiles.getAt(3).visible = !1
    }
  },
  hideWalkTiles: function(a) {
    this.walkTiles.setAll("visible", !1), a ? this.walkTo.visible = !0 : this.walkTo.label.visible = !1
  },
  showPath: function(c) {
    if (c) a = this.walkTo.path, d = "";
    else {
      pos = this.getInputPosition(), this.walkTo.lastX = this.walkTo.x, this.walkTo.lastY = this.walkTo.y, this.walkTo.posX = pos.x, this.walkTo.posY = pos.y, this.walkTo.x = pos.x * this.tilesize + this.tilesize / 2, this.walkTo.y = pos.y * this.tilesize + this.tilesize / 2, this.walkTo.frame = 1, this.walkTo.label.visible = !0;
      var a = this.walkTo.path = this.game.pathfinder.findPath(this.game.player.getPosition(), {
          x: this.walkTo.posX,
          y: this.walkTo.posY
        }),
        d = this.walkTo.turns = a.length - this.game.player.actions
    }
    var b = a.length;
    this.pathTiles.forEach(function(c) {
      b-- > 0 ? (c.frame = 0 !== b || a[0].x == pos.x && a[0].y == pos.y ? 7 : 1, c.x = a[b].x * this.tilesize + this.tilesize / 2, c.y = a[b].y * this.tilesize + this.tilesize / 2, c.visible = !0) : c.visible = !1
    }, this), this.walkTo.valid = !0, !c && a.length < 1 ? (this.walkTo.frame = 2, this.walkTo.valid = !1, this.walkTo.label.text = "cancel", this.walkTo.label.x = this.game.player.sprite.x, this.walkTo.label.y = this.game.player.sprite.y - 64, this.walkTo.label.visible = !0) : c || (this.walkTo.frame = a[0].x != pos.x || a[0].y != pos.y ? 0 : 1, a.length > this.pathLimit + 1 ? (this.walkTo.label.text = "too far", this.walkTo.valid = !1) : this.walkTo.label.text = this.game.player.actions > 1 ? a.length < this.game.player.actions ? "free step: " + a.length : a.length + 1 - this.game.player.actions + (a.length + 1 - this.game.player.actions > 1 ? " turns" : " turn") : a.length + (a.length > 1 ? " turns" : " turn"), this.walkTo.label.x = a[0].x * this.tilesize + this.tilesize / 2, this.walkTo.label.y = a[0].y * this.tilesize - 32, this.walkTo.label.visible = !0)
  },
  hidePath: function() {
    this.walkTo.label.visible = !1, this.pathTiles.setAll("visible", !1)
  },
  startWalk: function(b) {
    "function" == typeof this.onStartWalk && this.onStartWalk.call(this.onStartWalk.context), this.action = "waiting", this.game.log.logData("Walk to", {
      x: this.game.player.sprite.x,
      y: this.game.player.sprite.y
    }), this.game.player.path = b || this.walkTo.path;
    var a = this.game.player.path ? this.game.player.path.pop() : null;
    null != a && this.game.player.walkToTile(a, !1, function() {
      this.action = "none"
    }, this), this.hideWalkTiles()
  },
  startSpellcasting: function() {
    this.game.spells.spellCollection.magicMissile.active && (this.action = "spellcasting", this.createSpellTiles())
  },
  createSpellTiles: function() {
    this.spellTiles.removeAll();
    var c = this.game.player.getPosition(),
      a = c.x * this.tilesize,
      b = c.y * this.tilesize;
    this.initSpellTile(a, b - this.tilesize), this.initSpellTile(a + this.tilesize, b - this.tilesize), this.initSpellTile(a + this.tilesize, b), this.initSpellTile(a + this.tilesize, b + this.tilesize), this.initSpellTile(a, b + this.tilesize), this.initSpellTile(a - this.tilesize, b + this.tilesize), this.initSpellTile(a - this.tilesize, b), this.initSpellTile(a - this.tilesize, b - this.tilesize)
  },
  initSpellTile: function(b, c) {
    var a = this.spellTiles.create(b, c, "whirl", 3);
    return a.animations.add("whirl", [3, 4, 5]), a.animations.add("light", [9, 10, 11]), a.animations.add("ready", [12, 13, 14]), a.animations.add("magic", [12, 13, 14]), a.animations.add("shock", [15, 16, 17]), a.animations.add("ice", [18, 19, 20]), a.animations.add("fire", [21, 22, 23]), a.animations.add("blood", [24, 25, 26]), a.animations.play("whirl", 10, !0), a.visible = !1, a.posX = Math.floor(a.x / this.tilesize), a.posY = Math.floor(a.y / this.tilesize), a
  },
  showSpellTiles: function() {
    this.game.spells.spellCollection.magicMissile.active && (this.hideWalkTiles(), this.spellTiles.setAll("visible", !0), this.game.audioplayer.playCasting())
  },
  hideSpellTiles: function() {
    this.spellTiles.setAll("visible", !1)
  },
  activateSpellTile: function(b, e, f, c) {
    if ((this.inputOverObject(b) || c) && (this.lastSpellTile = b, "whirl" == b.animations.currentAnim.name)) {
      this.game.spells.activeSpellTiles.push(this.spellTiles.getIndex(b)), b.animations.play("light", 10, !0), this.game.audioplayer.playTile();
      var a = this.preparedSpell;
      if (this.preparedSpell = this.game.spells.checkGesture(), null != a && (null == this.preparedSpell || a.type != this.preparedSpell.type)) switch (a.type) {
        case Main.SpellType.magic:
          this.game.audioplayer.stopMagictile();
          break;
        case Main.SpellType.fire:
          this.game.audioplayer.stopBurningtile();
          break;
        case Main.SpellType.ice:
          this.game.audioplayer.stopIcetile();
          break;
        case Main.SpellType.lightning:
          this.game.audioplayer.stopEnergytile();
          break;
        case Main.SpellType.conjuring:
        case Main.SpellType.conjuring2:
          this.game.audioplayer.stopBloodtile()
      }
      if (null != this.preparedSpell) {
        switch (this.preparedSpell.type) {
          case Main.SpellType.magic:
            var d = "magic";
            (null == a || a.type != this.preparedSpell.type) && this.game.audioplayer.playMagictile();
            break;
          case Main.SpellType.fire:
            var d = "fire";
            (null == a || a.type != this.preparedSpell.type) && this.game.audioplayer.playBurningtile();
            break;
          case Main.SpellType.ice:
            var d = "ice";
            (null == a || a.type != this.preparedSpell.type) && this.game.audioplayer.playIcetile();
            break;
          case Main.SpellType.lightning:
            var d = "shock";
            (null == a || a.type != this.preparedSpell.type) && this.game.audioplayer.playEnergytile();
            break;
          case Main.SpellType.conjuring:
          case Main.SpellType.conjuring2:
            var d = "blood";
            (null == a || a.type != this.preparedSpell.type) && this.game.audioplayer.playBloodtile()
        }
        this.spellTiles.forEach(function(a) {
          "whirl" != a.animations.currentAnim.name && a.animations.play(d, 10, !0)
        }, this)
      } else null != a && this.spellTiles.forEach(function(a) {
        "whirl" != a.animations.currentAnim.name && a.animations.play("light", 10, !0)
      }, this)
    }
  },
  stopSpellcasting: function() {
    this.spellTiles.removeAll();
    var a = this.preparedSpell;
    if (null != a) {
      switch (a.type) {
        case Main.SpellType.magic:
          this.game.audioplayer.stopMagictile();
          break;
        case Main.SpellType.fire:
          this.game.audioplayer.stopBurningtile();
          break;
        case Main.SpellType.ice:
          this.game.audioplayer.stopIcetile();
          break;
        case Main.SpellType.lightning:
          this.game.audioplayer.stopEnergytile();
          break;
        case Main.SpellType.conjuring:
        case Main.SpellType.conjuring2:
          ;
          this.game.audioplayer.stopBloodtile()
      }
      this.game.player.health < (this.game.difficulty < 2 ? 2 : 3) && ("magicShield" == a.name || "invisibility" == a.name || "acceleration" == a.name || "superCharge" == a.name) ? (this.game.camera.target != this.game.player.sprite ? this.game.player.centerOnPlayer(this.game.effects.showText, this.game.effects, this.game.player.sprite, "TOO WEAK", "red") : this.game.effects.showText(this.game.player.sprite, "TOO WEAK", "red"), this.action = "none", this.showWalkTiles()) : ("function" == typeof this.onCasting && this.onCasting.call(this.onCasting.context), this.game.camera.target != this.game.player.sprite ? this.game.player.centerOnPlayer(this.game.spells.castSpell, this.game.spells, this.game.player.sprite, a.name, a.dir) : this.game.spells.castSpell(this.game.player.sprite, a.name, a.dir), this.game.hud.updateEffects(), this.action = "waiting", "invisibility" != a.name && this.game.player.sprite.invisible > 0 && (this.game.player.sprite.invisibleSpells > 0 ? this.game.player.sprite.invisibleSpells-- : (this.game.player.sprite.invisible = 0, this.game.player.makeVisible())), "superCharge" == a.name || this.game.player.sprite.freeSpells > 0 ? this.game.player.sprite.freeSpells-- : "acceleration" == a.name ? this.actions = this.game.spells.spellLevel : this.game.player.actions = 0)
    } else this.spellTiles.getAt(0).visible && this.game.spells.activeSpellTiles.length > 0 && this.game.audioplayer.playFail(), this.action = "none", this.showWalkTiles();
    this.preparedSpell = null, this.game.spells.activeSpellTiles.length = 0, this.game.audioplayer.stopCasting()
  },
  showDirectionTiles: function(b) {
    this.spell = b, this.action = "spellcasting", this.hideWalkTiles(), this.game.effects.showText(this.game.player.sprite, this.game.spells.spellCollection[b].name, "#028B9D");
    var a = this.game.player.getPosition();
    "shock" == b || "lightningBolt" == b ? (this.directionTiles.getAt(2).x = (a.x + 1.5) * this.tilesize, this.directionTiles.getAt(2).y = (a.y - .5) * this.tilesize, this.directionTiles.getAt(2).visible = !0, this.directionTiles.getAt(2).id = Main.Direction.up, this.directionTiles.getAt(1).x = (a.x + 1.5) * this.tilesize, this.directionTiles.getAt(1).y = (a.y + 1.5) * this.tilesize, this.directionTiles.getAt(1).visible = !0, this.directionTiles.getAt(1).id = Main.Direction.right, this.directionTiles.getAt(0).x = (a.x - .5) * this.tilesize, this.directionTiles.getAt(0).y = (a.y + 1.5) * this.tilesize, this.directionTiles.getAt(0).visible = !0, this.directionTiles.getAt(0).id = Main.Direction.down, this.directionTiles.getAt(3).x = (a.x - .5) * this.tilesize, this.directionTiles.getAt(3).y = (a.y - .5) * this.tilesize, this.directionTiles.getAt(3).visible = !0, this.directionTiles.getAt(3).id = Main.Direction.left) : (this.directionTiles.getAt(2).x = (a.x + .5) * this.tilesize, this.directionTiles.getAt(2).y = (a.y - .5) * this.tilesize, this.directionTiles.getAt(2).visible = !0, this.directionTiles.getAt(2).id = Main.Direction.up, this.directionTiles.getAt(1).x = (a.x + 1.5) * this.tilesize, this.directionTiles.getAt(1).y = (a.y + .5) * this.tilesize, this.directionTiles.getAt(1).visible = !0, this.directionTiles.getAt(1).id = Main.Direction.right, this.directionTiles.getAt(0).x = (a.x + .5) * this.tilesize, this.directionTiles.getAt(0).y = (a.y + 1.5) * this.tilesize, this.directionTiles.getAt(0).visible = !0, this.directionTiles.getAt(0).id = Main.Direction.down, this.directionTiles.getAt(3).x = (a.x - .5) * this.tilesize, this.directionTiles.getAt(3).y = (a.y + .5) * this.tilesize, this.directionTiles.getAt(3).visible = !0, this.directionTiles.getAt(3).id = Main.Direction.left), this.directionTiles.getAt(4).x = (a.x + .5) * this.tilesize, this.directionTiles.getAt(4).y = (a.y + .5) * this.tilesize, this.directionTiles.getAt(4).visible = !0
  },
  hideDirectionTiles: function() {
    this.directionTiles.setAll("visible", !1)
  },
  castSpell: function(a) {
    this.action = "waiting", this.game.spells.castSpell(this.game.player.sprite, this.spell, a.id), this.hideDirectionTiles(), this.game.hud.updateEffects(), "invisibility" != this.game.spells.activeSpell.id && this.game.player.sprite.invisible > 0 && (this.game.player.sprite.invisibleSpells > 0 ? this.game.player.sprite.invisibleSpells-- : (this.game.player.sprite.invisible = 0, this.game.player.makeVisible())), this.game.player.sprite.freeSpells > 0 ? this.game.player.sprite.freeSpells-- : this.game.player.actions = 0
  },
  cancelSpell: function() {
    this.game.log.logData("Cancel casting", this.spell), this.game.effects.showText(this.game.player.sprite, "Canceled", "#028B9D"), this.action = "none", this.hideDirectionTiles(), this.showWalkTiles()
  },
  skipTurn: function() {
    "function" == typeof this.onWait && this.onWait.call(this.onWait.context), this.game.log.logTime("Wait"), this.game.effects.sleep(this.game.player.sprite.x, this.game.player.sprite.y, this.game.nextTurn), this.hideWalkTiles()
  },
  update: function() {
    this.handleButtonInput(), "spellcasting" == this.action ? this.inputOverObject(this.lastSpellTile) || (this.lastSpellTile = null, this.spellTiles.forEach(this.activateSpellTile, this)) : "pathfinding" != this.action || this.inputOverObject(this.walkTiles.getAt(0)) ? "dragging" == this.action && (this.game.camera.focusOnXY(this.game.camera.view.centerX + (this.lastPosition.x - this.game.input.activePointer.x), this.game.camera.view.centerY + (this.lastPosition.y - this.game.input.activePointer.y)), this.lastPosition.copyFrom(this.game.input.activePointer)) : this.showPath()
  }
}, Main.LevelObjects = function(a) {
  return this.game = a, this.group = this.game.layers.objects, this.drops = this.game.layers.drops, this.onMarker = {}, this
}, Main.LevelObjects.prototype = {
  addObject: function(e, f, c, b) {
    var a = null;
    switch (c) {
      case "destructable":
        if (null != b.frame) var g = b.frame;
        else var g = 1171;
        switch (a = this.group.create(0, 0, "tileset", g), a.off = -8, a.y += a.off, a.type = "destructable", a.handler = this, a.hurt = function(a, b) {
          this.handler.hit(this, a, b)
        }, a.pickUp = !1, b.frame) {
          case 1107:
            a.name = "door", a.strength = 1, a.damagedFrame = b.frame + 1;
            var d = Main.spriteOffset.shadows + 6,
              h = 2;
            break;
          case 1109:
            a.name = "door", a.strength = 1, a.damagedFrame = b.frame + 1;
            var d = Main.spriteOffset.shadows + 6,
              h = 2;
            break;
          case 1111:
            a.name = "door", a.strength = 2, a.damagedFrame = b.frame + 1;
            var d = Main.spriteOffset.shadows + 6,
              h = 2;
            break;
          case 1114:
            a.name = "door", a.strength = 3, a.damagedFrame = b.frame + 1;
            var d = Main.spriteOffset.shadows + 6,
              h = 2;
            break;
          case 1116:
            a.name = "door", a.strength = 4, a.damagedFrame = b.frame + 1;
            var d = Main.spriteOffset.shadows + 6,
              h = 2;
            break;
          case 360:
            a.name = "clump", a.strength = 3, a.damagedFrame = b.frame - 1, a.y -= a.off, a.off = null;
            break;
          case 1092:
          case 1093:
            a.name = "lamp", a.strength = 1, Math.floor(2 * Math.random()) > 0 ? a.animations.add("default", [1093, 1092]) : a.animations.add("default", [1092, 1093]), a.animations.play("default", 4, !0);
            break;
          case 1144:
          case 1145:
            a.name = "barrel", a.strength = 1;
            var d = Main.spriteOffset.shadows + 3,
              h = -2;
            break;
          case 1165:
          case 1166:
            a.name = "table", a.strength = 1, a.off += 2, a.y += 2;
            var d = Main.spriteOffset.shadows + 7;
            break;
          case 1167:
          case 1168:
            a.name = "chair", a.strength = 1;
            var d = Main.spriteOffset.shadows + 8;
            break;
          case 1169:
          case 1170:
            a.name = "weaponStand", a.strength = 1;
            var d = Main.spriteOffset.shadows,
              h = -4;
            break;
          case 1171:
            a.name = "chest", a.strength = 1;
            var d = Main.spriteOffset.shadows + 5;
            break;
          case 1223:
          case 1224:
          case 1225:
          case 1226:
          case 1227:
          case 1228:
          case 1199:
          case 1200:
          case 1201:
          case 1250:
          case 1251:
          case 1252:
          case 1253:
          case 1254:
          case 1255:
            a.name = "vase", a.strength = 1;
            var d = Main.spriteOffset.shadows + 2,
              h = -6;
            break;
          default:
            a.strength = 1
        }
        d && (a.shadow = this.game.layers.shadows.create(0, 0, "48bitSprites", d), a.shadow.off = h || 0, a.shadow.y += a.shadow.off, a.shadow.anchor.setTo(.5, .5));
        break;
      case "teleport":
        a = this.drops.create(0, 0, "tileset", b.frame), a.name = "teleporter", a.type = "teleport", a.destination = b.destination;
        break;
      case "potion":
        switch (a = this.drops.create(0, 0, "items"), a.name = "potion", a.type = "potion", a.pickUp = !0, a.lifebonus = b.lifebonus || 0, a.health = b.health || 1, a.health) {
          case 2:
            a.frame = 2;
            break;
          case 4:
            a.frame = 8;
            break;
          case 6:
            a.frame = 14
        }
        switch (a.lifebonus) {
          case 2:
            a.frame = 1;
            break;
          case 4:
            a.frame = 7;
            break;
          case 6:
            a.frame = 13
        }
        break;
      case "tome":
        a = this.drops.create(0, 0, "items", b.frame), a.name = "tome", a.type = "tome", a.pickUp = !0, a.spell = b.spell;
        break;
      case "marker":
        a = this.drops.create(0, 0, "items", 0), a.name = "marker", a.type = "marker", a.pickUp = !0, a.id = b.id;
        break;
      case "exit":
        a = this.drops.create(0, 0, "items", 226), a.name = "exit", a.type = "exit", a.pickUp = !0
    }
    a.anchor.setTo(.5, .5), this.setPosition(a, e, f, !0), a.getDataObject = function() {
      return {
        type: c,
        args: b
      }
    }
  },
  getPosition: function(a) {
    return this.game.getPosition(a)
  },
  setPosition: function(a, b, c, e) {
    if (!e) {
      var d = this.getPosition(a);
      this.game.levelManager.objMap[d.y][d.x] = null
    }
    this.game.setPosition(a, b, c), a.pickUp || "teleport" == a.type ? this.game.levelManager.pickUpMap[c][b] = a : (this.game.levelManager.pathMap[c][b] = !1, this.game.levelManager.sightMap[c][b] = !1, this.game.levelManager.objMap[c][b] = a)
  },
  remove: function(b) {
    var a = this.game.levelObjects.getPosition(b);
    b.shadow && b.shadow.destroy(), b.pickUp ? ("tome" == b.type && this.game.effects.showText(this.game.player.sprite, "New Spell"), this.game.levelManager.pickUpMap[a.y][a.x] = null, b.destroy()) : (this.game.levelManager.pathMap[a.y][a.x] = !0, this.game.levelManager.sightMap[a.y][a.x] = !0, this.game.levelManager.objMap[a.y][a.x] = null, b.destroy())
  },
  removeAll: function() {
    this.group.forEach(function(a) {
      a.kill()
    }), this.group.removeAll(), this.drops.forEach(function(a) {
      a.kill()
    }), this.drops.removeAll()
  },
  hit: function(a, b) {
    "destructable" == a.type && (a.strength -= b, a.strength < 1 ? (this.game.effects.greyPoof(a.x, a.y), "vase" == a.name ? this.game.audioplayer.playVaseBreak() : this.game.audioplayer.playBarrelBreak(), this.game.levelObjects.remove(a)) : b > 0 && null != a.damagedFrame && (a.frame = a.damagedFrame))
  },
  interact: function(a) {
    if (this.game.log.logData("Interact", a.getDataObject()), "destructable" == a.type) this.game.levelObjects.remove(a);
    else if ("teleport" == a.type) {
      var d = this.game;
      this.game.isRunning = !1;
      var b = this.game.levelManager.charMap[a.destination.y][a.destination.x];
      null != b && b.die();
      var c = this.game.add.tween(this.game.fade);
      c.onComplete.add(function() {
        d.player.setPosition(a.destination.x, a.destination.y);
        var b = this.game.add.tween(this.game.fade);
        b.onComplete.add(function() {
          this.game.enemies.pacifyAll(), this.game.player.cancelPath(), this.game.isRunning = !0, this.game.nextTurn()
        }, this), b.to({
          alpha: 0
        }, 500, Phaser.Easing.Cubic.InOut, !0)
      }, this), c.to({
        alpha: 1
      }, 500, Phaser.Easing.Cubic.InOut, !0)
    } else "potion" == a.type ? (a.lifebonus > 0 ? (this.game.audioplayer.playLifePotion(), this.game.level.increaseScore(500 * a.lifebonus, "items"), this.game.player.maxhealth += a.lifebonus, this.game.player.health = this.game.player.maxhealth, this.game.hud.flashHeart()) : a.health > 0 && (this.game.audioplayer.playHealthPotion(), this.game.level.increaseScore(100 * a.health, "items"), this.game.player.health += a.health, this.game.player.health > this.game.player.maxhealth && (this.game.player.health = this.game.player.maxhealth + 0)), this.game.levelObjects.remove(a, !0)) : "tome" == a.type ? ("function" == typeof this.onTome && this.onTome.call(this.onTome.context), this.game.audioplayer.playPickUpTome(), this.game.level.increaseScore(2e3, "items"), this.game.spells.activate(a.spell), this.game.hud.flashSpellbook(), this.game.levelObjects.remove(a, !0)) : "marker" == a.type ? ("function" == typeof this.onMarker[a.id] && this.onMarker[a.id].call(this.onMarker[a.id].context), this.game.levelObjects.remove(a, !0)) : "exit" == a.type && (this.game.audioplayer.playVictory(), this.game.isRunning = !1, this.fadeOut = this.game.add.tween(this.game.fade), this.fadeOut.onComplete.add(function() {
      this.fadeOut.stop(), this.game.gameOver("victory")
    }, this), this.fadeOut.to({
      alpha: 1
    }, 500, Phaser.Easing.Cubic.InOut, !0))
  }
}, Main.Level = function(a) {
  this.game = a, this.tilesize = 48, this.layers = [], this.group = this.game.layers.background, this.score = {
    enemies: 0,
    items: 0,
    health: 0,
    moves: 0,
    total: 0
  }
}, Main.Level.prototype = {
  load: function(b) {
    this.id = b, this.map = this.game.add.tilemap(this.id), this.map.addTilesetImage("Oryx Demo", "tiles", 48, 48), this.layers.length = 0;
    var a = this.map.createLayer("Ground", this.game.camera.screenView.width, this.game.camera.screenView.height, this.group);
    return a.resizeWorld(), this.layers.push(a), this.layers.push(this.map.createLayer("Inaccessible", this.game.camera.screenView.width, this.game.camera.screenView.height, this.group)), this.layers.push(this.map.createLayer("Shadows", this.game.camera.screenView.width, this.game.camera.screenView.height, this.group)), this.layers.push(this.map.createLayer("Collision", this.game.camera.screenView.width, this.game.camera.screenView.height, this.group)), this.layers.push(this.map.createLayer("stuff", this.game.camera.screenView.width, this.game.camera.screenView.height, this.group)), this.createCollisionMap(), this.loadStuff(), this.spawnLogic(), this.printXpInLevel(), this
  },
  unload: function() {},
  printXpInLevel: function() {
    var a = 0;
    return this.game.enemies.group.forEach(function(b) {
      a += b.xp
    }), a
  },
  increaseScore: function(a, b) {
    switch (this.game.difficulty) {
      case 0:
        a *= .5;
        break;
      case 1:
        a *= 1;
        break;
      case 2:
        a *= 1.5
    }
    this.score[b] += a, this.score.total += a, this.game.hud.updateScore(this.score.total, a)
  },
  isTileFree: function(a, b, d, c) {
    return b >= 0 && b < this.game.levelManager.sightMap.length && a >= 0 && a < this.game.levelManager.sightMap[0].length && (this.game.levelManager.sightMap[b][a] || (c = !0 && null != this.game.levelManager.objMap[b][a] && this.game.levelManager.objMap[b][a].strength <= c)) && (!d || null == this.game.levelManager.charMap[b][a])
  },
  createCollisionMap: function() {
    var b = this.game.levelManager.pathMap,
      c = this.game.levelManager.sightMap,
      e = this.game.levelManager.charMap,
      f = this.game.levelManager.objMap,
      g = this.game.levelManager.pickUpMap;
    this.collisionLayer = this.map.layers[3].data, this.collision = this.map.layers[3].data, this.inaccessible = this.map.layers[1].data, this.ground = this.map.layers[0].data;
    for (var a = 0; a < this.collision.length; a++) {
      b.push([]), c.push([]), e.push([]), f.push([]), g.push([]);
      for (var d = 0; d < this.collision[0].length; d++) this.collision[a][d].index > 0 ? (b[a].push(!1), c[a].push(!1)) : this.inaccessible[a][d].index > 0 ? (b[a].push(!1), c[a].push(!0)) : 0 == this.ground[a][d].index ? (b[a].push(!1), c[a].push(!1)) : (b[a].push(!0), c[a].push(!0)), e[a].push(null), f[a].push(null), g[a].push(null)
    }
  },
  loadStuff: function() {
    this.drops = this.map.layers[5].data, this.entities = this.map.layers[6].data;
    var g = null;
    this.map.layers.length > 7 && (this.cinematics = this.map.layers[7].data);
    for (var a = 0; a < this.entities.length; a++)
      for (var b = 0; b < this.entities[0].length; b++)
        if (this.entities[a][b].index && (g = this.spawnEntities(b, a, this.entities[a][b].index)), this.drops[a][b].index && this.spawnInteractives(b, a, this.drops[a][b].index), this.cinematics && this.cinematics[a][b].index) switch (this.cinematics[a][b].index) {
          case 1994:
            var c = {
              x: b,
              y: a
            };
            break;
          case 1995:
            this.game.cinematics.add(b, a, "trackShot2");
            break;
          case 1996:
            this.game.cinematics.add(b, a, "trackShot3");
            break;
          case 1997:
            this.game.cinematics.add(b, a, "trackShot4");
            break;
          case 1998:
            this.game.cinematics.add(b, a, "trackShot5");
            break;
          case 2021:
            var d = {
              x: b,
              y: a,
              character: g
            };
            break;
          case 2022:
            var e = {
              x: b,
              y: a
            };
            break;
          case 2023:
            this.game.cinematics.add(b, a, "thiefWalksUpwards");
            break;
          case 2025:
            var f = {
              x: b,
              y: a
            }
        }
    void 0 !== d && this.game.cinematics.add(d.x, d.y, "enemyIntro", d.character), void 0 !== c && void 0 === e && this.game.cinematics.add(c.x, c.y, "trackShot1"), void 0 !== f && this.game.cinematics.add(f.x, f.y, "playerWalk"), void 0 !== e && (this.game.cinematics.add(e.x, e.y, "thiefCasts"), void 0 !== c && this.game.cinematics.add(c.x, c.y, "trackShot1"))
  },
  spawnEntities: function(b, c, a) {
    return 1972 == a ? this.game.player.spawnPlayer(b, c) : 1973 == a ? this.game.enemies.addEnemy(b, c, "rat") : 1974 == a ? this.game.enemies.addEnemy(b, c, "sewerRat") : 1975 == a ? this.game.enemies.addEnemy(b, c, "slime") : 1976 == a ? this.game.enemies.addEnemy(b, c, "purpleSlime") : 1977 == a ? this.game.enemies.addEnemy(b, c, "spider") : 1978 == a ? this.game.enemies.addEnemy(b, c, "spiderQueen") : 1979 == a ? this.game.enemies.addEnemy(b, c, "skeleton") : 1980 == a ? this.game.enemies.addEnemy(b, c, "skeletonArcher") : 1981 == a ? this.game.enemies.addEnemy(b, c, "skeletonWarrior") : 1982 == a ? this.game.enemies.addEnemy(b, c, "necromancer") : 1983 == a ? this.game.enemies.addEnemy(b, c, "vampire") : 1984 == a ? this.game.enemies.addEnemy(b, c, "goblinScout") : 1985 == a ? this.game.enemies.addEnemy(b, c, "goblinWarrior") : 1986 == a ? this.game.enemies.addEnemy(b, c, "goblinMage") : 1987 == a ? this.game.enemies.addEnemy(b, c, "stoneGolem") : 1988 == a ? this.game.enemies.addEnemy(b, c, "lavaGolem") : 1989 == a ? this.game.enemies.addEnemy(b, c, "drowScout") : 1990 == a ? this.game.enemies.addEnemy(b, c, "drowArcher") : 1991 == a ? this.game.enemies.addEnemy(b, c, "drowMage") : 1992 == a ? this.game.enemies.addEnemy(b, c, "drowAssassin") : 1993 == a ? this.game.enemies.addEnemy(b, c, "drowQueen") : 1999 == a ? this.game.enemies.addEnemy(b, c, "mummy") : 2e3 == a ? this.game.enemies.addEnemy(b, c, "mummyQueen") : 2001 == a ? this.game.enemies.addEnemy(b, c, "windling") : 2002 == a ? this.game.enemies.addEnemy(b, c, "djinn") : 2003 == a ? this.game.enemies.addEnemy(b, c, "cryptRat") : 2004 == a ? this.game.enemies.addEnemy(b, c, "scorpion") : 2005 == a ? this.game.enemies.addEnemy(b, c, "redDemon") : (2023 == a ? this.game.cinematics.add(b, c, "thiefWalksUpwards") : a > 0 && this.game.levelObjects.addObject(b, c, "destructable", {
      frame: a - 1
    }), null)
  },
  spawnInteractives: function(a, b, c) {
    1330 == c ? this.game.levelObjects.addObject(a, b, "potion", {
      health: 2
    }) : 1331 == c ? this.game.levelObjects.addObject(a, b, "potion", {
      health: 4
    }) : 1332 == c ? this.game.levelObjects.addObject(a, b, "potion", {
      health: 6
    }) : 1333 == c ? this.game.levelObjects.addObject(a, b, "potion", {
      lifebonus: 2
    }) : 1334 == c ? this.game.levelObjects.addObject(a, b, "potion", {
      lifebonus: 4
    }) : 1335 == c ? this.game.levelObjects.addObject(a, b, "potion", {
      lifebonus: 6
    }) : 1351 == c ? this.game.levelObjects.addObject(a, b, "tome", {
      frame: 66,
      spell: "magicMissile"
    }) : 1352 == c ? this.game.levelObjects.addObject(a, b, "tome", {
      frame: 66,
      spell: "magicMissile"
    }) : 1353 == c ? this.game.levelObjects.addObject(a, b, "tome", {
      frame: 47,
      spell: "shock"
    }) : 1354 == c ? this.game.levelObjects.addObject(a, b, "tome", {
      frame: 47,
      spell: "lightningBolt"
    }) : 1355 == c ? this.game.levelObjects.addObject(a, b, "tome", {
      frame: 70,
      spell: "iceBreath"
    }) : 1356 == c ? this.game.levelObjects.addObject(a, b, "tome", {
      frame: 70,
      spell: "iceBall"
    }) : 1357 == c ? this.game.levelObjects.addObject(a, b, "tome", {
      frame: 68,
      spell: "fireBreath"
    }) : 1358 == c ? this.game.levelObjects.addObject(a, b, "tome", {
      frame: 68,
      spell: "fireBall"
    }) : 1359 == c ? this.game.levelObjects.addObject(a, b, "tome", {
      frame: 66,
      spell: "magicMissile"
    }) : 1360 == c ? this.game.levelObjects.addObject(a, b, "tome", {
      frame: 66,
      spell: "magicMissile"
    }) : 1361 == c ? this.game.levelObjects.addObject(a, b, "tome", {
      frame: 67,
      spell: "invisibility"
    }) : 1362 == c ? this.game.levelObjects.addObject(a, b, "tome", {
      frame: 67,
      spell: "magicShield"
    }) : 1363 == c ? this.game.levelObjects.addObject(a, b, "tome", {
      frame: 67,
      spell: "acceleration"
    }) : 1364 == c ? this.game.levelObjects.addObject(a, b, "tome", {
      frame: 67,
      spell: "superCharge"
    }) : 1365 == c ? this.game.levelObjects.addObject(a, b, "marker", {
      id: "one"
    }) : 1392 == c ? this.game.levelObjects.addObject(a, b, "exit") : 250 == c && this.game.levelObjects.addObject(a, b, "teleport", {
      frame: 250,
      destination: {
        x: 15,
        y: 1
      }
    })
  },
  spawnLogic: function() {
    switch (this.id) {
      case "world0-1":
        this.game.player.sprite.shield = 9999, this.game.player.spellPoints = 9, this.game.levelObjects.addObject(5, 2, "teleport", {
          frame: 250,
          destination: {
            x: 14,
            y: 3
          }
        }), this.game.levelObjects.addObject(14, 2, "teleport", {
          frame: 250,
          destination: {
            x: 5,
            y: 3
          }
        }), this.game.levelObjects.addObject(5, 6, "teleport", {
          frame: 250,
          destination: {
            x: 5,
            y: 9
          }
        }), this.game.levelObjects.addObject(5, 8, "teleport", {
          frame: 250,
          destination: {
            x: 5,
            y: 5
          }
        }), this.game.enemies.group.forEach(function(a) {
          a.perception = 3
        });
        break;
      case "world1-1":
        this.game.audioplayer.playBGM("sewer", !0), this.game.audioplayer.playAmbient("sewer", !0);
        break;
      case "world1-2":
        this.game.audioplayer.playBGM("sewer", !0), this.game.audioplayer.playAmbient("sewer", !0);
        break;
      case "world1-3":
        this.game.audioplayer.playBGM("sewer2", !0), this.game.audioplayer.playAmbient("sewer", !0);
        break;
      case "world2-1":
        this.game.audioplayer.playBGM("sewer", !0), this.game.audioplayer.playAmbient("crypt", !0);
        break;
      case "world2-2":
        this.game.levelObjects.addObject(27, 24, "teleport", {
          frame: 330,
          destination: {
            x: 47,
            y: 21
          }
        }), this.game.levelObjects.addObject(46, 21, "teleport", {
          frame: 330,
          destination: {
            x: 27,
            y: 23
          }
        }), this.game.audioplayer.playBGM("graveyard", !0), this.game.audioplayer.playAmbient("graveyard", !0);
        break;
      case "world2-3":
        this.game.audioplayer.playBGM("crypt", !0), this.game.audioplayer.playAmbient("crypt", !0);
        break;
      case "world3-1":
        this.game.levelObjects.addObject(7, 20, "teleport", {
          frame: 250,
          destination: {
            x: 2,
            y: 29
          }
        }), this.game.levelObjects.addObject(2, 28, "teleport", {
          frame: 250,
          destination: {
            x: 7,
            y: 19
          }
        }), this.game.audioplayer.playBGM("mountains2", !0), this.game.audioplayer.playAmbient("mountains", !0);
        break;
      case "world3-2":
        this.game.levelObjects.addObject(11, 14, "teleport", {
          frame: 250,
          destination: {
            x: 3,
            y: 13
          }
        }), this.game.levelObjects.addObject(3, 14, "teleport", {
          frame: 250,
          destination: {
            x: 12,
            y: 14
          }
        }), this.game.audioplayer.playBGM("mountains", !0), this.game.audioplayer.playAmbient("mountains", !0);
        break;
      case "world3-3":
        this.game.levelObjects.addObject(14, 52, "teleport", {
          frame: 250,
          destination: {
            x: 14,
            y: 46
          }
        }), this.game.levelObjects.addObject(7, 55, "teleport", {
          frame: 250,
          destination: {
            x: 5,
            y: 50
          }
        }), this.game.levelObjects.addObject(21, 55, "teleport", {
          frame: 250,
          destination: {
            x: 23,
            y: 50
          }
        }), this.game.levelObjects.addObject(5, 51, "teleport", {
          frame: 250,
          destination: {
            x: 8,
            y: 55
          }
        }), this.game.levelObjects.addObject(23, 51, "teleport", {
          frame: 250,
          destination: {
            x: 20,
            y: 55
          }
        }), this.game.levelObjects.addObject(14, 47, "teleport", {
          frame: 250,
          destination: {
            x: 14,
            y: 53
          }
        }), this.game.levelObjects.addObject(17, 44, "teleport", {
          frame: 250,
          destination: {
            x: 22,
            y: 44
          }
        }), this.game.levelObjects.addObject(11, 44, "teleport", {
          frame: 250,
          destination: {
            x: 6,
            y: 44
          }
        }), this.game.levelObjects.addObject(7, 44, "teleport", {
          frame: 250,
          destination: {
            x: 12,
            y: 44
          }
        }), this.game.levelObjects.addObject(21, 44, "teleport", {
          frame: 250,
          destination: {
            x: 16,
            y: 44
          }
        }), this.game.levelObjects.addObject(9, 35, "teleport", {
          frame: 250,
          destination: {
            x: 12,
            y: 31
          }
        }), this.game.levelObjects.addObject(19, 35, "teleport", {
          frame: 250,
          destination: {
            x: 16,
            y: 31
          }
        }), this.game.levelObjects.addObject(12, 32, "teleport", {
          frame: 250,
          destination: {
            x: 9,
            y: 36
          }
        }), this.game.levelObjects.addObject(16, 32, "teleport", {
          frame: 250,
          destination: {
            x: 19,
            y: 36
          }
        }), this.game.levelObjects.addObject(14, 14, "teleport", {
          frame: 250,
          destination: {
            x: 14,
            y: 8
          }
        }), this.game.levelObjects.addObject(14, 9, "teleport", {
          frame: 250,
          destination: {
            x: 14,
            y: 15
          }
        }), this.game.audioplayer.playBGM("mountains2", !0), this.game.audioplayer.playAmbient("mountains", !0);
        break;
      case "world4-1":
        this.game.audioplayer.playBGM("sewer2", !0), this.game.audioplayer.playAmbient("drow", !0);
        break;
      case "world4-2":
        this.game.audioplayer.playBGM("sewer", !0), this.game.audioplayer.playAmbient("drow", !0);
        break;
      case "world4-3":
        this.game.levelObjects.addObject(18, 28, "teleport", {
          frame: 168,
          destination: {
            x: 18,
            y: 12
          }
        }), this.game.levelObjects.addObject(18, 13, "teleport", {
          frame: 168,
          destination: {
            x: 18,
            y: 29
          }
        }), this.game.audioplayer.playBGM("sewer2", !0), this.game.audioplayer.playAmbient("drow", !0);
        break;
      case "world5-1":
        this.game.levelObjects.addObject(19, 45, "teleport", {
          frame: 1120,
          destination: {
            x: 22,
            y: 7
          }
        }), this.game.levelObjects.addObject(22, 6, "teleport", {
          frame: 1120,
          destination: {
            x: 19,
            y: 46
          }
        }), this.game.audioplayer.playBGM("crypt", !0), this.game.audioplayer.playAmbient("academy", !0);
        break;
      case "world5-2":
        this.game.player.sprite.scale.x *= -1, this.game.audioplayer.playBGM("mountains2", !0), this.game.audioplayer.playAmbient("academy", !0);
        break;
      case "world5-3":
        this.game.player.sprite.scale.x *= -1, this.game.audioplayer.playBGM("crypt", !0), this.game.audioplayer.playAmbient("academy", !0)
    }
  }
}, Main.LevelManager = function(a) {
  this.game = a, this.tilesize = 48, this.current = this.game.savegame.player.level + 0, this.progression = [], this.pathMap = [], this.sightMap = [], this.charMap = [], this.objMap = [], this.pickUpMap = []
}, Main.LevelManager.prototype = {
  add: function(a) {
    this.progression.push(a)
  },
  loadNext: function() {
    this.current >= this.progression.length || (this.current > -1 && this.game.level.unload(), this.current++, this.pathMap = [], this.sightMap = [], this.charMap = [], this.objMap = [], this.pickUpMap = [], this.current < this.progression.length && this.game.level.load(this.progression[this.current]))
  },
  retry: function() {
    this.current--, this.game.run()
  }
}, Main.Effects = function(b) {
  this.game = b, this.tilesize = this.game.tilesize, this.infoLayer = this.game.layers.infos, this.effectLayer = this.game.layers.effects, this.reach = this.game.layers.tileMarkup, this.audioplayer = this.game.audioplayer, this.scaleMod = this.game.mobile ? 2 : 1, this.reach.createMultiple(61, "tilemarkups", 6), this.reach.setAll("visible", !1), this.emitter = this.game.add.emitter(0, 0, 200), this.emitter.makeParticles("48bitSprites", [Main.spriteOffset.xpBubble]), this.emitter.gravity = 0, this.effects1 = this.effectLayer.create(0, 0, "48bitSprites"), this.effects1.anchor.setTo(.5, .5), this.effects1.visible = !1;
  var a = Main.spriteOffset.strike1;
  this.effects1.animations.add("strike1", [a, a + 1, a + 1]), a = Main.spriteOffset.strike2, this.effects1.animations.add("strike2", [a, a + 1, a + 1]), a = Main.spriteOffset.strike3, this.effects1.animations.add("scratch", [a, a + 1, a + 1]), a = Main.spriteOffset.greenBlob, this.effects1.animations.add("greenBlob", [a, a + 1, a + 2]), a = Main.spriteOffset.purpleBlob, this.effects1.animations.add("purpleBlob", [a, a + 1, a + 2]), a = Main.spriteOffset.blueBlast, this.effects1.animations.add("blueblast", [a, a + 1, a + 2, a + 3]), this.effects1.animations.add("blueNova", [a, a + 1, a + 2, a + 3]), a = Main.spriteOffset.purpleBlast, this.effects1.animations.add("purpleblast", [a, a + 1, a + 2, a + 3]), a = Main.spriteOffset.alert, this.effects1.animations.add("alert", [a]), a = Main.spriteOffset.accelerate, this.effects1.animations.add("accelerate", [a, a + 1, a + 2]), a = Main.spriteOffset.arrowHit, this.effects1.animations.add("arrowhit", [a, a + 1, a]), a = Main.spriteOffset.callHelp, this.effects1.animations.add("callHelp", [a]), a = Main.spriteOffset.immune, this.effects1.animations.add("immune", [a, a + 1, a + 2]), a = Main.spriteOffset.sleep, this.effects1.animations.add("sleep", [a]), this.effects1.events.onAnimationStart.add(function(a) {
    a.visible = !0
  }, this), this.effects1.events.onAnimationComplete.add(function(a) {
    a.visible = !1
  }, this), this.effects2 = this.effectLayer.create(0, 0, "64bitSprites"), this.effects2.anchor.setTo(.5, .5), this.effects2.visible = !1, a = Main.spriteOffset.poof, this.effects2.animations.add("poof", [a + 1, a, a + 1]), a = Main.spriteOffset.explosionPoof, this.effects2.animations.add("explosionPoof", [a + 1, a, a + 1]), a = Main.spriteOffset.greyPoof, this.effects2.animations.add("greyPoof", [a + 1, a, a + 1]), a = Main.spriteOffset.superCharge, this.effects2.animations.add("superCharge", [a, a + 1, a + 2]), a = Main.spriteOffset.shield, this.effects2.animations.add("shield", [a, a + 1]), a = Main.spriteOffset.explodingStone, this.effects2.animations.add("explodingStone", [a, a + 1, a + 2]), a = Main.spriteOffset.crossCut, this.effects2.animations.add("crossCut", [a, a + 1]), a = Main.spriteOffset.splode, this.effects2.animations.add("splode", [a, a + 1, a]), a = Main.spriteOffset.blueBall, this.effects2.animations.add("blueBall", [a, a + 1, a, a + 1, a]), a = Main.spriteOffset.blueSparkle, this.effects2.animations.add("blueSparkle", [a, a + 1, a + 2]), this.effects2.events.onAnimationStart.add(function(a) {
    a.visible = !0
  }, this), this.effects2.events.onAnimationComplete.add(function(a) {
    a.visible = !1
  }, this), this.health = this.game.layers.enemyHealth, this.health.createMultiple(20, "items", 84, !0), this.health.forEach(function(a) {
    a.anchor.setTo(.5, .5), a.visible = !1, a.animations.add("full", [84, 84, 84, 84, 84, 84]), a.animations.add("half", [85, 85, 85, 85, 85, 85]), a.animations.add("empty", [86, 86, 86, 86, 86, 86]), a.animations.add("lostFirstHalf", [85, 85, 86, 86, 86, 86]), a.animations.add("lostSecondHalf", [84, 84, 85, 85, 85, 85]), a.animations.add("lostFull", [84, 84, 86, 86, 86, 86]), a.events.onAnimationStart.add(function(a) {
      a.visible = !0
    }, this), a.events.onAnimationComplete.add(function(a) {
      a.visible = !1
    }, this)
  }, this), a = Main.spriteOffset.shield, this.shieldEffect = this.effectLayer.create(0, 0, "64bitSprites", a), this.shieldEffect.anchor.setTo(.5, .5), this.shieldEffect.visible = !1, this.shieldEffect.animations.add("shield", [a, a + 1]), this.shieldEffect.events.onAnimationStart.add(function(a) {
    a.visible = !0
  }, this), this.shieldEffect.events.onAnimationComplete.add(function(a) {
    a.visible = !1
  }, this), this.turnInfo = this.game.addText(0, 0, "", {
    font: this.game.fontsize * this.scaleMod + "px " + this.game.font,
    fill: "white",
    align: "center"
  }, this.infoLayer), this.turnInfo.anchor.setTo(.5, .5), this.turnInfo.stroke = "#000000", this.turnInfo.strokeThickness = 2, this.turnInfo.visible = !1, a = Main.spriteOffset.fire, this.stateEffects = this.infoLayer.create(0, 0, "64bitSprites", a), this.stateEffects.anchor.setTo(.5, .5), this.stateEffects.scale.x /= 2, this.stateEffects.scale.y /= 2, this.stateEffects.visible = !1, this.stateEffects.animations.add("burning", [a, a + 1, a, a + 1, a, a + 1]), a = Main.spriteOffset.ice, this.stateEffects.animations.add("frozen", [a, a + 1, a, a + 1, a, a + 1]), a = Main.spriteOffset.superCharge, this.stateEffects.animations.add("superCharged", [a, a + 1, a + 2]), this.stateEffects.events.onAnimationStart.add(function(a) {
    a.visible = !0
  }, this), this.stateEffects.events.onAnimationComplete.add(function(a) {
    a.visible = !1
  }, this), a = Main.spriteOffset.shield, this.stateEffects.shield = this.infoLayer.create(0, 0, "64bitSprites", a), this.stateEffects.shield.anchor.setTo(.5, .5), this.stateEffects.shield.scale.x /= 2, this.stateEffects.shield.scale.y /= 2, this.stateEffects.shield.visible = !1, this.stateEffects.shield.animations.add("default", [a, a, a, a, a, a]), this.stateEffects.shield.events.onAnimationStart.add(function(a) {
    a.visible = !0
  }, this), this.stateEffects.shield.events.onAnimationComplete.add(function(a) {
    a.visible = !1
  }, this), this.turnInfo.shield = this.game.addText(0, 0, "", {
    font: this.game.fontsize * this.scaleMod + "px " + this.game.font,
    fill: "white",
    align: "center"
  }, this.infoLayer), this.turnInfo.shield.anchor.setTo(.5, .5), this.turnInfo.shield.stroke = "#000000", this.turnInfo.shield.strokeThickness = 2, this.turnInfo.shield.visible = !1, a = Main.spriteOffset.acceleration, this.stateEffects.acceleration = this.infoLayer.create(0, 0, "48bitSprites", a), this.stateEffects.acceleration.anchor.setTo(.5, .5), this.stateEffects.acceleration.visible = !1, this.stateEffects.acceleration.animations.add("default", [a, a, a, a, a, a]), this.stateEffects.acceleration.events.onAnimationStart.add(function(a) {
    a.visible = !0
  }, this), this.stateEffects.acceleration.events.onAnimationComplete.add(function(a) {
    a.visible = !1
  }, this), this.turnInfo.acceleration = this.game.addText(0, 0, "", {
    font: this.game.fontsize * this.scaleMod + "px " + this.game.font,
    fill: "white",
    align: "center"
  }, this.infoLayer), this.turnInfo.acceleration.anchor.setTo(.5, .5), this.turnInfo.acceleration.stroke = "#000000", this.turnInfo.acceleration.strokeThickness = 2, this.turnInfo.acceleration.visible = !1, a = Main.spriteOffset.superCharged, this.stateEffects.superCharge = this.infoLayer.create(0, 0, "48bitSprites", a), this.stateEffects.superCharge.anchor.setTo(.5, .5), this.stateEffects.superCharge.visible = !1, this.stateEffects.superCharge.animations.add("default", [a, a, a, a, a, a]), this.stateEffects.superCharge.events.onAnimationStart.add(function(a) {
    a.visible = !0
  }, this), this.stateEffects.superCharge.events.onAnimationComplete.add(function(a) {
    a.visible = !1
  }, this), this.turnInfo.superCharge = this.game.addText(0, 0, "", {
    font: this.game.fontsize * this.scaleMod + "px " + this.game.font,
    fill: "white",
    align: "center"
  }, this.infoLayer), this.turnInfo.superCharge.anchor.setTo(.5, .5), this.turnInfo.superCharge.stroke = "#000000", this.turnInfo.superCharge.strokeThickness = 2, this.turnInfo.superCharge.visible = !1, this.text = this.game.addText(0, 0, "", {
    font: this.game.fontsize * this.scaleMod + "px " + this.game.font,
    fill: "white",
    align: "center"
  }, this.infoLayer), this.text.anchor.setTo(.5, 0), this.text.setShadow(3, 3, "rgba(0,0,0,0.5)", 5), this.text.stroke = "#000000", this.text.strokeThickness = 2, this.text.visible = !1
}, Main.Effects.prototype = {
  particleBurst: function(a, b, c) {
    this.emitter.x = a, this.emitter.y = b, this.emitter.start(!0, 4e3, null, c)
  },
  showText: function(a, d, c, e) {
    this.text.text = d, this.text.fill = c ? c : "#FFBF00", this.text.x = a.x, this.text.y = a.y - this.tilesize;
    var b = this.game.add.tween(this.text);
    b.onStart.addOnce(function() {
      this.text.visible = !0, this.text.alpha = 1
    }, this), b.onComplete.addOnce(function() {
      this.text.visible = !1
    }, this), b.to({
      y: a.y - 1.5 * this.tilesize,
      alpha: 0
    }, e || 4200, Phaser.Easing.Cubic.Out, !0)
  },
  sayText: function(b, e, c, d) {
    this.text.text = e, this.text.fill = c ? c : "#FFBF00", this.text.x = b.x, this.text.y = b.y - this.tilesize;
    var a = this.game.add.tween(this.text);
    a.onStart.addOnce(function() {
      this.text.visible = !0, this.text.alpha = 1
    }, this), a.onComplete.addOnce(function() {
      this.text.visible = !1
    }, this), a.to({
      alpha: 1
    }, d || 1e3, Phaser.Easing.Cubic.In, !0), window.setTimeout(function() {
      a.to({
        alpha: 0
      }, 1e3, Phaser.Easing.Cubic.Out, !0)
    }, d)
  },
  showInfos: function(a, f) {
    if (!(!f && this.game.input.circle.y <= (this.game.mobile ? this.tilesize / 2 : this.tilesize) || !this.game.isPlayersTurn() || this.game.spellbook.isOpen || this.game.ingame.isOpen || this.game.helpScreen.isOpen)) {
      "function" == typeof this.game.enemies.onInfo && this.game.enemies.onInfo.call(this.game.enemies.onInfo.context, a), this.game.centerCameraOnSprite(a, 6, 500, !0), this.game.player.showIndicator = !0, this.healthLoss(a.x, a.y, a, 0, function() {
        this.reach.setAll("visible", !1)
      }, !0), this.reach.setAll("visible", !1);
      var c = a.speed;
      a.frozen == this.game.spells.spellCollection.iceBreath.duration ? c = 0 : a.frozen > 0 ? c = 1 : a.accelerated > 0 && (c += this.game.difficulty < 2 ? 1 : 2);
      var e = this.game.pathfinder.getReach(this.game.enemies.getPosition(a), c, !0),
        d = e.length,
        b = this.reach.getAt(60);
      for (b.x = a.x - this.tilesize / 2, b.y = a.y - this.tilesize / 2 - (a.off || 0), b.visible = !0; d--;) b = this.reach.getAt(d), b.x = e[d].x * this.tilesize, b.y = e[d].y * this.tilesize, b.visible = !0
    }
  },
  hideInfos: function() {
    this.reach.setAll("visible", !1), this.health.setAll("visible", !1), this.stateEffects.animations.stop(), this.stateEffects.visible = !1, this.turnInfo.visible = !1, this.stateEffects.shield.animations.stop(), this.stateEffects.shield.visible = !1, this.turnInfo.shield.visible = !1, this.stateEffects.acceleration.animations.stop(), this.stateEffects.acceleration.visible = !1, this.turnInfo.acceleration.visible = !1, this.stateEffects.superCharge.animations.stop(), this.stateEffects.superCharge.visible = !1, this.turnInfo.superCharge.visible = !1
  },
  healthLoss: function(e, g, a, k, j, c, b, l) {
    null != j && this.health.getAt(0).events.onAnimationComplete.addOnce(j, l || this), this.hideInfos();
    var d = Math.round(a.maxhealth / 2),
      f = (a.maxhealth / 2, (a.health > 0 ? a.health : 0) / 2),
      h = (a.health > 0 ? k : k + a.health) / 2;
    if (this.health.forEach(function(a) {
      var b = a.parent.getIndex(a);
      d > b && (a.x = e - (d - 1) / 2 * (this.tilesize / 2 + 8) + b * (this.tilesize / 2 + 8), a.y = g - this.tilesize / 2, a.animations.stop(), f >= b + 1 || 0 == h ? (isHalf = f == b + .5, isEmpty = b >= f + h, isHalf ? a.animations.play("half", c ? 2 : 6, !1) : isEmpty ? a.animations.play("empty", c ? 2 : 6, !1) : a.animations.play("full", c ? 2 : 6, !1)) : h > 0 && (lostSecondHalf = b + .5 == f, lostFirstHalf = b + .5 == f + h, isEmpty = b >= f + h, lostSecondHalf ? a.animations.play("lostSecondHalf", c ? 2 : 6, !1) : lostFirstHalf ? a.animations.play("lostFirstHalf", c ? 2 : 6, !1) : isEmpty ? a.animations.play("empty", c ? 2 : 6, !1) : a.animations.play("lostFull", c ? 2 : 6, !1)))
    }, this), null == b && (b = {
      shielded: !1,
      supercharged: !1,
      accelerated: !1,
      burning: !1,
      frozen: !1,
      anything: !1
    }), (a.shielded > 0 || b.shielded) && (this.turnInfo.shield.x = e + (d - 1) / 2 * (this.tilesize / 2 + 8) + 30, this.turnInfo.shield.y = g - this.tilesize / 2 + 4, this.turnInfo.shield.text = b.shielded ? (a.shielded + 1).toString() : a.shielded.toString(), this.turnInfo.shield.visible = !0, this.shieldInfo(this.turnInfo.shield.x + 8, this.turnInfo.shield.y + 2, function() {
      this.game.effects.turnInfo.shield.visible = !1
    }, c), d += 2, b.shielded)) {
      var i = this;
      window.setTimeout(function() {
        i.turnInfo.shield.text = a.shielded.toString()
      }, 500)
    }
    if ((a.accelerated > 0 || b.accelerated) && (this.turnInfo.acceleration.x = e + (d - 1) / 2 * (this.tilesize / 2 + 8) + 30, this.turnInfo.acceleration.y = g - this.tilesize / 2 + 4, this.turnInfo.acceleration.text = b.accelerated ? (a.accelerated + 1).toString() : a.accelerated.toString(), this.turnInfo.acceleration.visible = !0, this.accelerationInfo(this.turnInfo.acceleration.x + 8, this.turnInfo.acceleration.y + 2, function() {
      this.game.effects.turnInfo.acceleration.visible = !1
    }, c), d += 2, b.accelerated)) {
      var i = this;
      window.setTimeout(function() {
        i.turnInfo.acceleration.text = a.accelerated.toString()
      }, 500)
    }
    if ((a.supercharged > 0 || b.supercharged) && (this.turnInfo.superCharge.x = e + (d - 1) / 2 * (this.tilesize / 2 + 8) + 30, this.turnInfo.superCharge.y = g - this.tilesize / 2 + 4, this.turnInfo.superCharge.text = b.supercharged ? (a.supercharged + 1).toString() : a.supercharged.toString(), this.turnInfo.superCharge.visible = !0, this.superChargeInfo(this.turnInfo.superCharge.x + 8, this.turnInfo.superCharge.y + 2, function() {
      this.game.effects.turnInfo.superCharge.visible = !1
    }, c), d += 2, b.supercharged)) {
      var i = this;
      window.setTimeout(function() {
        i.turnInfo.superCharge.text = a.supercharged.toString()
      }, 500)
    }
    if (a.burning > 0 || b.burning) {
      if (this.turnInfo.x = e + (d - 1) / 2 * (this.tilesize / 2 + 8) + 28, this.turnInfo.y = g - this.tilesize / 2 + 4, this.turnInfo.text = b.burning ? (a.burning + 1).toString() : a.burning.toString(), this.turnInfo.visible = !0, this.burning(this.turnInfo.x + 14, this.turnInfo.y - 2, function() {
        this.game.effects.turnInfo.visible = !1
      }, c), b.burning) {
        var i = this;
        window.setTimeout(function() {
          i.turnInfo.text = a.burning.toString()
        }, 500)
      }
    } else if ((a.frozen > 0 || b.frozen) && (this.turnInfo.x = e + (d - 1) / 2 * (this.tilesize / 2 + 8) + 28, this.turnInfo.y = g - this.tilesize / 2 + 4, this.turnInfo.text = b.frozen ? (a.frozen + 1).toString() : a.frozen.toString(), this.turnInfo.visible = !0, this.frozen(this.turnInfo.x + 14, this.turnInfo.y - 2, function() {
      this.game.effects.turnInfo.visible = !1
    }, c), b.frozen)) {
      var i = this;
      window.setTimeout(function() {
        i.turnInfo.text = a.frozen.toString()
      }, 500)
    }
  },
  strike: function(c, d, a, b) {
    null != a && (this.effects1.events.onAnimationComplete.remove(a, b || this), this.effects1.events.onAnimationComplete.addOnce(a, b || this)), this.effects1.reset(c, d - 6), 1 == Math.round(1 * Math.random()) ? this.effects1.animations.play("strike1", 12, !1) : this.effects1.animations.play("strike2", 12, !1)
  },
  scratch: function(c, d, a, b) {
    null != a && (this.effects1.events.onAnimationComplete.remove(a, b || this), this.effects1.events.onAnimationComplete.addOnce(a, b || this)), this.effects1.reset(c, d - 2), this.effects1.animations.play("scratch", 8, !1)
  },
  greenBlob: function(c, d, a, b) {
    null != a && (this.effects1.events.onAnimationComplete.remove(a, b || this), this.effects1.events.onAnimationComplete.addOnce(a, b || this)), this.effects1.reset(c, d - 6), this.effects1.animations.play("greenBlob", 8, !1)
  },
  purpleBlob: function(c, d, a, b) {
    null != a && (this.effects1.events.onAnimationComplete.remove(a, b || this), this.effects1.events.onAnimationComplete.addOnce(a, b || this)), this.effects1.reset(c, d - 6), this.effects1.animations.play("purpleBlob", 8, !1)
  },
  blueblast: function(c, d, a, b) {
    null != a && (this.effects1.events.onAnimationComplete.remove(a, b || this), this.effects1.events.onAnimationComplete.addOnce(a, b || this)), this.effects1.reset(c, d), this.effects1.animations.play("blueblast", 10, !1), this.audioplayer.playBlast()
  },
  blueNova: function(d, e, a, b) {
    null != a && (this.effects1.events.onAnimationComplete.remove(a, b || this), this.effects1.events.onAnimationComplete.addOnce(a, b || this)), this.effects1.reset(d, e), this.effects1.alpha = .5, this.effects1.animations.play("blueNova", 12, !1), this.audioplayer.playBlast();
    var c = this.game.add.tween(this.effects1.scale);
    c.onComplete.add(function() {
      var a = this.game.add.tween(this.effects1);
      a.onComplete.add(function() {
        this.effects1.alpha = 1, this.effects1.scale.setTo(1, 1)
      }, this), a.to({
        alpha: 0
      }, 150, Phaser.Easing.Linear.None, !0)
    }, this), c.to({
      x: 3,
      y: 3
    }, 300, Phaser.Easing.Linear.None, !0)
  },
  arrowhit: function(c, d, a, b) {
    null != a && (this.effects1.events.onAnimationComplete.remove(a, b || this), this.effects1.events.onAnimationComplete.addOnce(a, b || this)), this.audioplayer.playBowImpact(), this.effects1.reset(c, d), this.effects1.animations.play("arrowhit", 10, !1)
  },
  alert: function(c, d, a, b) {
    null != a && (this.effects1.events.onAnimationComplete.remove(a, b || this), this.effects1.events.onAnimationComplete.addOnce(a, b || this)), this.effects1.reset(c, d - 16), this.effects1.animations.play("alert", 2, !1)
  },
  callHelp: function(c, d, a, b) {
    null != a && (this.effects1.events.onAnimationComplete.remove(a, b || this), this.effects1.events.onAnimationComplete.addOnce(a, b || this)), this.effects1.reset(c, d - 16), this.effects1.animations.play("callHelp", 2, !1)
  },
  immune: function(c, d, a, b) {
    null != a && (this.effects1.events.onAnimationComplete.remove(a, b || this), this.effects1.events.onAnimationComplete.addOnce(a, b || this)), this.effects1.reset(c, d), this.effects1.animations.play("immune", 4, !1)
  },
  accelerate: function(c, d, a, b) {
    null != a && (this.effects1.events.onAnimationComplete.remove(a, b || this), this.effects1.events.onAnimationComplete.addOnce(a, b || this)), this.effects1.reset(c, d), this.effects1.animations.play("accelerate", 16, !1)
  },
  sleep: function(b, c, a) {
    null != a && (this.effects1.events.onAnimationComplete.remove(a, this.game), this.effects1.events.onAnimationComplete.addOnce(a, this.game)), this.effects1.reset(b, c - .3 * this.tilesize), this.effects1.animations.play("sleep", 2, !1);
    var d = this.game.add.tween(this.effects1);
    d.to({
      x: b,
      y: c - .7 * this.tilesize
    }, 450, Phaser.Easing.Linear.None, !0)
  },
  poof: function(c, d, a, b) {
    null != a && (this.effects2.events.onAnimationComplete.remove(a, b || this), this.effects2.events.onAnimationComplete.addOnce(a, b || this)), this.effects2.reset(c, d), this.effects2.animations.play("poof", 8, !1)
  },
  explosionPoof: function(c, d, a, b) {
    null != a && (this.effects2.events.onAnimationComplete.remove(a, b || this), this.effects2.events.onAnimationComplete.addOnce(a, b || this)), this.effects2.reset(c, d), this.effects2.animations.play("explosionPoof", 8, !1)
  },
  greyPoof: function(c, d, a, b) {
    null != a && (this.effects2.events.onAnimationComplete.remove(a, b || this), this.effects2.events.onAnimationComplete.addOnce(a, b || this)), this.effects2.reset(c, d), this.effects2.animations.play("greyPoof", 8, !1)
  },
  superCharge: function(c, d, a, b) {
    null != a && (this.effects2.events.onAnimationComplete.remove(a, b || this), this.effects2.events.onAnimationComplete.addOnce(a, b || this)), this.effects2.reset(c, d), this.effects2.animations.play("superCharge", 8, !1)
  },
  explodingStone: function(c, d, a, b) {
    null != a && (this.effects2.events.onAnimationComplete.remove(a, b || this), this.effects2.events.onAnimationComplete.addOnce(a, b || this)), this.effects2.reset(c, d), this.effects2.animations.play("explodingStone", 8, !1)
  },
  crossCut: function(c, d, a, b) {
    null != a && (this.effects2.events.onAnimationComplete.remove(a, b || this), this.effects2.events.onAnimationComplete.addOnce(a, b || this)), this.effects2.reset(c, d), this.effects2.animations.play("crossCut", 12, !1)
  },
  splode: function(c, d, a, b) {
    null != a && (this.effects2.events.onAnimationComplete.remove(a, b || this), this.effects2.events.onAnimationComplete.addOnce(a, b || this)), this.effects2.reset(c, d), this.effects2.animations.play("splode", 16, !1)
  },
  blueBall: function(c, d, a, b) {
    null != a && (this.effects2.events.onAnimationComplete.remove(a, b || this), this.effects2.events.onAnimationComplete.addOnce(a, b || this)), this.effects2.reset(c, d), this.effects2.animations.play("blueBall", 16, !1)
  },
  blueSparkle: function(c, d, a, b) {
    null != a && (this.effects2.events.onAnimationComplete.remove(a, b || this), this.effects2.events.onAnimationComplete.addOnce(a, b || this)), this.effects2.reset(c, d), this.effects2.animations.play("blueSparkle", 10, !1)
  },
  shield: function(c, d, a, b) {
    null != a && (this.shieldEffect.events.onAnimationComplete.remove(a, b || this), this.shieldEffect.events.onAnimationComplete.addOnce(a, b || this)), this.shieldEffect.reset(c, d), this.shieldEffect.animations.play("shield", 8, !1)
  },
  burning: function(c, d, a, e, b) {
    null != a && (this.stateEffects.events.onAnimationComplete.remove(a, b || this), this.stateEffects.events.onAnimationComplete.addOnce(a, b || this)), this.stateEffects.reset(c, d - 4), this.stateEffects.animations.play("burning", e ? 2 : 6, !1)
  },
  frozen: function(b, c, a, d, e) {
    null != a && this.stateEffects.events.onAnimationComplete.addOnce(a, e || this), this.stateEffects.reset(b, c - 4), this.stateEffects.animations.play("frozen", d ? 2 : 6, !1)
  },
  shieldInfo: function(c, d, a, e, b) {
    null != a && (this.stateEffects.shield.events.onAnimationComplete.remove(a, b || this), this.stateEffects.shield.events.onAnimationComplete.addOnce(a, b || this)), this.stateEffects.shield.reset(c - 8, d - 7), this.stateEffects.shield.animations.play("default", e ? 2 : 6, !1)
  },
  accelerationInfo: function(c, d, a, e, b) {
    null != a && (this.stateEffects.acceleration.events.onAnimationComplete.remove(a, b || this), this.stateEffects.acceleration.events.onAnimationComplete.addOnce(a, b || this)), this.stateEffects.acceleration.reset(c - 8, d - 7), this.stateEffects.acceleration.animations.play("default", e ? 2 : 6, !1)
  },
  superChargeInfo: function(c, d, a, e, b) {
    null != a && (this.stateEffects.superCharge.events.onAnimationComplete.remove(a, b || this), this.stateEffects.superCharge.events.onAnimationComplete.addOnce(a, b || this)), this.stateEffects.superCharge.reset(c - 8, d - 7), this.stateEffects.superCharge.animations.play("default", e ? 2 : 6, !1)
  },
  superCharged: function(c, d, a, b) {
    null != a && (this.stateEffects.events.onAnimationComplete.remove(a, b || this), this.stateEffects.events.onAnimationComplete.addOnce(a, b || this)), this.stateEffects.reset(c, d), this.stateEffects.animations.play("superCharged", 8, !1)
  },
  particleCollision: function(a) {
    this.game.audioplayer.playXp(), a.kill()
  },
  update: function() {
    this.emitter.length > 0 && this.emitter.getAt(0).lifespan < 3600 && (this.emitter.forEach(this.game.physics.arcade.moveToObject, this.game, !0, this.game.player.sprite, 200), this.customCollision(this.game.player.sprite, this.emitter, this.particleCollision))
  },
  customCollision: function(a, c) {
    var b = 5;
    c.forEach(function(c) {
      Math.abs(a.x - c.x) < b && Math.abs(a.y - c.y) < b && this.particleCollision(c, a)
    }, this, !0)
  }
}, Main.Cinematics = function(a) {
  this.game = a, this.tilesize = this.game.tilesize, this.scaleMod = this.game.mobile ? 2 : 1, this.cinematics = [], this.trackShot = [], this.enemiesToSummon = []
}, Main.Cinematics.prototype = {
  add: function(a, b, d, c) {
    if (!Main.Game.prototype.skipIntro) switch (this.skip = !1, d) {
      case "enemyIntro":
        this.cinematics.push([{
          x: a,
          y: b,
          callback: this.startEnemyIntro,
          ctx: this,
          args: {
            character: c
          }
        }]), this.prepareEnemyIntro(c);
        break;
      case "thiefCasts":
        this.createThief(a, b), this.game.enemies.group.forEach(function(a) {
          this.enemiesToSummon.push(a), a.makeInvisible()
        }, this), this.cinematics.push([{
          x: a,
          y: b,
          callback: this.startThiefCast,
          ctx: this
        }]);
        break;
      case "thiefWalksUpwards":
        this.createThief(a, b), this.cinematics.push([{
          x: a,
          y: b,
          callback: this.startThiefWalk,
          ctx: this
        }]);
        break;
      case "playerWalk":
        this.game.player.sprite.alpha = 0, this.game.player.sprite.shadow.alpha = 0, this.cinematics.push([{
          x: a,
          y: b,
          callback: this.startPlayerWalk,
          ctx: this
        }]);
        break;
      case "trackShot1":
        this.trackShot.push({
          x: a,
          y: b,
          index: 1
        }), this.cinematics.push([{
          x: a,
          y: b,
          callback: this.prepareTrackShot,
          ctx: this
        }]);
        break;
      case "trackShot2":
        this.trackShot.push({
          x: a,
          y: b,
          index: 2
        });
        break;
      case "trackShot3":
        this.trackShot.push({
          x: a,
          y: b,
          index: 3
        });
        break;
      case "trackShot4":
        this.trackShot.push({
          x: a,
          y: b,
          index: 4
        });
        break;
      case "trackShot5":
        this.trackShot.push({
          x: a,
          y: b,
          index: 5
        })
    }
  },
  playCinematics: function() {
    if (this.cinematics.length > 0) {
      var a = this.cinematics.splice(0, 1)[0];
      a[0].callback.call(a[0].ctx, a[0].x, a[0].y, this.playCinematics, this, a[0].args);
      for (var b = 1; b < a.length; b++) a[b].callback.call(a[b].ctx, a[b].x, a[b].y, null, null, a[0].args)
    } else this.game.nextTurn(!0)
  },
  skipCinematics: function() {
    this.skip = !0
  },
  prepareTrackShot: function(c, d, a, b) {
    this.trackShot.sort(function(a, b) {
      return b.index - a.index
    }), this.playTrackShot(a, b)
  },
  playTrackShot: function(d, e, a, b) {
    if (!this.skip && this.trackShot.length > 0) {
      var c = this.game.posToCoord(this.trackShot.pop());
      this.game.centerCameraOnSprite(c, 8, null, !1, this.playTrackShot, this, 0, 0, a, b)
    } else this.playCinematics()
  },
  prepareEnemyIntro: function(a) {
    switch (a.name) {
      case "sewerRat":
        break;
      case "spiderQueen":
        a.setPosition(34, 8), this.cinematics[this.cinematics.length - 1][this.cinematics[this.cinematics.length - 1].length - 1].x = a.getPosition().x, this.cinematics[this.cinematics.length - 1][this.cinematics[this.cinematics.length - 1].length - 1].y = a.getPosition().y;
        break;
      case "necromancer":
        "world2-3" == this.game.level.id && (a.skeleton = this.game.levelManager.charMap[14][19], a.skeleton.makeInvisible(), a.skeleton.setPosition(27, 14));
        break;
      case "lavaGolem":
        "world3-3" == this.game.level.id && (a.goblinMage1 = this.game.levelManager.charMap[17][13], a.goblinMage1.setPosition(12, 15), a.goblinMage2 = this.game.levelManager.charMap[17][15], a.goblinMage2.setPosition(16, 15), a.goblinWarrior1 = this.game.levelManager.charMap[19][12], a.goblinWarrior1.setPosition(10, 18), a.goblinWarrior2 = this.game.levelManager.charMap[19][16], a.goblinWarrior2.setPosition(18, 18));
        break;
      case "drowMage":
        "world4-2" == this.game.level.id && (a.rat = this.game.enemies.addEnemy(15, 18, "rat"), a.spider = this.game.enemies.addEnemy(15, 16, "spiderQueen"), a.spider.makeInvisible());
        break;
      case "drowQueen":
        "world4-3" == this.game.level.id && (a.warrior1 = this.game.levelManager.charMap[33][19], a.warrior1.setPosition(18, 30), a.warrior2 = this.game.levelManager.charMap[33][21], a.warrior2.setPosition(22, 30));
        break;
      case "djinn":
        "world5-2" == this.game.level.id && (a.windling = this.game.levelManager.charMap[11][12], a.windling.makeInvisible(), a.windling.setPosition(17, 11))
    }
  },
  startEnemyIntro: function(d, e, b, c, a) {
    this.game.centerCameraOnSprite(a.character, 8, null, !1, this.enemyIntro, this, a.character, b, c)
  },
  enemyIntro: function(a, c, d) {
    switch (a.name) {
      case "sewerRat":
        if (this.skip) "function" == typeof c && c.call(d);
        else {
          a.events.onAnimationComplete.addOnce(c, d), a.events.onAnimationComplete.addOnce(function() {
            a.animations.play("idle", 2, !0)
          }, this);
          var b = Main.spriteOffset[a.name];
          a.animations.add("intro", [4 + b, 5 + b, 6 + b, 5 + b, 6 + b, 5 + b, 6 + b, 5 + b, 4 + b]), a.animations.play("intro", 6), a.playAttackSound()
        }
        break;
      case "spiderQueen":
        if (a.path = this.game.pathfinder.findPath({
          x: 34,
          y: 8
        }, {
          x: 35,
          y: 7
        }), this.skip) "function" == typeof c && c.call(d), this.game.enemies.continueOnPath(a, !0);
        else {
          a.events.onAnimationComplete.addOnce(function() {
            this.game.enemies.continueOnPath(a, !0, function() {
              a.walkToTile({
                x: 36,
                y: 7
              }, !0, function() {
                a.animations.play("idle", 2, !0), "function" == typeof c && c.call(d)
              }, this)
            }, this)
          }, this);
          var b = Main.spriteOffset[a.name];
          a.animations.add("intro", [4 + b, 5 + b, 6 + b, 5 + b, 6 + b, 5 + b, 6 + b, 5 + b, 4 + b]), a.animations.play("intro", 6), a.playAttackSound.call(this.game.audioplayer)
        }
        break;
      case "necromancer":
        if ("world2-3" != this.game.level.id) "function" == typeof c && c.call(d);
        else {
          var e = this.skip === !0;
          e && "function" == typeof c && c.call(d), a.skeleton.path = this.game.pathfinder.findPath({
            x: 27,
            y: 14
          }, {
            x: 19,
            y: 14
          }), a.events.onAnimationComplete.addOnce(function() {
            this.game.audioplayer.stopBloodtile(), e ? this.game.enemies.continueOnPath(a.skeleton, !0) : this.game.centerCameraOnSprite(a.skeleton, 8, null, !0, this.game.enemies.continueOnPath, this.game.enemies, a.skeleton, !0, c, d), this.game.audioplayer.playTile(), a.skeleton.makeVisible(), a.animations.play("idle", 2, !0)
          }, this);
          var b = Main.spriteOffset[a.name];
          a.animations.add("intro", [4 + b, 5 + b, 6 + b, 5 + b, 6 + b, 5 + b, 6 + b, 5 + b, 4 + b]), a.animations.play("intro", 6), a.playAttackSound.call(this.game.audioplayer), this.game.audioplayer.playBloodtile()
        }
        break;
      case "lavaGolem":
        if ("world3-3" != this.game.level.id) "function" == typeof c && c.call(d);
        else {
          var e = this.skip === !0;
          e && "function" == typeof c && c.call(d), a.goblinMage1.path = this.game.pathfinder.findPath({
            x: 12,
            y: 15
          }, {
            x: 13,
            y: 17
          }), a.goblinMage2.path = this.game.pathfinder.findPath({
            x: 16,
            y: 15
          }, {
            x: 15,
            y: 17
          }), a.goblinWarrior1.path = this.game.pathfinder.findPath({
            x: 10,
            y: 18
          }, {
            x: 12,
            y: 19
          }), a.goblinWarrior2.path = this.game.pathfinder.findPath({
            x: 18,
            y: 18
          }, {
            x: 16,
            y: 19
          }), a.events.onAnimationComplete.addOnce(function() {
            this.game.audioplayer.stopSound("golemAttack2"), a.animations.play("idle", 2, !0), this.game.enemies.continueOnPath(a.goblinMage1, !0), this.game.enemies.continueOnPath(a.goblinMage2, !0), this.game.enemies.continueOnPath(a.goblinWarrior1, !0), e ? this.game.enemies.continueOnPath(a.goblinWarrior2, !0) : this.game.enemies.continueOnPath(a.goblinWarrior2, !0, c, d)
          }, this);
          var b = Main.spriteOffset[a.name];
          a.animations.add("intro", [4 + b, 5 + b, 6 + b, 6 + b, 6 + b, 6 + b, 6 + b, 6 + b, 4 + b, 5 + b, 6 + b]), a.animations.play("intro", 6), this.game.audioplayer.playSound("golemAttack2", !0)
        }
        break;
      case "drowMage":
        if ("world4-2" != this.game.level.id) "function" == typeof c && c.call(d);
        else {
          var e = this.skip === !0;
          e && "function" == typeof c && c.call(d), a.rat.events.onKilled.addOnce(function() {
            a.events.onAnimationComplete.addOnce(function() {
              a.animations.play("idle", 2, !0), this.game.audioplayer.stopBloodtile(), this.game.audioplayer.playTile(), this.game.enemies.removeEnemy(a.spider), e ? this.game.effects.greyPoof(a.spider.x, a.spider.y) : this.game.effects.greyPoof(a.spider.x, a.spider.y, c, d)
            }, this), a.animations.play("intro", 6)
          }, this), a.events.onAnimationComplete.addOnce(function() {
            a.animations.play("idle", 2, !0), this.game.audioplayer.stopBloodtile(), this.game.audioplayer.playTile(), a.spider.makeVisible(), a.spider.walkToTile({
              x: 15,
              y: 17
            }, !0, function() {
              a.animations.play("idle", 2, !0), a.spider.events.onAnimationComplete.addOnce(function() {
                a.rat.kill(), a.rat.die(!0)
              }, this), a.spider.animations.play("attack"), a.spider.meleeAnimation.call(this.game.effects, a.rat.x, a.rat.y), a.spider.playAttackSound.call(this.game.audioplayer)
            }, this)
          }, this);
          var b = Main.spriteOffset[a.name];
          a.animations.add("intro", [4 + b, 5 + b, 6 + b, 5 + b, 6 + b, 5 + b, 4 + b]), a.animations.play("intro", 6), this.game.audioplayer.playBloodtile()
        }
        break;
      case "drowQueen":
        if ("world4-3" != this.game.level.id) "function" == typeof c && c.call(d);
        else {
          var e = this.skip === !0;
          e && "function" == typeof c && c.call(d), a.warrior1.path = this.game.pathfinder.findPath({
            x: 18,
            y: 30
          }, {
            x: 19,
            y: 33
          }), a.warrior2.path = this.game.pathfinder.findPath({
            x: 22,
            y: 30
          }, {
            x: 21,
            y: 33
          }), a.events.onAnimationComplete.addOnce(function() {
            a.animations.play("idle", 2, !0), this.game.enemies.continueOnPath(a.warrior1, !0), e ? this.game.enemies.continueOnPath(a.warrior2, !0) : this.game.enemies.continueOnPath(a.warrior2, !0, c, d)
          }, this);
          var b = Main.spriteOffset[a.name];
          a.animations.add("intro", [4 + b, 5 + b, 6 + b, 6 + b, 6 + b, 6 + b, 5 + b, 4 + b]), a.animations.play("intro", 6), a.playAttackSound.call(this.game.audioplayer)
        }
        break;
      case "djinn":
        if ("world5-2" != this.game.level.id) "function" == typeof c && c.call(d);
        else {
          var e = this.skip === !0;
          e && "function" == typeof c && c.call(d), a.windling.path = this.game.pathfinder.findPath({
            x: 17,
            y: 11
          }, {
            x: 12,
            y: 11
          }), a.events.onAnimationComplete.addOnce(function() {
            this.game.audioplayer.stopBloodtile(), e ? this.game.enemies.continueOnPath(a.windling, !0) : this.game.centerCameraOnSprite(a.windling, 8, null, !0, this.game.enemies.continueOnPath, this.game.enemies, a.windling, !0, c, d), this.game.audioplayer.playTile(), a.windling.makeVisible(), a.animations.play("idle", 2, !0)
          }, this);
          var b = Main.spriteOffset[a.name];
          a.animations.add("intro", [4 + b, 5 + b, 6 + b, 5 + b, 6 + b, 5 + b, 6 + b, 5 + b, 4 + b]), a.animations.play("intro", 6), a.playAttackSound.call(this.game.audioplayer), this.game.audioplayer.playBloodtile()
        }
        break;
      default:
        "function" == typeof c && c.call(d)
    }
  },
  createThief: function(a, b) {
    this.thief = this.game.layers.chars.create(0, 0, "48bitSprites", Main.spriteOffset.thiefsBack), this.thief.animations.add("idle", [Main.spriteOffset.thiefsBack, Main.spriteOffset.thiefsBack + 1]), this.thief.animations.play("idle", 2, !0), this.thief.anchor.setTo(.5, .5), this.thief.off = -8, this.thief.shadow = this.game.layers.shadows.create(0, 0, "48bitSprites", Main.spriteOffset.shadows), this.thief.shadow.anchor.setTo(.5, .5), this.thief.shadow.off = -2, this.game.setPosition(this.thief, a, b)
  },
  startThiefWalk: function(c, d, a, b) {
    this.skip ? (this.thiefWalk(), "function" == typeof a && a.call(b)) : this.game.centerCameraOnSprite(this.thief, 16, null, !1, function() {
      this.thiefWalk(a, b)
    }, this)
  },
  thiefWalk: function(d, e) {
    this.game.audioplayer.playFootsteps();
    var a = Main.spriteOffset.thiefsBack;
    this.thief.animations.add("walkup", [0 + a, 1 + a, 2 + a, 1 + a]), this.thief.animations.play("walkup", 8, !0);
    var b = {
        x: this.thief.x,
        y: this.thief.y - 2 * this.game.tilesize
      },
      c = this.game.add.tween(this.thief);
    c.onComplete.add(function() {
      this.fadeOutSprite(this.thief, !0, d, e)
    }, this), c.to({
      x: b.x,
      y: b.y
    }, 1e3, Phaser.Easing.Linear.None, !0), c = this.game.add.tween(this.thief.shadow), c.to({
      x: b.x,
      y: b.y
    }, 1e3, Phaser.Easing.Linear.None, !0)
  },
  startThiefCast: function(c, d, a, b) {
    this.skip ? (this.thiefCast(), "function" == typeof a && a.call(b)) : this.game.centerCameraOnSprite(this.thief, 8, null, !1, function() {
      this.thiefCast(a, b)
    }, this)
  },
  thiefCast: function(b, c) {
    var a = Main.spriteOffset.thief;
    this.thief.animations.add("walk", [1 + a, 2 + a, 3 + a, 2 + a]), this.thief.animations.add("attack", [4 + a, 5 + a, 6 + a, 5 + a, 6 + a, 5 + a, 6 + a, 5 + a, 4 + a]), this.thief.scale.x *= -1, this.game.effects.alert(this.thief.x, this.thief.y, function() {
      this.thief.events.onAnimationComplete.add(function() {
        this.game.audioplayer.stopBloodtile(1e3), this.thief.scale.x *= -1, this.thief.animations.play("walk", 8, !0), this.game.audioplayer.playFootsteps();
        var a = {
            x: this.thief.x - 1 * this.game.tilesize,
            y: this.thief.y
          },
          d = this.game.add.tween(this.thief);
        d.onComplete.add(function() {
          this.fadeOutSprite(this.thief, !0, b, c)
        }, this), d.to({
          x: a.x,
          y: a.y
        }, 1e3, Phaser.Easing.Linear.None, !0), d = this.game.add.tween(this.thief.shadow), d.to({
          x: a.x,
          y: a.y
        }, 1e3, Phaser.Easing.Linear.None, !0)
      }, this), this.game.audioplayer.playBloodtile(), this.thief.animations.play("attack", 6, !1), this.summonEnemies()
    }, this)
  },
  summonEnemies: function(a, b) {
    this.enemiesToSummon.length > 0 ? (this.enemiesToSummon.pop().makeVisible(function() {
      this.summonEnemies(a, b)
    }, this), this.game.audioplayer.playTile()) : "function" == typeof a && a.call(b)
  },
  startPlayerWalk: function(a, b, c, d) {
    this.game.centerCameraOnSprite(this.game.player.sprite, 8, null, !0, function() {
      var e = this.game.player.sprite.getPosition();
      this.game.player.setPosition(a, b), this.game.player.walkToTile(e, !0, c, d || this), this.fadeInSprite(this.game.player.sprite)
    }, this)
  },
  tweenSpriteTo: function(a, h, i, f, g, d, e) {
    var c = {
        x: a.x,
        y: a.y - 2 * this.game.tilesize
      },
      b = this.game.add.tween(a);
    f && b.onComplete.add(function() {
      this.fadeOutSprite(a, g, d, e)
    }, this), "function" == typeof d && b.onComplete.add(d, e), b.to({
      x: c.x,
      y: c.y
    }, 1e3, Phaser.Easing.Linear.None, !0), void 0 !== a.shadow && (b = this.game.add.tween(a.shadow), b.to({
      x: c.x,
      y: c.y
    }, 1e3, Phaser.Easing.Linear.None, !0))
  },
  fadeOutSprite: function(b, c, d, e) {
    var a = this.game.add.tween(b);
    c && a.onComplete.add(function() {
      b.destroy()
    }, this), "function" == typeof d && a.onComplete.add(d, e), a.to({
      alpha: 0
    }, 300, Phaser.Easing.Linear.None, !0), void 0 !== b.shadow && (a = this.game.add.tween(b.shadow), c && a.onComplete.add(function() {
      b.shadow.destroy()
    }, this), a.to({
      alpha: 0
    }, 300, Phaser.Easing.Linear.None, !0))
  },
  fadeInSprite: function(a, c, d) {
    a.alpha = 0;
    var b = this.game.add.tween(a);
    "function" == typeof c && b.onComplete.add(function() {
      c.call(d)
    }, this), b.to({
      alpha: 1
    }, 400, Phaser.Easing.Linear.None, !0), void 0 !== a.shadow && (a.shadow.alpha = 0, b = this.game.add.tween(a.shadow), b.to({
      alpha: 1
    }, 400, Phaser.Easing.Linear.None, !0))
  }
}, Main.Pathfinder = function(a) {
  this.game = a
}, Main.Pathfinder.prototype = {
  Node: function(g, h, i) {
    var b, e, c, f = g,
      a = h,
      d = i;
    this.setCome = function(f) {
      b = f, c = Math.floor(Math.abs(d.x - a.x)) + Math.floor(Math.abs(d.y - a.y)), e = b + c
    }, this.getCome = function() {
      return b
    }, this.getToGo = function() {
      return c
    }, this.getCost = function() {
      return e
    }, this.getPosition = function() {
      return a
    }, this.getRoot = function() {
      return f
    }, null == f ? (b = 0, c = Math.floor(Math.abs(d.x - a.x)) + Math.floor(Math.abs(d.y - a.y)), e = b + c) : (b = f.getCome() + 1, c = Math.floor(Math.abs(d.x - a.x)) + Math.floor(Math.abs(d.y - a.y)), e = b + c), this.toString = function() {
      return "Position: [" + a.x + ", " + a.y + "], Come: " + b + ", Cost: " + e + ", toGo: " + c
    }
  },
  open: [],
  closed: [],
  findPath: function(e, c, f) {
    this.map = this.game.levelManager.pathMap, this.charMap = this.game.levelManager.charMap;
    var d = !1;
    this.open = [], this.closed = [];
    var g = new this.Node(null, e, c);
    for (this.open.push(g); !d && (d = this.checkNeighbors(this.open[0], c, f), this.open.sort(function(a, b) {
      return a.getCost() - b.getCost()
    }), 0 != this.open.length););
    var b = [];
    if (this.closed.length > 0) {
      this.closed.sort(function(a, b) {
        return a.getCome() - b.getCome()
      }), this.closed.sort(function(a, b) {
        return a.getToGo() - b.getToGo()
      });
      for (var a = this.closed[0]; null != a.getRoot();) b.push({
        x: a.getPosition().x,
        y: a.getPosition().y
      }), a = a.getRoot()
    }
    return this.path = b, b
  },
  inReach: [],
  getReach: function(b, d, e) {
    this.map = this.game.levelManager.pathMap, this.charMap = this.game.levelManager.charMap, this.open.length = 0, this.closed.length = 0, this.inReach.length = 0;
    var c = {
      x: -1,
      y: -1
    };
    for (this.open.push(new this.Node(null, b, c)); this.open.length > 0;) this.checkNeighbors(this.open[0], c, e), this.open.sort(function(a, b) {
      return a.getCost() - b.getCost()
    });
    for (var f = this.closed.length, a = 0, g = f; g > a; a++)
      if (this.closed[a].getCome() <= d) {
        if (this.closed[a].getPosition().x == b.x && this.closed[a].getPosition().y == b.y) continue;
        this.inReach.push(this.closed[a].getPosition()), this.inReach[this.inReach.length - 1].blocked = this.closed[a].blocked
      }
    return this.inReach
  },
  checkNeighbors: function(c, b, i) {
    "function" == typeof this.checkNeighbors.oncall && this.checkNeighbors.oncall();
    var h = !1;
    if (position = c.getPosition(), position.y > 0) {
      var j = {
          x: position.x,
          y: position.y - 1,
          cost: c.getCome() + 1
        },
        d = new this.Node(c, j, b);
      if (!this.map[position.y - 1][position.x] || (i ? 0 : null != this.charMap[position.y - 1][position.x]) || this.isInClosed(d)) d.getPosition().x == b.x && d.getPosition().y == b.y && (h = !0);
      else if (this.isInOpen(d)) {
        for (var a = 0; a < this.open.length; a++)
          if (this.open[a].getPosition().x == position.x && this.open[a].getPosition().y == position.y) {
            this.open[a].getCome() > d.getCome() && this.open[a].setCome(d.getCome());
            break
          }
      } else this.open.push(d)
    }
    if (position.y < this.map.length - 1) {
      var j = {
          x: position.x,
          y: position.y + 1,
          cost: c.getCome() + 1
        },
        e = new this.Node(c, j, b);
      if (!this.map[position.y + 1][position.x] || (i ? 0 : null != this.charMap[position.y + 1][position.x]) || this.isInClosed(e)) e.getPosition().x == b.x && e.getPosition().y == b.y && (h = !0);
      else if (this.isInOpen(e)) {
        for (var a = 0; a < this.open.length; a++)
          if (this.open[a].getPosition().x == position.x && this.open[a].getPosition().y == position.y) {
            this.open[a].getCome() > e.getCome() && this.open[a].setCome(e.getCome());
            break
          }
      } else this.open.push(e)
    }
    if (position.x > 0) {
      var j = {
          x: position.x - 1,
          y: position.y,
          cost: c.getCome() + 1
        },
        f = new this.Node(c, j, b);
      if (!this.map[position.y][position.x - 1] || (i ? 0 : null != this.charMap[position.y][position.x - 1]) || this.isInClosed(f)) f.getPosition().x == b.x && f.getPosition().y == b.y && (h = !0);
      else if (this.isInOpen(f)) {
        for (var a = 0; a < this.open.length; a++)
          if (this.open[a].getPosition().x == position.x && this.open[a].getPosition().y == position.y) {
            this.open[a].getCome() > f.getCome() && this.open[a].setCome(f.getCome());
            break
          }
      } else this.open.push(f)
    }
    if (position.x < this.map[position.y].length - 1) {
      var j = {
          x: position.x + 1,
          y: position.y,
          cost: c.getCome() + 1
        },
        g = new this.Node(c, j, b);
      if (!this.map[position.y][position.x + 1] || (i ? 0 : null != this.charMap[position.y][position.x + 1]) || this.isInClosed(g)) g.getPosition().x == b.x && g.getPosition().y == b.y && (h = !0);
      else if (this.isInOpen(g)) {
        for (var a = 0; a < this.open.length; a++)
          if (this.open[a].getPosition().x == position.x && this.open[a].getPosition().y == position.y) {
            this.open[a].getCome() > g.getCome() && this.open[a].setCome(g.getCome());
            break
          }
      } else this.open.push(g)
    }
    return this.removeFromOpen(c), this.closed.push(c), b.x == position.x && b.y == position.y || h
  },
  removeFromOpen: function(d) {
    for (var b = -1, c = d.getPosition(), a = this.open.length; a--;)
      if (this.open[a].getPosition().x == c.x && this.open[a].getPosition().y == c.y) {
        b = a;
        break
      }
    0 > b || this.open.splice(b, 1)
  },
  isInOpen: function(d) {
    for (var b = !1, c = d.getPosition(), a = this.open.length; a-- && !(b = this.open[a].getPosition().x == c.x && this.open[a].getPosition().y == c.y););
    return b
  },
  isInClosed: function(d) {
    for (var b = !1, c = d.getPosition(), a = this.closed.length; a-- && !(b = this.closed[a].getPosition().x == c.x && this.closed[a].getPosition().y == c.y););
    return b
  },
  getDirection: function(a, b) {
    return a.y > b.y ? 0 : a.x < b.x ? 1 : a.y < b.y ? 2 : a.x > b.x ? 3 : 4
  }
}, Main.LineOfSight = function(a) {
  this.game = a
}, Main.LineOfSight.prototype = {
  sign: function(a) {
    return a ? 0 > a ? -1 : 1 : 0
  },
  isTargetVisible: function(a, b, c) {
    return originPosition = this.game.getPosition(a), targetPosition = this.game.getPosition(b), this.lineOfSight(originPosition, targetPosition, c)
  },
  lineOfSight: function(c, e, j) {
    var i = this.game.levelManager.sightMap,
      h = this.game.levelManager.charMap,
      b = c.x,
      a = c.y,
      n = e.x - b,
      k = e.y - a,
      f = 2 * Math.abs(n),
      g = 2 * Math.abs(k),
      l = this.sign(n),
      m = this.sign(k);
    if (f > g) {
      var d = g - f / 2;
      do {
        if (d >= 0 && (a += m, d -= f), b += l, d += g, b == e.x && a == e.y) return !0;
        if (j && null != h[a][b] && (c.x != b || c.y != a)) return !1
      } while (i[a][b]);
      return !1
    }
    var d = f - g / 2;
    do {
      if (d >= 0 && (b += l, d -= g), a += m, d += f, b == e.x && a == e.y) return !0;
      if (j && null != h[a][b] && (c.x != b || c.y != a)) return !1
    } while (i[a][b]);
    return !1
  }
}, Main.HUD = function(a) {
  return this.game = a, this.scaleMod = this.game.mobile ? 2 : 1, this.width = 960 / this.scaleMod, this.height = this.game.tilesize / this.scaleMod, this.group = this.game.layers.hud, this.count = 0, this.score = 0, this.increase = 0, this.increaseScoreFunction, this.create(), this
}, Main.HUD.prototype = {
  create: function() {
    var c = this.group.create(0, 0, "hud");
    c.scale = new Phaser.Point(parseInt(this.width), parseInt(this.height));
    var b = {
      font: this.game.fontsize + "px " + this.game.font,
      fill: "#ffffff",
      align: "left"
    };
    this.lifeLabel = this.game.addText(20 / this.scaleMod, 10 / this.scaleMod, "HP:", b, this.group), this.health = this.game.add.group(this.group, "health"), this.hearts = this.game.add.group(this.group, "hearts"), this.modLife(this.game.player.health, !0), this.heartFlash = this.group.create(0, 0, "items", 84), this.heartFlash.anchor.setTo(.5, .5), this.heartFlash.visible = !1, this.scoreLabel = this.game.addText(this.width - 146 / this.scaleMod, 10 / this.scaleMod, "0 pts", b, this.group), this.scoreLabel.anchor.setTo(1, 0), this.increaseLabel = this.game.addText(this.width - 200 / this.scaleMod, 40 / this.scaleMod, "", b, this.group), this.increaseLabel.anchor.setTo(1, 0), this.book = this.group.create(this.width - 67 / this.scaleMod, 10 / this.scaleMod, "bookIcon", 3), this.book.inputEnabled = !0, this.book.input.useHandCursor = !0, this.book.events.onInputDown.add(this.openSpellbook, this), this.book.visible = this.game.spells.spellCollection.magicMissile.active, this.book.freezeFrames = !0, this.book.animations.add("close", [0, 1, 2, 3]), this.book.animations.add("open", [3, 2, 1, 0]), this.book.animations.add("blink", [3, 3, 2, 2, 2, 2]), this.book.anchor.setTo(1, .18), this.bookFlash = this.group.create(this.book.x - 16 / this.scaleMod, this.book.y, "items", 72), this.bookFlash.anchor.setTo(.5, .18), this.bookFlash.visible = !1, this.menu = this.game.addButton(this.width - 50 / this.scaleMod, 8 / this.scaleMod, "items", this.openMenu, this, 48, 48, 48, this.group), this.xpBG = this.group.create(this.width / 2 - 75 / this.scaleMod, 10 / this.scaleMod, "xpBarEmpty"), this.xpBar = this.group.create(this.xpBG.x, this.xpBG.y, "xpBarFull"), this.xpBG.inputEnabled = !0, this.xpBG.input.useHandCursor = !0, this.xpBG.events.onInputDown.add(this.showXPInfo, this), this.xpCrop = {
      x: 0,
      y: 0,
      width: 1,
      height: this.xpBar.height
    }, this.game.mobile && (this.health.scale = new Phaser.Point(.5, .5), this.hearts.scale = new Phaser.Point(.5, .5), this.heartFlash.scale = new Phaser.Point(.5, .5), this.book.scale = new Phaser.Point(.5, .5), this.bookFlash.scale = new Phaser.Point(.5, .5), this.menu.scale = new Phaser.Point(.5, .5), this.xpBar.scale = new Phaser.Point(.5, .5), this.xpBG.scale = new Phaser.Point(.5, .5)), this.levelUpText = this.game.addText(this.xpBG.x + this.xpBG.width / 2, this.xpBG.y + this.xpBG.height / 2 + 2, "Level Up!", {
      font: 22 / this.scaleMod + "px " + this.game.font,
      fill: "#FFBF00",
      align: "center"
    }), this.levelUpText.anchor.setTo(.5, .5), this.levelUpText.setShadow(3, 3, "rgba(0,0,0,0.5)", 5), this.levelUpText.stroke = "#000000", this.levelUpText.strokeThickness = 2, this.levelUpText.visible = !1, this.gem = this.group.create(this.xpBG.x + this.xpBG.width + 20 / this.scaleMod, this.xpBG.y, "gem", 3), this.pointsLabel = this.game.addText(this.gem.x - 16 / this.scaleMod, this.gem.y + 2 / this.scaleMod, "0", b, this.group), this.pointsLabel.anchor.setTo(0, 0), this.gem.inputEnabled = !0, this.gem.events.onInputDown.add(this.openSpellbook, this), this.gem.visible = this.game.player.lvl > 1, this.pointsLabel.visible = this.game.player.lvl > 1, this.gemFlash = this.group.create(this.gem.x + 16 / this.scaleMod, this.gem.y + 16 / this.scaleMod, "gem", 4), this.gemFlash.anchor.setTo(.5, .5), this.gemFlash.visible = !1, this.updateXP(-1, !1);
    var a = Main.spriteOffset.fire;
    this.fireIce = this.group.create(0, 6 / this.scaleMod, "64bitSprites", a), this.fireIce.scale.x /= 2 * this.scaleMod, this.fireIce.scale.y /= 2 * this.scaleMod, this.fireIce.visible = !1, this.fireIce.animations.add("burning", [a, a + 1]), a = Main.spriteOffset.ice, this.fireIce.animations.add("frozen", [a, a + 1]), this.fireIceTurns = this.game.addText(0, 10 / this.scaleMod, "", {
      font: this.game.fontsize + "px " + this.game.font,
      fill: "white",
      align: "center"
    }, this.group), this.fireIceTurns.stroke = "#000000", this.fireIceTurns.strokeThickness = 2, this.fireIceTurns.anchor.setTo(.5, 0), this.fireIceTurns.visible = !1, this.shield = this.group.create(0, 8 / this.scaleMod, "64bitSprites", Main.spriteOffset.shield), this.shield.scale.x /= 2 * this.scaleMod, this.shield.scale.y /= 2 * this.scaleMod, this.shield.visible = !1, this.shield.inputEnabled = !0, this.shield.input.useHandCursor = !0, this.shield.events.onInputDown.add(function(a) {
      this.showInfo(a, this.game.spells.spellCollection.magicShield.name)
    }, this), this.shieldTurns = this.game.addText(0, 10 / this.scaleMod, "", {
      font: this.game.fontsize + "px " + this.game.font,
      fill: "white",
      align: "center"
    }, this.group), this.shieldTurns.stroke = "#000000", this.shieldTurns.strokeThickness = 2, this.shieldTurns.anchor.setTo(.5, 0), this.shieldTurns.visible = !1, this.invisibility = this.group.create(0, 0, "48bitSprites", Main.spriteOffset.purpleBlast), this.invisibility.visible = !1, this.invisibility.inputEnabled = !0, this.invisibility.input.useHandCursor = !0, this.invisibility.events.onInputDown.add(function(a) {
      this.showInfo(a, this.game.spells.spellCollection.invisibility.name)
    }, this), this.invisibilityTurns = this.game.addText(0, 10 / this.scaleMod, "", {
      font: this.game.fontsize + "px " + this.game.font,
      fill: "white",
      align: "center"
    }, this.group), this.invisibilityTurns.stroke = "#000000", this.invisibilityTurns.strokeThickness = 2, this.invisibilityTurns.anchor.setTo(.5, 0), this.invisibilityTurns.visible = !1, this.acceleration = this.group.create(0, 0, "48bitSprites", Main.spriteOffset.acceleration), this.acceleration.visible = !1, this.acceleration.inputEnabled = !0, this.acceleration.input.useHandCursor = !0, this.acceleration.events.onInputDown.add(function(a) {
      this.showInfo(a, this.game.spells.spellCollection.acceleration.name)
    }, this), this.accelerationTurns = this.game.addText(0, 10 / this.scaleMod, "", {
      font: this.game.fontsize + "px " + this.game.font,
      fill: "white",
      align: "center"
    }, this.group), this.accelerationTurns.stroke = "#000000", this.accelerationTurns.strokeThickness = 2, this.accelerationTurns.anchor.setTo(.5, 0), this.accelerationTurns.visible = !1, this.supercharged = this.group.create(0, 0, "48bitSprites", Main.spriteOffset.superCharged), this.supercharged.visible = !1, this.supercharged.inputEnabled = !0, this.supercharged.input.useHandCursor = !0, this.supercharged.events.onInputDown.add(function(a) {
      this.showInfo(a, this.game.spells.spellCollection.superCharge.name)
    }, this), this.superchargedTurns = this.game.addText(0, 10 / this.scaleMod, "", {
      font: this.game.fontsize + "px " + this.game.font,
      fill: "white",
      align: "center"
    }, this.group), this.superchargedTurns.stroke = "#000000", this.superchargedTurns.strokeThickness = 2, this.superchargedTurns.anchor.setTo(.5, 0), this.superchargedTurns.visible = !1, this.game.mobile && (this.gem.scale = new Phaser.Point(.5, .5), this.gemFlash.scale = new Phaser.Point(.5, .5), this.invisibility.scale = new Phaser.Point(.5, .5), this.acceleration.scale = new Phaser.Point(.5, .5), this.supercharged.scale = new Phaser.Point(.5, .5)), this.info = this.game.addText(0, 50 / this.scaleMod, "", {
      font: this.game.fontsize + "px " + this.game.font,
      fill: "white",
      align: "center"
    }, this.infoLayer), this.info.setShadow(3, 3, "rgba(0,0,0,0.5)", 5), this.info.stroke = "#000000", this.info.strokeThickness = 2, this.info.anchor.setTo(.5, 0), this.info.visible = !1, this.infoTimeout = null, this.infoTween = this.game.add.tween(this.info)
  },
  showInfo: function(a, c) {
    this.infoTween.stop(), window.clearTimeout(this.infoTimeout), this.info.text = c, this.info.x = a.x + a.width / 2, this.info.visible = !0, this.info.alpha = 1;
    var b = this;
    this.infoTimeout = window.setTimeout(function() {
      b.fadeOut(b.info)
    }, 2500)
  },
  showXPInfo: function() {
    var a = this.game.player;
    this.showInfo(this.xpBG, a.lvlTable[a.lvl] - a.xp + " XP to Level Up")
  },
  fadeOut: function(a, b) {
    this.infoTween = this.game.add.tween(a), this.infoTween.onComplete.addOnce(function() {
      a.visible = !1
    }, this), this.infoTween.to({
      alpha: 0
    }, b || 1e3, Phaser.Easing.Cubic.Out, !0)
  },
  flashSpellbook: function() {
    var a = this.game.add.tween(this.bookFlash.scale);
    a.onStart.add(function() {
      this.bookFlash.visible = !0, this.bookFlash.scale.x = 1, this.bookFlash.scale.y = 1
    }, this), a.onComplete.add(function() {
      var a = this.game.add.tween(this.bookFlash.scale);
      a.onComplete.add(function() {
        this.book.visible = !0, this.bookFlash.visible = !1, this.book.animations.play("blink", 4, !0)
      }, this), a.to({
        x: 1,
        y: 1
      }, 500, Phaser.Easing.Cubic.In, !0)
    }, this), a.to({
      x: 2,
      y: 2
    }, 500, Phaser.Easing.Cubic.Out, !0)
  },
  flashGem: function() {
    var a = this.game.add.tween(this.gemFlash.scale);
    a.onStart.add(function() {
      this.gemFlash.visible = !0, this.gemFlash.scale.x = 1, this.gemFlash.scale.y = 1
    }, this), a.onComplete.add(function() {
      var a = this.game.add.tween(this.gemFlash.scale);
      a.onComplete.add(function() {
        this.gem.visible = !0, this.pointsLabel.visible = !0, this.gemFlash.visible = !1
      }, this), a.to({
        x: 1,
        y: 1
      }, 500, Phaser.Easing.Cubic.In, !0)
    }, this), a.to({
      x: 2,
      y: 2
    }, 500, Phaser.Easing.Cubic.Out, !0)
  },
  flashHeart: function() {
    this.heartFlash.x = (this.height - 10 / this.scaleMod) * (this.game.player.maxhealth / 2) + this.height + 2, this.heartFlash.y = 26 / this.scaleMod;
    var a = this.game.add.tween(this.heartFlash.scale);
    a.onStart.add(function() {
      this.heartFlash.visible = !0, this.heartFlash.scale.x = 1, this.heartFlash.scale.y = 1
    }, this), a.onComplete.add(function() {
      var a = this.game.add.tween(this.heartFlash.scale);
      a.onComplete.add(function() {
        this.heartFlash.visible = !1
      }, this), a.to({
        x: 1,
        y: 1
      }, 500, Phaser.Easing.Cubic.In, !0)
    }, this), a.to({
      x: 2,
      y: 2
    }, 500, Phaser.Easing.Cubic.Out, !0)
  },
  modLife: function(a) {
    if (0 == a) return "STUPID CALL: No health modification";
    var f = this.game.player.health % 2 === 0;
    if (this.health.length != Math.ceil(this.game.player.maxhealth / 2)) {
      this.health.removeAll();
      for (var c = 0; c < this.game.player.maxhealth / 2; c++) {
        var d = this.health.create(0, 0, "items", 86);
        d.x = 38 * c + 72, d.y = 10 / this.scaleMod
      }
    }
    if (this.count % 2 > 0) {
      var e = this.hearts.getAt(this.hearts.length - 1);
      this.hearts.remove(e)
    }
    for (; a > 0;) {
      if (this.count % 2 == 0) {
        var b = this.hearts.create(0, 0, "items", 84);
        b.x = 38 * Math.floor(this.count / 2) + 72, b.y = 10 / this.scaleMod
      }
      a--, this.count++
    }
    for (; 0 > a;) {
      if (this.count % 2 != 0) {
        var e = this.hearts.getAt(this.hearts.length - 1);
        this.hearts.remove(e)
      }
      a++, this.count--
    }
    if (!f) {
      var b = this.hearts.create(0, 0, "items", 85);
      b.x = 38 * Math.floor(this.count / 2) + 72, b.y = 10 / this.scaleMod
    }
  },
  updateXP: function(c, i) {
    var a = this.game.player.lvl,
      b = this.game.player.lvlTable,
      h = this.game.player.spellPoints;
    if (-1 == c) return c = this.game.player.xp, this.xpCrop.width = this.xpBG.width * (c - b[a - 1]) / (b[a] - b[a - 1]), this.xpCrop.width < 1 ? this.xpCrop.width = 1 : this.xpCrop.width > this.xpBG.width && (this.xpCrop.width = this.xpBG.width), this.xpBar.crop(this.xpCrop), void this.pointsLabel.setText(h);
    if (this.pointsLabel.setText(h), !(a >= b.length)) {
      if (0 == c) return this.xpCrop.width = (c - b[a - 1]) / (b[a] - b[a - 1]) * this.xpBG.width, this.xpCrop.width < 1 ? this.xpCrop.width = 1 : this.xpCrop.width > this.xpBG.width && (this.xpCrop.width = this.xpBG.width), void this.xpBar.crop(this.xpCrop);
      var e = 0;
      i ? e = 1 : c != b[a] && (e = (c - b[a - 1]) / (b[a] - b[a - 1]));
      var d = this.xpBG.width * e;
      1 > d ? d = 1 : d > this.xpBG.width && (d = this.xpBG.width);
      var g = this,
        f = this.game.add.tween(this.xpCrop);
      1 == e && f.onComplete.addOnce(function() {
        this.levelUpText.visible = !0, this.xpCrop.width = 1, this.xpBar.crop(this.xpCrop), this.updateXP(this.game.player.xp, !1), window.setTimeout(function() {
          g.levelUpText.visible = !1
        }, 4500)
      }, this), f.onUpdateCallback(function() {
        g.xpBar.crop(g.xpCrop)
      }), f.to({
        width: d
      }, 1e3, Phaser.Easing.Linear.None), f.start()
    }
  },
  updateScore: function(c, b) {
    var a = this;
    b > 0 ? (this.increaseLabel.setText("+ " + b), window.setTimeout(function() {
      a.increaseLabel.setText("")
    }, 2e3), window.setTimeout(function() {
      a.score = c, a.increase += b, a.increaseScoreFunction = window.setInterval(function() {
        a.increaseScore(a)
      }, 1)
    }, 10)) : (-15 > b && window.setTimeout(function() {
      a.increaseLabel.setText(b), window.setTimeout(function() {
        a.increaseLabel.setText("")
      }, 2e3)
    }, 5), a.score = c, a.increase += b, a.increaseScoreFunction = window.setInterval(function() {
      a.increaseScore(a)
    }, 1))
  },
  increaseScore: function(a) {
    a.increase > 0 ? (a.increase -= 5, a.scoreLabel.setText(a.score - a.increase + " pts")) : a.increase < 0 ? (a.increase += 5, a.scoreLabel.setText(a.score + a.increase + " pts")) : window.clearTimeout(a.increaseScoreFunction)
  },
  updateEffects: function() {
    var b = this.game.player.sprite,
      a = 0,
      c = this.height - 10 / this.scaleMod,
      d = this.xpBG.x - 48 / this.scaleMod;
    b.shielded > 0 ? (this.shield.x = d - c * a, this.shield.visible = !0, this.shieldTurns.x = d - c * a + 16 / this.scaleMod, this.shieldTurns.text = b.shielded.toString(), this.shieldTurns.visible = !0, a++) : (this.shield.visible = !1, this.shieldTurns.visible = !1), b.invisible > 0 ? (this.invisibility.x = d - c * a - 8 / this.scaleMod, this.invisibility.visible = !0, this.invisibilityTurns.x = d - c * a + 16 / this.scaleMod, this.invisibilityTurns.text = b.invisible.toString(), this.invisibilityTurns.visible = !0, a++) : (this.invisibility.visible = !1, this.invisibilityTurns.visible = !1), b.accelerated > 0 ? (this.acceleration.x = d - c * a - 8 / this.scaleMod, this.acceleration.visible = !0, this.accelerationTurns.x = d - c * a + 16 / this.scaleMod, this.accelerationTurns.text = b.accelerated.toString(), this.accelerationTurns.visible = !0, a++) : (this.acceleration.visible = !1, this.accelerationTurns.visible = !1), b.supercharged > 0 ? (this.supercharged.x = d - c * a - 8 / this.scaleMod, this.supercharged.visible = !0, this.superchargedTurns.x = d - c * a + 16 / this.scaleMod, this.superchargedTurns.text = b.supercharged.toString(), this.superchargedTurns.visible = !0, a++) : (this.supercharged.visible = !1, this.superchargedTurns.visible = !1), b.burning > 0 ? (this.fireIceTurns.x = d - c * a + 6 / this.scaleMod, this.fireIceTurns.text = b.burning.toString(), this.fireIceTurns.visible = !0, this.fireIce.x = d - c * a, this.fireIce.animations.play("burning", 6, !0), this.fireIce.visible = !0) : b.frozen > 0 ? (this.fireIceTurns.x = d - c * a + 6 / this.scaleMod, this.fireIceTurns.text = b.frozen.toString(), this.fireIceTurns.visible = !0, this.fireIce.x = d - c * a, this.fireIce.animations.play("frozen", 6, !0), this.fireIce.visible = !0) : (this.fireIce.visible = !1, this.fireIceTurns.visible = !1)
  },
  openMenu: function() {
    this.game.ingame.isOpen ? this.game.ingame.close() : this.game.ingame.open()
  },
  openSpellbook: function() {
    this.game.spellbook.isOpen ? this.game.spellbook.close(!1) : this.game.spellbook.open(!1)
  },
  update: function() {
    this.count != this.game.player.health && this.modLife(this.game.player.health - this.count)
  }
}, Main.Spells = function(b) {
  this.game = b, this.level = this.game.level, this.player = this.game.player, this.caster = this.game.player.sprite, this.activeSpellTiles = [], this.activeSpell = null, this.spellCollection = {
    magicMissile: this.createSpell("magicMissile", [Main.Direction.up, Main.Direction.right, Main.Direction.down], this.magicMissile, Main.SpellType.magic),
    magicNova: this.createSpell("magicNova", [Main.Direction.up, Main.Direction.right, Main.Direction.down, Main.Direction.left], this.magicNova, Main.SpellType.magic),
    fireBreath: this.createSpell("fireBreath", [Main.Direction.up, Main.Direction.d1, Main.Direction.right, Main.Direction.d2, Main.Direction.down], this.fireBreath, Main.SpellType.fire),
    fireBall: this.createSpell("fireBall", [Main.Direction.up, Main.Direction.d1, Main.Direction.right, Main.Direction.d2, Main.Direction.down, Main.Direction.left], this.fireBall, Main.SpellType.fire),
    iceBreath: this.createSpell("iceBreath", [Main.Direction.d1, Main.Direction.right, Main.Direction.d2], this.iceBreath, Main.SpellType.ice),
    iceBall: this.createSpell("iceBall", [Main.Direction.d1, Main.Direction.right, Main.Direction.d2, Main.Direction.left], this.iceBall, Main.SpellType.ice),
    shock: this.createSpell("shock", [Main.Direction.right, Main.Direction.d2, Main.Direction.down], this.shock, Main.SpellType.lightning),
    lightningBolt: this.createSpell("lightningBolt", [Main.Direction.right, Main.Direction.d2, Main.Direction.down, Main.Direction.d4], this.lightningBolt, Main.SpellType.lightning),
    magicShield: this.createSpell("magicShield", [Main.Direction.right, Main.Direction.d2, Main.Direction.d3, Main.Direction.left, Main.Direction.d4, Main.Direction.up, Main.Direction.d1], this.magicShield, Main.SpellType.conjuring, !1),
    invisibility: this.createSpell("invisibility", [Main.Direction.d1, Main.Direction.right, Main.Direction.d2, Main.Direction.down, Main.Direction.d3, Main.Direction.left, Main.Direction.d4], this.invisibility, Main.SpellType.conjuring, !1),
    acceleration: this.createSpell("acceleration", [Main.Direction.d4, Main.Direction.up, Main.Direction.d1, Main.Direction.right, Main.Direction.d2, Main.Direction.down, Main.Direction.d3], this.acceleration, Main.SpellType.conjuring2, !1),
    superCharge: this.createSpell("superCharge", [Main.Direction.down, Main.Direction.d3, Main.Direction.left, Main.Direction.d4, Main.Direction.up, Main.Direction.d1, Main.Direction.d2], this.superCharge, Main.SpellType.conjuring2, !1),
    normalArrow: this.createSpell("normalArrow", [], this.normalArrow, -1, !1),
    summonEnemy: this.createSpell("summonEnemy", [], this.summonEnemy, -1, !1)
  };
  for (var a in this.spellCollection) switch (a) {
    case "magicMissile":
      this.spellCollection[a].name = "Magic Missile", this.spellCollection[a].damage = 1, this.spellCollection[a].objDamage = 1;
      break;
    case "magicNova":
      this.spellCollection[a].name = "Magic Nova", this.spellCollection[a].damage = 1, this.spellCollection[a].objDamage = 3;
      break;
    case "fireBreath":
      this.spellCollection[a].name = "Fire Breath", this.spellCollection[a].damage = 1, this.spellCollection[a].objDamage = 2, this.spellCollection[a].duration = 3;
      break;
    case "fireBall":
      this.spellCollection[a].name = "Fire Ball", this.spellCollection[a].damage = 1, this.spellCollection[a].objDamage = 2, this.spellCollection[a].duration = 3;
      break;
    case "iceBreath":
      this.spellCollection[a].name = "Ice Breath", this.spellCollection[a].damage = 0, this.spellCollection[a].objDamage = 0, this.spellCollection[a].duration = 3;
      break;
    case "iceBall":
      this.spellCollection[a].name = "Ice Ball", this.spellCollection[a].damage = 0, this.spellCollection[a].objDamage = 0, this.spellCollection[a].duration = 3;
      break;
    case "shock":
      this.spellCollection[a].name = "Shock", this.spellCollection[a].damage = 2, this.spellCollection[a].objDamage = 2;
      break;
    case "lightningBolt":
      this.spellCollection[a].name = "Lightning Bolt", this.spellCollection[a].damage = 2, this.spellCollection[a].objDamage = 2;
      break;
    case "magicShield":
      this.spellCollection[a].name = "Magic Shield", this.spellCollection[a].duration = 13, this.spellCollection[a].uses = 1;
      break;
    case "invisibility":
      this.spellCollection[a].name = "Invisibility", this.spellCollection[a].duration = 7;
      break;
    case "acceleration":
      this.spellCollection[a].name = "Acceleration", this.spellCollection[a].duration = 5, this.spellCollection[a].strength = 2;
      break;
    case "superCharge":
      this.spellCollection[a].name = "Extension", this.spellCollection[a].duration = 3, this.spellCollection[a].strength = 2;
      break;
    case "normalArrow":
      this.spellCollection[a].name = "Arrow", this.spellCollection[a].damage = 1, this.spellCollection[a].objDamage = 1;
      break;
    case "summonEnemy":
      this.spellCollection[a].name = "Summoning", this.spellCollection[a].duration = 0, this.spellCollection[a].strength = 1
  }
  "world0-1" == this.game.level.id && this.activateAll()
}, Main.Direction = {
  up: 0,
  d1: 1,
  right: 2,
  d2: 3,
  down: 4,
  d3: 5,
  left: 6,
  d4: 7
}, Main.SpellType = {
  magic: 1,
  fire: 2,
  ice: 3,
  lightning: 4,
  summoning: 5,
  conjuring: 6,
  conjuring2: 7
}, Main.Spells.prototype = {
  activate: function(a) {
    this.spellCollection[a].active = !0, this.game.spellbook.marker = this.spellCollection[a].type
  },
  activateAll: function() {
    for (var a in this.spellCollection) "normalArrow" != a && "summonEnemy" != a && this.activate(a);
    this.game.spellbook.marker = this.spellCollection.magicMissile.type
  },
  createSpell: function(b, d, e, f, c) {
    var a = this.game.savegame.getCurrentStats();
    return {
      id: b,
      name: "",
      description: "",
      pattern: d,
      alternate: [],
      effect: e,
      type: f,
      omni: null != c ? c : !0,
      active: null == a ? !1 : a.spells[b].active,
      level: null == a ? 1 : a.spells[b].level
    }
  },
  getDescription: function(c, e) {
    var a = e || this.spellCollection[c].level,
      d = this.spellCollection[c].damage,
      b = this.spellCollection[c].duration,
      f = (this.spellCollection[c].strength, this.spellCollection[c].uses);
    switch (c) {
      case "magicMissile":
        return "Summons an arcane missile, that travels until it hits the " + (1 == a ? "1st" : 2 == a ? "2nd" : 3 == a ? "3rd" : "4th") + " enemy in its way, inflicting " + d + " damage" + (a > 1 ? " to each." : ".");
      case "magicNova":
        return "Summons an arcane nova around the caster, dealing " + (a + d) + " damage to all closeby enemies.";
      case "fireBreath":
        return "Conjures " + (a + 1) + "x3 squares of fire in front of the caster, burning enemies for " + (b + 1) + " turns, inflicting " + d + " damage each turn.";
      case "fireBall":
        return "Summons a ball of fire that explodes on im- pact. Burns enemies on " + 4 * a + " squares around the impact, inflicting " + d + " damage for " + (b + 1) + " turns.";
      case "iceBreath":
        return "Conjures " + (a + 1) + "x3 squares of frost in front of the caster, freezing enemies briefly and slowing them for " + b + " turns.";
      case "iceBall":
        return "Summons a ball of ice that explodes on im- pact. Freezes enemies on " + 4 * a + " squares around the impact and slows them for " + b + " turns.";
      case "shock":
        return "Conjures an electric charge, that spreads " + (a > 1 ? "through up to " : "to ") + a + " close-by " + (a > 1 ? "enemies" : "enemy") + ", dealing " + (a > 1 ? "each " : "") + d + " damage.";
      case "lightningBolt":
        return "Summons a bolt of lightning that dis- charges on impact, spreading through up to " + (a + 1) + " close-by enemies, dealing each " + d + " damage.";
      case "magicShield":
        return "Shields caster for " + b + " turns from up to " + (a + f) + " attacks. Spell uses blood magic and deals " + (this.game.difficulty < 2 ? "1" : "2") + " damage to the caster.";
      case "invisibility":
        return "Turns caster invisible for " + b + " turns or until he casts " + a + " spell" + (2 > a ? "" : "s") + ". Spell uses blood magic and deals " + (this.game.difficulty < 2 ? "1" : "2") + " damage to the caster.";
      case "acceleration":
        return "Increases movement by " + a + " for " + b + " turns. Spell uses blood magic and deals " + (this.game.difficulty < 2 ? "1" : "2") + " damage to the caster.";
      case "superCharge":
        return "Enables casting of " + a + " additional spell every turn for " + b + " turns. Spell uses blood magic and deals " + (this.game.difficulty < 2 ? "1" : "2") + " damage to the caster."
    }
  },
  checkGesture: function() {
    if (this.activeSpellTiles.length > 0) {
      var h = null;
      for (var a in this.spellCollection)
        if (this.spellCollection[a].active && (this.spellCollection[a].pattern.length == this.activeSpellTiles.length || this.spellCollection[a].alternate.length == this.activeSpellTiles.length))
          for (var f = this.spellCollection[a].pattern, g = this.spellCollection[a].alternate, e = (Main.Direction.right, 0); e < (this.spellCollection[a].omni ? 4 : 1); e++) {
            var b = !1;
            if (f.length == this.activeSpellTiles.length)
              for (var c = 0; c < f.length; c++) {
                b = !1;
                for (var d = 0; d < this.activeSpellTiles.length; d++)
                  if (this.activeSpellTiles[d] == (f[c] + 2 * e) % 8) {
                    b = !0;
                    break
                  }
                if (!b) break
              }
            if (!b && g.length == this.activeSpellTiles.length)
              for (var c = 0; c < g.length; c++) {
                b = !1;
                for (var d = 0; d < this.activeSpellTiles.length; d++)
                  if (this.activeSpellTiles[d] == (g[c] + 2 * e) % 8) {
                    b = !0;
                    break
                  }
                if (!b) break
              }
            if (b) {
              h = {
                name: a,
                dir: 2 * (e + 1) % 8,
                type: this.spellCollection[a].type
              };
              break
            }
          }
    }
    return h
  },
  castSpell: function(a, b, c) {
    switch (this.caster = a, this.dir = c, this.activeSpell = this.spellCollection[b], "player" == a.id ? ("function" == typeof this.onCasting && this.onCasting.call(this.onCasting.context), this.game.log.logData("Cast Spell", this.activeSpell.id), this.spellLevel = this.activeSpell.level) : this.spellLevel = this.game.difficulty < 2 ? 1 : 2, c) {
      case Main.Direction.up:
        a.scale.x > 0 && ("shock" == b || "lightningBolt" == b) && (a.scale.x *= -1);
        break;
      case Main.Direction.right:
        a.scale.x > 0 && (a.scale.x *= -1);
        break;
      case Main.Direction.down:
        a.scale.x < 0 && ("shock" == b || "lightningBolt" == b) && (a.scale.x *= -1);
        break;
      case Main.Direction.left:
        a.scale.x < 0 && (a.scale.x *= -1)
    }
    a.animations.play("attack", 10, !1), "normalArrow" != b ? this.game.effects.blueSparkle(a.x, a.y, this.callEffect) : this.callEffect()
  },
  callEffect: function() {
    this.game.spells.activeSpell.effect.call(this.game.spells, this.game.spells.dir)
  },
  bloodMagic: function() {
    this.activeSpell = null, this.caster.hurt(this.game.difficulty < 2 ? 1 : 2, "bloodMagic"), this.caster.nextAction()
  },
  magicShield: function() {
    this.game.audioplayer.playMagicshield(), this.caster.shielded = this.spellCollection.magicShield.duration, this.caster.shield = this.spellLevel + this.spellCollection.magicShield.uses, "player" == this.caster.id && this.game.hud.updateEffects(), this.game.effects.shield(this.caster.x, this.caster.y, this.bloodMagic, this)
  },
  invisibility: function() {
    this.caster.invisible = this.spellCollection.invisibility.duration, this.caster.makeInvisible(), this.game.audioplayer.playInvisibility(), "player" == this.caster.id && (this.caster.invisibleSpells = this.spellLevel - 1, this.game.hud.updateEffects()), this.game.effects.poof(this.caster.x, this.caster.y, this.bloodMagic, this)
  },
  acceleration: function() {
    this.game.audioplayer.playAcceleration(), this.caster.accelerated = this.spellCollection.acceleration.duration, "player" == this.caster.id && this.game.hud.updateEffects(), this.game.effects.accelerate(this.caster.x, this.caster.y, this.bloodMagic, this)
  },
  superCharge: function() {
    this.game.audioplayer.playBloodboost(), this.caster.supercharged = this.spellCollection.superCharge.duration, this.caster.freeSpells = this.spellLevel - 1, "player" == this.caster.id && this.game.hud.updateEffects(), this.game.effects.superCharge(this.caster.x, this.caster.y, this.bloodMagic, this)
  },
  normalArrow: function(a) {
    this.game.audioplayer.playBowRelease();
    var b = function(a, b) {
      this.game.effects.arrowhit(a.x, a.y, b, this), a.hurt && a.hurt(2, "physical")
    };
    this.missileEffect(a, Main.spriteOffset.normalArrow, b, 1)
  },
  summonEnemy: function(a, b, e) {
    this.activeSpell = "summonEnemy", this.caster.x > a ? this.caster.scale.x < 0 && (this.caster.scale.x *= -1) : this.caster.scale.x > 0 && (this.caster.scale.x *= -1);
    var c = this.game.enemies.addEnemy(a, b, e);
    c.alerted = !0, c.xp = 0;
    var d = this.game.posToCoord(a, b);
    this.caster.animations.play("attack", 10, !1), this.game.effects.greyPoof(d.x, d.y, function() {
      this.caster.nextAction()
    }, this)
  },
  magicMissile: function(a) {
    var b = function(a, b) {
      this.game.effects.blueblast(a.x, a.y, b, this), a.hurt && a.hurt(this.activeSpell.damage, "magic")
    };
    this.missileEffect(a, Main.spriteOffset.magicMissile, b, this.activeSpell.level)
  },
  missileEffect: function(k, e, h, d) {
    var g = this.game.levelManager.charMap,
      f = this.game.levelManager.objMap,
      b = this.caster.getPosition().x,
      a = this.caster.getPosition().y;
    switch (d = d || 1, this.spellEffect = this.game.layers.spells.create(this.caster.x, this.caster.y, "48bitSprites"), this.spellEffect.anchor.setTo(.5, .5), k) {
      case Main.Direction.up:
        this.spellEffect.frame = e + 1;
        var i = 0,
          j = -1;
        break;
      case Main.Direction.right:
        this.spellEffect.frame = e + 0;
        var i = 1,
          j = 0;
        break;
      case Main.Direction.down:
        this.spellEffect.frame = e + 3, this.spellEffect.anchor.setTo(.5, .5);
        var i = 0,
          j = 1;
        break;
      case Main.Direction.left:
        this.spellEffect.frame = e + 2;
        var i = -1,
          j = 0
    }
    for (var c = []; this.isTileFree(b += i, a += j, !1, 999);) {
      if (null != g[a][b]) c.push(g[a][b]);
      else if (null != f[a][b] && (c.push(f[a][b]), f[a][b].strength > this.activeSpell.objDamage)) break;
      if (c.length == d) break
    }
    c.length < d && c.push(this.game.posToCoord(b, a)), this.tweenMissile(c, h)
  },
  tweenMissile: function(b, c) {
    var a = b.shift(),
      e = this.game.getPosition(this.spellEffect),
      f = this.game.getPosition(a),
      g = 80 * (Math.abs(e.x - f.x) + Math.abs(e.y - f.y)),
      d = this.game.add.tween(this.spellEffect);
    d.to({
      x: a.x,
      y: a.y
    }, g, Phaser.Easing.Linear.None, !0).start(), "player" == this.caster.id && this.game.camera.target != this.spellEffect && (this.game.camera.follow(this.spellEffect), this.game.camera.deadzone = new Phaser.Rectangle(this.game.camera.screenView.x + 3 * this.game.tilesize, this.game.camera.screenView.y + 3 * this.game.tilesize, this.game.camera.screenView.x + this.game.camera.width - 3 * this.game.tilesize, this.game.camera.screenView.y + this.game.camera.height - 3 * this.game.tilesize)), 0 == b.length ? d.onComplete.addOnce(function() {
      c.call(this, a, function() {
        this.activeSpell = null, this.caster.nextAction()
      }, this), this.spellEffect.destroy()
    }, this) : d.onComplete.addOnce(function() {
      c.call(this, a), this.tweenMissile(b, c)
    }, this)
  },
  magicNova: function() {
    this.game.effects.blueNova(this.caster.x, this.caster.y, function() {
      this.caster.nextAction()
    }, this);
    var c = this.game.levelManager.charMap,
      d = this.game.levelManager.objMap,
      a = this.game.getPosition(this.caster),
      b = [];
    c[a.y - 1][a.x + 0] && b.push(c[a.y - 1][a.x + 0]), c[a.y - 1][a.x + 1] && b.push(c[a.y - 1][a.x + 1]), c[a.y + 0][a.x + 1] && b.push(c[a.y + 0][a.x + 1]), c[a.y + 1][a.x + 1] && b.push(c[a.y + 1][a.x + 1]), c[a.y + 1][a.x + 0] && b.push(c[a.y + 1][a.x + 0]), c[a.y + 1][a.x - 1] && b.push(c[a.y + 1][a.x - 1]), c[a.y + 0][a.x - 1] && b.push(c[a.y + 0][a.x - 1]), c[a.y - 1][a.x - 1] && b.push(c[a.y - 1][a.x - 1]), d[a.y - 1][a.x + 0] && b.push(d[a.y - 1][a.x + 0]), d[a.y - 1][a.x + 1] && b.push(d[a.y - 1][a.x + 1]), d[a.y + 0][a.x + 1] && b.push(d[a.y + 0][a.x + 1]), d[a.y + 1][a.x + 1] && b.push(d[a.y + 1][a.x + 1]), d[a.y + 1][a.x + 0] && b.push(d[a.y + 1][a.x + 0]), d[a.y + 1][a.x - 1] && b.push(d[a.y + 1][a.x - 1]), d[a.y + 0][a.x - 1] && b.push(d[a.y + 0][a.x - 1]), d[a.y - 1][a.x - 1] && b.push(d[a.y - 1][a.x - 1]);
    for (var e = b.length; e--;) b[e].hurt(this.activeSpell.damage + this.activeSpell.level, "magic")
  },
  fireBall: function(a) {
    var b = function(a, b, c) {
      this.circleEffect(this.game.getPosition(a), "fire", b, c)
    };
    this.missileEffect(a, Main.spriteOffset.fireBall, b)
  },
  iceBall: function(a) {
    var b = function(a, b, c) {
      this.circleEffect(this.game.getPosition(a), "ice", b, c)
    };
    this.missileEffect(a, Main.spriteOffset.iceBall, b)
  },
  fireBreath: function(a) {
    this.coneEffect(a, "fire")
  },
  iceBreath: function(a) {
    this.coneEffect(a, "ice")
  },
  shock: function(b) {
    "function" == typeof this.onShock && this.onShock.call(this.onShock.context);
    var a = this.caster.getPosition();
    switch (b) {
      case Main.Direction.up:
        var c = {
          x: a.x + 1,
          y: a.y - 1
        };
        break;
      case Main.Direction.right:
        var c = {
          x: a.x + 1,
          y: a.y + 1
        };
        break;
      case Main.Direction.down:
        var c = {
          x: a.x - 1,
          y: a.y + 1
        };
        break;
      case Main.Direction.left:
        var c = {
          x: a.x - 1,
          y: a.y - 1
        }
    }
    this.shockEffect(c, b, 0, !0)
  },
  shockEffect: function(g, l, k, h) {
    switch (l) {
      case Main.Direction.up:
        var a = [g];
        a.push({
          x: a[0].x + 0,
          y: a[0].y + 1
        }), a.push({
          x: a[0].x + 1,
          y: a[0].y + 1
        }), a.push({
          x: a[0].x + 1,
          y: a[0].y + 0
        }), a.push({
          x: a[0].x + 1,
          y: a[0].y - 1
        }), a.push({
          x: a[0].x + 0,
          y: a[0].y - 1
        }), a.push({
          x: a[0].x - 1,
          y: a[0].y - 1
        }), a.push({
          x: a[0].x - 1,
          y: a[0].y + 0
        }), a.push({
          x: a[0].x - 1,
          y: a[0].y + 1
        });
        break;
      case Main.Direction.right:
        var a = [g];
        a.push({
          x: a[0].x - 1,
          y: a[0].y + 0
        }), a.push({
          x: a[0].x - 1,
          y: a[0].y + 1
        }), a.push({
          x: a[0].x + 0,
          y: a[0].y + 1
        }), a.push({
          x: a[0].x + 1,
          y: a[0].y + 1
        }), a.push({
          x: a[0].x + 1,
          y: a[0].y + 0
        }), a.push({
          x: a[0].x + 1,
          y: a[0].y - 1
        }), a.push({
          x: a[0].x + 0,
          y: a[0].y - 1
        }), a.push({
          x: a[0].x - 1,
          y: a[0].y - 1
        });
        break;
      case Main.Direction.down:
        var a = [g];
        a.push({
          x: a[0].x + 0,
          y: a[0].y - 1
        }), a.push({
          x: a[0].x - 1,
          y: a[0].y - 1
        }), a.push({
          x: a[0].x - 1,
          y: a[0].y + 0
        }), a.push({
          x: a[0].x - 1,
          y: a[0].y + 1
        }), a.push({
          x: a[0].x + 0,
          y: a[0].y + 1
        }), a.push({
          x: a[0].x + 1,
          y: a[0].y + 1
        }), a.push({
          x: a[0].x + 1,
          y: a[0].y + 0
        }), a.push({
          x: a[0].x + 1,
          y: a[0].y - 1
        });
        break;
      case Main.Direction.left:
        var a = [g];
        a.push({
          x: a[0].x + 1,
          y: a[0].y + 0
        }), a.push({
          x: a[0].x + 1,
          y: a[0].y - 1
        }), a.push({
          x: a[0].x + 0,
          y: a[0].y - 1
        }), a.push({
          x: a[0].x - 1,
          y: a[0].y - 1
        }), a.push({
          x: a[0].x - 1,
          y: a[0].y + 0
        }), a.push({
          x: a[0].x - 1,
          y: a[0].y + 1
        }), a.push({
          x: a[0].x + 0,
          y: a[0].y + 1
        }), a.push({
          x: a[0].x + 1,
          y: a[0].y + 1
        })
    }
    if (!this.isTileFree(a[0].x, a[0].y, !1, this.activeSpell.objDamage)) {
      for (var c = 0; ++c < a.length && this.isTileFree(a[c].x, a[c].y, !1););
      free = !0;
      for (var b = a.length; --b > c;) free ? free = this.isTileFree(a[b].x, a[b].y, !1) : a.splice(b, 1)
    }
    var m = a.splice(0, 1),
      i = this.game.player.getPosition(),
      j = this.game.physics.arcade.distanceBetween;
    a.sort(function(a, b) {
      return j(i, a) - j(i, b)
    }), h && a.splice(0, 1), a = m.concat(a), areaBackup = a.slice(0);
    for (var f = [], d = [], k = k || 0, b = 0; b < a.length;)
      if (enemy = this.game.levelManager.charMap[a[b].y][a[b].x], null != enemy && ("player" != enemy.id || !h) && f.length - k < this.spellLevel) {
        if ("lightning" == enemy.immunity) this.game.effects.immune(enemy.x, enemy.y), enemy.alerted = !0;
        else if (-1 == f.indexOf(enemy))
          for (f.push(enemy), d.push({
            x: a[b].x + 0,
            y: a[b].y - 1
          }), d.push({
            x: a[b].x + 1,
            y: a[b].y - 1
          }), d.push({
            x: a[b].x + 1,
            y: a[b].y + 0
          }), d.push({
            x: a[b].x + 1,
            y: a[b].y + 1
          }), d.push({
            x: a[b].x + 0,
            y: a[b].y + 1
          }), d.push({
            x: a[b].x - 1,
            y: a[b].y + 1
          }), d.push({
            x: a[b].x - 1,
            y: a[b].y + 0
          }), d.push({
            x: a[b].x - 1,
            y: a[b].y - 1
          }); d.length > 0;) a.push(d.splice(Math.floor(Math.random() * d.length), 1)[0]);
        b++
      } else b > 0 ? a.splice(b, 1) : b++;
    var e = this.game.posToCoord(a[0]);
    if (bolt = this.game.layers.spells.create(e.x, e.y, "48bitSprites"), bolt.anchor.setTo(.5, .5), off = Main.spriteOffset.lightningBolt, bolt.animations.add("lightningBolt", [0 + off, 1 + off, 0 + off, 1 + off]), bolt.animations.play("lightningBolt", 8, !1, !0), 0 == f.length) {
      range = [];
      for (var c = 0; c < areaBackup.length; c++) e = this.game.posToCoord(areaBackup[c]), range.push(this.game.layers.spells.create(e.x, e.y, "48bitSprites")), off = Main.spriteOffset.sparks, range[c].animations.add("lightning", [off, off + 1, off + 2, off + 3]), off = Main.spriteOffset.sparks, range[c].animations.add("lightning2", [off, off + 1, off + 2, off + 3]), range[c].events.onAnimationStart.addOnce(function(a) {
        a.visible = !0
      }, this), range[c].visible = !1, range[c].anchor.setTo(.5, .5), c > 0 && (range[c - 1].child = range[c], range[c - 1].events.onKilled.addOnce(function(a) {
        a.child.animations.play("lightning2", 50, !1, !0)
      }, this));
      range[0].animations.play("lightning", 32, !1, !0)
    }
    this.areaEffect(a, "lightning", function() {
      this.activeSpell = null, this.caster.nextAction()
    }, this, !0)
  },
  lightningBolt: function(d) {
    var a = (this.game.levelManager.charMap, this.game.levelManager.objMap, this.caster.getPosition().x),
      b = this.caster.getPosition().y;
    switch (d) {
      case Main.Direction.up:
        for (; this.isTileFree(++a, --b, !0););
        break;
      case Main.Direction.right:
        for (; this.isTileFree(++a, ++b, !0););
        break;
      case Main.Direction.down:
        for (; this.isTileFree(--a, ++b, !0););
        break;
      case Main.Direction.left:
        for (; this.isTileFree(--a, --b, !0););
    }
    var c = this.game.layers.spells.create(this.caster.x, this.caster.y, "48bitSprites");
    c.anchor.setTo(.5, .5), off = Main.spriteOffset.lightningBolt, c.animations.add("lightningBolt", [0 + off, 1 + off, 0 + off, 1 + off]), c.animations.play("lightningBolt", 8, !0), speed = 150 * Math.abs(this.caster.getPosition().x - a), tween = this.game.add.tween(c), tween.to(this.game.posToCoord(a, b), speed, Phaser.Easing.Linear.None, !0).start(), tween.onComplete.addOnce(function() {
      this.shockEffect({
        x: a,
        y: b
      }, d, 1, !1), c.destroy()
    }, this)
  },
  coneEffect: function(m, h) {
    var g = this.spellLevel,
      d = this.caster.getPosition().x,
      e = this.caster.getPosition().y,
      c = [];
    switch (m) {
      case Main.Direction.up:
        if (c.push({
          x: d - 0,
          y: e - 1,
          order: 0
        }), this.isTileFree(d, e - 1, !1, this.activeSpell.objDamage)) {
          c.push({
            x: d - 1,
            y: e - 1,
            order: 1
          }), c.push({
            x: d + 1,
            y: e - 1,
            order: 1
          });
          for (var a = 0, b = e - 1; g > a && this.isTileFree(d - 0, --b, !1, 999) && (c.push({
            x: d - 1,
            y: b,
            order: a + 2
          }), c.push({
            x: d + 1,
            y: b,
            order: a + 2
          }), c.push({
            x: d - 0,
            y: b,
            order: a + 1
          }), ++a, this.isTileFree(d - 0, b, !1, this.activeSpell.objDamage)););
          for (a = 0, b = e - 1; g > a && this.isTileFree(d - 1, b, !1, this.activeSpell.objDamage);) --b, c.push({
            x: d - 1,
            y: b,
            order: a + 2
          }), ++a;
          for (a = 0, b = e - 1; g > a && this.isTileFree(d + 1, b, !1, this.activeSpell.objDamage);) --b, c.push({
            x: d + 1,
            y: b,
            order: a + 2
          }), ++a
        } else;
        break;
      case Main.Direction.right:
        if (c.push({
          x: d + 1,
          y: e - 0,
          order: 0
        }), this.isTileFree(d + 1, e, !1, this.activeSpell.objDamage)) {
          c.push({
            x: d + 1,
            y: e - 1,
            order: 1
          }), c.push({
            x: d + 1,
            y: e + 1,
            order: 1
          });
          for (var a = 0, b = d + 1; g > a && this.isTileFree(++b, e - 0, !1, 999) && (c.push({
            x: b,
            y: e - 1,
            order: a + 2
          }), c.push({
            x: b,
            y: e + 1,
            order: a + 2
          }), c.push({
            x: b,
            y: e - 0,
            order: a + 1
          }), ++a, this.isTileFree(b, e - 0, !1, this.activeSpell.objDamage)););
          for (a = 0, b = d + 1; g > a && this.isTileFree(b, e - 1, !1, this.activeSpell.objDamage);) ++b, c.push({
            x: b,
            y: e - 1,
            order: a + 2
          }), ++a;
          for (a = 0, b = d + 1; g > a && this.isTileFree(b, e + 1, !1, this.activeSpell.objDamage);) ++b, c.push({
            x: b,
            y: e + 1,
            order: a + 2
          }), ++a
        } else;
        break;
      case Main.Direction.down:
        if (c.push({
          x: d - 0,
          y: e + 1,
          order: 0
        }), this.isTileFree(d, e + 1, !1, this.activeSpell.objDamage)) {
          c.push({
            x: d - 1,
            y: e + 1,
            order: 1
          }), c.push({
            x: d + 1,
            y: e + 1,
            order: 1
          });
          for (var a = 0, b = e + 1; g > a && this.isTileFree(d - 0, ++b, !1, 999) && (c.push({
            x: d - 1,
            y: b,
            order: a + 2
          }), c.push({
            x: d + 1,
            y: b,
            order: a + 2
          }), c.push({
            x: d - 0,
            y: b,
            order: a + 1
          }), ++a, this.isTileFree(d - 0, b, !1, this.activeSpell.objDamage)););
          for (a = 0, b = e + 1; g > a && this.isTileFree(d - 1, b, !1, this.activeSpell.objDamage);) ++b, c.push({
            x: d - 1,
            y: b,
            order: a + 2
          }), ++a;
          for (a = 0, b = e + 1; g > a && this.isTileFree(d + 1, b, !1, this.activeSpell.objDamage);) ++b, c.push({
            x: d + 1,
            y: b,
            order: a + 2
          }), ++a
        } else;
        break;
      case Main.Direction.left:
        if (c.push({
          x: d - 1,
          y: e - 0,
          order: 0
        }), this.isTileFree(d - 1, e, !1, this.activeSpell.objDamage)) {
          c.push({
            x: d - 1,
            y: e - 1,
            order: 1
          }), c.push({
            x: d - 1,
            y: e + 1,
            order: 1
          });
          for (var a = 0, b = d - 1; g > a && this.isTileFree(--b, e - 0, !1, 999) && (c.push({
            x: b,
            y: e - 1,
            order: a + 2
          }), c.push({
            x: b,
            y: e + 1,
            order: a + 2
          }), c.push({
            x: b,
            y: e - 0,
            order: a + 1
          }), ++a, this.isTileFree(b, e - 0, !1, this.activeSpell.objDamage)););
          for (a = 0, b = d - 1; g > a && this.isTileFree(b, e - 1, !1, this.activeSpell.objDamage);) --b, c.push({
            x: b,
            y: e - 1,
            order: a + 2
          }), ++a;
          for (a = 0, b = d - 1; g > a && this.isTileFree(b, e + 1, !1, this.activeSpell.objDamage);) --b, c.push({
            x: b,
            y: e + 1,
            order: a + 2
          }), ++a
        } else;
    }
    if (1 === c.length) {
      var k = this.game.posToCoord(c[0]);
      off = Main.spriteOffset[h], off2 = Main.spriteOffset.greyPoof;
      var j = this.game.layers.spells.create(k.x, k.y - 12, "64bitSprites", off);
      j.anchor.setTo(.5, .5), j.animations.add(h, [off, off + 1, off2, off2 + 1]), j.events.onAnimationComplete.add(function() {
        this.activeSpell = null, this.caster.nextAction(), j.kill()
      }, this), j.animations.play(h, 12, !1), "fire" == h ? this.game.audioplayer.playFire() : "ice" == h && this.game.audioplayer.playIce(), this.game.audioplayer.playPoof(2)
    } else {
      for (var i = [], l = {}, f = 0; g + 2 > f; f++) i.push([]);
      for (f = 0; f < c.length;) void 0 === l[c[f].x + "," + c[f].y] && (l[c[f].x + "," + c[f].y] = !0, i[c[f].order].push(c[f])), f++;
      for (f = 0; f < i.length - 1;) i[f].length > 0 && (func = function(a) {
        return function() {
          this.areaEffect(i[a], h, void 0, void 0, 0 === a)
        }
      }(f), this.game.time.events.add(80 * f, func, this)), f++;
      this.game.time.events.add(80 * f, function() {
        this.areaEffect(i[f], h, function() {
          this.activeSpell = null, this.caster.nextAction()
        }, this, 0 === f)
      }, this)
    }
  },
  circleEffect: function(i, g, k, j) {
    var d = this.spellLevel,
      a = [],
      c = i.x,
      b = i.y;
    switch (this.dir) {
      case Main.Direction.up:
        for (a.push({
          x: c,
          y: b,
          order: 0
        }), l = 0, n = b + 0; d > l && this.isTileFree(c, n, !1, this.activeSpell.objDamage);) a.push({
          x: c,
          y: --n,
          order: l + 1
        }), this.spellLevel > ++l && this.isTileFree(c, n, !1, this.activeSpell.objDamage) && (a.push({
          x: c - 1,
          y: n,
          order: l + 2
        }), a.push({
          x: c + 1,
          y: n,
          order: l + 2
        })), ++l;
        for (l = 1, n = c + 0, a.push({
          x: ++n,
          y: b,
          order: 1
        }); d > l && this.isTileFree(n, b, !1, this.activeSpell.objDamage);) a.push({
          x: n,
          y: b - 1,
          order: l + 1
        }), a.push({
          x: n,
          y: b + 1,
          order: l + 1
        }), this.spellLevel > ++l && this.isTileFree(n, b, !1, this.activeSpell.objDamage) ? a.push({
          x: ++n,
          y: b,
          order: l + 2
        }) : ++n, ++l;
        for (l = 1, n = b + 0, a.push({
          x: c,
          y: ++n,
          order: 1
        }); d > l && this.isTileFree(c, n, !1, this.activeSpell.objDamage);) a.push({
          x: c - 1,
          y: n,
          order: l + 1
        }), a.push({
          x: c + 1,
          y: n,
          order: l + 1
        }), d > ++l && this.isTileFree(c, n, !1, this.activeSpell.objDamage) ? a.push({
          x: c,
          y: ++n,
          order: l + 2
        }) : ++n, ++l;
        for (l = 1, n = c + 0, a.push({
          x: --n,
          y: b,
          order: 1
        }); d > l && this.isTileFree(n, b, !1, this.activeSpell.objDamage);) a.push({
          x: n,
          y: b - 1,
          order: l + 1
        }), a.push({
          x: n,
          y: b + 1,
          order: l + 1
        }), d > ++l && this.isTileFree(n, b, !1, this.activeSpell.objDamage) ? a.push({
          x: --n,
          y: b,
          order: l + 2
        }) : --n, ++l;
        break;
      case Main.Direction.down:
        for (a.push({
          x: c,
          y: b,
          order: 0
        }), l = 1, n = b + 0, a.push({
          x: c,
          y: --n,
          order: 1
        }); d > l && this.isTileFree(c, n, !1, this.activeSpell.objDamage);) a.push({
          x: c - 1,
          y: n,
          order: l + 1
        }), a.push({
          x: c + 1,
          y: n,
          order: l + 1
        }), d > ++l && this.isTileFree(c, n, !1, this.activeSpell.objDamage) ? a.push({
          x: c,
          y: --n,
          order: l + 2
        }) : --n, ++l;
        for (l = 1, n = c + 0, a.push({
          x: ++n,
          y: b,
          order: 1
        }); d > l && this.isTileFree(n, b, !1, this.activeSpell.objDamage);) a.push({
          x: n,
          y: b - 1,
          order: l + 1
        }), a.push({
          x: n,
          y: b + 1,
          order: l + 1
        }), d > ++l && this.isTileFree(n, b, !1, this.activeSpell.objDamage) ? a.push({
          x: ++n,
          y: b,
          order: l + 2
        }) : ++n, ++l;
        for (l = 0, n = b + 0; d > l && this.isTileFree(c, n, !1, this.activeSpell.objDamage);) a.push({
          x: c,
          y: ++n,
          order: l + 1
        }), d > ++l && this.isTileFree(c, n, !1, this.activeSpell.objDamage) && (a.push({
          x: c - 1,
          y: n,
          order: l + 2
        }), a.push({
          x: c + 1,
          y: n,
          order: l + 2
        })), ++l;
        for (l = 1, n = c + 0, a.push({
          x: --n,
          y: b,
          order: 1
        }); d > l && this.isTileFree(n, b, !1, this.activeSpell.objDamage);) a.push({
          x: n,
          y: b - 1,
          order: l + 1
        }), a.push({
          x: n,
          y: b + 1,
          order: l + 1
        }), d > ++l && this.isTileFree(n, b, !1, this.activeSpell.objDamage) ? a.push({
          x: --n,
          y: b,
          order: l + 2
        }) : --n, ++l;
        break;
      case Main.Direction.left:
        for (a.push({
          x: c,
          y: b,
          order: 0
        }), l = 1, n = b + 0, a.push({
          x: c,
          y: --n,
          order: 1
        }); d > l && this.isTileFree(c, n, !1, this.activeSpell.objDamage);) a.push({
          x: c - 1,
          y: n,
          order: l + 1
        }), a.push({
          x: c + 1,
          y: n,
          order: l + 1
        }), d > ++l && this.isTileFree(c, n, !1, this.activeSpell.objDamage) ? a.push({
          x: c,
          y: --n,
          order: l + 2
        }) : --n, ++l;
        for (l = 1, n = c + 0, a.push({
          x: ++n,
          y: b,
          order: 1
        }); d > l && this.isTileFree(n, b, !1, this.activeSpell.objDamage);) a.push({
          x: n,
          y: b - 1,
          order: l + 1
        }), a.push({
          x: n,
          y: b + 1,
          order: l + 1
        }), d > ++l && this.isTileFree(n, b, !1, this.activeSpell.objDamage) ? a.push({
          x: ++n,
          y: b,
          order: l + 2
        }) : ++n, ++l;
        for (l = 1, n = b + 0, a.push({
          x: c,
          y: ++n,
          order: 1
        }); d > l && this.isTileFree(c, n, !1, this.activeSpell.objDamage);) a.push({
          x: c - 1,
          y: n,
          order: l + 1
        }), a.push({
          x: c + 1,
          y: n,
          order: l + 1
        }), d > ++l && this.isTileFree(c, n, !1, this.activeSpell.objDamage) ? a.push({
          x: c,
          y: ++n,
          order: l + 2
        }) : ++n, ++l;
        for (l = 0, n = c + 0; d > l && this.isTileFree(n, b, !1, this.activeSpell.objDamage);) a.push({
          x: --n,
          y: b,
          order: l + 1
        }), d > ++l && this.isTileFree(n, b, !1, this.activeSpell.objDamage) && (a.push({
          x: n,
          y: b - 1,
          order: l + 2
        }), a.push({
          x: n,
          y: b + 1,
          order: l + 2
        })), ++l;
        break;
      case Main.Direction.right:
        for (a.push({
          x: c,
          y: b,
          order: 0
        }), l = 1, n = b, a.push({
          x: c,
          y: --n,
          order: 1
        }); d > l && this.isTileFree(c, n, !1, this.activeSpell.objDamage);) a.push({
          x: c - 1,
          y: n,
          order: l + 1
        }), a.push({
          x: c + 1,
          y: n,
          order: l + 1
        }), d > ++l && this.isTileFree(c, n, !1, this.activeSpell.objDamage) ? a.push({
          x: c,
          y: --n,
          order: l + 2
        }) : --n, ++l;
        for (l = 0, n = c + 0; d > l && this.isTileFree(n, b, !1, this.activeSpell.objDamage);) a.push({
          x: ++n,
          y: b,
          order: l + 1
        }), d > ++l && this.isTileFree(n, b, !1, this.activeSpell.objDamage) && (a.push({
          x: n,
          y: b - 1,
          order: l + 2
        }), a.push({
          x: n,
          y: b + 1,
          order: l + 2
        })), ++l;
        for (l = 1, n = b + 0, a.push({
          x: c,
          y: ++n,
          order: 1
        }); d > l && this.isTileFree(c, n, !1, this.activeSpell.objDamage);) a.push({
          x: c - 1,
          y: n,
          order: l + 1
        }), a.push({
          x: c + 1,
          y: n,
          order: l + 1
        }), d > ++l && this.isTileFree(c, n, !1, this.activeSpell.objDamage) ? a.push({
          x: c,
          y: ++n,
          order: l + 2
        }) : ++n, ++l;
        for (l = 1, n = c + 0, a.push({
          x: --n,
          y: b,
          order: 1
        }); d > l && this.isTileFree(n, b, !1, this.activeSpell.objDamage);) a.push({
          x: n,
          y: b - 1,
          order: l + 1
        }), a.push({
          x: n,
          y: b + 1,
          order: l + 1
        }), d > ++l && this.isTileFree(n, b, !1, this.activeSpell.objDamage) ? a.push({
          x: --n,
          y: b,
          order: l + 2
        }) : --n, ++l
    }
    for (var f = [], h = {}, e = 0; d + 3 > e; e++) f.push([]);
    for (e = 0; e < a.length;) void 0 === h[a[e].x + "," + a[e].y] && (h[a[e].x + "," + a[e].y] = !0, f[a[e].order].push(a[e])), f[a[e].order].push(a[e]), e++;
    for (e = 0; e < f.length - 1;) f[e].length > 0 && (func = function(a) {
      return function() {
        this.areaEffect(f[a], g, void 0, void 0, 0 === a)
      }
    }(e), this.game.time.events.add(40 * e, func, this)), e++;
    this.game.time.events.add(40 * e, function() {
      this.areaEffect(f[e], g, k, j, 0 === e)
    }, this)
  },
  areaEffect: function(f, e, g, j, k) {
    if (void 0 === f) return void("function" == typeof g && g.call(j));
    var a = [],
      d = [],
      h = [],
      l = (this.game.levelManager.sightMap, this.game.levelManager.charMap),
      m = this.game.levelManager.objMap,
      b = {};
    i = 0;
    for (; i < f.length;) coord = this.game.posToCoord(f[i]), b[f[i].x + "," + f[i].y] = {
      x: coord.x,
      y: coord.y,
      posX: f[i].x,
      posY: f[i].y
    }, i++;
    for (var c in b)(k && b[c].posX == f[0].x && b[c].posY == f[0].y || this.isTileFree(b[c].posX, b[c].posY, !1, 999)) && ("fire" == e ? (a.push(this.game.layers.spells.create(b[c].x, b[c].y - 12, "64bitSprites")), off = Main.spriteOffset.fire, a[a.length - 1].anchor.setTo(.5, .5), a[a.length - 1].animations.add("fire", [off, off + 1]), a[a.length - 1].animations.play("fire", 8, !0), a[a.length - 1].lifespan = 600) : "ice" == e ? (a.push(this.game.layers.spells.create(b[c].x, b[c].y - 12, "64bitSprites")), off = Main.spriteOffset.ice, a[a.length - 1].anchor.setTo(.5, .5), a[a.length - 1].animations.add("ice", [off, off + 1]), a[a.length - 1].animations.play("ice", 8, !0), a[a.length - 1].lifespan = 400) : "lightning" == e && (a.push(this.game.layers.spells.create(b[c].x, b[c].y, "48bitSprites")), off = Main.spriteOffset.sparks, a[a.length - 1].anchor.setTo(.5, .5), a[a.length - 1].animations.add("lightning", [off, off + 1, off + 2, off + 3]), a[a.length - 1].animations.play("lightning", 32, !0), a[a.length - 1].lifespan = 800), null != l[b[c].posY][b[c].posX] && d.push(l[b[c].posY][b[c].posX]), null != m[b[c].posY][b[c].posX] && h.push(m[b[c].posY][b[c].posX]));
    if (a.length > 0) {
      for (k && ("fire" == e ? this.game.audioplayer.playFire() : "ice" == e ? this.game.audioplayer.playIce() : "lightning" == e && this.game.audioplayer.playShock()), i = d.length; i--;) d[i].immunity == e ? (this.game.effects.immune(d[i].x, d[i].y), d[i].alerted = !0) : "fire" == e ? (d[i].hurt(this.activeSpell.damage, "fire"), d[i].burning = this.activeSpell.duration, d[i].frozen = -1, d[i].killEffect()) : "ice" == e ? (d[i].hurt(this.activeSpell.damage, "ice"), d[i].frozen = this.activeSpell.duration, d[i].burning = 0, d[i].setEffect("frozen")) : "lightning" == e && d[i].hurt(this.activeSpell.damage);
      for (i = h.length; i--;) "fire" == e ? this.game.levelObjects.hit(h[i], this.activeSpell.objDamage) : "ice" == e ? this.game.levelObjects.hit(h[i], this.activeSpell.objDamage) : "lightning" == e && this.game.levelObjects.hit(h[i], this.activeSpell.objDamage);
      a[a.length - 1].events.onKilled.add(function() {
        "function" == typeof g && g.call(j)
      }, this)
    } else "function" == typeof g && g.call(j)
  },
  isTileFree: function(a, b, c, d) {
    return this.game.level.isTileFree(a, b, c, d)
  }
}, Main.SpellBook = function(a) {
  this.game = a, this.group = this.game.layers.spellbook, this.scaleMod = this.game.mobile ? 2 : 1, this.size = 22 / this.scaleMod, this.tilesize = this.game.tilesize / this.scaleMod, this.style = {
    font: this.game.fontsize + "px " + this.game.font,
    fill: "#000000",
    align: "left"
  }, this.descStyle = {
    font: this.size + "px " + this.game.smallfont,
    fill: "#000000",
    align: "left"
  }, this.attrStyle = {
    font: this.size + "px " + this.game.smallfont,
    fill: "#000000",
    align: "left"
  }, this.lineLength = 22, this.lineOffset = 26 / this.scaleMod, this.labelY = 200 / this.scaleMod, this.baseX = 184 / this.scaleMod, this.baseY = 195 / this.scaleMod, this.descX = 184 / this.scaleMod, this.descY = 400 / this.scaleMod, this.gemsX = this.descX + 28 / this.scaleMod, this.gemsY = 576 / this.scaleMod, this.gemSpacing = 32 / this.scaleMod, this.marker = Main.SpellType.magic, this.markerY = 240 / this.scaleMod, this.markerSpacing = 90 / this.scaleMod, this.isOpen = !1, this.descriptions = [
    [],
    []
  ], this.gems = [
    [],
    []
  ], this.buttons = [], this.ribbons = [], this.ribbons.buttonIndex = 0
}, Main.SpellBook.prototype = {
  open: function(v, l) {
    if (this.game.spells.spellCollection.magicMissile.active) {
      this.game.ingame.isOpen ? this.game.ingame.close() : this.game.helpScreen.isOpen && this.game.helpScreen.close(), "function" == typeof this.onOpen && this.onOpen.call(this.onOpen.context), v || (this.isOpen = !0, this.game.inputHandler.stop(), this.game.hud.book.animations.play("open", 8, !1), this.game.audioplayer.playPageTurn()), this.ribbons.length = 0, this.buttons.length = 0, this.book = this.group.create(0, 48 / this.scaleMod, "spellbook"), this.book.scale = new Phaser.Point(1 / this.scaleMod, 1 / this.scaleMod), this.book.topLeft = this.book.getBounds().topLeft, this.book.bottomRight = this.book.getBounds().bottomRight;
      var h = this.book.topLeft.x + 92 / this.scaleMod,
        r = (this.book.bottomRight.x - 168 + 88) / this.scaleMod;
      if (this.game.spells.spellCollection.magicMissile.active) {
        var q = this.addButton(h, this.markerY, function() {
          this.game.spellbook.toPage(Main.SpellType.magic)
        }, this, "ribbons", [0, 0, 0, 0], this.ribbons);
        q.anchor.setTo(0, .5), this.marker == Main.SpellType.magic && (q.setFrames(1, 1, 1), this.ribbons.buttonIndex = this.ribbons.length - 1)
      }
      if (this.game.spells.spellCollection.shock.active || this.game.spells.spellCollection.lightningBolt.active) {
        var o = this.addButton(h - 3 / this.scaleMod, this.markerY + this.markerSpacing, function() {
          this.game.spellbook.toPage(Main.SpellType.lightning)
        }, this, "ribbons", [6, 6, 6, 6], this.ribbons);
        o.anchor.setTo(0, .5), this.marker == Main.SpellType.lightning && (o.setFrames(7, 7, 7), this.ribbons.buttonIndex = this.ribbons.length - 1)
      }
      if (this.game.spells.spellCollection.iceBreath.active || this.game.spells.spellCollection.iceBall.active) {
        var p = this.addButton(h - 3 / this.scaleMod, this.markerY + 2 * this.markerSpacing, function() {
          this.game.spellbook.toPage(Main.SpellType.ice)
        }, this, "ribbons", [4, 4, 4, 4], this.ribbons);
        p.anchor.setTo(0, .5), this.marker == Main.SpellType.ice && (p.setFrames(5, 5, 5), this.ribbons.buttonIndex = this.ribbons.length - 1)
      }
      if (this.game.spells.spellCollection.fireBreath.active || this.game.spells.spellCollection.fireBall.active) {
        var n = this.addButton(h - 4 / this.scaleMod, this.markerY + 3 * this.markerSpacing, function() {
          this.game.spellbook.toPage(Main.SpellType.fire)
        }, this, "ribbons", [2, 2, 2, 2], this.ribbons);
        n.anchor.setTo(0, .5), this.marker == Main.SpellType.fire && (n.setFrames(3, 3, 3), this.ribbons.buttonIndex = this.ribbons.length - 1)
      }
      if (this.game.spells.spellCollection.magicShield.active || this.game.spells.spellCollection.invisibility.active) {
        var t = this.addButton(r - 4 / this.scaleMod, this.markerY + 0 * this.markerSpacing, function() {
          this.game.spellbook.toPage(Main.SpellType.conjuring)
        }, this, "ribbons", [10, 10, 10, 10], this.ribbons);
        t.anchor.setTo(1, .5), this.marker == Main.SpellType.conjuring && (t.setFrames(11, 11, 11), this.ribbons.buttonIndex = this.ribbons.length - 1)
      }
      if (this.game.spells.spellCollection.acceleration.active || this.game.spells.spellCollection.superCharge.active) {
        var m = this.addButton(r - 2 / this.scaleMod, this.markerY + 1 * this.markerSpacing, function() {
          this.game.spellbook.toPage(Main.SpellType.conjuring2)
        }, this, "ribbons", [10, 10, 10, 10], this.ribbons);
        m.anchor.setTo(1, .5), this.marker == Main.SpellType.conjuring2 && (m.setFrames(11, 11, 11), this.ribbons.buttonIndex = this.ribbons.length - 1)
      }
      this.spells = [];
      for (var a in this.game.spells.spellCollection)
        if (this.game.spells.spellCollection[a].active && this.game.spells.spellCollection[a].type == this.marker) {
          var b = this.spells.length;
          this.spells.push(a);
          var i = b * (340 / this.scaleMod);
          this.game.addText(this.descX + i, this.labelY, this.game.spells.spellCollection[a].name, this.style, this.group), this.setDescription(a, b);
          var f = this.group.create(this.baseX + i, this.baseY, "spellbase");
          f.id = a, f.pattern = [], this.game.mobile && (f.scale = new Phaser.Point(.5, .5));
          for (var u = this.game.spells.spellCollection[a].pattern, j = 0; j < u.length; j++) {
            var k = this.group.create(0, 0, "whirl", 9);
            this.game.mobile && (k.scale = new Phaser.Point(.5, .5));
            var d = 1,
              c = 1;
            switch (u[j]) {
              case Main.Direction.up:
                d += 1;
                break;
              case Main.Direction.d1:
                d += 2;
                break;
              case Main.Direction.right:
                d += 2, c += 1;
                break;
              case Main.Direction.d2:
                d += 2, c += 2;
                break;
              case Main.Direction.down:
                d += 1, c += 2;
                break;
              case Main.Direction.d3:
                c += 2;
                break;
              case Main.Direction.left:
                c += 1
            }
            k.x = this.baseX + i + d * this.tilesize, k.y = this.baseY + c * this.tilesize, f.pattern[j] = k
          }
          if (this.game.player.lvl > 1) {
            for (; this.gems[b].length > 0;) this.group.remove(this.gems[b].pop());
            for (var s = function(c, a, b) {
              return function() {
                "function" == typeof this.onCheckUpgrade && this.onCheckUpgrade.call(this.onCheckUpgrade.context), this.game.audioplayer.playButtonDown(), this.setDescription(c, a, b);
                for (var d = 0; d < this.gems[a].length; d++) this.gems[a][d].frame > 5 && this.gems[a][d].modFrames(-6, -6, -6, -6);
                this.gems[a][b - 1].modFrames(6, 6, 6, 6)
              }
            }, g = 1, e = 0; 3 > e; e++) g = this.game.spells.spellCollection[a].level > e ? 3 : 0, this.gems[b].push(this.addButton(this.gemsX + f.width / 4 + i + e * this.gemSpacing, this.gemsY, s(a, b, e + 1), this, "gem", [g + 1, g, g + 2, g], this.buttons)), this.gems[b][e].anchor.setTo(.5, .5);
            if (this.gems[b][this.game.spells.spellCollection[a].level - 1].modFrames(6, 6, 6, 6), this.game.player.spellPoints > 0 && this.game.spells.spellCollection[a].level < 3) {
              var s = function(a, b) {
                  return function() {
                    this.game.audioplayer.playUpgrade(), this.game.log.logData("Upgrade", this.game.spells.spellCollection[a]), this.game.player.spellPoints--, this.game.spells.spellCollection[a].level++, this.game.hud.updateXP(-1, !1), this.toPage(this.marker, this.buttons.buttonIndex), this.flashGem(this.gems[b][this.game.spells.spellCollection[a].level - 1])
                  }
                }(a, b),
                w = this.addButton(this.gems[b][this.gems[b].length - 1].x + 1.5 * this.gemSpacing, this.gemsY, s, this, "gem", [13, 12, 14, 12], this.buttons);
              w.anchor.setTo(.5, .5)
            }
            this.gemFlash = this.group.create(0, 0, "gem", 5), this.gemFlash.anchor.setTo(.5, .5), this.gemFlash.visible = !1, this.gemFlash.scale = new Phaser.Point(1 / this.scaleMod, 1 / this.scaleMod)
          }
        }
      this.game.player.lvl > 1 && (this.buttons.buttonIndex = 0, l && l < this.buttons.length ? this.buttons[l].select(!0) : this.buttons[this.buttons.buttonIndex].select(!0))
    }
  },
  flashGem: function(a) {
    this.game.spellbook.gemFlash.x = a.x, this.game.spellbook.gemFlash.y = a.y, this.game.spellbook.gemFlash.alpha = 0, this.game.spellbook.gemFlash.visible = !0;
    var b = this.game.add.tween(this.game.spellbook.gemFlash);
    b.onComplete.add(function() {
      var a = this.game.add.tween(this.game.spellbook.gemFlash);
      a.onComplete.add(function() {
        this.game.spellbook.gemFlash.visible = !1
      }, this), a.to({
        alpha: 0
      }, 400, Phaser.Easing.Cubic.In, !0)
    }, this), b.to({
      alpha: 1
    }, 500, Phaser.Easing.Cubic.Out, !0)
  },
  setDescription: function(h, a, i) {
    for (var d = this.game.spells.getDescription(h, i).split(" "), e = 0, b = 0, c = "", g = a * (330 / this.scaleMod), f = !1; this.descriptions[a].length > 0;) this.group.remove(this.descriptions[a].pop());
    do f = "/n" == d[b], (f || c.length + d[b].length > this.lineLength) && (this.descriptions[a].push(this.game.addText(this.descX + g, this.descY + e * this.lineOffset, c, this.descStyle, this.group)), c = "", e++), f || (c += d[b] + " "), b++; while (b < d.length);
    this.descriptions[a].push(this.game.addText(this.descX + g, this.descY + e * this.lineOffset, c, this.descStyle, this.group))
  },
  addButton: function(e, f, g, h, i, c, b) {
    void 0 === c && (c = [0, 0, 0, 1]);
    var a = this.group.create(e, f, i || "buttons", c[1]);
    a.scale = new Phaser.Point(1 / this.scaleMod, 1 / this.scaleMod), a.frames = c;
    var d = this;
    return a.inputEnabled = !0, a.input.useHandCursor = !0, a.select = function(c) {
      c !== !0 && b[b.buttonIndex].reset(), a.frame = a.frames[0], b.buttonIndex = b.indexOf(a)
    }, a.activate = function() {
      a.frame = a.frames[2], g.call(h || d)
    }, a.reset = function() {
      a.frame = a.frames[1]
    }, a.setFrames = function(e, b, c, d) {
      a.frame = b, a.frames[0] = b, a.frames[1] = b, a.frames[2] = c, a.frames[3] = d
    }, a.modFrames = function(e, b, c, d) {
      a.frame += b, a.frames[0] += b, a.frames[1] += b, a.frames[2] += c, a.frames[3] += d
    }, a.events.onInputOver.add(a.select, d), a.events.onInputOut.add(a.reset, d), a.events.onInputDown.add(a.activate, d), b.push(a), a
  },
  close: function(a) {
    for ("function" == typeof this.onClose && this.onClose.call(this.onClose.context); this.group.length > 0;) this.group.getAt(0).destroy();
    a || (this.game.hud.book.animations.play("close", 8, !1), this.isOpen = !1, this.game.inputHandler.start(), this.game.audioplayer.playCloseSpellbook())
  },
  playSpell: function(a) {
    return void("function" == typeof this.onPlay && this.onPlay.call(this.onPlay.context))
  },
  showNextTile: function(a, b, c) {
    c < b.pattern.length ? (b.pattern[c].visible = !0, window.setTimeout(a.showNextTile, 333, a, b, c + 1)) : a.game.input.disabled = !1
  },
  toPage: function(a, b) {
    this.isOpen && (this.game.audioplayer.playPageTurn(), this.close(!0), this.marker = a, this.open(!0, b))
  },
  nextPage: function() {
    this.ribbons[this.ribbons.buttonIndex === this.ribbons.length - 1 ? 0 : this.ribbons.buttonIndex + 1].select(), this.ribbons[this.ribbons.buttonIndex].activate()
  },
  prevPage: function() {
    this.ribbons[0 === this.ribbons.buttonIndex ? this.ribbons.length - 1 : this.ribbons.buttonIndex - 1].select(), this.ribbons[this.ribbons.buttonIndex].activate()
  },
  nextButton: function() {
    this.buttons[this.buttons.buttonIndex === this.buttons.length - 1 ? 0 : this.buttons.buttonIndex + 1] && this.buttons[this.buttons.buttonIndex === this.buttons.length - 1 ? 0 : this.buttons.buttonIndex + 1].select()
  },
  prevButton: function() {
    this.buttons[0 === this.buttons.buttonIndex ? this.buttons.length - 1 : this.buttons.buttonIndex - 1] && this.buttons[0 === this.buttons.buttonIndex ? this.buttons.length - 1 : this.buttons.buttonIndex - 1].select()
  },
  activateButton: function() {
    this.buttons[this.buttons.buttonIndex] && this.buttons[this.buttons.buttonIndex].activate()
  }
}, Main.HelpScreen = function(a) {
  this.game = a, this.group = this.game.layers.help, this.scaleMod = this.game.mobile ? 2 : 1, this.isOpen = !1, this.ribbons = [], this.ribbons.buttonIndex = 0, this.marker = "helpScreenWASD", this.markerY = 240 / this.scaleMod, this.markerSpacing = 90 / this.scaleMod
}, Main.HelpScreen.prototype = {
  open: function(c) {
    this.game.spellbook.isOpen ? this.game.spellbook.close() : this.game.ingame.isOpen && this.game.ingame.close(), c && (this.marker = c), this.isOpen = !0, this.game.inputHandler.stop(), this.game.audioplayer.playPageTurn(), this.book = this.group.create(0, 48 / this.scaleMod, "spellbook"), this.book.scale = new Phaser.Point(1 / this.scaleMod, 1 / this.scaleMod), this.book.topLeft = this.book.getBounds().topLeft, this.book.bottomRight = this.book.getBounds().bottomRight;
    var b = this.book.topLeft.x + 92 / this.scaleMod;
    this.content = this.group.create(0, 48 / this.scaleMod, this.marker), this.content.scale = new Phaser.Point(1 / this.scaleMod, 1 / this.scaleMod), this.ribbons.length = 0;
    var a = this.addRibbon(b, this.markerY, 16, function() {
      this.game.helpScreen.toPage("helpScreenWASD")
    }, this);
    "helpScreenWASD" == this.marker && a.select(!0), a = this.addRibbon(b - 3 / this.scaleMod, this.markerY + this.markerSpacing, 18, function() {
      this.game.helpScreen.toPage("helpScreenArrows")
    }, this), "helpScreenArrows" == this.marker && a.select(!0), a = this.addRibbon(b - 3 / this.scaleMod, this.markerY + 2 * this.markerSpacing, 14, function() {
      this.game.helpScreen.toPage("helpScreenNumpad")
    }, this), "helpScreenNumpad" == this.marker && a.select(!0), a = this.addRibbon(b - 4 / this.scaleMod, this.markerY + 3 * this.markerSpacing, 12, function() {
      this.game.helpScreen.toPage("helpScreenGamepad")
    }, this), "helpScreenGamepad" == this.marker && a.select(!0)
  },
  addRibbon: function(e, f, b, g, h, d) {
    void 0 === d && (d = [b, b, b, b]);
    var a = this.group.create(e, f, "ribbons", d[1]);
    a.anchor.setTo(0, .5), a.scale = new Phaser.Point(1 / this.scaleMod, 1 / this.scaleMod), a.frames = d;
    var c = this;
    return a.inputEnabled = !0, a.input.useHandCursor = !0, a.select = function(d) {
      d === !0 && (a.setFrames(b + 1, b + 1, b + 1, b + 1), c.ribbons.buttonIndex = c.ribbons.indexOf(a))
    }, a.activate = function() {
      c.ribbons[c.ribbons.buttonIndex].reset(), c.ribbons.buttonIndex = c.ribbons.indexOf(a), a.frame = a.frames[2], a.setFrames(b + 1, b + 1, b + 1, b + 1), g.call(h || c)
    }, a.reset = function() {
      a.setFrames(b, b, b, b), a.frame = a.frames[1]
    }, a.setFrames = function(e, b, c, d) {
      a.frame = b, a.frames[0] = b, a.frames[1] = b, a.frames[2] = c, a.frames[3] = d
    }, a.events.onInputDown.add(a.activate, c), this.ribbons.push(a), a
  },
  close: function() {
    for (; this.group.length > 0;) this.group.getAt(0).destroy();
    this.isOpen = !1, this.game.inputHandler.start(), this.game.audioplayer.playCloseSpellbook()
  },
  toPage: function(a) {
    this.isOpen && (this.game.audioplayer.playPageTurn(), this.marker = a, this.content.destroy(), this.content = this.group.create(0, 48 / this.scaleMod, this.marker), this.content.scale = new Phaser.Point(1 / this.scaleMod, 1 / this.scaleMod))
  },
  nextPage: function() {
    this.ribbons[this.ribbons.buttonIndex === this.ribbons.length - 1 ? 0 : this.ribbons.buttonIndex + 1].activate()
  },
  prevPage: function() {
    this.ribbons[0 === this.ribbons.buttonIndex ? this.ribbons.length - 1 : this.ribbons.buttonIndex - 1].activate()
  }
}, Main.Tutorial = function(a, b) {
  this.game = a, this.scaleMod = this.game.mobile ? 2 : 1, this.group = this.game.layers.tutorial, this.height = 720 / this.scaleMod, this.speed = 200, this.easing = Phaser.Easing.Quadratic, this.level = b
}, Main.Tutorial.prototype = {
  start: function() {
    switch (this.game.level.id) {
      case "world1-1":
        this.start_level1();
        break;
      case "world1-2":
        this.start_level2();
        break;
      case "world1-3":
        this.start_level3()
    }
  },
  start_level1: function() {
    this.target = {
      x: 780 / this.scaleMod,
      y: 690 / this.scaleMod + (this.game.mobile ? 15 : 0)
    }, this.walking = this.group.create(this.target.x, 0, "tutorial", 0), this.spellbook = this.group.create(this.target.x, 0, "tutorial", 1), this.gesture = this.group.create(this.target.x, 0, "tutorial", 2), this.spell = this.group.create(this.target.x, 0, "tutorial", 3), this.range = this.group.create(this.target.x, 0, "tutorial", 4), this.attack = this.group.create(this.target.x, 0, "tutorial", 5), this.getem = this.group.create(this.target.x, 0, "tutorial", 6), this.bite = this.group.create(this.target.x, 0, "tutorial", 7), this.done = this.group.create(this.target.x, 0, "tutorial", 8), this.game.mobile && (this.walking.scale = new Phaser.Point(.5, .5), this.spellbook.scale = new Phaser.Point(.5, .5), this.gesture.scale = new Phaser.Point(.5, .5), this.spell.scale = new Phaser.Point(.5, .5), this.range.scale = new Phaser.Point(.5, .5), this.attack.scale = new Phaser.Point(.5, .5), this.bite.scale = new Phaser.Point(.5, .5), this.getem.scale = new Phaser.Point(.5, .5), this.done.scale = new Phaser.Point(.5, .5)), this.walking.y = this.height + this.walking.height + 10, this.spellbook.y = this.height + this.spellbook.height + 10, this.gesture.y = this.height + this.gesture.height + 10, this.spell.y = this.height + this.spell.height + 10, this.range.y = this.height + this.range.height + 10, this.attack.y = this.height + this.attack.height + 10, this.bite.y = this.height + this.bite.height + 10, this.getem.y = this.height + this.getem.height + 10, this.done.y = this.height + this.done.height + 10, this.walking.anchor.setTo(.5, 1), this.spellbook.anchor.setTo(.5, 1), this.gesture.anchor.setTo(.5, 1), this.spell.anchor.setTo(.5, 1), this.range.anchor.setTo(.5, 1), this.attack.anchor.setTo(.5, 1), this.bite.anchor.setTo(.5, 1), this.getem.anchor.setTo(.5, 1), this.done.anchor.setTo(.5, 1), this.tweens = {}, this.tweens.walking = this.game.add.tween(this.walking), this.tweens.spellbook = this.game.add.tween(this.spellbook), this.tweens.gesture = this.game.add.tween(this.gesture), this.tweens.spell = this.game.add.tween(this.spell), this.tweens.range = this.game.add.tween(this.range), this.tweens.attack = this.game.add.tween(this.attack), this.tweens.bite = this.game.add.tween(this.bite), this.tweens.getem = this.game.add.tween(this.getem), this.tweens.done = this.game.add.tween(this.done), this.tweens.walking.onComplete.addOnce(function() {
      this.game.levelObjects.onTome = function() {
        this.tweens.walking.to({
          y: this.height + this.walking.height + 10
        }, this.speed, this.easing.In, !0);
        var a = this;
        window.setTimeout(function() {
          a.tweens.spellbook.to({
            y: a.target.y
          }, a.speed, a.easing.Out, !0)
        }, 2 * a.speed), this.game.levelObjects.onTome = null
      }, this.game.levelObjects.onTome.context = this
    }, this), this.tweens.spellbook.onComplete.addOnce(function() {
      this.game.levelObjects.onTome = null, this.game.spellbook.onOpen = function() {
        this.tweens.spellbook.to({
          y: this.height + this.spellbook.height + 10
        }, this.speed, this.easing.In, !0);
        var a = this;
        window.setTimeout(function() {
          a.tweens.gesture.to({
            y: a.target.y
          }, a.speed, a.easing.Out, !0)
        }, 3 * a.speed), this.game.spellbook.onOpen = null, this.game.spells.onCasting = null
      }, this.game.spellbook.onOpen.context = this, this.game.spells.onCasting = function() {
        this.tweens.spellbook.to({
          y: this.height + this.spellbook.height + 10
        }, this.speed, this.easing.In, !0);
        var a = this;
        window.setTimeout(function() {
          a.tweens.range.to({
            y: a.target.y
          }, a.speed, a.easing.Out, !0)
        }, 4 * a.speed), this.game.spellbook.onOpen = null, this.game.spells.onCasting = null
      }, this.game.spells.onCasting.context = this
    }, this), this.tweens.gesture.onComplete.addOnce(function() {
      this.game.spellbook.onClose = function() {
        this.tweens.gesture.to({
          y: this.height + this.gesture.height + 10
        }, this.speed, this.easing.In, !0);
        var a = this;
        window.setTimeout(function() {
          a.tweens.spell.to({
            y: a.target.y
          }, a.speed, a.easing.Out, !0)
        }, 4 * a.speed), this.game.spellbook.onClose = null
      }, this.game.spellbook.onClose.context = this
    }, this), this.tweens.spell.onComplete.addOnce(function() {
      this.game.spells.onCasting = function() {
        this.tweens.spell.to({
          y: this.height + this.spell.height + 10
        }, this.speed, this.easing.In, !0);
        var a = this;
        window.setTimeout(function() {
          a.tweens.range.to({
            y: a.target.y
          }, a.speed, a.easing.Out, !0)
        }, 4 * a.speed), this.game.spells.onCasting = null
      }, this.game.spells.onCasting.context = this
    }, this), this.tweens.range.onComplete.addOnce(function() {
      this.game.enemies.onInfo = function() {
        this.tweens.range.to({
          y: this.height + this.range.height + 10
        }, this.speed, this.easing.In, !0);
        var a = this;
        window.setTimeout(function() {
          a.tweens.attack.to({
            y: a.target.y
          }, a.speed, a.easing.Out, !0)
        }, 3 * a.speed), this.game.enemies.onInfo = null, this.game.enemies.onKill = null
      }, this.game.enemies.onInfo.context = this, this.game.enemies.onKill = function() {
        this.tweens.range.to({
          y: this.height + this.range.height + 10
        }, this.speed, this.easing.In, !0);
        var a = this;
        window.setTimeout(function() {
          a.tweens.getem.to({
            y: a.target.y
          }, a.speed, a.easing.Out, !0)
        }, 3 * a.speed), this.game.enemies.onInfo = null, this.game.enemies.onKill = null
      }, this.game.enemies.onKill.context = this
    }, this), this.tweens.attack.onComplete.addOnce(function() {
      this.game.enemies.onKill = function() {
        this.tweens.attack.to({
          y: this.height + this.attack.height + 10
        }, this.speed, this.easing.In, !0);
        var a = this;
        window.setTimeout(function() {
          a.tweens.getem.to({
            y: a.target.y
          }, a.speed, a.easing.Out, !0)
        }, 3 * a.speed), this.game.enemies.onKill = null
      }, this.game.enemies.onKill.context = this
    }, this), this.tweens.getem.onComplete.addOnce(function() {
      this.game.inputHandler.onStartWalk = function() {
        this.tweens.getem.to({
          y: this.height + this.attack.height + 10
        }, this.speed, this.easing.In, !0), this.game.enemies.onAlert = function(b) {
          if ("rat 0" == b.id) {
            var a = this;
            window.setTimeout(function() {
              a.tweens.bite.to({
                y: a.target.y
              }, a.speed, a.easing.Out, !0)
            }, 2 * a.speed), this.game.enemies.onAlert = null
          }
        }, this.game.enemies.onAlert.context = this, this.game.inputHandler.onStartWalk = null
      }, this.game.inputHandler.onStartWalk.context = this
    }, this), this.tweens.bite.onComplete.addOnce(function() {
      this.game.inputHandler.onWait = function() {
        this.game.enemies.onKill = null, this.game.inputHandler.onWait = null, this.tweens.bite.to({
          y: this.height + this.bite.height + 10
        }, this.speed, this.easing.In, !0)
      }, this.game.inputHandler.onWait.context = this, this.game.enemies.onKill = function() {
        this.tweens.bite.to({
          y: this.height + this.bite.height + 10
        }, this.speed, this.easing.In, !0), this.game.enemies.onKill = null, this.game.inputHandler.onWait = null
      }, this.game.enemies.onKill.context = this
    }, this);
    var a = this;
    window.setTimeout(function() {
      a.tweens.walking.to({
        y: a.target.y
      }, a.speed, a.easing.Out, !0)
    }, 500)
  },
  start_level2: function() {
    this.target = {
      x: 780 / this.scaleMod,
      y: 690 / this.scaleMod
    }, this.walkIdiot = this.group.create(this.target.x, 0, "reminder"), this.levelup = this.group.create(this.target.x, 0, "tutorial", 9), this.desc = this.group.create(this.target.x, 0, "tutorial", 10), this.upgrade = this.group.create(this.target.x, 0, "tutorial", 11), this.game.mobile && (this.walkIdiot.scale = new Phaser.Point(.5, .5), this.levelup.scale = new Phaser.Point(.5, .5), this.desc.scale = new Phaser.Point(.5, .5), this.upgrade.scale = new Phaser.Point(.5, .5)), this.walkIdiot.y = this.height + this.walkIdiot.height + 10, this.levelup.y = this.height + this.levelup.height + 10, this.desc.y = this.height + this.desc.height + 10, this.upgrade.y = this.height + this.upgrade.height + 10, this.walkIdiot.anchor.setTo(.5, 1), this.levelup.anchor.setTo(.5, 1), this.desc.anchor.setTo(.5, 1), this.upgrade.anchor.setTo(.5, 1), this.tweens = {}, this.tweens.walkIdiot = this.game.add.tween(this.walkIdiot), this.tweens.levelup = this.game.add.tween(this.levelup), this.tweens.desc = this.game.add.tween(this.desc), this.tweens.upgrade = this.game.add.tween(this.upgrade), this.tweens.walkIdiot.onComplete.addOnce(function() {
      this.game.levelObjects.onMarker.one = function() {
        this.tweens.walkIdiot.to({
          y: this.height + this.levelup.height + 10
        }, this.speed, this.easing.In, !0)
      }, this.game.levelObjects.onMarker.one.context = this
    }, this);
    var a = this;
    this.game.game.drag < 3 && window.setTimeout(function() {
      a.tweens.walkIdiot.to({
        y: a.target.y
      }, a.speed, a.easing.Out, !0)
    }, 500), this.tweens.levelup.onComplete.addOnce(function() {
      this.game.player.onLevelUp = null, this.game.spellbook.onOpen = function() {
        this.tweens.levelup.to({
          y: this.height + this.levelup.height + 10
        }, this.speed, this.easing.In, !0);
        var a = this;
        window.setTimeout(function() {
          a.tweens.desc.to({
            y: a.target.y
          }, a.speed, a.easing.Out, !0)
        }, 2 * a.speed)
      }, this.game.spellbook.onOpen.context = this
    }, this), this.tweens.desc.onComplete.addOnce(function() {
      this.game.spellbook.onOpen = null, this.game.spellbook.onCheckUpgrade = function() {
        this.tweens.desc.to({
          y: this.height + this.desc.height + 10
        }, this.speed, this.easing.In, !0);
        var a = this;
        window.setTimeout(function() {
          a.tweens.upgrade.to({
            y: a.target.y
          }, a.speed, a.easing.Out, !0)
        }, 3 * a.speed), this.game.spellbook.onCheckUpgrade = null, this.game.spellbook.onClose = null
      }, this.game.spellbook.onCheckUpgrade.context = this, this.game.spellbook.onClose = function() {
        this.tweens.desc.to({
          y: this.height + this.desc.height + 10
        }, this.speed, this.easing.In, !0), this.game.spellbook.onClose = null, this.game.spellbook.onCheckUpgrade = null
      }, this.game.spellbook.onClose.context = this
    }, this), this.tweens.upgrade.onComplete.addOnce(function() {
      this.game.spellbook.onClose = null, this.game.spellbook.onClose = function() {
        this.tweens.upgrade.to({
          y: this.height + this.upgrade.height + 10
        }, this.speed, this.easing.In, !0), this.game.spellbook.onClose = null
      }, this.game.spellbook.onClose.context = this
    }, this), this.game.player.onLevelUp = function() {
      var a = this;
      window.setTimeout(function() {
        a.tweens.levelup.to({
          y: a.target.y
        }, a.speed, a.easing.Out, !0)
      }, 3 * a.speed)
    }, this.game.player.onLevelUp.context = this
  },
  start_level3: function() {
    this.target = {
      x: 780 / this.scaleMod,
      y: 690 / this.scaleMod
    }, this.newspell = this.group.create(this.target.x, 0, "tutorial", 12), this.newpattern = this.group.create(this.target.x, 0, "tutorial", 13), this.mutant = this.group.create(this.target.x, 0, "tutorial", 14), this.game.mobile && (this.newspell.scale = new Phaser.Point(.5, .5), this.newpattern.scale = new Phaser.Point(.5, .5), this.mutant.scale = new Phaser.Point(.5, .5)), this.newspell.y = this.height + this.newspell.height + 10, this.newpattern.y = this.height + this.newpattern.height + 10, this.mutant.y = this.height + this.mutant.height + 10, this.newspell.anchor.setTo(.5, 1), this.newpattern.anchor.setTo(.5, 1), this.mutant.anchor.setTo(.5, 1), this.tweens = {}, this.tweens.newspell = this.game.add.tween(this.newspell), this.tweens.newpattern = this.game.add.tween(this.newpattern), this.tweens.mutant = this.game.add.tween(this.mutant), this.tweens.newspell.onComplete.addOnce(function() {
      this.game.levelObjects.onTome = null, this.game.spellbook.onOpen = function() {
        this.tweens.newspell.to({
          y: this.height + this.newspell.height + 10
        }, this.speed, this.easing.In, !0);
        var a = this;
        window.setTimeout(function() {
          a.tweens.newpattern.to({
            y: a.target.y
          }, a.speed, a.easing.Out, !0)
        }, 3 * a.speed), this.game.spellbook.onOpen = null
      }, this.game.spellbook.onOpen.context = this, this.game.spells.onShock = function() {
        this.tweens.newspell.to({
          y: this.height + this.newspell.height + 10
        }, this.speed, this.easing.In, !0), this.game.spellbook.onOpen = null, this.game.spells.onShock = null
      }, this.game.spells.onShock.context = this
    }, this), this.tweens.newpattern.onComplete.addOnce(function() {
      this.game.spells.onShock = function() {
        this.tweens.newpattern.to({
          y: this.height + this.newpattern.height + 10
        }, this.speed, this.easing.In, !0);
        var a = this;
        window.setTimeout(function() {
          a.tweens.mutant.to({
            y: a.target.y
          }, a.speed, a.easing.Out, !0)
        }, 3 * a.speed), this.game.spells.onShock = null
      }, this.game.spells.onShock.context = this
    }, this), this.tweens.mutant.onComplete.addOnce(function() {
      this.game.spells.onShock = null, this.game.inputHandler.onStartWalk = function() {
        this.tweens.mutant.to({
          y: this.height + this.mutant.height + 10
        }, this.speed, this.easing.In, !0), this.game.inputHandler.onStartWalk = null
      }, this.game.inputHandler.onStartWalk.context = this
    }, this), this.game.levelObjects.onTome = function() {
      var a = this;
      window.setTimeout(function() {
        a.tweens.newspell.to({
          y: a.target.y
        }, a.speed, a.easing.Out, !0)
      }, 3 * a.speed)
    }, this.game.levelObjects.onTome.context = this
  }
}, Main.Splash = function(a) {
  this.game = a, this.exec = !1
}, Main.Splash.prototype = {
  create: function() {
    return this.game.run ? (this.scaleMod = this.game.mobile ? 2 : 1, this.group = this.game.add.group(), this.group.alpha = 0, this.splash = this.group.create(300 / this.scaleMod, 202 / this.scaleMod, "splash"), this.eyes = this.group.create(this.splash.x + 90 / this.scaleMod, this.splash.y + 94 / this.scaleMod, "splasheyes", 0), this.eyes.scale = new Phaser.Point(1 / this.scaleMod, 1 / this.scaleMod), this.splash.scale = new Phaser.Point(1 / this.scaleMod, 1 / this.scaleMod), this.text = this.game.add.text(this.game.camera.screenView.centerX + 10 / this.scaleMod, this.splash.y + this.splash.height + 20 / this.scaleMod, "Hypnotic Owl", {
      font: 2 * this.game.fontsize + "px " + this.game.font,
      fill: "white",
      align: "center"
    }, this.group), this.text.alpha = 0, this.text.anchor.setTo(.5, 0), this.startText = this.game.add.text(this.text.x, this.text.y, "Touch to Start", {
      font: 2 * this.game.fontsize + "px " + this.game.font,
      fill: "white",
      align: "center"
    }, this.group), this.startText.alpha = 0, this.startText.anchor.setTo(.5, 0), this.fades = [], void(this.game.showSponsor ? (this.sponsor = this.game.add.sprite(this.game.camera.screenView.centerX, this.game.camera.screenView.centerY, "sponsorLogo"), this.sponsor.anchor.setTo(.5, .5), this.sponsor.alpha = 0, this.sponsor.scale = new Phaser.Point(1 / this.scaleMod, 1 / this.scaleMod), this.sponsorFade = this.game.add.tween(this.sponsor), this.sponsorFade.onComplete.addOnce(function() {
      window.setTimeout(function(a) {
        a.sponsorFade.onComplete.addOnce(a.start, a), a.sponsorFade.to({
          alpha: 0
        }, 1e3, Phaser.Easing.Cubic.Out, !0)
      }, 500, this)
    }, this), this.sponsorFade.to({
      alpha: 1
    }, 1e3, Phaser.Easing.Cubic.In, !0)) : this.start())) : void(document.body.innerHTML = '<div style="color:white; font-family:georgia; font-size: 120%; width:400px; margin: 0 auto;"><h1 style="color:#f30; text-align:center;">ERROR</h1><p>Oh noes! Looks like you are trying to run the game from the wrong site!</p><p>Please visit <a style="color:orange" href="http://hypnoticowl.com/games/the-wizard/play/" target="blank">this link</a> to play The Wizard.</p><p style="font-size:10px; padding-top:20px;">Think this might be a mistake? Send a report to <a href="mailto:support@hypnoticowl.com" style="color:orange">support@hypnoticowl.com</a></p>')
  },
  start: function() {
    var a = this.game.add.tween(this.group);
    this.fades.push(a), a.onComplete.add(function() {
      window.setTimeout(function(a) {
        a.eyes.frame = 1, window.setTimeout(function(a) {
          a.eyes.frame = 2, a.eyes.alpha = 0, window.setTimeout(function(a) {
            a.eyes.frame = 3;
            var b = a.game.add.tween(a.eyes);
            a.fades.push(b), b.onComplete.add(function() {
              if (this.game.device.android || this.game.device.iOS) {
                var b = a.game.add.tween(a.text);
                b.to({
                  alpha: 0
                }, 500, Phaser.Easing.Linear.None, !0), b.onComplete.add(function() {
                  var b = a.game.add.tween(a.startText);
                  b.to({
                    alpha: 1
                  }, 1e3, Phaser.Easing.Linear.None, !0, 0, Number.MAX_VALUE, !0)
                }, a)
              } else window.setTimeout(function(a) {
                var b = a.game.add.tween(a.group);
                a.fades.push(b), b.onComplete.add(function() {
                  this.exit()
                }, a), b.to({
                  alpha: 0
                }, 2500, Phaser.Easing.Cubic.InOut, !0)
              }, 1500, a)
            }, a), b.to({
              alpha: 1
            }, 1500, Phaser.Easing.Cubic.InOut, !0);
            var c = a.game.add.tween(a.text);
            a.fades.push(c), c.to({
              alpha: 1
            }, 1500, Phaser.Easing.Cubic.InOut, !0)
          }, 250, a)
        }, 100, a)
      }, 100, this)
    }, this), a.to({
      alpha: 1
    }, 2e3, Phaser.Easing.Cubic.InOut, !0), this.game.input.onTap.add(this.exit, this)
  },
  update: function() {
    this.game.buttonHandler.update() && (this.game.buttonHandler.buttons.activate || this.game.buttonHandler.buttons.back || this.game.buttonHandler.buttons.menu) && (this.game.buttonHandler.timeOut(), this.exit())
  },
  unload: function() {
    this.group.removeAll();
    for (var a = 0; a < this.fades.length; a++) this.fades[a].stop()
  },
  exit: function() {
    this.exec || (this.exec = !0, this.game.input.onTap.removeAll(), this.unload(), window.setTimeout(function(a) {
      a.game.state.start("mainMenu", Main.MainMenu)
    }, 100, this))
  }
}, Main.Credits = function(a) {
  this.game = a
}, Main.Credits.prototype = {
  create: function() {
    var b = this.game.mobile ? 2 : 1;
    this.game.audioplayer.playBGM("credits", !1), this.game.audioplayer.stopAmbient(), this.gamepad = this.game.input.gamepad.pad1, this.keyboard = this.game.input.keyboard, this.group = this.game.add.group(), this.group.y = this.game.camera.screenView.height + 20 / b;
    var a = this.group.create(this.game.camera.screenView.centerX, 0, "bigLogo");
    a.anchor.setTo(.5, 0), this.game.mobile && (a.scale = new Phaser.Point(.5, .5));
    var c = "\n\n\nProject Lead & Design\n\n\nProgramming\n\n\n\n2D Art\n\n\n\nLogo & Animation\n\n\nStory & Soundtrack\n\n\nSound Effects\n\n\n\n\nFonts\n\n\n\n\n\n\n\n\n(c) 2014 Hypnotic Owl",
      d = "\nA Hypnotic Owl Game\n\n\nJan Lachnit\n\n\nJan Lachnit\nHannes Flor\n\n\nOryx Labs\nRieke Helms\n\n\nRieke Helms\n\n\nHannes Flor\n\n\nGiliam Spliethoff\nVeronika Care (Voice Acting)\nand freesound.org\n\n\n'Alagard' by Hewett Tsoi\n'VCR OSD Mono' by MrManet\n\n\nPowered by Phaser 1.1.3\nwww.photonstorm.com\n\n\n\nwww.hypnoticowl.com",
      e = this.group.add(this.game.add.text(this.game.camera.screenView.centerX, a.height, c, {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "#FFE100",
        align: "center"
      })),
      f = this.group.add(this.game.add.text(this.game.camera.screenView.centerX, a.height, d, {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "white",
        align: "center"
      }));
    e.anchor.setTo(.5, 0), f.anchor.setTo(.5, 0), window.setTimeout(function(a) {
      a.fadeOut = a.game.add.tween(a.group), a.fadeOut.onComplete.add(function() {
        this.exit()
      }, a), a.fadeOut.to({
        y: -1650 / b
      }, 31e3, Phaser.Easing.Linear.None, !0), a.game.input.onTap.add(a.exit, a)
    }, 1e3, this)
  },
  unload: function() {
    this.group.removeAll()
  },
  exit: function() {
    this.game.input.onTap.removeAll(), window.setTimeout(function(a) {
      a.fadeOut.stop(), a.unload(), a.game.state.start("mainMenu", Main.MainMenu)
    }, 100, this)
  },
  handleButtonInput: function() {
    (this.gamepad.justPressed(Phaser.Gamepad.XBOX360_A) || this.keyboard.isDown(Phaser.Keyboard.SPACEBAR) || this.keyboard.isDown(Phaser.Keyboard.ENTER) || this.keyboard.isDown(Phaser.Keyboard.NUMPAD_ENTER)) && this.exit(), (this.gamepad.justPressed(Phaser.Gamepad.XBOX360_B) || this.keyboard.isDown(Phaser.Keyboard.ESC) || this.keyboard.isDown(Phaser.Keyboard.X) || this.keyboard.isDown(Phaser.Keyboard.NUMPAD_ADD)) && this.exit()
  },
  update: function() {
    this.handleButtonInput()
  }
}, Main.Cutscene = function(a) {
  this.game = a, this.style = {
    font: this.game.fontsize + "px " + this.game.font,
    fill: "#3b3219",
    align: "left"
  }, this.buttonStyle = {
    font: this.game.fontsize + "px " + this.game.font,
    fill: "#3b3219",
    align: "left"
  }
}, Main.Cutscene.prototype = {
  create: function() {
    switch (this.scaleMod = this.game.mobile ? 2 : 1, null == this.game.cutscenes && (this.game.cutscenes = {}), "new" == Main.Game.prototype.loadState ? (this.game.savegame.clear(), this.game.cutscenes = {}) : this.game.savegame.load(), this.gamepad = this.game.input.gamepad.pad1, this.keyboard = this.game.input.keyboard, this.lastInputTime = 0, this.pages = [], this.page = 0, this.game.savegame.player.level) {
      case -1:
        this.game.audioplayer.stopBGM(), this.game.audioplayer.playAmbient("fireplace", !0), this.addPage([{
          type: "text",
          x: 206,
          y: 288,
          text: "   Kevin awoke in the dead of the\nnight. A noise had disturbed his\nslumber, and there was a strange\ntingling sensation spreading from\nhis nostrils. He raised his hand to\nscratch his nose and found--\n   Nothing.\n   Suddenly, he was wide awake.\nWhat was going on? Was there\nsomething wrong with his face?"
        }, {
          type: "image",
          x: 460,
          y: 180,
          frame: 0
        }]), this.addPage([{
          type: "text",
          x: 244,
          y: 102,
          text: "   Aghast, he jumped out of bed\nand rushed toward the mirror, but\nwhen he turned on the light, he,\nagain, found nothing.\n   His face was gone."
        }, {
          type: "image",
          x: 500,
          y: 390,
          frame: 1
        }, {
          type: "text",
          x: 244,
          y: 502,
          text: "   Kevin was frantic. His face. His\nbeautiful, charming face-- stolen!\nBut there was no time for despair;\na noise in the hall told him that\nthe thief wasn't yet far."
        }]), this.addPage([{
          type: "text",
          x: 206,
          y: 118,
          text: "   Fast as the wind, he threw on\nhis robe and took up pursuit of\nthe sordid scoundrel. He didn't\nknow who had done it or why, he\nonly knew one thing:\n   This would not stand!\n\n   The chase led him down into\nthe academy's cellar and to the\nentrance to the castle's sewer.\n   'All right,' he thought, 'You\nwant to play dirty? Let's get dirty!'\nand jumped into the sewage."
        }, {
          type: "button",
          x: 344,
          y: 642,
          text: "Continue"
        }]);
        break;
      case 2:
        if (null != this.game.cutscenes.stage2) return void this.continueGame(!0);
        this.game.cutscenes.stage2 = !0, this.game.audioplayer.stopBGM(), this.game.audioplayer.playAmbient("fireplace", !0), this.addPage([{
          type: "text",
          x: 188,
          y: 296,
          text: "   As Kevin emerged from the sewer,\nsmelling like something he had\npooped out after last night's wild\nboar pork belly kebabs, he couldn't\nhelp but wonder...\n\n   Who was that rapscallion,\nfleeing with his face in hand? And\nwhat could drive a man to do such\na thing?"
        }, {
          type: "image",
          x: 448,
          y: 184,
          frame: 2
        }]), this.addPage([{
          type: "text",
          x: 238,
          y: 102,
          text: "   Sure, it was a very handsome\nface, with a smile that could light\nup the world, but did he know how\nto wield such a power? How to care\nfor it, maintain it? Which creams\nand moisturizers to apply, how to\ndeal with the always-problematic\nT-zone?\n\n   Kevin shuddered at the thought\nof what this weasel might do to his\nbeloved appearance. No, he couldn't\nlet him get away with it. He had to\nstop him, no matter what the cost."
        }, {
          type: "button",
          x: 400,
          y: 662,
          text: "Continue"
        }]);
        break;
      case 5:
        if (null != this.game.cutscenes.stage3) return void this.continueGame(!0);
        this.game.cutscenes.stage3 = !0, this.game.audioplayer.stopBGM(), this.game.audioplayer.playAmbient("fireplace", !0), this.addPage([{
          type: "text",
          x: 208,
          y: 280,
          text: "   Kevin crawled into the light.\nA small, winding tunnel had led\nhim to the surface, and he was\nglad to be out of these stuffy,\nmusty halls.\n   As he dusted himself off, his\ngaze fell upon a piece of cloth,\nstuck in a crevice nearby. This\nmust have belonged to the thief's\nrobe! But something about it felt\nfamiliar..."
        }, {
          type: "image",
          x: 452,
          y: 176,
          frame: 3
        }]), this.addPage([{
          type: "text",
          x: 244,
          y: 92,
          text: "   Slowly, the truth began to dawn\non him. His adversary's robe was of\nthe same material as his own. It was\na student. Someone he knew.\n   Of course! Who else would know\nof his exceptional complexion? His\nthick, full eyelashes? He might not\nhave been the brightest torch in\nthe chandelier, and if not for these\nfortunately-placed spell books, he\nmight not have gotten this far, but\nKevin wasn't dumb, oh no! He\nunderstood it all now. And most\nimportantly--\n   He knew who the thief was."
        }, {
          type: "button",
          x: 390,
          y: 678,
          text: "Continue"
        }]);
        break;
      case 8:
        if (null != this.game.cutscenes.stage4) return void this.continueGame(!0);
        this.game.cutscenes.stage4 = !0, this.game.audioplayer.stopBGM(), this.game.audioplayer.playAmbient("fireplace", !0), this.addPage([{
          type: "text",
          x: 200,
          y: 274,
          text: "   Steve. It was that wretched\nSteve, his nemesis! There was no\ndoubt in his mind. Portals to the\ndark-elven world? That was so\nSteve.\n   Steve had always been jealous\nof him, always making fun of him,\nbecause he didn't know this or\nthat spell, couldn't mix potions, or\ndidn't care for the history of their\ncraft. As if any of it mattered!"
        }, {
          type: "image",
          x: 448,
          y: 176,
          frame: 4
        }]), this.addPage([{
          type: "text",
          x: 234,
          y: 95,
          text: "   If knowledge mattered above all,\nthe world would be a much uglier\nplace. Kevin knew it, and, apparently,\nso did Steve. Gone was all pretense of\nintellect; Steve needed this face to\nsucceed in the world, needed it to\ntrick people into believing he was\nbeautiful when he was not.\n\n   Kevin did not dare think of the\nchaos, the mischief one might cause\nwith a stolen appearance like his. He\nknew he had to stop him; not for\nhimself, but for the good of all."
        }, {
          type: "button",
          x: 390,
          y: 658,
          text: "Continue"
        }]);
        break;
      case 11:
        if (null != this.game.cutscenes.stage5) return void this.continueGame(!0);
        this.game.cutscenes.stage5 = !0, this.game.audioplayer.stopBGM(), this.game.audioplayer.playAmbient("fireplace", !0), this.addPage([{
          type: "text",
          x: 212,
          y: 274,
          text: "   Kevin recognized this room.\nThe portal had transported them\nback to the academy, where he\nfound himself in the basement\nof the west wing's tower.\n   Of course it would end here.\nWhere else could he run? The\nchase through the outer\npremises had been nothing but a\ndiversion, a trick to lead him on\nthe wrong track."
        }, {
          type: "image",
          x: 454,
          y: 176,
          frame: 5
        }]), this.addPage([{
          type: "text",
          x: 254,
          y: 114,
          text: "   Kevin's heart was pounding.\nHe was close, he could feel it! Not\nmuch longer and Steve would\nhave to answer for his crimes\nagainst beauty and humanity.\n   He heard the scoundrel racing\nup the stairs. What a fool. Soon\nenough, he would reach the top,\nand that would be it. There would\nbe nowhere left to run.\n\n   With grim determination, Kevin\nbegan his ascension of the tower."
        }, {
          type: "button",
          x: 396,
          y: 652,
          text: "Continue"
        }]);
        break;
      case 14:
        this.game.audioplayer.playBGM("outro"), this.game.audioplayer.playAmbient("fireplace", !0), this.addPage([{
          type: "text",
          x: 204,
          y: 126,
          text: '   Kevin raced up the stairs.\nThere he was, wearing his face\nlike-- well, a face.\n   "Stop right there," he yelled.\n"It\'s over, Steve!"\n   "I\'m not Steve," the thief\nreplied. "Don\'t you know what\'s\ngoing on here, Kevin? Don\'t you\nsee?"\n   Perplexed, Kevin stared into\nhis own eyes. What was he talking\nabout? What was going on?\n   "I am--" the man began,\npausing for dramatic effect.'
        }]), this.addPage([{
          type: "text",
          x: 246,
          y: 92,
          text: '   "Your TEACHER!"\n   "Professor Squabblebeard!?"\n   Kevin didn\'t believe his ears--\nwhich were technically still attached\nto Professor Squabblebeard\'s head.'
        }, {
          type: "image",
          x: 500,
          y: 392,
          frame: 6
        }, {
          type: "text",
          x: 246,
          y: 512,
          text: '   "But why? Why do this to me?"\n   "Kevin, my boy, it was the only\nway to make you understand. To\nmake you learn." The professor\npaced up and down the room.'
        }]), this.addPage([{
          type: "text",
          x: 192,
          y: 140,
          text: "   \"You're not dumb, Kevin. But\nyou're shallow, vain. You care about\nnothing but your looks. You don't\npay attention in class. You don't\nstudy. The only books you look at\nare the shiny ones you can see your\nreflection in. It's not good, Kevin.\"\n\n   \"I don't understand... Beauty is\nthe most powerful thing in the\nworld! Everything I ever achieved\nwas due to my thick, golden hair\nand my winning smile!\""
        }]), this.addPage([{
          type: "text",
          x: 238,
          y: 86,
          text: '   "Is that so? Think of what you\ndid today. Do you see what you are\ncapable of when you stop obsessing\nover the way you look?"\n   Kevin stared at him, stunned.\n   "You-- You are right. My looks...\nthey have been holding me back my\nwhole life. All this time, I thought I\nwas just beautiful, but I am so much\nmore than that! I am a genius!"\n   "Wait, no, that\'s not what I--"\n   "It\'s ok, Professor. Keep my face.\nI don\'t need it." And with that, Kevin\nturned around and looked straight\ninto the eyes of the man who had\ncome up the stairs behind them.'
        }]), this.addPage([{
          type: "text",
          x: 194,
          y: 98,
          text: '   "What\'s going on here?" the man\non the stairs asked sternly.\n   "Professor Squabblebeard!?"\n   Kevin\'s mouth would have been\nwide open at this point. "But-- if\nyou are here, then who is--"'
        }, {
          type: "image",
          x: 454,
          y: 420,
          frame: 7
        }, {
          type: "text",
          x: 194,
          y: 526,
          text: '   He spun around. "I knew it! I\nknew you couldn\'t be the professor!\nYou look nothing like him!"\n   The imposter took a deep breath\nand sighed. "Busted."'
        }]), this.addPage([{
          type: "text",
          x: 235,
          y: 104,
          text: '   A white flash, and Kevin, again,\nfelt a tingling sensation where his\nnose was supposed to be. Slowly and\ncarefully, he reached out and\nfound--\n   His face. His beautiful face. There\nit was. Oh, how he had missed it.\n\n   Then Kevin\'s attention snapped\nback to the thief and his eyes nearly\npopped out of his head. Before him,\nshyly flapping his wings, was a tiny\ndemon.\n   "Who are you?" Kevin asked.\n   "There are some who call me--"'
        }]), this.addPage([{
          type: "image",
          x: 448,
          y: 188,
          frame: 8
        }, {
          type: "text",
          x: 204,
          y: 300,
          text: '   "Tim."\n   Kevin eyed him suspiciously.\n   "Tim?"\n   "Yes, Tim."\n   "Why did you steal my face,\nTim?"\n   "Well, I guess... I guess I just\nwanted to feel normal for once."\n   Kevin was staggered.\n   "What do you mean by that?"'
        }]), this.addPage([{
          type: "text",
          x: 230,
          y: 78,
          text: "   \"You see, everywhere I go, people\nassume I'm up to no good because of\nthe way I look. But not all demons\nare evil. Most of us don't even like\nconflict. But it's hard to get rid of\nsuch preconceptions.\"\n   Kevin looked at him in surprise.\n   \"Oh. I didn't know that.\"\n   Professor Squabblebeard cleared\nhis throat and came closer.\n   \"It's true, Kevin. Many things\npassed down to us are based on pre-\njudice, misconceptions, or old grudges.\nThat's why it's important to question\nand study even--or especially!--that\nwhich we are sure of.\""
        }]), this.addPage([{
          type: "text",
          x: 204,
          y: 108,
          text: '   Kevin nodded. "I understand.\nBut wait, does that mean that the\nmonsters I fought today--"\n   "You mean, did you hurt\ninnocent creatures?"\n   Professor Squabblebeard\nchuckled.\n   "No, Kevin. The two of you\nchased each other through the\ntraining grounds for the\nadvanced classes. The creatures\nyou saw weren\'t real."\n   Kevin laughed, relieved.\n   "Oh my, what a strange day!"\n   "That it was," Tim agreed.'
        }]), this.addPage([{
          type: "text",
          x: 232,
          y: 108,
          text: '   "Did any of it actually make any\nsense?"\n   "That\'s not important," Professor\nSquabblebeard responded, "all that\nmatters is what you took away from\nit."\n   "I guess that\'s true."\n\n   And with that, the three of them\nwalked off in to the sunset, before\nrealizing that the way to the bed-\nchambers was in the other direction.\n\n                    THE END'
        }, {
          type: "button",
          x: 378,
          y: 668,
          text: "Roll Credits"
        }]);
        break;
      default:
        return void this.skip()
    }
    if (this.overlay = this.game.add.group(), this.mood = this.overlay.create(0, 0, "mood"), this.mood.alpha = .5, this.game.mobile && (this.mood.scale = new Phaser.Point(.5, .5)), this.black = this.overlay.create(0, 0, "hud"), this.black.scale = new Phaser.Point(this.game.camera.screenView.width, this.game.camera.screenView.height), -1 != this.game.savegame.player.level || null != this.game.cutscenes.intro) {
      if (this.pages.length <= 0) return;
      this.pages[0].alpha = 1;
      var a = this.game.add.tween(this.black);
      a.onComplete.add(function() {
        this.game.input.onTap.add(function() {
          this.nextPage()
        }, this)
      }, this), a.to({
        alpha: 0
      }, 1e3, Phaser.Easing.Cubic.InOut, !0)
    } else {
      if (this.pages.length <= 0) return;
      if (this.pages[0].alpha = 1, null != this.game.cutscenes.intro) return void this.continueGame(!0);
      this.game.cutscenes.intro = !0, this.text = this.game.add.text(this.game.camera.screenView.centerX, this.game.camera.screenView.centerY, "A long, long time ago\nin a wizard academy far away...", {
        font: this.game.fontsize + "px " + this.game.font,
        fill: "white",
        align: "center"
      }, this.overlay), this.text.alpha = 0, this.text.anchor.setTo(.5, .5);
      var a = this.game.add.tween(this.text);
      a.onComplete.add(function() {
        window.setTimeout(function(a) {
          var b = a.game.add.tween(a.text);
          b.onComplete.add(function() {
            var a = this.game.add.tween(this.black);
            a.onComplete.add(function() {
              this.game.input.onTap.add(function() {
                this.nextPage()
              }, this)
            }, this), a.to({
              alpha: 0
            }, 1e3, Phaser.Easing.Cubic.InOut, !0)
          }, a), b.to({
            alpha: 0
          }, 3e3, Phaser.Easing.Cubic.InOut, !0)
        }, 500, this)
      }, this), a.to({
        alpha: 1
      }, 3e3, Phaser.Easing.Cubic.InOut, !0)
    }
  },
  addPage: function(b) {
    this.pages.push(this.game.add.group());
    var c = this.pages[this.pages.length - 1],
      f = this.pages.length % 2 === 1,
      d = c.create((f ? 794 : 174) / this.scaleMod, 494 / this.scaleMod, "spellbook_big");
    d.anchor.setTo(.5, .5), d.scale = new Phaser.Point(1 / this.scaleMod, 1 / this.scaleMod);
    for (var a = 0; a < b.length; a++) switch (b[a].type) {
      case "text":
        this.game.add.text(b[a].x / this.scaleMod, b[a].y / this.scaleMod, b[a].text, this.style, c);
        break;
      case "image":
        var e = c.create(b[a].x / this.scaleMod, b[a].y / this.scaleMod, "cutscene", b[a].frame);
        e.anchor.setTo(.5, .5), e.scale = new Phaser.Point(1 / this.scaleMod, 1 / this.scaleMod);
        break;
      case "button":
        this.continueButton = this.game.add.button(b[a].x / this.scaleMod, b[a].y / this.scaleMod, "buttons", this.continueGame, this, 1, 0, 2, 1, c), this.continueButton.visible = !1, this.continueButton.text = this.game.add.text(this.continueButton.x + 48 / this.scaleMod, this.continueButton.y + 2 / this.scaleMod, b[a].text, this.buttonStyle, c), this.continueButton.onInputOver.add(function() {
          this.continueButton.text.fill = "#645934"
        }, this), this.continueButton.onInputOut.add(function() {
          this.continueButton.text.fill = "#3b3219"
        }, this)
    }
    c.alpha = 0
  },
  nextPage: function() {
    this.page < this.pages.length - 1 ? (this.game.audioplayer.playPageTurn(), this.pages[this.page].alpha = 0, this.page++, this.pages[this.page].alpha = 1, this.page == this.pages.length - 1 && (this.game.input.onTap.removeAll(), this.continueButton.visible = !0)) : this.continueGame()
  },
  prevPage: function() {
    this.page > 0 && (this.game.audioplayer.playPageTurn(), this.pages[this.page].alpha = 0, this.page--, this.pages[this.page].alpha = 1)
  },
  continueGame: function() {
    this.game.audioplayer.playCloseSpellbook(), this.game.input.onTap.removeAll(), this.fadeOut = this.game.add.tween(this.black), this.fadeOut.onComplete.add(function() {
      this.fadeOut.stop(), window.setTimeout(function(a) {
        a.overlay.removeAll();
        for (var b = 0; b < a.pages.length; b++) a.pages[b].removeAll();
        a.game.state.start("game", Main.Game)
      }, 100, this)
    }, this), this.fadeOut.to({
      alpha: 1
    }, 1e3, Phaser.Easing.Cubic.InOut, !0)
  },
  skip: function() {
    this.game.input.onTap.removeAll(), this.game.state.start("game", Main.Game)
  },
  rollCredits: function() {
    this.game.audioplayer.playCloseSpellbook(), this.game.input.onTap.removeAll(), this.fadeOut = this.game.add.tween(this.black), this.fadeOut.onComplete.add(function() {
      this.fadeOut.stop(), window.setTimeout(function(a) {
        a.overlay.removeAll();
        for (var b = 0; b < a.pages.length; b++) a.pages[b].removeAll();
        a.game.state.start("credits", Main.Credits)
      }, 100, this)
    }, this), this.fadeOut.to({
      alpha: 1
    }, 1e3, Phaser.Easing.Cubic.InOut, !0)
  },
  handleButtonInput: function() {
    this.game.buttonHandler.update() && ((this.game.buttonHandler.buttons.up || this.game.buttonHandler.buttons.left || this.game.buttonHandler.buttons.back) && (this.prevPage(), this.game.buttonHandler.timeOut()), (this.game.buttonHandler.buttons.down || this.game.buttonHandler.buttons.right || this.game.buttonHandler.buttons.activate) && (this.nextPage(), this.game.buttonHandler.timeOut()), this.game.buttonHandler.buttons.menu && (this.skip(), this.game.buttonHandler.timeOut()))
  },
  update: function() {
    void 0 !== this.pages[this.page] && void 0 !== this.text && 1 === this.pages[this.page].alpha && 0 === this.text.alpha && this.handleButtonInput()
  }
}, Main.Gesture = function(a) {
  this.game = a
}, Main.Gesture.prototype = {
  init: function() {
    var d, e, g = document.getElementsByTagName("canvas")[0],
      b = document.createElement("canvas");
    b.id = "gesturing", b.width = g.width, b.height = g.height - this.game.tilesize, document.body.appendChild(b);
    var a = b.getContext("2d"),
      h = new DollarRecognizer,
      c = [],
      f = !1;
    b.addEventListener("keyup", function(b) {
      var b = b ? b : event ? event : null;
      if (119 == b.keyCode) {
        for (var d = "new Array(", a = 0; a < c.length; a++) {
          var e = Math.round(c[a].X) + "," + Math.round(c[a].Y);
          d += "new Point(" + e + ")" + (a < c.length - 1 ? "," : "")
        }
        d += ")"
      }
      return !1
    }.bind(this), !1), b.addEventListener("touchstart", function(f) {
      if (this.checkPermission()) {
        f.preventDefault(), c = [];
        var g = f.touches[0];
        a.beginPath(), a.strokeStyle = "#bae1ff", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = 6, d = g.pageX - b.offsetLeft, e = g.pageY - this.game.tilesize
      }
    }.bind(this), !1), b.addEventListener("touchmove", function(f) {
      if (!(d - (f.pageX - b.offsetLeft) < 3 && d - (f.pageX - b.offsetLeft) > -3 && e - (f.pageY - this.game.tilesize) < 3 && e - (f.pageY - this.game.tilesize) > -3)) {
        var g = f.touches[0];
        a.moveTo(d, e), d = g.pageX - b.offsetLeft, e = g.pageY - this.game.tilesize, a.lineTo(d, e), a.stroke(), a.shadowColor = "rgba(169,236,255,0.25)", a.shadowOffsetX = 0, a.shadowOffsetY = 0, a.shadowBlur = 10, c[c.length] = new Point(d, e)
      }
    }.bind(this), !1), b.addEventListener("touchend", function() {
      if (a.closePath(), c.length >= 10) {
        var d = h.Recognize(c);
        80 > Math.round(100 * d.Score) || this.castSpell(d.Name)
      }
      c = [], a.clearRect(0, 0, b.width, b.height)
    }.bind(this), !1), b.addEventListener("mousedown", function(g) {
      this.checkPermission() && (a.clearRect(0, 0, b.width, b.height), f = !0, g.preventDefault(), c = [], a.beginPath(), a.strokeStyle = "#bae1ff", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = 6, a.shadowColor = "rgba(169,236,255,0.1)", a.shadowOffsetX = 0, a.shadowOffsetY = 0, a.shadowBlur = 10, d = g.pageX - b.offsetLeft, e = g.pageY - this.game.tilesize)
    }.bind(this), !1), b.addEventListener("mousemove", function(g) {
      !f || d - (g.pageX - b.offsetLeft) < 3 && d - (g.pageX - b.offsetLeft) > -3 && e - (g.pageY - this.game.tilesize) < 3 && e - (g.pageY - this.game.tilesize) > -3 || (a.moveTo(d, e), d = g.pageX - b.offsetLeft, e = g.pageY - this.game.tilesize, a.lineTo(d, e), a.stroke(), c[c.length] = new Point(d, e))
    }.bind(this), !1), b.addEventListener("mouseup", function() {
      if (f = !1, a.closePath(), c.length >= 10) {
        var d = h.Recognize(c);
        80 > Math.round(100 * d.Score) || this.castSpell(d.Name)
      }
      c = [], a.clearRect(0, 0, b.width, b.height)
    }.bind(this), !1)
  },
  castSpell: function(a) {
    this.game.inputHandler.showDirectionTiles(a)
  },
  checkPermission: function() {
    return !this.game.isPlayersTurn() || this.game.spellbook.isOpen || this.game.ingame.isOpen || this.game.player.walking || "none" != this.game.inputHandler.action ? !1 : !0
  }
}, Main.Log = function(a) {
  this.game = a, this.log = [], this.logTime("Start Session"), window.onbeforeunload = function() {
    this.logTime("End Session"), this.sendLog()
  }.bind(this)
}, Main.Log.prototype = {
  logTime: function(a) {
    this.game.logging && this.log.push({
      msg: a,
      data: (new Date).getTime()
    })
  },
  logData: function(a, b) {
    this.game.logging && this.log.push({
      msg: a,
      data: b
    })
  },
  sendLog: function() {
    if (this.game.logging) {
      this.logTime("Send Logs");
      var a = JSON.stringify(this.log);
      LZMA.compress(a, 1, function(c) {
        var a;
        a = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
        var b = JSON.stringify(c);
        a.open("POST", "logs/savelog.php?data=" + b, !1), a.send(b)
      })
    }
  }
};
