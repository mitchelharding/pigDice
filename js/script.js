//backEnd:
var player1 = "";
var player2 = "";

var rollDice = function(){
  return Math.floor(6 * Math.random()) + 1;
}

function Player(turn){
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}

Player.prototype.rollone = function(){
    if(this.roll === 1) {
      this.tempscore = 0;
      alert("Sorry" + this.playerName + ", you rolled a 1! You turn is over.")
  }else{
    this.tempscore += this.roll;
  }
}

Player.prototype.hold = function(){
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  alert(this.playerName + "your turn is over, pass the mouse!");
}

function resetFields(){
  $(".player1Name").val("");
  $(".player2Name").val("");
}


//frontEnd:
$(document).ready(function(){
  $("button#start").click(function(event){
    player1 = new Player;
    player2 = new Player;
    $(".game-console").show();
    $(".start-menu").hide();

    var player1Name = $(".player1Name").val();
    $(".player1NamePlace").text(player1Name);

    var player2Name = $(".player2Name").val();
    $(".player2NamePlace").text(player2Name);

    player1.playerName = player1Name;
    player2.playerName = player2Name;
  });

  $("button#die-roll-1").click(function(event){
    player1.roll = rollDice();
    $(".die-roll-1").text(player1.roll);
    player1.rollone()
    $(".turn-score-1").text(player1.tempscore);
  });

   $("button#die-roll-2").click(function(event){
     player2.roll = rollDice();
     $(".die-roll-2").text(player2.roll);
     player2.rollone()
     $(".turn-score-2").text(player2.tempscore);
   });

   $("button#hold-1").click(function(event){
     player1.hold()
     $(".total-score-1").text(player1.totalscore);
     $(".turn-score-1").empty();
     $(".die-roll-1").empty();
   });


});
