// Business Logic

var numbersRoll=[1,1,1,2,2,2,3,3,3,4,4,5,5,6]

var playerOne=[]

var playerTwo=[]

function roller(){
  var randomNumber = numbersRoll[Math.floor(Math.random() * numbersRoll.length)];
if(randomNumber!=1){
  
}
}

// User Data

$(document).ready(function(){
  $('#roll-p1').click(function(){
    
  })
})

$(document).ready(function () {
  $('#roll-p2').click(function () {
    test();
  })
})


$(document).ready(function () {
  $("#start-game").click(function () {
    $(".game-shows").toggle();
    $(".game-hidden").toggle();
  });
});