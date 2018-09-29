// Business Logic

var numbersRoll=[1,1,2,2,2,3,3,3,4,4,5,5,6]

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
    document.getElementById("roll-p2").disabled = false;

  }
}


function counter1(){
  playerOneTotal.push.apply(playerOneTotal, playerOneRound)
  playerOneRound.length=0
  document.getElementById("roll-p1").disabled = true;
  document.getElementById("hold-p1").disabled = true;
  document.getElementById("roll-p2").disabled = false;
  document.getElementById("roll-p2").disabled = false;

}
function counter2() {
  playerTwoRound+=playerTwoTotal
}

// User Data

$(document).ready(function(){
  $('#roll-p1').click(function(){
   rollp1();
    var sum = playerOneRound.reduce(function (a, b) { return a + b; }, 0)
    $("#round-p1").text(sum);
  })
})

$(document).ready(function () {
  $('#roll-p2').click(function () {
    test();
  })
})

$(document).ready(function () {
  $('#hold-p1').click(function () {
    counter1();
    var sum1 = playerOneTotal.reduce(function (a, b) { return a + b; }, 0)
    $("#total-p1").text(sum1);
  })
})

$(document).ready(function () {
  $('#hold-p2').click(function () {
    counter2();
  })
})


$(document).ready(function () {
  $("#start-game").click(function () {
    $(".game-shows").toggle();
    $(".game-hidden").toggle();
  });
});