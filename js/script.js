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
    alert(player1.roll);
  });
});
