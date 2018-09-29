// Business Logic

var numbersRoll=[1,1,2,2,2,3,3,3,4,4,5,5,6,6]

var playerOneRound=[]

var playerTwoRound=[]

var playerOneTotal=[]

var playerTwoTotal=[]


function rollp1(){
  var numberRolled=numbersRoll[Math.floor(Math.random() * numbersRoll.length)];
  if(numberRolled!=1){
    playerOneRound.push(numberRolled)
  }else{
    playerOneRound.length=0
    document.getElementById("roll-p1").disabled = true;
    document.getElementById("hold-p1").disabled = true;
    document.getElementById("roll-p2").disabled = false;
    document.getElementById("hold-p2").disabled = false;

  }
}

function rollp2() {
  var numberRolled = numbersRoll[Math.floor(Math.random() * numbersRoll.length)];
  if (numberRolled!=1){
    playerTwoRound.push(numberRolled)
  } else {
    playerTwoRound.length=0
    document.getElementById("roll-p1").disabled = false;
    document.getElementById("hold-p1").disabled = false;
    document.getElementById("roll-p2").disabled = true;
    document.getElementById("hold-p2").disabled = true;

  }
}

function counter1(){
  playerOneTotal.push.apply(playerOneTotal, playerOneRound)
  playerOneRound.length=0
  document.getElementById("roll-p1").disabled = true;
  document.getElementById("hold-p1").disabled = true;
  document.getElementById("roll-p2").disabled = false;
  document.getElementById("hold-p2").disabled = false;

}

function counter2() {
  playerTwoTotal.push.apply(playerTwoTotal, playerTwoRound)
  playerTwoRound.length=0
  document.getElementById("roll-p1").disabled = false;
  document.getElementById("hold-p1").disabled = false;
  document.getElementById("roll-p2").disabled = true;
  document.getElementById("hold-p2").disabled = true;
}

function clearEverything(){
  document.location.reload(true)
}

// User Data

$(document).ready(function(){
  $('#roll-p1').click(function(){
   rollp1();
    var sumP1R = playerOneRound.reduce(function (a, b) { return a + b; }, 0)
    $("#round-p1").text(sumP1R);
  })
})

$(document).ready(function () {
  $('#roll-p2').click(function () {
    rollp2();
    var sumP2R = playerTwoRound.reduce(function (a, b) { return a + b; }, 0)
    $("#round-p2").text(sumP2R);
  })
})

$(document).ready(function () {
  $('#hold-p1').click(function () {
    counter1();
    var sumP1T = playerOneTotal.reduce(function (a, b) { return a + b; }, 0)
    if(sumP1T<100){
    $("#total-p1").text(sumP1T);
    }else{
    alert('Player One you have won the game');
    clearEverything();
    }
  })
})

$(document).ready(function () {
  $('#hold-p2').click(function () {
    counter2();
    var sumP2T = playerTwoTotal.reduce(function (a, b) { return a + b; }, 0)
    if(sumP2T<100){
    $("#total-p2").text(sumP2T);
    }else{
      alert('Player Two you have won the game')
      clearEverything()
    }
  })
})

$(document).ready(function () {
  $("#start-game").click(function () {
    $(".game-shows").toggle();
    $(".game-hidden").toggle();
  });
});